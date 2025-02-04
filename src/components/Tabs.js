import React, { useState } from 'react';

const TabsNavegaveis = () => {
  const [abaAtiva, setAbaAtiva] = useState('Sobre');

  const conteudoAbas = {
    'Sobre': 'Esta é a aba Sobre. Aqui você pode encontrar informações sobre nosso site.',
    'Contato': 'Esta é a aba Contato. Envie-nos uma mensagem!',
    'Serviços': 'Esta é a aba Serviços. Veja o que oferecemos!'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 10 - Componentes com Tabs Navegáveis</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {Object.keys(conteudoAbas).map((aba) => (
          <button 
            key={aba} 
            onClick={() => setAbaAtiva(aba)} 
            style={{ 
              padding: '10px', 
              cursor: 'pointer', 
              backgroundColor: abaAtiva === aba ? 'cyan' : 'lightgray',
              border: 'none'
            }}
          >
            {aba}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <p>{conteudoAbas[abaAtiva]}</p>
      </div>
    </div>
  );
};

export default TabsNavegaveis;
