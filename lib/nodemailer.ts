import nodemailer from "nodemailer"

// Configure nodemailer with the provided Gmail credentials
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cryptofort12@gmail.com",
    pass: "ldok wpbk zywk hvfw",
  },
})

// Function to send OTP email
export async function sendOtpEmail(email: string, otp: string) {
  const mailOptions = {
    from: '"FLEX PORT" <cryptofort12@gmail.com>',
    to: email,
    subject: "Your Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; text-align: center;">Email Verification</h2>
        <p style="color: #666; font-size: 16px;">Thank you for signing up! Please use the following verification code to complete your registration:</p>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; margin: 20px 0; border-radius: 4px;">
          ${otp}
        </div>
        <p style="color: #666; font-size: 14px;">This code will expire in 10 minutes.</p>
        <p style="color: #666; font-size: 14px;">If you didn't request this code, you can safely ignore this email.</p>
      </div>
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent: %s", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

