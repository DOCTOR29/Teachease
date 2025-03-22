import { Button } from '@/components/ui/button';
import {
  Users,
  FileText,
  Settings,
  CreditCard,
  LayoutDashboard,
} from 'lucide-react';
import Link from 'next/link';

const navItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Content',
    href: '/admin/content',
    icon: FileText,
  },
  {
    title: 'Subscriptions',
    href: '/admin/subscriptions',
    icon: CreditCard,
  },
];

export function AdminNav() {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/10">
      <div className="flex h-14 items-center border-b px-4">
        <Link
          href="/admin"
          className="flex items-center gap-2 font-semibold hover:opacity-80"
        >
          <Settings className="h-6 w-6" />
          <span>Admin Portal</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start"
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}