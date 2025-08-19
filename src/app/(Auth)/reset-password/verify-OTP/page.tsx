'use client'

import React, { useState } from 'react'
import OtpInput from '../../_components/OtpInput'
import { Button } from '@/components/ui/button'

export default function ResetPasswordPage() {
  const [otp, setOtp] = useState('')

  const handleContinue = () => {
    console.log('OTP Entered:', otp)
    // You can verify OTP here
  }

  return (
    <div className=" p-6  space-y-6">
      <h2 className="text-center text-2xl font-medium text-[#4B1E2F]">
        Verify OTP
      </h2>

      <div className="space-y-2">
        <label className="text-sm font-medium text-[#4B1E2F]">Enter OTP</label>
        <OtpInput length={6} onChange={setOtp} />
      </div>

      <Button
        onClick={handleContinue}
        className="w-full bg-[#4B1E2F] hover:bg-[#692e45]"
      >
        Verify
      </Button>
    </div>
  )
}
