'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AccountHeader } from './_components/AccountHeader'
import { User, Lock, FileText, LogOut } from 'lucide-react'
import userImage from '../../../public/images/user.jpg'

export default function AccountSettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <div className="min-h-[calc(100vh-100px)] w-full bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <AccountHeader />

        <div className="flex flex-col lg:flex-row mt-14 lg:mt-20 gap-8 pb-24">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-[416px] h-[426px] shadow-sm flex flex-col bg-white rounded-[3px] py-6 lg:py-8">
            {/* User Info */}
            <div className="flex items-center gap-4 px-6 pb-6 border-b">
              <Image
                src={userImage}
                alt="User Avatar"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-medium text-[#282828]">
                  John Smith
                </h2>
                <p className="text-sm text-[#5E5E5E]">john.smith@example.com</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6 w-full px-4">
              <ul className="space-y-4 md:space-y-6">
                {[
                  {
                    href: '/account-settings/personal-information',
                    icon: <User className="w-5 h-5" />,
                    label: 'Personal Information',
                  },
                  {
                    href: '/account-settings/security',
                    icon: <Lock className="w-5 h-5" />,
                    label: 'Security',
                  },
                  {
                    href: '/account-settings/loan-status',
                    icon: <FileText className="w-5 h-5" />,
                    label: 'Loan Status',
                  },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded font-[Gotham] font-medium text-[16px] leading-[120%] ${
                        isActive(item.href)
                          ? 'bg-[#4B1E2F1A] text-[#4B1E2F]'
                          : 'text-[#282828] hover:bg-[#4B1E2F1A]'
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-3 md:pt-4 border-t">
                  <Link
                    href="/logout"
                    className="flex items-center gap-3 px-3 py-2 rounded font-[Gotham] font-medium text-[16px] leading-[120%] text-[#BD0202] hover:bg-red-50"
                  >
                    <LogOut className="w-5 h-5" />
                    Sign Out
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Right Content */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  )
}
