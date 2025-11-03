"use client";
import { FaArrowRight, FaHeart, FaRegCalendar, FaUsers } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiCalendar, FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuArrowRight, LuCalendar, LuClock4, LuHeart, LuMenu, LuMessageCircle, LuShield, LuSparkle, LuSparkles, LuTarget, LuTrophy, LuUsers, LuZap } from "react-icons/lu";
import './page.css'
import { useState } from "react";

export default function Home() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <main className="main">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-content">
                            <div className="logo">
                                <FaHeart className="logo-icon" />
                                <h3 className="logo-text blue-title-highlight">StudyBuddy</h3>
                            </div>
                            <div className="navbar-items">
                                <p>Como Funciona</p>
                                <p>Recursos</p>
                                <p>Depoimentos</p>
                            </div>
                            <div className="buttons">
                                <button className="login">Entrar</button>
                                <button className="register">Cadastrar</button>
                            </div>
                            <div className="menu">
                                <LuMenu className="menu-icon" />
                            </div>
                        </div>
                        <div className="mobile-dropdown">

                        </div>
                    </div>
                </nav>
                <section className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-left">
                                <div className="hero-left-top">
                                    <div className="hero-badge">
                                        <LuSparkles />
                                        <p className="hero-badge-text">Sua jornada acadêmica começa aqui!</p>
                                    </div>
                                    <h1 className="hero-title">Encontre seu <span className="blue-title-highlight">parceiro</span> de estudos ideal</h1>
                                    <p className="hero-description">Conecte-se com estudantes que compartilham seus objetivos. Swipe, match e transforme seus estudos em uma experiência colaborativa e divertida.</p>
                                    <div className="hero-buttons">
                                        <button className="register hero-btn">Começar Agora <LuArrowRight /> </button>
                                        <button className="login hero-btn">Como Funciona</button>
                                    </div>
                                </div>
                                <div className="hero-left-bottom">
                                    <div className="hero-statistic">
                                        <h1 className="hero-statistic-title">10K+</h1>
                                        <p className="hero-statistic-description">Estudantes Ativos</p>
                                    </div>
                                    <div className="hero-statistic">
                                        <h1 className="hero-statistic-title azul">50K+</h1>
                                        <p className="hero-statistic-description">Matches Realizados</p>
                                    </div>
                                    <div className="hero-statistic">
                                        <h1 className="hero-statistic-title rosa">95%</h1>
                                        <p className="hero-statistic-description">Satisfação</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-right">
                                <img className="hero-image" src="students.jpg" width={100} />
                            </div>
                        </div>
                    </div>

                </section>
                <section className="funcionamento">
                    <div className="container">
                        <div className="functionamento-content">
                            <div className="funcionamento-head">
                                <h1 className="funcionamento-title">Como Funciona o <span className="blue-title-highlight">StudyBuddy</span></h1>
                                <p className="funcionamento-description">Três passos simples para transformar sua experiência de estudo.</p>
                            </div>
                            <div className="funcionamento-boxes">
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon">
                                        <LuUsers />
                                    </div>
                                    <h3 className="funcionamento-box-title">1. Crie seu Perfil</h3>
                                    <p className="funcionamento-box-description">Adicione suas áreas de estudo, horários disponíveis e objetivos acadêmicos.</p>
                                </div>
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon funcionamento-rosa">
                                        <LuHeart />
                                    </div>
                                    <h3 className="funcionamento-box-title">2. Match</h3>
                                    <p className="funcionamento-box-description">Encontre matchs com base em interesses. Deu match? Vamos estudar!</p>
                                </div>
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon funcionamento-azul">
                                        <LuMessageCircle />
                                    </div>
                                    <h3 className="funcionamento-box-title">3. Conecte & Estude</h3>
                                    <p className="funcionamento-box-description">Converse, organize sessões de estudo e conquiste seus objetivos juntos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recursos">
                    <div className="container">
                        <div className="recursos-content">
                            <div className="recursos-head">
                                <h1 className="recursos-title">Recursos que <span className="rosa-title-highlight">Fazem a Diferença</span></h1>
                                <p className="recursos-description">Tudo que você precisa para ter a melhor experiência de estudo colaborativo.</p>
                            </div>
                            <div className="recursos-boxes">
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuTarget />
                                    </div>
                                    <h3 className="recursos-box-title">Match Inteligente</h3>
                                    <p className="recursos-box-description">Algoritmo que conecta você com estudantes com objetivos e estilos de estudo compatíveis.</p>
                                </div>
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuCalendar />
                                    </div>
                                    <h3 className="recursos-box-title">Agenda Integrada</h3>
                                    <p className="recursos-box-description">Organize sessões de estudo e sincronize horários facilmente com seus parceiros.</p>
                                </div>
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuShield />
                                    </div>
                                    <h3 className="recursos-box-title">Ambiente Seguro</h3>
                                    <p className="recursos-box-description">Perfis verificados e comunidade moderada para garantir uma experiência positiva.</p>
                                </div>
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuZap />
                                    </div>
                                    <h3 className="recursos-box-title">Conexão Instantânea</h3>
                                    <p className="recursos-box-description">Chat em tempo real para tirar dúvidas e manter o momentum dos estudos.</p>
                                </div>
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuClock4 />
                                    </div>
                                    <h3 className="recursos-box-title">Flexibilidade Total</h3>
                                    <p className="recursos-box-description">Estude quando e onde quiser, encontrando parceiros para qualquer horário.</p>
                                </div>
                                <div className="recursos-box">
                                    <div className="recursos-box-icon">
                                        <LuTrophy />
                                    </div>
                                    <h3 className="recursos-box-title">Progresso Compartilhado</h3>
                                    <p className="recursos-box-description">Acompanhe metas e conquistas com seus study buddies e mantenha-se motivado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="depoimentos"></section>
                <section className="cta"></section>
                <footer className="footer"></footer>
            </main>
        </>
    );
}
