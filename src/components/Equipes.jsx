import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../css/equipes.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const dadosResultados = [
  { corrida: 'Cidade do México', vencedor: 'Pascal Wehrlein', equipe: 'Porsche' },
  { corrida: 'Diriyah', vencedor: 'Jake Dennis', equipe: 'Andretti' },
  { corrida: 'Hyderabad', vencedor: 'Jean-Éric Vergne', equipe: 'DS Penske' },
  { corrida: 'Cidade do Cabo', vencedor: 'António Félix da Costa', equipe: 'Porsche' },
  { corrida: 'São Paulo', vencedor: 'Mitch Evans', equipe: 'Jaguar' },
];

const dadosClassificacao = [
  { nome: 'Pascal Wehrlein', pontos: 80 },
  { nome: 'Jake Dennis', pontos: 62 },
  { nome: 'Jean-Éric Vergne', pontos: 50 },
  { nome: 'Nick Cassidy', pontos: 47 },
  { nome: 'António Félix da Costa', pontos: 46 },
];

const dadosDesempenho = [
  { corrida: 'Corrida 1', Wehrlein: 25, Dennis: 18, Vergne: 15 },
  { corrida: 'Corrida 2', Wehrlein: 18, Dennis: 25, Vergne: 12 },
  { corrida: 'Corrida 3', Wehrlein: 15, Dennis: 10, Vergne: 25 },
  { corrida: 'Corrida 4', Wehrlein: 12, Dennis: 8, Vergne: 18 },
  { corrida: 'Corrida 5', Wehrlein: 10, Dennis: 1, Vergne: 0 },
];

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Desempenho dos Pilotos',
    },
  },
};

const chartData = {
  labels: dadosDesempenho.map(item => item.corrida),
  datasets: [
    {
      label: 'Wehrlein',
      data: dadosDesempenho.map(item => item.Wehrlein),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dennis',
      data: dadosDesempenho.map(item => item.Dennis),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Vergne',
      data: dadosDesempenho.map(item => item.Vergne),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

export default function ResultadosFormulaE() {
  const [abaAtiva, setAbaAtiva] = useState('resultados');

  return (
    <div className="resultados-formula-e">
      <div className="header">
        <img src="./src/public/img/uk-flag.png" alt="Logo Fórmula E" className="logo" />
        <h1>Resultados e Classificações da Temporada 9 da Fórmula E</h1>
      </div>
      
      <div className="container-abas">
        {['resultados', 'classificacao', 'desempenho'].map((aba) => (
          <motion.button
            key={aba}
            className={`botao-aba ${abaAtiva === aba ? 'ativo' : ''}`}
            onClick={() => setAbaAtiva(aba)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {aba.charAt(0).toUpperCase() + aba.slice(1)}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={abaAtiva}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="conteudo-aba"
        >
          {abaAtiva === 'resultados' && (
            <div className="container-resultados">
              <h2>Últimos Resultados das Corridas</h2>
              <ul className="lista-resultados">
                {dadosResultados.map((resultado, index) => (
                  <motion.li
                    key={index}
                    className="item-resultado"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="nome-corrida">{resultado.corrida}</span>
                    <span className="nome-vencedor">{resultado.vencedor}</span>
                    <span className="nome-equipe">{resultado.equipe}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {abaAtiva === 'classificacao' && (
            <div className="container-classificacao">
              <h2>Classificação dos Pilotos</h2>
              <table className="tabela-classificacao">
                <thead>
                  <tr>
                    <th>Posição</th>
                    <th>Piloto</th>
                    <th>Pontos</th>
                  </tr>
                </thead>
                <tbody>
                  {dadosClassificacao.map((piloto, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td>{index + 1}</td>
                      <td>{piloto.nome}</td>
                      <td>{piloto.pontos}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {abaAtiva === 'desempenho' && (
            <div className="container-desempenho">
              <h2>Tendências de Desempenho dos Pilotos</h2>
              <div className="grafico-container">
                <Line options={chartOptions} data={chartData} />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}