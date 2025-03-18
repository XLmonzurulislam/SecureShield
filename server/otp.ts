import { randomInt } from "crypto";
import { addMinutes } from "date-fns";
import { db } from "./db";
import { otpCodes } from "@shared/schema";
import { eq, and, gte } from "drizzle-orm";

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE_NUMBER) {
  throw new Error("Twilio credentials not found");
}

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function generateAndSendOTP(phoneNumber: string): Promise<boolean> {
  try {
    // Generate a 6-digit OTP
    const otp = randomInt(100000, 999999).toString();
    const expiresAt = addMinutes(new Date(), 10); // OTP expires in 10 minutes

    // Save OTP to database
    await db.insert(otpCodes).values({
      phoneNumber,
      code: otp,
      expiresAt,
    });

    // Send OTP via Twilio
    await client.messages.create({
      body: `Your CyberGuard verification code is: ${otp}. Valid for 10 minutes.`,
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
    });

    return true;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return false;
  }
}

export async function verifyOTP(phoneNumber: string, code: string): Promise<boolean> {
  try {
    const [otpRecord] = await db
      .select()
      .from(otpCodes)
      .where(
        and(
          eq(otpCodes.phoneNumber, phoneNumber),
          eq(otpCodes.code, code),
          eq(otpCodes.isUsed, false),
          gte(otpCodes.expiresAt, new Date())
        )
      );

    if (!otpRecord) {
      return false;
    }

    // Mark OTP as used
    await db
      .update(otpCodes)
      .set({ isUsed: true })
      .where(eq(otpCodes.id, otpRecord.id));

    return true;
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return false;
  }
}
