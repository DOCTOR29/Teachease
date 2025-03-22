'use client'
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Download,
  FileQuestion,
  GraduationCap,
  Layout,
  LogOut,
  ScrollText,
  Settings,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { NextResponse } from 'next/server';

const navItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Layout,
  },
  {
    title: 'Lesson Plans',
    href: '/dashboard/lessons',
    icon: BookOpen,
  },
  {
    title: 'Question Papers',
    href: '/dashboard/questions',
    icon: FileQuestion,
  },
  {
    title: 'Worksheets',
    href: '/dashboard/worksheets',
    icon: ScrollText,
  },
  {
    title: 'Quizzes',
    href: '/dashboard/quizzes',
    icon: GraduationCap,
  },
  {
    title: 'Downloads',
    href: '/dashboard/downloads',
    icon: Download,
  },
];

export function DashboardNav() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
    // NextResponse.redirect('/');
  };

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-muted/10">
      <div className="flex h-14 items-center border-b px-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold hover:opacity-80"
        >
          <GraduationCap className="h-6 w-6" />
          <span>EduDash</span>
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
      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          asChild
        >
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-destructive"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </div>
    </div>
  );
}