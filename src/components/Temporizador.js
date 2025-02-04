import React, { useState, useEffect } from 'react';

const Temporizador = () => {
  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    let intervalo;
    if (rodando) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [rodando]);

  const resetarTemporizador = () => {
    setRodando(false);
    setTempo(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 4 - Temporizador com useEffect</h2>
      <p>Tempo: {tempo} segundos</p>
      <button onClick={() => setRodando(!rodando)} style={{ margin: '5px', padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
        {rodando ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={resetarTemporizador} style={{ margin: '5px', padding: '10px', backgroundColor: 'red', border: 'none', cursor: 'pointer', color: 'white' }}>
        Reiniciar
      </button>
    </div>
  );
};

export default Temporizador;
