"use client";
import { FaArrowRight, FaHeart, FaUsers } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { FiMessageCircle, FiUsers } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
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
                                <HiOutlineMenu className="menu-icon" />
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
                                        <HiOutlineSparkles />
                                        <p className="hero-badge-text">Sua jornada acadêmica começa aqui!</p>
                                    </div>
                                    <h1 className="hero-title">Encontre seu <span className="blue-title-highlight">parceiro</span> de estudos ideal</h1>
                                    <p className="hero-description">Conecte-se com estudantes que compartilham seus objetivos. Swipe, match e transforme seus estudos em uma experiência colaborativa e divertida.</p>
                                    <div className="hero-buttons">
                                        <button className="register hero-btn">Começar Agora <FaArrowRight /> </button>
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
                            <div className="functionamento-boxes">
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon">
                                        <FiUsers />
                                    </div>
                                    <h3 className="funcionamento-box-title">1. Crie seu Perfil</h3>
                                    <p className="funcionamento-box-description">Adicione suas áreas de estudo, horários disponíveis e objetivos acadêmicos.</p>
                                </div>
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon">
                                        <FaRegHeart />
                                    </div>
                                    <h3 className="funcionamento-box-title">1. Crie seu Perfil</h3>
                                    <p className="funcionamento-box-description">Adicione suas áreas de estudo, horários disponíveis e objetivos acadêmicos.</p>
                                </div>
                                <div className="funcionamento-box">
                                    <div className="funcionamento-box-icon">
                                        <FiMessageCircle />
                                    </div>
                                    <h3 className="funcionamento-box-title">1. Crie seu Perfil</h3>
                                    <p className="funcionamento-box-description">Adicione suas áreas de estudo, horários disponíveis e objetivos acadêmicos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recursos"></section>
                <section className="depoimentos"></section>
                <section className="cta"></section>
                <footer className="footer"></footer>
            </main>
        </>
    );
}
