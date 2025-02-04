import React, { useState } from 'react';

const FiltroLista = () => {
  const [filtro, setFiltro] = useState('');
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena'];

  const nomesFiltrados = nomes.filter((nome) =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 5 - Filtro de Lista</h2>
      <input 
        type="text" 
        placeholder="Filtrar nomes..." 
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)} 
        style={{ padding: '10px', marginBottom: '10px', border: '1px solid gray', borderRadius: '5px' }}
      />
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroLista;
