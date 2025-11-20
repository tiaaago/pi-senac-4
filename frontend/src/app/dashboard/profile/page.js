// app/dashboard/profile/page.js
'use client'
import PageHeader from '@/app/components/PageHeader'
import Card from '@/app/components/Card'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProfilePage() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getLogin = JSON.parse(localStorage.getItem("userInfos"));

        axios.get(`http://localhost:8080/api/users/${getLogin.email}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                alert('Um erro ocorreu, contate o Administrador!');
                console.log(error);

                setLoading(false);
            });
    }, [])

    return (
        <div>
            <PageHeader title="Meu Perfil" />
            <Card>
                <div className="space-y-6">
                    {/* Grupo de Formulário */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <Input type="text" defaultValue={data?.nome} autocomplete="off" />
                    </div>

                    {/* Grupo de Formulário */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <Input type="email" defaultValue={data?.email} autocomplete="off" />
                    </div>

                    {/* Grupo de Formulário */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Curso</label>
                        <Input type="text" defaultValue={data?.curso} autocomplete="off" />
                    </div>

                    {/* Grupo de Formulário */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nova Senha</label>
                        <Input type="password" placeholder="Deixe em branco para não alterar" autocomplete="new-password" />
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