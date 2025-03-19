// OTP storage - in a real app, use a database or Redis
// This is just for demonstration purposes
declare global {
  var otpStore: Map<string, OtpRecord> | undefined
}
interface OtpRecord {
  otp: string
  expiresAt: number
}

// Use a more persistent storage solution
// In a real app, you'd use a database or Redis
let otpStore: Map<string, OtpRecord>

// Initialize the store
if (typeof global !== "undefined") {
  // Server-side
  if (!global.otpStore) {
    global.otpStore = new Map<string, OtpRecord>()
  }
  otpStore = global.otpStore
} else {
  // Client-side (shouldn't happen in this case)
  otpStore = new Map<string, OtpRecord>()
}

// Generate a random OTP
export function generateOtp(length = 4): string {
  const digits = "0123456789"
  let otp = ""

  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)]
  }

  return otp
}

// Store OTP with expiration (10 minutes by default)
export function storeOtp(email: string, otp: string, expiresInMs = 10 * 60 * 1000): void {
  const normalizedEmail = email.toLowerCase() // Normalize email to lowercase
  const expiresAt = Date.now() + expiresInMs
  otpStore.set(normalizedEmail, { otp, expiresAt })

}

// Verify OTP
export function verifyOtp(email: string, otp: string): boolean {
  const normalizedEmail = email.toLowerCase() // Normalize email to lowercase

  const record = otpStore.get(normalizedEmail)

  if (!record) {
    console.log(`No OTP record found for ${normalizedEmail}`)
    return false
  }

  if (Date.now() > record.expiresAt) {
    // OTP expired, clean up
    console.log(`OTP for ${normalizedEmail} has expired`)
    otpStore.delete(normalizedEmail)
    return false
  }

  console.log(`Stored OTP: ${record.otp}, Provided OTP: ${otp}`)
  if (record.otp !== otp) {
    console.log(`OTP mismatch for ${normalizedEmail}`)
    return false
  }

  // OTP verified, clean up
  console.log(`OTP verified successfully for ${normalizedEmail}`)
  otpStore.delete(normalizedEmail)
  return true
}

