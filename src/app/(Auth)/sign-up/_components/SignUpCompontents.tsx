

'use client'

import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import AuthForm from '../../_components/AuthForm'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSignUp = (data: any) => {
        console.log('Sign Up Data:', data)
        router.push("/complete-profile")

    }

    return (
        <div className="w-full max-w-xl shadow-[0px_5px_10px_0px_#00000029] mx-auto p-6 space-y-6 border rounded-lg">
            <AuthForm
                title="Create Your Account"
                submitText="Sign Up"
                onSubmit={handleSignUp}
                fields={[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'Email', type: 'email' },
                    { name: 'phone', label: 'Phone Number', type: 'text' },
                    { name: 'password', label: 'Password', type: 'password' },
                    { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
                ]}
            >
                {/* Terms & Privacy */}
                <div className="flex items-start gap-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="leading-snug text-gray-800">
                        I agree to the{' '}
                        <Link href="/privacy-policy" className="text-[#4B1E2F] hover:underline">
                            Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms" className="text-[#4B1E2F] hover:underline">
                            Terms of Service
                        </Link>
                    </label>
                </div>
            </AuthForm>

            {/* Below button */}
            <p className="text-center text-sm">
                Already have an account?{' '}
                <Link href="/signin" className="text-[#4B1E2F] font-medium hover:underline">
                    Sign In Here
                </Link>
            </p>
        </div>
    )
}
