'use client'
import AuthForm from '../../_components/AuthForm'

export default function ResetPasswordPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReset = (data: any) => {
    console.log('Reset Password Data:', data)
  }

  return (
    <AuthForm
      title="Reset Password"
      submitText="Confirm"
      onSubmit={handleReset}
      fields={[
        { name: 'password', label: 'Password', type: 'password' },
        {
          name: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
        },
      ]}
    />
  )
}
