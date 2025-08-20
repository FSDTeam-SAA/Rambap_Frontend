'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import loadingLoan from '../../../../public/images/loading-loan.png'
import rejectedLoan from '../../../../public/images/rejected-loan.png'

type LoanStatusType = 'loading' | 'approved' | 'rejected'

// Dummy loan data
const dummyLoanData = {
  amount: 1000,
  interest: 10,
  term: 12,
}

export default function LoanStatusPage() {
  const [status, setStatus] = useState<LoanStatusType>('loading')

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 px-4 space-y-10 ">
      {/* Loading State */}
      {status === 'loading' && (
        <div className="flex flex-col items-center text-center space-y-4 max-w-full">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-snug font-semibold text-[#282828]">
            Your loan has not yet been approved.
          </h2>

          <div className="w-full max-w-md md:max-w-lg">
            <Image
              src={loadingLoan}
              alt="Loading"
              width={465}
              height={477}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Rejected State */}
      {status === 'rejected' && (
        <div className="flex flex-col items-center text-center space-y-4 max-w-full">
          <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-snug font-semibold text-[#282828]">
            We’re sorry, your loan was not approved at this time.
          </h2>

          <div className="w-full max-w-xs md:max-w-sm">
            <Image
              src={rejectedLoan}
              alt="Rejected"
              width={335}
              height={355}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* Approved State */}
      {status === 'approved' && (
        <div className="flex flex-col items-center text-center space-y-6 w-full max-w-md md:max-w-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-[#282828]">
            Congratulations! Your loan is approved.
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 w-full space-y-4">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Loan Amount</span>
              <span className="font-semibold text-[#4B1E2F]">
                ${dummyLoanData.amount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Interest Rate</span>
              <span className="font-semibold text-[#4B1E2F]">
                {dummyLoanData.interest}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Term</span>
              <span className="font-semibold text-[#4B1E2F]">
                {dummyLoanData.term} months
              </span>
            </div>

            <Button className="w-full bg-[#4B1E2F] hover:bg-[#3A1624]">
              Manage Loan
            </Button>
          </div>
        </div>
      )}

      {/* Buttons to quickly switch states for testing */}
      <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-md ">
        <Button
          className="w-full sm:w-auto"
          onClick={() => setStatus('loading')}
        >
          Set Loading
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={() => setStatus('approved')}
        >
          Set Approved
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={() => setStatus('rejected')}
        >
          Set Rejected
        </Button>
      </div>
    </div>
  )
}
