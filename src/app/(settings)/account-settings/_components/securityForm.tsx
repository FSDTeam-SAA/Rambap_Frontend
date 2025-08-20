'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Eye, EyeClosed } from 'lucide-react'

const schema = z
  .object({
    currentPassword: z.string().min(1, 'Required'),
    newPassword: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

export default function SecurityForm() {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data)
  }

  const toggleEye = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const labelClass =
    'text-sm text-[#4B1E2F] font-medium font-gotham tracking-normal'
  const inputClass =
    'font-gotham font-medium text-[16px] leading-[120%] placeholder-gray-400'

  return (
    <div className="bg-white shadow-sm rounded-lg pb-5">
      <div className="flex items-center justify-between mb-6 py-6 bg-[#E5E7EB] px-8">
        <h2 className="text-xl font-semibold text-[#282828]">Security</h2>
      </div>

      <form
        id="security-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 px-3 md:px-6 lg:px-8"
      >
        {/* Current Password */}
        <div>
          <Label htmlFor="currentPassword" className={labelClass}>
            Current Password
          </Label>
          <div className="relative">
            <Input
              id="currentPassword"
              placeholder="enter new password"
              type={showPassword.current ? 'text' : 'password'}
              {...form.register('currentPassword')}
              className={inputClass}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => toggleEye('current')}
            >
              {showPassword.current ? (
                <EyeClosed size={20} />
              ) : (
                <Eye size={20} />
              )}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div>
          <Label htmlFor="newPassword" className={labelClass}>
            New Password
          </Label>
          <div className="relative">
            <Input
              id="newPassword"
              placeholder="enter new password"
              type={showPassword.new ? 'text' : 'password'}
              {...form.register('newPassword')}
              className={inputClass}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => toggleEye('new')}
            >
              {showPassword.new ? <EyeClosed size={20} /> : <Eye size={20} />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword" className={labelClass}>
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              placeholder="enter confirm password"
              type={showPassword.confirm ? 'text' : 'password'}
              {...form.register('confirmPassword')}
              className={inputClass}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => toggleEye('confirm')}
            >
              {showPassword.confirm ? (
                <EyeClosed size={20} />
              ) : (
                <Eye size={20} />
              )}
            </span>
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6 flex justify-center">
          <Button type="submit" className="bg-[#4B1E2F] hover:bg-[#3A1624]">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}
