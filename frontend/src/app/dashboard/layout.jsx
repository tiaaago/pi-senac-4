// app/dashboard/layout.js
'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import Header from '@/app/components/Header';
import axios from 'axios';

export default function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
        // Adicionado 'overflow-hidden' para evitar scroll no body em mobile
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <div className="flex flex-col flex-1 relative w-full">
                <Header data={data} onOpenSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 p-4 sm:p-8 overflow-y-auto">{children}</main>
            </div>
        </div>
    )
}
