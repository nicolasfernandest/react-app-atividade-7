import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 1 - Contador Simples</h2>
      <p>Contador: {contador}</p>
      <button 
        onClick={() => setContador(contador + 1)} 
        style={{ margin: '5px', padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}
      >
        Incrementar
      </button>
      <button 
        onClick={() => setContador(contador > 0 ? contador - 1 : 0)}
        style={{ margin: '5px', padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}
      >
        Decrementar
      </button>
    </div>
  );
};

export default Contador;
