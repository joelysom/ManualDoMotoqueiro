import React, { useState, useEffect } from 'react';
import MotosListadas from './components/MotosListadas';
import './motos-recomendadas.css';

const MotosRecomendadas = () => {
  const [motos, setMotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados das motos simulados, pode ser substituído pela chamada API
    const motosData = [
      {
        id: 1,
        name: 'Honda CB 1000R',
        description: 'A Honda CB 1000R combina potência, estilo e desempenho, sendo ideal para quem busca adrenalina nas estradas.',
        price: 'R$ 57.000,00',
        category: 'Naked',
        imageUrl: '/images/cb1000r.png'
      },
      {
        id: 2,
        name: 'Yamaha R1',
        description: 'A Yamaha R1 é uma das motos esportivas mais avançadas, oferecendo desempenho excepcional para os amantes de velocidade.',
        price: 'R$ 80.000,00',
        category: 'Esportiva',
        imageUrl: '/images/r1.png'
      },
      {
        id: 3,
        name: 'Harley-Davidson Iron 883',
        description: 'A Harley-Davidson Iron 883 é uma moto custom que mistura tradição e desempenho para quem busca conforto e estilo nas estradas.',
        price: 'R$ 45.000,00',
        category: 'Custom',
        imageUrl: '/images/iron883.png'
      }
    ];

    setMotos(motosData);
    setLoading(false);
  }, []); // Executa apenas uma vez, após o carregamento

  return (
    <div className="page-container">
      <img src="/images/title.png" alt="Título" className="page-title" />
      <h1>Motos Recomendadas</h1>
      <button className="back-button" onClick={() => window.location.href = '/'}>Voltar</button>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <MotosListadas motos={motos} />
      )}
    </div>
  );
};

export default MotosRecomendadas;
