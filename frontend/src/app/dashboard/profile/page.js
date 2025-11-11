// app/dashboard/profile/page.js
'use client'
import PageHeader from '@/app/components/PageHeader'
import Card from '@/app/components/Card'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'

export default function ProfilePage() {
  return (
    <div>
      <PageHeader title="Meu Perfil" />
      <Card>
        <div className="space-y-6">
          {/* Grupo de Formulário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
            <Input type="text" value="Aghata Nunes" />
          </div>

          {/* Grupo de Formulário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input type="email" value="aghata.nunes@floptock.com" />
          </div>

          {/* Grupo de Formulário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Curso</label>
            <Input type="text" value="Sistemas de Informação" />
          </div>

          {/* Grupo de Formulário */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
            <Input type="password" placeholder="Deixe em branco para não alterar" />
          </div>

          {/* Botão Salvar */}
          <div className="pt-4">
            <Button className="w-full sm:w-auto">
              Salvar Alterações
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}