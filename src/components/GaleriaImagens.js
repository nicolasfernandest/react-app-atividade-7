import React, { useState } from 'react';

const imagens = [
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
];

const GaleriaImagens = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 8 - Galeria de Imagens com Visualização Detalhada</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {imagens.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Imagem ${index + 1}`} 
            style={{ width: '100px', cursor: 'pointer' }} 
            onClick={() => setImagemSelecionada(img)}
          />
        ))}
      </div>
      {imagemSelecionada && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
          onClick={() => setImagemSelecionada(null)}
        >
          <img src={imagemSelecionada} alt="Imagem ampliada" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default GaleriaImagens;
