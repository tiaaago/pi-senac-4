// app/components/Header.js
import Image from 'next/image'
import user from '@/app/icones/user.png'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-20">
      <h1 className="text-xl font-semibold text-blue-800">Dashboard</h1>

      <div className="flex items-center gap-5">
        <button className="relative p-2.5 hover:bg-blue-50 rounded-full">
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5">
            3
          </span>
          🎃
        </button>
        <div class="relative p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg">
        <div className="flex items-center gap-3">
          <Image src={user} alt="User" width={36} height={36} className="rounded-full border border-gray-200" />
          <div className="text-sm leading-tight">
            <p className="font-medium text-gray-800">Aghata Nunes</p>
            <p className="text-black-1000 text-xs">FLOPTOCK</p>
          </div>
        </div>
      </div>
    </div>
    </header>
  )
}
