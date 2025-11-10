// app/dashboard/page.js
import { Users, BookOpen, Trophy, Handshake, Plus } from 'lucide-react'
import Button from '@/app/components/Button' 


function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center gap-5 border border-gray-100 shadow-sm">
      {/* 1. Ícone com fundo e cor em gradiente (azul para roxo) */}
      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-lg shadow-lg">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  )
}

function GroupItem({ nome, membros, data }) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex items-center justify-between">
      <div>
        <p className="font-semibold text-gray-800">{nome}</p>
        <p className="text-sm text-gray-500">
          {membros} membros · Próxima reunião: {data}
        </p>
      </div>
      {/* Botão secundário (sutil) */}
      <button className="px-5 py-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg">
        Acessar
      </button>
    </div>
  )
}


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Users} label="Grupos Ativos" value="3" />
        <StatCard icon={BookOpen} label="Horas de Estudo" value="24h" />
        <StatCard icon={Handshake} label="Conexões" value="18" />
        <StatCard icon={Trophy} label="Conquistas" value="120" />
      </div>

      {/* Grupos */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl ml-4 font-bold text-gray-900">Grupos de Estudos</h2>
          <Button className="w-xl mr-6 flex items-center gap-2">
            <Plus size={13} />
            Novo Grupo
          </Button>
        </div>
        
        <div className="grid gap-10">
          <GroupItem nome="Matemática Avançada" membros={8} data="2025-10-25" />
          <GroupItem nome="Programação Web" membros={12} data="2025-10-24" />
          <GroupItem nome="Banco de Dados" membros={6} data="2025-10-26" />
          <GroupItem nome="Banco de Dados" membros={6} data="2025-10-26" />
          <GroupItem nome="Banco de Dados" membros={6} data="2025-10-26" />
          <GroupItem nome="Banco de Dados" membros={6} data="2025-10-26" />
          <GroupItem nome="Banco de Dados" membros={6} data="2025-10-26" />
        </div>
      </section>
    </div>
  )
}