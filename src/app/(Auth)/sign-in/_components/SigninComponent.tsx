'use client'

import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import AuthForm from '../../_components/AuthForm'

export default function SignInPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSignIn = (data: any) => {
        console.log('Sign In Data:', data)
    }

    return (
        <div className="w-full max-w-xl shadow-[0px_5px_10px_0px_#00000029] mx-auto p-6 space-y-6 border rounded-lg">
            <AuthForm
                title="Welcome Back"
                submitText="Sign In"
                onSubmit={handleSignIn}
                fields={[
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'password', label: 'Password', type: 'password' },
                ]}
            >
                {/* Checkbox + Forgot password (inside form, above button) */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <span>Remember me</span>
                    </label>
                    <Link href="/reset-password" className="text-[#E0AB0B] hover:underline">
                        Forgot password?
                    </Link>
                </div>
            </AuthForm>

            {/* Below button */}
            <p className="text-center text-sm text-gray-800">
                New to our platform?{' '}
                <Link href="/signup" className="text-[#4B1E2F] font-medium hover:underline">
                    Sign Up Here
                </Link>
            </p>
        </div>
    )
}
