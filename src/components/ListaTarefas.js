import React, { useState } from 'react';

const ListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa('');
  };

  const removerTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const marcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 3 - Lista de Tarefas</h2>
      <input 
        type="text" 
        value={novaTarefa} 
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Adicione uma tarefa"
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <button onClick={adicionarTarefa} style={{ padding: '5px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
        Adicionar
      </button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none', marginTop: '10px' }}>
            {tarefa.texto}
            <button onClick={() => marcarConcluida(index)} style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'lightgreen', border: 'none', cursor: 'pointer' }}>
              {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(index)} style={{ marginLeft: '5px', padding: '5px', backgroundColor: 'red', border: 'none', cursor: 'pointer', color: 'white' }}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;
