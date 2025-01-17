import React, { useState, useEffect, useTransition } from 'react';
import './manobras-de-risco.css';

const ManobrasDeRisco = () => {
  const [isPending, startTransition] = useTransition();
  const [manobras, setManobras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados simulados de manobras de risco, pode ser substituído pela chamada de API real
    const manobrasData = [
      {
        id: 1,
        nome: 'Wheelie',
        descricao: 'O Wheelie é uma manobra onde o piloto levanta a roda dianteira da moto, ficando apenas com a roda traseira tocando o solo. É muito popular entre os motociclistas experientes e envolve equilíbrio e controle.',
        imagemUrl: '/images/wheelie.png'
      },
      {
        id: 2,
        nome: 'Stopie',
        descricao: 'O Stopie é uma manobra onde o piloto freia a moto bruscamente até levantar a roda traseira do solo, ficando com a roda dianteira em contato com o chão. Requer habilidade para evitar quedas.',
        imagemUrl: '/images/stopie.png'
      },
      {
        id: 3,
        nome: 'Backflip',
        descricao: 'O Backflip é uma manobra extrema em que o piloto realiza um giro completo de 360 graus para trás com a moto, sendo uma das manobras mais desafiadoras e arriscadas.',
        imagemUrl: '/images/backflip.png'
      }
    ];

    setManobras(manobrasData);
    setLoading(false);
  }, []);  // Carregar as manobras apenas uma vez quando o componente for montado

  return (
    <div className="page-container">
      <img src="/images/title.png" alt="Título" className="page-title" />
      <h1>Manobras de Risco</h1>
      <button className="back-button" onClick={() => window.location.href = '/'}>Voltar</button>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="manobras-list">
          {manobras.length > 0 ? (
            manobras.map((manobra) => (
              <div key={manobra.id} className="manobra-card">
                <h2>{manobra.nome}</h2>
                <p>{manobra.descricao}</p>
                <img src={manobra.imagemUrl} alt={manobra.nome} className="manobra-image" />
              </div>
            ))
          ) : (
            <p>Sem manobras de risco para mostrar.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManobrasDeRisco;
