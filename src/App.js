import React, { useState, useEffect, startTransition } from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom"; // Importação do Router
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import "./App.css"; // Arquivo CSS

// Importação das páginas
import MotosRecomendadas from './motos-recomendadas';
import HistoriaDaMoto from './historia-da-moto';
import ManobrasDeRisco from './manobras-de-risco';
import ComoCuidar from './como-cuidar';

// Componente para o modelo rotacionando
function RotatingModelCard() {
  const [isLoading, setIsLoading] = useState(true);
  const { scene } = useGLTF('/Bike/Bike.glb', true);

  useEffect(() => {
    if (scene) {
      startTransition(() => {
        setIsLoading(false);
      });
    }
  }, [scene]);

  return (
    <div className="card">
      <Canvas style={{ width: "300px", height: "300px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <primitive object={scene} />
      </Canvas>
    </div>
  );
}

// Layout principal com cabeçalho, botões, e modelo
function MainLayout() {
  return (
    <div className="app">
      <div className="title-container">
        <img src="/title.png" alt="Title" className="title-image" />
      </div>

      {/* Suspense adicionando fallback para o carregamento do modelo */}
      <Suspense fallback={<div>Carregando modelo...</div>}>
        <RotatingModelCard />
      </Suspense>

      <div className="buttons-container">
        <Link to="/motos-recomendadas" className="button">
          Listar Motos recomendadas
        </Link>
        <Link to="/historia-da-moto" className="button">
          História da Moto
        </Link>
        <Link to="/manobras-de-risco" className="button">
          Manobras de Risco
        </Link>
        <Link to="/como-cuidar" className="button">
          Como Cuidar da Moto
        </Link>
      </div>
    </div>
  );
}

// Layout para as páginas específicas, sem modelo e botões
function PageLayout() {
  return (
    <div className="page-layout">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Página inicial com o modelo e botões */}
      <Route path="/" element={<MainLayout />} />
      
      {/* Layout fixo para as páginas de conteúdo, sem o modelo e os botões */}
      <Route path="/" element={<PageLayout />}>
        <Route path="/motos-recomendadas" element={<MotosRecomendadas />} />
        <Route path="/historia-da-moto" element={<HistoriaDaMoto />} />
        <Route path="/manobras-de-risco" element={<ManobrasDeRisco />} />
        <Route path="/como-cuidar" element={<ComoCuidar />} />
      </Route>
    </Routes>
  );
}

export default App;
