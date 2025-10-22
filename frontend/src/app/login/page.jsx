'use client';

import React from 'react';

export default function LoginPage() {
  const isLogin = true; // Temporariamente true para exibir login

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

        {isLogin ? (
          <form className="login-form">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
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
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="form-input"
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Curso</label>
                <input
                  type="text"
                  placeholder="Ex: Medicina"
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
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Senha</label>
              <input
                type="password"
                placeholder="confirmar senha"
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
