// 'use client'

// import React, { ReactNode } from 'react'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'

// type Field = {
//   name: string
//   label: string
//   type?: string
//   placeholder?: string
// }

// interface AuthFormProps {
//   title: string
//   fields: Field[]
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   onSubmit: (data: any) => void
//   submitText: string
//   children?: ReactNode
// }

// export default function AuthForm({
//   title,
//   fields,
//   onSubmit,
//   submitText,
//   children,
// }: AuthFormProps) {
//   const schema = z.object(
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     fields.reduce((acc: any, field) => {
//       if (field.name === 'email') {
//         acc[field.name] = z.string().email({ message: 'Invalid email' })
//       } else if (field.name.toLowerCase().includes('password')) {
//         acc[field.name] = z
//           .string()
//           .min(6, { message: 'Password must be at least 6 characters' })
//       } else {
//         acc[field.name] = z.string().min(1, { message: 'Required' })
//       }
//       return acc
//     }, {})
//   )

//   type FormData = z.infer<typeof schema>
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({ resolver: zodResolver(schema) })

//   return (
//     <div className="space-y-[30px] ">
//       <h2 className="text-2xl md:text-[32px] font-medium mb-4 text-center p-8 leading-[120%] text-[#4B1E2F]">
//         {title}
//       </h2>
//       <div className='flex items-center   justify-center'>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
//           {fields.map((field) => (
//             <div key={field.name} className="flex flex-col space-y-1">
//               <Label htmlFor={field.name}>{field.label}</Label>

//               <Input
//                 id={field.name}
//                 type={field.type || 'text'}
//                 placeholder={field.placeholder || `Enter your ${field.label}`}
//                 className="border rounded-md px-3 py-2 placeholder:text-[#BDBDBD] placeholder:text-[14px] placeholder:font-book placeholder:leading-[120%]"
//                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                 {...register(field.name as any)}
//               />

//               {errors[field.name] && (
//                 <span className="text-sm text-red-500">
//                   {errors[field.name]?.message as string}
//                 </span>
//               )}
//             </div>
//           ))}

//           {/* Extra children (checkbox / terms) */}
//           {children && <div>{children}</div>}

//           <Button
//             type="submit"
//             className="w-full bg-[#4B1E2F] hover:bg-[#692e45]"
//           >
//             {submitText}
//           </Button>
//         </form>
//       </div>

//     </div>
//   )
// }


'use client'

import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

type Field = {
  name: string
  label: string
  type?: string
  placeholder?: string
}

interface AuthFormProps {
  title: string
  fields: Field[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void
  submitText: string
  children?: ReactNode
}

export default function AuthForm({
  title,
  fields,
  onSubmit,
  submitText,
  children,
}: AuthFormProps) {
  const schema = z.object(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fields.reduce((acc: any, field) => {
      if (field.name === 'email') {
        acc[field.name] = z.string().email({ message: 'Invalid email' })
      } else if (field.name.toLowerCase().includes('password')) {
        acc[field.name] = z
          .string()
          .min(6, { message: 'Password must be at least 6 characters' })
      } else {
        acc[field.name] = z.string().min(1, { message: 'Required' })
      }
      return acc
    }, {})
  )

  type FormData = z.infer<typeof schema>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  return (
    <div className="space-y-[30px] w-full">
      <h2 className="text-2xl md:text-[32px] font-medium mb-4 text-center py-8 leading-[120%] text-[#4B1E2F]">
        {title}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-3xl mx-auto">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col space-y-1 w-full">
            <Label className='text-[#4B1E2F] mb-3' htmlFor={field.name}>{field.label}</Label>

            <Input
              id={field.name}
              type={field.type || 'text'}
              placeholder={field.placeholder || `Enter your ${field.label}`}
              className="w-full border rounded-md px-3 py-5 placeholder:text-[#BDBDBD] placeholder:text-[14px] placeholder:font-book placeholder:leading-[120%]"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...register(field.name as any)}
            />

            {errors[field.name] && (
              <span className="text-sm text-red-500">
                {errors[field.name]?.message as string}
              </span>
            )}
          </div>
        ))}

        {/* Extra children (checkbox / terms) */}
        {children && <div>{children}</div>}

        <Button type="submit" className="w-full bg-[#4B1E2F] hover:bg-[#692e45]">
          {submitText}
        </Button>
      </form>
    </div>
  )
}
