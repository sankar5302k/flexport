import type React from "react"
interface OtpEmailTemplateProps {
  otp: string
}

export const OtpEmailTemplate: React.FC<OtpEmailTemplateProps> = ({ otp }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "#333", textAlign: "center" }}>Email Verification</h2>
      <p style={{ color: "#666", fontSize: "16px" }}>
        Thank you for signing up! Please use the following verification code to complete your registration:
      </p>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "5px",
          margin: "20px 0",
          borderRadius: "4px",
        }}
      >
        {otp}
      </div>
      <p style={{ color: "#666", fontSize: "14px" }}>This code will expire in 10 minutes.</p>
      <p style={{ color: "#666", fontSize: "14px" }}>
        If you didn't request this code, you can safely ignore this email.
      </p>
    </div>
  )
}

