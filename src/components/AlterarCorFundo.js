import React, { useState, useEffect } from 'react';

const AlterarCorFundo = () => {
  const [cor, setCor] = useState('#ffffff');

  useEffect(() => {
    document.body.style.backgroundColor = cor;
  }, [cor]);

  const gerarCorAleatoria = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setCor(randomColor);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 2 - Alteração de Cor de Fundo</h2>
      <button 
        onClick={gerarCorAleatoria} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}
      >
        Mudar Cor de Fundo
      </button>
    </div>
  );
};

export default AlterarCorFundo;
