"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Loading spinner component
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

// OTP Verification Component
const OtpVerification = ({ email, onVerified }: { email: string; onVerified: () => void }) => {
  const [otpValue, setOtpValue] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState("")

  // Create a form for OTP verification
  const otpForm = useForm({
    defaultValues: {
      otp: "",
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "")
    setOtpValue(value)
  }

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (otpValue.length !== 4) {
      setError("Please enter a 4-digit OTP")
      return
    }

    setIsVerifying(true)
    setError("")

    try {
      // Call the API to verify OTP
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp: otpValue }),
      })

      const data = await response.json()
      console.log("OTP verification response:", data)

      if (data.success) {
        onVerified()
      } else {
        setError(data.message || "Invalid OTP. Please try again.")
      }
    } catch (err) {
      console.error("OTP verification error:", err)
      setError("Failed to verify OTP. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendOtp = async () => {
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()
      if (result.success) {
        setError("")
        // Show the OTP for testing purposes
        alert(`New verification code: ${result.otp} (This would be sent via email in production)`)
      } else {
        setError("Failed to resend verification code")
      }
    } catch (err) {
      console.error("Error resending OTP:", err)
      setError("Failed to resend verification code")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify your email</CardTitle>
        <CardDescription>We've sent a verification code to {email}. Please enter it below.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...otpForm}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleVerify(e)
            }}
            className="space-y-4"
          >
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Verification Code</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={4}
                      placeholder="Enter 4-digit code"
                      value={otpValue}
                      onChange={(e) => {
                        handleChange(e)
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={otpValue.length !== 4 || isVerifying}>
              {isVerifying ? (
                <div className="flex items-center">
                  <LoadingSpinner />
                  Verifying...
                </div>
              ) : (
                "Verify"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-center w-full">
          Didn't receive the code?{" "}
          <Button variant="link" className="p-0 h-auto" onClick={handleResendOtp}>
            Resend
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Tech domains data
const techDomains = [
  { label: "Frontend Development", value: "Frontend Development" },
  { label: "Backend Development", value: "Backend Development" },
  { label: "Full-Stack Development", value: "Full-Stack Development" },
  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "Game Development", value: "Game Development" },
  { label: "Machine Learning", value: "Machine Learning" },
  { label: "Data Science", value: "Data Science" },
  { label: "Big Data", value: "Big Data" },
  { label: "Cybersecurity", value: "Cybersecurity" },
  { label: "Cloud Computing", value: "Cloud Computing" },
  { label: "DevOps", value: "DevOps" },
  { label: "SRE", value: "SRE" },
  { label: "Networking", value: "Networking" },
  { label: "Blockchain", value: "Blockchain" },
  { label: "Quantum Computing", value: "Quantum Computing" },
  { label: "IoT", value: "IoT" },
  { label: "AR/VR", value: "AR/VR" },
  { label: "Embedded Systems", value: "Embedded Systems" },
  { label: "UI/UX Design", value: "UI/UX Design" },
  { label: "Software Testing", value: "Software Testing" },
]

// Programming languages data
const programmingLanguages = [
  { id: "javascript", label: "JavaScript" },
  { id: "typescript", label: "TypeScript" },
  { id: "python", label: "Python" },
  { id: "java", label: "Java" },
  { id: "csharp", label: "C#" },
  { id: "cpp", label: "C++" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
  { id: "ruby", label: "Ruby" },
  { id: "php", label: "PHP" },
  { id: "swift", label: "Swift" },
  { id: "kotlin", label: "Kotlin" },
  { id: "r", label: "R" },
]

// Speaking languages data
const speakingLanguages = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "russian", label: "Russian" },
  { id: "arabic", label: "Arabic" },
  { id: "hindi", label: "Hindi" },
  { id: "portuguese", label: "Portuguese" },
]

// Step 1 schema
const step1Schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
})

// Step 2 schema
const step2Schema = z.object({
  techDomains: z.array(z.string()).min(1, "Please select at least one tech domain"),
  programmingLanguages: z.array(z.string()).min(1, "Please select at least one programming language"),
})

