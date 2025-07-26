import { LoginForm } from '@/components/auth/login-form'
import { Card } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <Card className="w-full max-w-md p-8 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Sign in to your account</h1>
        <p className="text-sm text-gray-500">
          Enter your email and password below to sign in
        </p>
      </div>
      <LoginForm />
    </Card>
  )
}
