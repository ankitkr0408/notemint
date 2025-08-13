'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'
import SignupForm from '@/components/auth/SignupForm'
import Link from 'next/link'

export default function AuthPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') === 'login' ? 'login' : 'signup')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Notes App</h1>
        </Link>
        <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
          {activeTab === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex mb-6">
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2 px-4 text-center font-medium rounded-l-md ${
                activeTab === 'signup'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 text-center font-medium rounded-r-md ${
                activeTab === 'login'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Sign In
            </button>
          </div>

          {activeTab === 'signup' ? <SignupForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  )
}