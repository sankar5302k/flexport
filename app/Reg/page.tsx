"use client";

import { LoginForm } from "@/components/auth/login-form";
import { SignUpForm } from "@/components/auth/sign-up-form";

export default function Reg() {
    return(<div>
            <div className="container flex items-center justify-center min-h-screen py-12">

       <LoginForm></LoginForm>
       </div>
    </div>)
}