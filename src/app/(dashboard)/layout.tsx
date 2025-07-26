import { ReactNode } from 'react'
import { DashboardNav } from '@/components/dashboard/nav'
import { auth } from '@/lib/auth'

export default async function DashboardLayout({ 
  children 
}: { 
  children: ReactNode 
}) {
  const session = await auth()

  if (!session?.user) {
    return null // or redirect to login
  }

  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto p-6">
        {children}
      </main>
    </div>
  )
}
