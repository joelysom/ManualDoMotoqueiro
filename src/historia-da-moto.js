import React, { useState, useEffect, useTransition } from 'react';
import './historia-da-moto.css';

const HistoriaDaMoto = () => {
  const [isPending, startTransition] = useTransition();
  const [historia, setHistoria] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistoria = async () => {
      try {
        // Aqui, estamos simulando um fetch de dados. Você pode substituir pela chamada real da API.
        const historiaData = {
          historia: 'A história da moto começa no final do século XIX, com a invenção das primeiras bicicletas motorizadas. No início, as motos eram simples e tinham motores de baixa potência, mas com o tempo, elas evoluíram, tornando-se mais potentes e sofisticadas. As primeiras motos eram essencialmente bicicletas com motores acoplados, mas a invenção e a produção em massa das motos mudaram para sempre a forma como as pessoas se deslocam, criando o mercado global de motocicletas que temos hoje.'
        };

        startTransition(() => {
          setHistoria(historiaData.historia);
          setLoading(false);
        });
      } catch (error) {
        console.error('Erro ao buscar história da moto:', error);
        setLoading(false);
      }
    };

    fetchHistoria();
  }, []);

  return (
    <div className="page-container">
      <img src="/images/title.png" alt="Título" className="page-title" />
      <h1>História da Moto</h1>
      <button className="back-button" onClick={() => window.location.href = '/'}>Voltar</button>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <p>{historia || 'Sem história para mostrar.'}</p>
      )}

      {/* Exibindo as imagens lado a lado */}
      <div className="image-container">
        <img src="/images/primeira.jpg" alt="Primeira Moto - Imagem 1" className="moto-image" />
        <img src="/images/primeira_0.jfif" alt="Primeira Moto - Imagem 2" className="moto-image" />
      </div>
    </div>
  );
};

export default HistoriaDaMoto;
