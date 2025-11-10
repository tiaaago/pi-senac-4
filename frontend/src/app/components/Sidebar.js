// app/components/Sidebar.js
'use client'
import { Home, Users, Search, Calendar, User, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Início' },
  { href: '/dashboard/groups', icon: Users, label: 'Meus Grupos' },
  { href: '/dashboard/search', icon: Search, label: 'Buscar Grupos' },
  { href: '/dashboard/calendar', icon: Calendar, label: 'Calendário' },
  { href: '/dashboard/profile', icon: User, label: 'Perfil' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    // 1. Sidebar preta 
    <aside className="w-60 bg-black flex flex-col">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          StudyBuddy
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                ${active
                  ? 'bg-gray-800 text-white font-semibold'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
            >
              <Icon size={20} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white"
        >
          <LogOut size={20} />
          Sair
        </Link>
      </div>
    </aside>
  )
}