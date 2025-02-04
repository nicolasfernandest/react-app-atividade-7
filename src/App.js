import React, { useState } from 'react';
import Contador from './components/Contador';
import AlterarCorFundo from './components/AlterarCorFundo';
import ListaTarefas from './components/ListaTarefas';
import Temporizador from './components/Temporizador';
import FiltroLista from './components/FiltroLista';
import FormularioRegistro from './components/FormularioRegistro';
import RequisicaoDados from './components/RequisicaoDados';
import GaleriaImagens from './components/GaleriaImagens';
import Timer from './components/Timer';
import Tabs from './components/Tabs';

const App = () => {
  const [exercicioAtivo, setExercicioAtivo] = useState(null);

  const exercicios = {
    'Contador Simples': <Contador />, 
    'Alteração de Cor de Fundo': <AlterarCorFundo />, 
    'Lista de Tarefas': <ListaTarefas />, 
    'Temporizador': <Temporizador />, 
    'Filtro de Lista': <FiltroLista />, 
    'Formulário de Registro': <FormularioRegistro />, 
    'Requisição de Dados': <RequisicaoDados />, 
    'Galeria de Imagens': <GaleriaImagens />, 
    'Timer com Alerta': <Timer />, 
    'Tabs Navegáveis': <Tabs />
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Atividade 7 - Praticando conceitos essenciais do ReactJS </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {Object.keys(exercicios).map((nome) => (
          <button 
            key={nome} 
            onClick={() => setExercicioAtivo(nome)} 
            style={{ padding: '10px', cursor: 'pointer', backgroundColor: 'cyan', border: 'none' }}
          >
            {nome}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
        {exercicioAtivo ? exercicios[exercicioAtivo] : <p>Selecione um exercício acima para visualizar.</p>}
      </div>
    </div>
  );
};

export default App;
