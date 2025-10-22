'use client';

import React from 'react';

export default function LoginPage() {
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
      </div>
    </div>
  );
}
