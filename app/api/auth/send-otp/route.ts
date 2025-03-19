import { type NextRequest, NextResponse } from "next/server"
import {generateOtp,storeOtp } from "../../../../lib/otp"
import { sendOtpEmail } from "@/lib/nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 })
    }

    // Generate a 4-digit OTP
    const otp = generateOtp(4)

    storeOtp(email, otp)

    // Send OTP via email
    await sendOtpEmail(email, otp)

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
    })
  } catch (error) {
    console.error("Error sending OTP:", error)
    return NextResponse.json({ success: false, message: "Failed to send OTP" }, { status: 500 })
  }
}

