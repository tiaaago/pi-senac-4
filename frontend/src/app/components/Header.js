// app/components/Header.js
import Image from 'next/image'
import user from '@/app/icones/user.png'
import { Menu } from 'lucide-react' 

// PROP 'onOpenSidebar'
export default function Header({ data, onOpenSidebar }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-20">
      
      <div className="flex items-center gap-4">
        {/* BOTÃO HAMBÚRGUER (só aparece em mobile - 'lg:hidden') */}
        <button
          onClick={onOpenSidebar}
          className="text-gray-700 p-2.5 hover:bg-blue-50 rounded-full lg:hidden"
        >
          <Menu size={24} />
        </button>
        
        {/* Título escondido em telas muito pequenas (xs) */}
        <h1 className="text-xl font-semibold text-blue-800 hidden sm:block">Dashboard</h1>
      </div>
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Gradiente de fundo escondido em telas pequenas para economizar espaço */}
        <div className="relative p-1 sm:p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg">
          <div className="flex items-center gap-3">
            <Image src={user} alt="User" width={36} height={36} className="rounded-full border border-gray-200" />
            {/* Infos do usuário escondidas em telas pequenas */}
            <div className="text-sm leading-tight hidden sm:block pr-3">
              <p className="font-medium text-white">{data?.nome}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

