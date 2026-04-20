import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center py-16 px-4">
      <div className="text-center mb-8 absolute top-24 left-1/2 -translate-x-1/2">
        <p className="text-sm text-gray-500">Welcome back to Good PDX</p>
      </div>
      <SignIn />
    </div>
  )
}
