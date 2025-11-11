// app/dashboard/search/page.js
'use client' // Precisa ser 'client' para usar 'useState'
import { useState } from 'react'
import PageHeader from '@/app/components/PageHeader'
import Card from '@/app/components/Card'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import { Search, UserPlus } from 'lucide-react'

// Item de Resultado da Busca
function SearchResultItem({ nome, membros, curso }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border-b border-gray-100 last:border-b-0">
      <div>
        <p className="font-semibold text-gray-800">{nome}</p>
        <p className="text-sm text-gray-500">{membros} membros · {curso}</p>
      </div>
      <button className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
        <UserPlus size={16} />
        Entrar
      </button>
    </div>
  )
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <PageHeader title="Buscar Grupos" />
      <Card>
        {/* Formulário de Busca */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            type="text"
            placeholder="Buscar por matéria, curso ou nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
            <Search size={16} />
            Buscar
          </Button>
        </div>

        {/* Resultados */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Resultados da Busca</h3>
        <div className="divide-y divide-gray-100">
          <SearchResultItem nome="Clube do Hardware" membros={25} curso="Eng. Computação" />
          <SearchResultItem nome="Fisiologia Humana" membros={42} curso="Medicina" />
          <SearchResultItem nome="Cálculo I (Monitoria)" membros={18} curso="Engenharias" />
        </div>
      </Card>
    </div>
  )
}