// Step 3 schema
const step3Schema = z.object({
  speakingLanguages: z.array(z.string()).min(1, "Please select at least one language"),
  location: z.string().min(2, "Please enter your location"),
})

// Step 4 schema
const step4Schema = z
  .object({
    availability: z.enum(["full-time", "part-time"], {
      required_error: "Please select your availability",
    }),
    portfolio: z.string().url("Please enter a valid URL").optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export function SignUpForm() {
  const [step, setStep] = useState(1)
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [photoFile, setPhotoFile] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  // Add loading states for each step
  const [isLoadingStep1, setIsLoadingStep1] = useState(false)
  const [isLoadingStep2, setIsLoadingStep2] = useState(false)
  const [isLoadingStep3, setIsLoadingStep3] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    techDomains: [] as string[],
    programmingLanguages: [] as string[],
    speakingLanguages: [] as string[],
    location: "",
    availability: "full-time" as "full-time" | "part-time",
    portfolio: "",
    password: "",
    confirmPassword: "",
  })
  const router = useRouter()

  // Step 1 form
  const step1Form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      username: formData.username,
      email: formData.email,
    },
  })

  // Step 2 form
  const step2Form = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      techDomains: formData.techDomains,
      programmingLanguages: formData.programmingLanguages,
    },
  })

  // Step 3 form
  const step3Form = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      speakingLanguages: formData.speakingLanguages,
      location: formData.location,
    },
  })

  // Step 4 form
  const step4Form = useForm<z.infer<typeof step4Schema>>({
    resolver: zodResolver(step4Schema),
    defaultValues: {
      availability: formData.availability,
      portfolio: formData.portfolio,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },
  })

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Preview the image
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoPreview(event.target.result as string)
      }
    }
    reader.readAsDataURL(file)

    // Convert to base64 for submission
    const base64Reader = new FileReader()
    base64Reader.onload = (event) => {
      if (event.target?.result) {
        setPhotoFile(event.target.result as string)
      }
    }
    base64Reader.readAsDataURL(file)
  }

  const onSubmitStep1 = async (data: z.infer<typeof step1Schema>) => {
    setIsLoadingStep1(true)
    try {
      // First check if email already exists
      const checkEmailResponse = await fetch("https://flexback-b5ew.onrender.com/check-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })

      const checkEmailResult = await checkEmailResponse.json()

      if (checkEmailResult.exists) {
        // Email already exists, show alert and stop the process
        alert("This email is already registered. Please use a different email or login to your account.")
        return
      }

      // If email doesn't exist, proceed with sending OTP
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      })

      const result = await response.json()

      if (result.success) {
        setFormData((prev) => ({ ...prev, ...data }))
        setIsVerifyingEmail(true)
      } else {
        // Handle error - you might want to show this to the user
        console.error("Failed to send OTP:", result.message)
        alert("Failed to send verification code: " + (result.message || "Unknown error"))
      }
    } catch (error) {
      console.error("Error in step 1:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsLoadingStep1(false)
    }
  }

  const onSubmitStep2 = (data: z.infer<typeof step2Schema>) => {
    setIsLoadingStep2(true)
    // Simulate a short delay to show the loading state
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, ...data }))
      setStep(3)
      setIsLoadingStep2(false)
    }, 500)
  }

  const onSubmitStep3 = (data: z.infer<typeof step3Schema>) => {
    setIsLoadingStep3(true)
    // Simulate a short delay to show the loading state
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, ...data }))
      setStep(4)
      setIsLoadingStep3(false)
    }, 500)
  }

  const onSubmitStep4 = async (data: z.infer<typeof step4Schema>) => {
    setFormData((prev) => ({ ...prev, ...data }))
    setIsSubmitting(true)

    try {
      // Format data according to the required backend structure
      const formattedData = {
        name: formData.username,
        domain: formData.techDomains.length > 0 ? formData.techDomains[0] : "Not specified",
        prog_languages_known: formData.programmingLanguages
          .map((id) => {
            const lang = programmingLanguages.find((l) => l.id === id)
            return lang ? lang.label : id
          })
          .join(", "),
        speaking_languages_known: formData.speakingLanguages
          .map((id) => {
            const lang = speakingLanguages.find((l) => l.id === id)
            return lang ? lang.label : id
          })
          .join(", "),
        location: formData.location,
        availability: data.availability === "full-time" ? "FT" : "PT",
        email: formData.email,
        password: data.password,
        portfolio: data.portfolio || undefined,
        photo: photoFile || undefined,
      }

      // Send data to the backend
      const response = await fetch("https://flexback-b5ew.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      })

      const result = await response.json()

      if (response.ok) {
        // Registration successful
        router.push("/application")
      } else {
        // Handle registration error
        console.error("Registration failed:", result)
        alert("Registration failed: " + (result.error || "Unknown error"))
      }
    } catch (error) {
      console.error("Registration error:", error)
      alert("An error occurred during registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailVerified = () => {
    setIsVerifyingEmail(false)
    setStep(2)
  }

  if (isVerifyingEmail) {
    return <OtpVerification email={formData.email} onVerified={handleEmailVerified} />
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          {step === 1 && "Enter your basic information to get started"}
          {step === 2 && "Tell us about your technical expertise"}
          {step === 3 && "Share your languages and location"}
          {step === 4 && "Almost done! Set your availability and password"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(onSubmitStep1)} className="space-y-4">
              <FormField
                control={step1Form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step1Form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoadingStep1}>
                {isLoadingStep1 ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Next"
                )}
              </Button>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(onSubmitStep2)} className="space-y-4">
              <FormField
                control={step2Form.control}
                name="techDomains"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Tech Domains</FormLabel>
                      <FormDescription>Select the tech domains you're skilled in</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto">
                      {techDomains.map((domain) => (
                        <FormField
                          key={domain.value}
                          control={step2Form.control}
                          name="techDomains"
                          render={({ field }) => {
                            return (
                              <FormItem key={domain.value} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(domain.value)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, domain.value])
                                        : field.onChange(field.value?.filter((value) => value !== domain.value))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{domain.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step2Form.control}
                name="programmingLanguages"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Programming Languages</FormLabel>
                      <FormDescription>Select the programming languages you know</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {programmingLanguages.map((language) => (
                        <FormField
                          key={language.id}
                          control={step2Form.control}
                          name="programmingLanguages"
                          render={({ field }) => {
                            return (
                              <FormItem key={language.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(language.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, language.id])
                                        : field.onChange(field.value?.filter((value) => value !== language.id))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{language.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" disabled={isLoadingStep2}>
                  {isLoadingStep2 ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 3 && (
          <Form {...step3Form}>
            <form onSubmit={step3Form.handleSubmit(onSubmitStep3)} className="space-y-4">
              <FormField
                control={step3Form.control}
                name="speakingLanguages"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Speaking Languages</FormLabel>
                      <FormDescription>Select the languages you speak</FormDescription>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {speakingLanguages.map((language) => (
                        <FormField
                          key={language.id}
                          control={step3Form.control}
                          name="speakingLanguages"
                          render={({ field }) => {
                            return (
                              <FormItem key={language.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(language.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, language.id])
                                        : field.onChange(field.value?.filter((value) => value !== language.id))
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{language.label}</FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step3Form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="City, Country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button type="submit" disabled={isLoadingStep3}>
                  {isLoadingStep3 ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Next"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 4 && (
          <Form {...step4Form}>
            <form onSubmit={step4Form.handleSubmit(onSubmitStep4)} className="space-y-4">
              <FormField
                control={step4Form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="full-time" />
                          </FormControl>
                          <FormLabel className="font-normal">Full-time</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="part-time" />
                          </FormControl>
                          <FormLabel className="font-normal">Part-time</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step4Form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio URL (Optional)</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://yourportfolio.com" {...field} />
                    </FormControl>
                    <FormDescription>Share a link to your portfolio or GitHub profile</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <Label htmlFor="photo">Profile Photo (Optional)</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={photoPreview || ""} alt="Profile preview" />
                    <AvatarFallback>{formData.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photo
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="photo"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </div>
              </div>

              <FormField
                control={step4Form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={step4Form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <LoadingSpinner />
                      Creating Account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/Reg" className="text-primary underline underline-offset-4">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

