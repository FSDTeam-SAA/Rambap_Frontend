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

  // Helper function to check active route
  const isActive = (path: string) => pathname === path

  return (
    <div className="min-h-[calc(100vh-100px)] w-full bg-[#F9FAFB]">
      <div className="container mx-auto">
        <AccountHeader />

        <div className="flex mt-[60px] md:mt-[75px] lg:mt-[95px] pb-[90px] md:pb-[105px] lg:pb-[130px] gap-8">
          {/* Left Sidebar */}
          <aside className="w-[300px] h-[426px] shadow-sm flex flex-col bg-white rounded-[6px] py-8">
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
              <ul className="space-y-5">
                <li>
                  <Link
                    href="/account-settings/personal-information"
                    className={`flex items-center gap-3 px-3 py-2 rounded font-[Gotham] font-medium text-[16px] leading-[120%] ${
                      isActive('/account-settings/personal-information')
                        ? 'bg-[#4B1E2F1A] text-[#4B1E2F]'
                        : 'text-[#282828] hover:bg-[#4B1E2F1A]'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    Personal Information
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account-settings/security"
                    className={`flex items-center gap-3 px-3 py-2 rounded font-[Gotham] font-medium text-[16px] leading-[120%] ${
                      isActive('/account-settings/security')
                        ? 'bg-[#4B1E2F1A] text-[#4B1E2F]'
                        : 'text-[#282828] hover:bg-[#4B1E2F1A]'
                    }`}
                  >
                    <Lock className="w-5 h-5" />
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/account-settings/loan-status"
                    className={`flex items-center gap-3 px-3 py-2 rounded font-[Gotham] font-medium text-[16px] leading-[120%] ${
                      isActive('/account-settings/loan-status')
                        ? 'bg-[#4B1E2F1A] text-[#4B1E2F]'
                        : 'text-[#282828] hover:bg-[#4B1E2F1A]'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    Loan Status
                  </Link>
                </li>
                <li className="pt-4 border-t">
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
          <div className="flex-1">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}
