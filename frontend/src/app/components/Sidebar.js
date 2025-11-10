'use client'
// IMPORTAR O 'X' PARA FECHAR
import { Home, Users, Search, Calendar, User, LogOut, X } from 'lucide-react' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Início' },
  { href: '/dashboard/groups', icon: Users, label: 'Meus Grupos' },
  { href: '/dashboard/search', icon: Search, label: 'Buscar Grupos' },
  { href: '/dashboard/calendar', icon: Calendar, label: 'Calendário' },
  { href: '/dashboard/profile', icon: User, label: 'Perfil' },
]

// ACEITAR PROPS 'isOpen' E 'onClose'
export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname()

  return (
    <>
      {/* OVERLAY (fundo escuro clicável, só aparece em mobile) */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-20 lg:hidden transition-opacity
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* CLASSES DA SIDEBAR */}
      <aside 
        className={`w-60 bg-black flex flex-col fixed inset-y-0 left-0 z-30
          transition-transform duration-300 ease-in-out
          lg:static lg:flex lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* BOTÃO DE FECHAR (só mobile) */}
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            StudyBuddy
          </h1>
          <button onClick={onClose} className="text-gray-400 hover:text-white lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Navegação Principal*/}
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose} // Fecha o menu ao clicar no link no mobile
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
    </>
  )
}