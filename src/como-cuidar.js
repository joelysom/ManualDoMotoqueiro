import React, { useState, useEffect, useTransition } from 'react';
import './como-cuidar.css';

const ComoCuidar = () => {
  const [isPending, startTransition] = useTransition();
  const [cuidados, setCuidados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dados simulados de cuidados com a moto
    const cuidadosData = [
      {
        id: 1,
        dica: 'Verifique o nível de óleo regularmente para evitar danos ao motor. Troque o óleo a cada 5.000 km ou conforme recomendação do fabricante.',
        imagemUrl: '/images/oleo.png'
      },
      {
        id: 2,
        dica: 'Mantenha os pneus sempre calibrados para garantir maior segurança e durabilidade. A pressão recomendada pode ser encontrada no manual da moto.',
        imagemUrl: '/images/pneus.png'
      },
      {
        id: 3,
        dica: 'Realize a limpeza periódica da corrente de transmissão e a lubrifique para melhorar o desempenho e prolongar sua vida útil.',
        imagemUrl: '/images/corrente.png'
      },
      {
        id: 4,
        dica: 'Cheque o sistema de freios regularmente para garantir que a moto esteja em ótimas condições de segurança. Substitua as pastilhas de freio quando necessário.',
        imagemUrl: '/images/freio.png'
      }
    ];

    setCuidados(cuidadosData);
    setLoading(false);
  }, []); // Carregar os cuidados apenas uma vez quando o componente for montado

  return (
    <div className="page-container">
      <img src="/images/title.png" alt="Título" className="page-title" />
      <h1>Como Cuidar da Sua Moto</h1>
      <button className="back-button" onClick={() => window.location.href = '/'}>Voltar</button>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className="cuidados-list">
          {cuidados.length > 0 ? (
            cuidados.map((cuidado) => (
              <div key={cuidado.id} className="cuidado-card">
                <h2>Dica #{cuidado.id}</h2>
                <p>{cuidado.dica}</p>
                <img src={cuidado.imagemUrl} alt={`Imagem de cuidado ${cuidado.id}`} className="cuidado-image" />
              </div>
            ))
          ) : (
            <p>Sem cuidados para mostrar.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ComoCuidar;
