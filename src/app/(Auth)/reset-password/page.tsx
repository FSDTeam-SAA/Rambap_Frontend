'use client'
import AuthForm from '../_components/AuthForm'

export default function ResetPasswordPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReset = (data: any) => {
    console.log('Reset Password Data:', data)
  }

  return (
    <AuthForm
      title="Forgot Password"
      submitText="Send OTP"
      onSubmit={handleReset}
      fields={[{ name: 'email', label: 'Email', type: 'email' }]}
    />
  )
}
