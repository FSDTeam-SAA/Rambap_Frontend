'use client'

import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import AuthForm from '../_components/AuthForm'

export default function SignUpPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSignUp = (data: any) => {
    console.log('Sign Up Data:', data)
  }

  return (
    <div className="space-y-6">
      <AuthForm
        title="Create Your Account"
        submitText="Sign Up"
        onSubmit={handleSignUp}
        fields={[
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'phone', label: 'Phone Number', type: 'text' },
          { name: 'password', label: 'Password', type: 'password' },
          {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
          },
        ]}
      >
        {/* Terms & Privacy (inside form, above button) */}
        <div className="flex items-start space-x-2 text-sm">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="leading-snug text-gray-800">
            I agree to the{' '}
            <Link
              href="/privacy-policy"
              className="text-[#4B1E2F] hover:underline"
            >
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
        <Link
          href="/signin"
          className="text-[#4B1E2F] font-medium hover:underline"
        >
          Sign In Here
        </Link>
      </p>
    </div>
  )
}
