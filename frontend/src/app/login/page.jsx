'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: '',
    senha: '',
  });

  const [signupData, setSignupData] = useState({
    nome: '',
    email: '',
    curso: '',
    semestre: '',
    senha: '',
    confirmarSenha: '',
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span>SB</span>
          </div>
          <h1 className="login-title">StudyBuddy</h1>
          <p className="login-subtitle">Nunca mais estude sozinho</p>
        </div>

        <div className="login-tabs">
          <button
            onClick={() => setIsLogin(true)}
            className={isLogin ? 'login-tab active' : 'login-tab'}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={!isLogin ? 'login-tab active' : 'login-tab'}
          >
            Cadastrar
          </button>
        </div>

        {isLogin ? (
          <form className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
                value={loginData.senha}
                onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                className="form-input"
              />
            </div>

            <button type="submit" className="btn-submit">
              Entrar
            </button>
          </form>
        ) : (
          <form className="login-form">
            <div className="form-group">
              <label className="form-label">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                value={signupData.nome}
                onChange={(e) => setSignupData({ ...signupData, nome: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Curso</label>
                <input
                  type="text"
                  placeholder="Ex: Medicina"
                  value={signupData.curso}
                  onChange={(e) => setSignupData({ ...signupData, curso: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Semestre</label>
                <input
                  type="number"
                  placeholder="1-12"
                  min="1"
                  max="12"
                  value={signupData.semestre}
                  onChange={(e) => setSignupData({ ...signupData, semestre: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
                value={signupData.senha}
                onChange={(e) => setSignupData({ ...signupData, senha: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Senha</label>
              <input
                type="password"
                placeholder="confirmar senha"
                value={signupData.confirmarSenha}
                onChange={(e) => setSignupData({ ...signupData, confirmarSenha: e.target.value })}
                className="form-input"
              />
            </div>

            <button type="submit" className="btn-submit">
              Criar Conta
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
