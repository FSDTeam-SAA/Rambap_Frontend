import React from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] text-[#4B1E2F]">
      <div className="w-full max-w-md bg-white shadow-md rounded-[16px] p-8">
        {children}
      </div>
    </div>
  )
}
