import Link from 'next/link'
import { BookOpen, Users, Shield, Smartphone } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Personal Notes App
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A clean, secure, and responsive notes application where you can create, edit, and manage your personal notes with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/auth?tab=login"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy Note Taking</h3>
            <p className="text-gray-600">Create and organize your notes with a simple, intuitive interface.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your notes are securely stored and tied to your personal account.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Smartphone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">Works perfectly on desktop, tablet, and mobile devices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600">Your notes sync instantly across all your devices.</p>
          </div>
        </div>

        {/* <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-gray-600 mb-6">
            Powered by Next.js 14, Tailwind CSS, and Supabase for the best user experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Next.js 14</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Supabase</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">TypeScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Vercel</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}