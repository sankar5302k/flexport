import { type NextRequest, NextResponse } from "next/server"
import { verifyOtp } from "@/lib/otp"

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json()

    if (!email || !otp) {
      return NextResponse.json({ success: false, message: "Email and OTP are required" }, { status: 400 })
    }

    // Verify the OTP
    console.log("Verifying OTP:", { email, otp })
    const isValid = verifyOtp(email, otp)
    console.log("OTP verification result:", isValid)

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired OTP",
        },
        { status: 400 },
      )
    }

    return NextResponse.json({
      success: true,
      message: "OTP verified successfully",
    })
  } catch (error) {
    console.error("Error verifying OTP:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

