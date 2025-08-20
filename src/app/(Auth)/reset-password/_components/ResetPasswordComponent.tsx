'use client'

import AuthForm from "../../_components/AuthForm"

export default function ResetPasswordPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReset = (data: any) => {
    console.log('Reset Password Data:', data)
  }

  return (
    <div className="w-full max-w-xl shadow-[0px_5px_10px_0px_#00000029] mx-auto p-6 space-y-6 border rounded-lg">
      <AuthForm
        title="Forgot Password"
        submitText="Send OTP"
        onSubmit={handleReset}
        fields={[{ name: 'email', label: 'Email', type: 'email' }]}
      />
    </div>
  )
}
