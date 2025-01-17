import React from 'react';
import './motoslistadas.css';

const MotosListadas = ({ motos }) => {
  return (
    <div className="motos-list">
      {motos.length > 0 ? (
        motos.map((moto) => (
          <div key={moto.id} className="moto-card">
            <img src={moto.imageUrl} alt={moto.name} className="moto-image" />
            <div className="moto-info">
              <h2>{moto.name}</h2>
              <p>{moto.description}</p>
              <p><strong>Preço:</strong> {moto.price}</p>
              <p><strong>Categoria:</strong> {moto.category}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Sem motos listadas para mostrar.</p>
      )}
    </div>
  );
};

export default MotosListadas;
