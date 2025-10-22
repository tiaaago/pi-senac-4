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

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.email = 'Email obrigatorio';
    } else if (!isValidEmail(loginData.email)) {
      newErrors.email = 'Email invalido';
    }
    if (!loginData.senha) {
      newErrors.senha = 'Senha obrigatoria';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.nome) newErrors.nome = 'Nome obrigatorio';
    if (!signupData.email) {
      newErrors.email = 'Email obrigatorio';
    } else if (!isValidEmail(signupData.email)) {
      newErrors.email = 'Email invalido';
    }
    if (!signupData.curso) newErrors.curso = 'Curso obrigatorio';
    if (!signupData.semestre) newErrors.semestre = 'Semestre obrigatorio';
    if (!signupData.senha) {
      newErrors.senha = 'Senha obrigatoria';
    } else if (!isValidPassword(signupData.senha)) {
      newErrors.senha = 'Senha deve ter 8+ caracteres, 1 letra e 1 numero';
    }
    if (signupData.senha !== signupData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas nao coincidem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
            onClick={() => { setIsLogin(true); setErrors({}); }}
            className={isLogin ? 'login-tab active' : 'login-tab'}
          >
            Entrar
          </button>
          <button
            onClick={() => { setIsLogin(false); setErrors({}); }}
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
                className={errors.email ? 'form-input error' : 'form-input'}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
                value={loginData.senha}
                onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                className={errors.senha ? 'form-input error' : 'form-input'}
              />
              {errors.senha && <p className="error-message">{errors.senha}</p>}
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
                className={errors.nome ? 'form-input error' : 'form-input'}
              />
              {errors.nome && <p className="error-message">{errors.nome}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className={errors.email ? 'form-input error' : 'form-input'}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Curso</label>
                <input
                  type="text"
                  placeholder="Ex: Medicina"
                  value={signupData.curso}
                  onChange={(e) => setSignupData({ ...signupData, curso: e.target.value })}
                  className={errors.curso ? 'form-input error' : 'form-input'}
                />
                {errors.curso && <p className="error-message">{errors.curso}</p>}
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
                  className={errors.semestre ? 'form-input error' : 'form-input'}
                />
                {errors.semestre && <p className="error-message">{errors.semestre}</p>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Senha</label>
              <input
                type="password"
                placeholder="senha"
                value={signupData.senha}
                onChange={(e) => setSignupData({ ...signupData, senha: e.target.value })}
                className={errors.senha ? 'form-input error' : 'form-input'}
              />
              {errors.senha && <p className="error-message">{errors.senha}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirmar Senha</label>
              <input
                type="password"
                placeholder="confirmar senha"
                value={signupData.confirmarSenha}
                onChange={(e) => setSignupData({ ...signupData, confirmarSenha: e.target.value })}
                className={errors.confirmarSenha ? 'form-input error' : 'form-input'}
              />
              {errors.confirmarSenha && <p className="error-message">{errors.confirmarSenha}</p>}
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
