'use client'

import React, { useRef } from 'react'

interface OtpInputProps {
  length?: number
  onChange: (value: string) => void
}

export default function OtpInput({ length = 6, onChange }: OtpInputProps) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value
    if (!/^[0-9]?$/.test(value)) return

    onChange(inputsRef.current.map((input) => input?.value || '').join(''))

    // move to next input
    if (value && idx < length - 1) {
      inputsRef.current[idx + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === 'Backspace' && !inputsRef.current[idx]?.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus()
    }
  }

  return (
    <div className="flex space-x-2 justify-center">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          type="text"
          maxLength={1}
          onChange={(e) => handleInput(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="w-12 h-12 text-center border rounded-md text-lg focus:outline-none focus:border-[#4B1E2F]"
        />
      ))}
    </div>
  )
}
