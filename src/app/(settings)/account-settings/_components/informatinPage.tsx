'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone'),
  street: z.string().min(1, 'Required'),
  city: z.string().min(1, 'Required'),
  state: z.string().min(1, 'Required'),
  zip: z.string().min(4, 'Invalid zip'),
})

type FormData = z.infer<typeof schema>

export default function PersonalInformationPage() {
  const [editable, setEditable] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '(555) 123-4567',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data)
    setEditable(false)
  }

  const labelClass =
    'text-sm text-[#4B1E2F] font-medium font-gotham tracking-normal'
  const inputClass =
    'font-gotham font-medium text-[16px] leading-[120%] placeholder-gray-400'

  return (
    <div className="bg-white shadow-sm rounded-lg pb-5 ">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 py-6 bg-[#E5E7EB] px-6 md:px-8">
        <h2 className="text-xl font-semibold text-[#282828] mb-3 md:mb-0">
          Personal Information
        </h2>
        <Button
          type="button"
          className="bg-[#4B1E2F] hover:bg-[#3A1624]"
          onClick={() => setEditable(true)}
          disabled={editable}
        >
          Update Profile
        </Button>
      </div>

      <form
        id="personal-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 px-3 md:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Label htmlFor="firstName" className={labelClass}>
              First Name
            </Label>
            <Input
              id="firstName"
              {...form.register('firstName')}
              className={inputClass}
              disabled={!editable}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className={labelClass}>
              Last Name
            </Label>
            <Input
              id="lastName"
              {...form.register('lastName')}
              className={inputClass}
              disabled={!editable}
            />
          </div>
          <div>
            <Label htmlFor="email" className={labelClass}>
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register('email')}
              className={inputClass}
              disabled={!editable}
            />
          </div>
          <div>
            <Label htmlFor="phone" className={labelClass}>
              Phone Number
            </Label>
            <Input
              id="phone"
              {...form.register('phone')}
              className={inputClass}
              disabled={!editable}
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="street" className={labelClass}>
              Street Address
            </Label>
            <Input
              id="street"
              {...form.register('street')}
              className={inputClass}
              disabled={!editable}
            />
          </div>

          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className={labelClass}>
                City
              </Label>
              <Input
                id="city"
                {...form.register('city')}
                className={inputClass}
                disabled={!editable}
              />
            </div>
            <div>
              <Label htmlFor="state" className={labelClass}>
                State
              </Label>
              <Input
                id="state"
                {...form.register('state')}
                className={inputClass}
                disabled={!editable}
              />
            </div>
            <div>
              <Label htmlFor="zip" className={labelClass}>
                ZIP Code
              </Label>
              <Input
                id="zip"
                {...form.register('zip')}
                className={inputClass}
                disabled={!editable}
              />
            </div>
          </div>
        </div>

        {editable && (
          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              className="bg-[#4B1E2F] hover:bg-[#3A1624] w-full sm:w-auto"
            >
              Update Now
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}
