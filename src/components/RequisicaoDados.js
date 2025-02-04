import React, { useState, useEffect } from 'react';

const RequisicaoDados = () => {
  const [posts, setPosts] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const fetchPosts = async () => {
    setCarregando(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data.slice(0, 10));
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
    setCarregando(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Exercício 7 - Aplicação de Requisição de Dados Simples</h2>
      <button onClick={fetchPosts} style={{ padding: '10px', backgroundColor: 'cyan', border: 'none', cursor: 'pointer' }}>
        Recarregar Dados
      </button>
      {carregando ? <p>Carregando...</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequisicaoDados;
