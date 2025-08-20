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
    <div className="flex flex-col items-center justify-center bg-gray-50 space-y-10">
      {/* Loading State */}
      {status === 'loading' && (
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl font-semibold text-[#282828]">
            Your loan has not yet been approved.
          </h2>
          <p className="text-gray-600">Please wait for further updates.</p>
          <Image src={loadingLoan} alt="Loading" width={150} height={150} />
        </div>
      )}

      {/* Rejected State */}
      {status === 'rejected' && (
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl font-semibold text-[#282828]">
            We’re sorry, your loan was not approved at this time.
          </h2>
          <p className="text-gray-600">
            Please try again later or contact support for more details.
          </p>
          <Image src={rejectedLoan} alt="Rejected" width={150} height={150} />
        </div>
      )}

      {/* Approved State */}
      {status === 'approved' && (
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-xl font-semibold text-[#282828]">
            Congratulations! Your loan is approved.
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm space-y-4">
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
      <div className="flex gap-4">
        <Button onClick={() => setStatus('loading')}>Set Loading</Button>
        <Button onClick={() => setStatus('approved')}>Set Approved</Button>
        <Button onClick={() => setStatus('rejected')}>Set Rejected</Button>
      </div>
    </div>
  )
}
