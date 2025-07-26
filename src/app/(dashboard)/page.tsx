import { Card } from '@/components/ui/card'
import { auth } from '@/lib/auth'

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    return null // or redirect to login
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, {session.user.name || session.user.email}
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="font-medium">Total Customers</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-medium">Revenue</h3>
          <p className="text-2xl font-bold">$0</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-medium">Active Users</h3>
          <p className="text-2xl font-bold">1</p>
        </Card>
        <Card className="p-6">
          <h3 className="font-medium">Integrations</h3>
          <p className="text-2xl font-bold">0</p>
        </Card>
      </div>
    </div>
  )
}
