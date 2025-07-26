import * as LucideIcons from 'lucide-react'

export type IconName = 
  | 'LayoutDashboard'
  | 'Users'
  | 'LineChart'
  | 'Plug'
  | 'Settings'
  | 'LogOut'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number
}

export function Icons({ name, ...props }: IconProps) {
  const Icon = LucideIcons[name]
  return <Icon {...props} />
}

export const IconsMap = {
  dashboard: 'LayoutDashboard',
  users: 'Users',
  analytics: 'LineChart',
  integration: 'Plug',
  settings: 'Settings',
  logout: 'LogOut',
} as const
