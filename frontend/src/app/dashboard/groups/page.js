// app/dashboard/groups/page.js
import PageHeader from '@/app/components/PageHeader'
import Card from '@/app/components/Card'
import { Plus } from 'lucide-react'
import Button from '@/app/components/Button'

// Item de Grupo
function MyGroupItem({ nome, membros, tag }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 border-b border-gray-100 last:border-b-0">
      <div>
        <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">{tag}</span>
        <p className="font-semibold text-gray-800 mt-1">{nome}</p>
        <p className="text-sm text-gray-500">{membros} membros</p>
      </div>
      <button className="w-full sm:w-auto px-5 py-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg">
        Acessar
      </button>
    </div>
  )
}

export default function GroupsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 self-start sm:self-center">
          Meus Grupos
        </h1>
        <Button className="w-full sm:w-auto flex items-center justify-center gap-2">
          <Plus size={13} />
          Novo Grupo
        </Button>
      </div>

      <Card>
        <MyGroupItem nome="Matemática Avançada" membros={8} tag="MEDICINA" />
        <MyGroupItem nome="Programação Web" membros={12} tag="SISTEMAS" />
        <MyGroupItem nome="Banco de Dados" membros={6} tag="SISTEMAS" />
      </Card>
    </div>
  )
}