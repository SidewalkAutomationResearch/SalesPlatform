'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons, IconsMap, IconName } from '@/components/icons'

const navItems = [
  { name: 'Overview', href: '/dashboard', icon: IconsMap.dashboard },
  { name: 'Customers', href: '/dashboard/customers', icon: IconsMap.users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: IconsMap.analytics },
  { name: 'Integrations', href: '/dashboard/integrations', icon: IconsMap.integration },
  { name: 'Settings', href: '/dashboard/settings', icon: IconsMap.settings },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden w-64 border-r bg-background p-4 md:block">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                'w-full justify-start',
                pathname === item.href && 'bg-accent'
              )}
            >
              <Link href={item.href}>
                <Icons name={item.icon as IconName} className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Icons name={IconsMap.logout} className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  )
}
