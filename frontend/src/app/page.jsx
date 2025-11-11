"use client";
import { FaHeart } from "react-icons/fa";
import { LuArrowRight, LuCalendar, LuClock4, LuDownload, LuHeart, LuMenu, LuMessageCircle, LuShield, LuSparkles, LuStar, LuTarget, LuTrophy, LuUsers, LuX, LuZap } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [isOpen, setOpen] = useState(false)

    // Gradientes de texto replicados com classes utilitárias Tailwind
    // Cores: roxo -> violet-600, azul -> blue-600, rosa -> pink-600
    const blueTitleHighlight = "bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600";
    const rosaTitleHighlight = "bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600";

    return (
        <>
            <main className="flex flex-col">
                {/* Navbar */}
                <nav className="fixed w-full bg-white/80 backdrop-blur-xl border-b-2 border-gray-200 z-50">
                    <div className="max-w-[1400px] px-4 mx-auto w-full h-full">
                        <div className="flex justify-between items-center lg:py-3 py-4">
                            {/* Logo */}
                            <div className="flex items-center gap-2 cursor-pointer">
                                <FaHeart className="text-2xl text-violet-600" />
                                <h3 className={`text-xl font-bold ${blueTitleHighlight}`}>StudyBuddy</h3>
                            </div>

                            {/* Navbar Items (Desktop) */}
                            <div className="hidden lg:flex justify-center items-center gap-7 text-gray-700">
                                <a href="/#funciona" className="hover:text-violet-600 transition duration-200">Como Funciona</a>
                                <a href="/#recursos" className="hover:text-violet-600 transition duration-200">Recursos</a>
                                <a href="/#depoimentos" className="hover:text-violet-600 transition duration-200">Depoimentos</a>
                            </div>

                            {/* Buttons (Desktop) */}
                            <div className="hidden lg:flex gap-5">
                                <a href="/login">
                                    <button className="px-4 py-3 bg-white border-0 text-black font-semibold rounded-xl transition duration-200 hover:bg-pink-600 hover:text-white">
                                        Entrar
                                    </button>
                                </a>
                                <a href="/login">
                                    <button className="px-4 py-3 bg-violet-600 border-0 text-white font-bold rounded-xl transition duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/50">
                                        Cadastrar
                                    </button>
                                </a>
                            </div>

                            {/* Menu Icon (Mobile) */}
                            <div className="lg:hidden flex">
                                {
                                    isOpen ? (
                                        <LuX className="text-gray-700 text-3xl cursor-pointer" onClick={() => setOpen(value => !isOpen)} />
                                    ) : (
                                        <LuMenu className="text-gray-700 text-3xl cursor-pointer" onClick={() => setOpen(value => !isOpen)} />
                                    )
                                }
                            </div>
                        </div>

                        {/* Mobile Dropdown */}
                        {/* Usamos classes de transição/opacidade para simular a animação do dropdown */}
                        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'pt-2 pb-5 px-3 opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                            <div className="flex flex-col gap-3 text-black pb-5">
                                <a href="/#funciona" className="py-2 px-4 rounded-xl transition duration-100 hover:bg-violet-600/10 hover:text-violet-600">Como Funciona</a>
                                <a href="/#recursos" className="py-2 px-4 rounded-xl transition duration-100 hover:bg-violet-600/10 hover:text-violet-600">Recursos</a>
                                <a href="/#depoimentos" className="py-2 px-4 rounded-xl transition duration-100 hover:bg-violet-600/10 hover:text-violet-600">Depoimentos</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href="/login">
                                    <button className="w-full px-4 py-3 bg-white border-0 text-black font-semibold rounded-xl transition duration-200 hover:bg-pink-600 hover:text-white">
                                        Entrar
                                    </button>
                                </a>
                                <a href="/login">
                                    <button className="w-full px-4 py-3 bg-violet-600 border-0 text-white font-bold rounded-xl transition duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-600/50">
                                        Cadastrar
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                {/* Gradiente de fundo ajustado para cores padrão */}
                <section className="h-screen bg-gradient-to-br from-violet-600/[.1] to-blue-600/[.1] pt-16">
                    <div className="max-w-[1400px] px-4 mx-auto w-full h-full">
                        <div className="h-full flex flex-col lg:flex-row gap-12">
                            {/* Hero Left */}
                            <div className="h-full flex flex-col justify-center flex-1 lg:items-start items-center">
                                <div className="flex flex-col lg:items-start items-center">
                                    {/* Badge */}
                                    <div className="inline-flex items-center px-4 py-2 gap-2 text-violet-600 bg-violet-600/20 rounded-full border border-violet-600/20">
                                        <LuSparkles />
                                        <p className="text-sm font-medium">Sua jornada acadêmica começa aqui!</p>
                                    </div>

                                    {/* Title */}
                                    <h1 className="w-full lg:w-[30rem] text-5xl md:text-[70px] text-black font-extrabold md:leading-[75px] leading-[60px] mt-6 text-center lg:text-left">
                                        Encontre seu <span className={blueTitleHighlight}>parceiro</span> de estudos ideal
                                    </h1>

                                    {/* Description */}
                                    <p className="text-xl text-gray-700 mt-6 text-center lg:text-left">
                                        Conecte-se com estudantes que compartilham seus objetivos. Swipe, match e transforme seus estudos em uma experiência colaborativa e divertida.
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap md:flex-row gap-5 md:gap-3 mt-6 w-full max-w-lg lg:max-w-none">
                                        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-violet-600 text-white font-semibold rounded-xl text-lg border border-gray-200 transition duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/50">
                                            Começar Agora <LuArrowRight />
                                        </button>
                                        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-xl text-lg border border-gray-200 transition duration-200 hover:bg-pink-600 hover:text-white">
                                            Como Funciona
                                        </button>
                                    </div>
                                </div>

                                {/* Statistics */}
                                <div className="mt-12 flex gap-5">
                                    <div className="flex flex-col items-center gap-1">
                                        <h1 className="text-3xl font-bold text-violet-600">10K+</h1>
                                        <p className="text-sm text-gray-500">Estudantes Ativos</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <h1 className="text-3xl font-bold text-blue-600">50K+</h1>
                                        <p className="text-sm text-gray-500">Matches Realizados</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <h1 className="text-3xl font-bold text-pink-600">95%</h1>
                                        <p className="text-sm text-gray-500">Satisfação</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Right (Hidden on tablet/mobile) */}
                            <div className="hidden lg:flex h-full items-center flex-1">
                                <img className="w-full rounded-3xl shadow-2xl shadow-black/20" src="students.jpg" width={100} alt="Estudantes colaborando" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Como Funciona Section */}
                <section className="bg-white" id="funciona">
                    <div className="max-w-[1400px] px-4 mx-auto">
                        <div className="py-[75px] flex flex-col justify-center gap-12">
                            {/* Head */}
                            <div className="flex flex-col gap-3 text-center">
                                <h1 className="text-4xl font-extrabold">Como Funciona o <span className={blueTitleHighlight}>StudyBuddy</span></h1>
                                <p className="text-xl text-gray-500">Três passos simples para transformar sua experiência de estudo.</p>
                            </div>

                            {/* Boxes */}
                            {/* Responsividade: grid-cols-1 em mobile, grid-cols-3 em desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                                {/* Box 1: Perfil (Violeta) */}
                                <div className="flex flex-col items-start gap-4 p-8 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:translate-y-[-0.7rem] hover:shadow-2xl hover:shadow-violet-600/20">
                                    <div className="flex items-center p-4 text-violet-600 bg-violet-600/20 rounded-xl text-4xl">
                                        <LuUsers />
                                    </div>
                                    <h3 className="text-2xl font-semibold">1. Crie seu Perfil</h3>
                                    <p className="text-gray-700">Adicione suas áreas de estudo, horários disponíveis e objetivos acadêmicos.</p>
                                </div>
                                {/* Box 2: Match (Pink) */}
                                <div className="flex flex-col items-start gap-4 p-8 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-pink-600/60 hover:translate-y-[-0.7rem] hover:shadow-2xl hover:shadow-violet-600/20">
                                    <div className="flex items-center p-4 text-pink-600 bg-pink-600/20 rounded-xl text-4xl">
                                        <LuHeart />
                                    </div>
                                    <h3 className="text-2xl font-semibold">2. Match</h3>
                                    <p className="text-gray-700">Encontre matchs com base em interesses. Deu match? Vamos estudar!</p>
                                </div>
                                {/* Box 3: Conecte (Blue) */}
                                <div className="flex flex-col items-start gap-4 p-8 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-blue-600/60 hover:translate-y-[-0.7rem] hover:shadow-2xl hover:shadow-violet-600/20">
                                    <div className="flex items-center p-4 text-blue-600 bg-blue-600/20 rounded-xl text-4xl">
                                        <LuMessageCircle />
                                    </div>
                                    <h3 className="text-2xl font-semibold">3. Conecte & Estude</h3>
                                    <p className="text-gray-700">Converse, organize sessões de estudo e conquiste seus objetivos juntos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recursos Section */}
                <section className="bg-gray-50" id="recursos">
                    <div className="max-w-[1400px] px-4 mx-auto">
                        <div className="py-[75px] flex flex-col justify-center gap-12">
                            {/* Head */}
                            <div className="flex flex-col gap-3 text-center">
                                <h1 className="text-4xl font-extrabold">Recursos que <span className={rosaTitleHighlight}>Fazem a Diferença</span></h1>
                                <p className="text-xl text-gray-500">Tudo que você precisa para ter a melhor experiência de estudo colaborativo.</p>
                            </div>

                            {/* Boxes */}
                            {/* Responsividade: grid-cols-1 em mobile, grid-cols-2 em tablet, grid-cols-3 em desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Match Inteligente */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuTarget />
                                    </div>
                                    <h3 className="text-xl font-semibold">Match Inteligente</h3>
                                    <p className="text-gray-600 leading-relaxed">Algoritmo que conecta você com estudantes com objetivos e estilos de estudo compatíveis.</p>
                                </div>
                                {/* Agenda Integrada */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuCalendar />
                                    </div>
                                    <h3 className="text-xl font-semibold">Agenda Integrada</h3>
                                    <p className="text-gray-600 leading-relaxed">Organize sessões de estudo e sincronize horários facilmente com seus parceiros.</p>
                                </div>
                                {/* Ambiente Seguro */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuShield />
                                    </div>
                                    <h3 className="text-xl font-semibold">Ambiente Seguro</h3>
                                    <p className="text-gray-600 leading-relaxed">Perfis verificados e comunidade moderada para garantir uma experiência positiva.</p>
                                </div>
                                {/* Conexão Instantânea */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuZap />
                                    </div>
                                    <h3 className="text-xl font-semibold">Conexão Instantânea</h3>
                                    <p className="text-gray-600 leading-relaxed">Chat em tempo real para tirar dúvidas e manter o momentum dos estudos.</p>
                                </div>
                                {/* Flexibilidade Total */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuClock4 />
                                    </div>
                                    <h3 className="text-xl font-semibold">Flexibilidade Total</h3>
                                    <p className="text-gray-600 leading-relaxed">Estude quando e onde quiser, encontrando parceiros para qualquer horário.</p>
                                </div>
                                {/* Progresso Compartilhado */}
                                <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-3xl transition duration-200 hover:border-violet-600/60 hover:shadow-2xl hover:shadow-violet-600/20 bg-white">
                                    <div className="flex items-center p-3 text-white bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-2xl">
                                        <LuTrophy />
                                    </div>
                                    <h3 className="text-xl font-semibold">Progresso Compartilhado</h3>
                                    <p className="text-gray-600 leading-relaxed">Acompanhe metas e conquistas com seus study buddies e mantenha-se motivado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Depoimentos Section */}
                <section className="bg-white" id="depoimentos">
                    <div className="max-w-[1400px] px-4 mx-auto">
                        <div className="py-[75px] flex flex-col justify-center gap-12">
                            {/* Head */}
                            <div className="flex flex-col gap-3 text-center">
                                <h1 className="text-4xl font-extrabold">O que nossos <span className={blueTitleHighlight}>Estudantes Dizem</span></h1>
                                <p className="text-xl text-gray-500">Histórias reais de sucesso de quem já encontrou seus parceiros de estudo.</p>
                            </div>

                            {/* Boxes */}
                            {/* Responsividade: grid-cols-1 em mobile, grid-cols-3 em desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                                {/* Depoimento 1 */}
                                <div className="flex flex-col items-start gap-4 p-7 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-pink-600/60 hover:shadow-xl hover:shadow-black/10">
                                    <div className="flex gap-0.5">
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                    </div>
                                    <p className="text-gray-500 italic">"O StudyBuddy mudou completamente minha forma de estudar. Encontrei um grupo incrível de colegas e minhas notas melhoraram muito!"</p>
                                    <p className="text-gray-500 font-semibold">— Ana Silva, Engenharia/USP</p>
                                </div>
                                {/* Depoimento 2 */}
                                <div className="flex flex-col items-start gap-4 p-7 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-pink-600/60 hover:shadow-xl hover:shadow-black/10">
                                    <div className="flex gap-0.5">
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                    </div>
                                    <p className="text-gray-500 italic">"Finalmente consegui encontrar pessoas com os mesmos objetivos. As sessões de estudo ficaram muito mais produtivas e divertidas."</p>
                                    <p className="text-gray-500 font-semibold">— Carlos Mendes, Medicina/UFMG</p>
                                </div>
                                {/* Depoimento 3 */}
                                <div className="flex flex-col items-start gap-4 p-7 border-2 border-gray-200 rounded-3xl transition duration-200 hover:border-pink-600/60 hover:shadow-xl hover:shadow-black/10">
                                    <div className="flex gap-0.5">
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                        <LuStar className="text-xl text-pink-600 fill-pink-600" />
                                    </div>
                                    <p className="text-gray-500 italic">"Incrível como é fácil encontrar study buddies que realmente se comprometem. Recomendo para todos os estudantes!"</p>
                                    <p className="text-gray-500 font-semibold">— Juliana Costa, Direito/PUC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* Gradiente de fundo ajustado para cores padrão */}
                <section className="bg-gradient-to-br from-violet-600/[.1] to-blue-600/[.1]">
                    <div className="max-w-[1400px] px-4 mx-auto">
                        <div className="py-[70px] flex flex-col items-center mx-auto gap-8 max-w-4xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-extrabold text-center leading-tight">
                                Pronto para transformar <span className={rosaTitleHighlight}>seus estudos?</span>
                            </h1>
                            <p className="max-w-3xl text-xl text-gray-500 text-center">
                                Junte-se a milhares de estudantes que já encontraram seus parceiros ideais. Baixe o app agora e comece sua jornada!
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap md:flex-row gap-5 md:gap-3 w-full max-w-lg justify-center">
                                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-violet-600 text-white font-semibold rounded-xl text-lg transition duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-violet-600/50">
                                    Baixar Agora <LuDownload />
                                </button>
                                {/* Botão rosa mantido no CTA final */}
                                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-pink-600 text-white font-semibold rounded-xl text-lg transition duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/50">
                                    Como Funciona <LuArrowRight />
                                </button>
                            </div>

                            {/* Points */}
                            <div className="flex flex-wrap justify-center gap-5 md:gap-8 pt-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                                    <p className="text-sm text-gray-600">Totalmente Gratuito</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    <p className="text-sm text-gray-600">Sem Anúncios</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-pink-600"></div>
                                    <p className="text-sm text-gray-600">Perfis Verificados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-gray-300 bg-white">
                    <div className="max-w-[1400px] px-4 mx-auto">
                        <div className="py-12 flex flex-col gap-6">
                            {/* Logo */}
                            <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <FaHeart className="text-2xl text-pink-600" />
                                <h3 className={`text-xl font-bold ${blueTitleHighlight}`}>StudyBuddy</h3>
                            </div>

                            {/* Items */}
                            <div className="flex flex-wrap justify-center items-center gap-5 text-gray-500 text-sm">
                                <a className="hover:text-violet-600 transition duration-200">Sobre</a>
                                <a href="/#funciona" className="hover:text-violet-600 transition duration-200">Como Funciona</a>
                                <a className="hover:text-violet-600 transition duration-200">Suporte</a>
                                <a className="hover:text-violet-600 transition duration-200">Privacidade</a>
                                <a className="hover:text-violet-600 transition duration-200">Termos</a>
                            </div>

                            <p className="text-center text-gray-500 text-sm">
                                © 2024 StudyBuddy. Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}