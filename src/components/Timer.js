import React, { useState, useEffect } from 'react';

const TimerAlerta = () => {
  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);
  const [entradaTempo, setEntradaTempo] = useState('');

  useEffect(() => {
    let intervalo;
    if (rodando && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((prevTempo) => {
          if (prevTempo <= 1) {
            clearInterval(intervalo);
            alert('O tempo acabou!');
            setRodando(false);
            return 0;
          }
          return prevTempo - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [rodando, tempo]);

  const iniciarTimer = () => {
    const segundos = parseInt(entradaTempo, 10);
    if (!isNaN(segundos) && segundos > 0) {
      setTempo(segundos);
      setRodando(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 9 - Timer com Intervalo e Alerta</h2>
      <input 
        type="number" 
        value={entradaTempo} 
        onChange={(e) => setEntradaTempo(e.target.value)} 
        placeholder="Defina o tempo em segundos"
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={iniciarTimer} style={{ margin: '5px', padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
        Iniciar
      </button>
      <button onClick={() => setRodando(false)} style={{ margin: '5px', padding: '10px', backgroundColor: 'orange', border: 'none', cursor: 'pointer' }}>
        Pausar
      </button>
      <button onClick={() => setTempo(0)} style={{ margin: '5px', padding: '10px', backgroundColor: 'red', border: 'none', cursor: 'pointer', color: 'white' }}>
        Reiniciar
      </button>
      <p>Tempo restante: {tempo} segundos</p>
    </div>
  );
};

export default TimerAlerta;
