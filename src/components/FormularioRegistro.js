import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && email && senha) {
      setMensagem(`Bem-vindo, ${nome}! Seu cadastro foi realizado com sucesso.`);
    } else {
      setMensagem('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 6 - Formulário de Registro</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)} 
          style={{ display: 'block', margin: '10px auto', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
          Registrar
        </button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default FormularioRegistro;
