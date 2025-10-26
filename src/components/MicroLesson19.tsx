"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como transformar conversas frias em quentes?',
    opcoes: [
      { valor: 'a', label: 'Use as primeiras para gerar introduções e criar efeito bola de neve' },
      { valor: 'b', label: 'Use apenas cold calling' },
      { valor: 'c', label: 'Espere as pessoas te encontrarem' },
      { valor: 'd', label: 'Use apenas anúncios' }
    ],
    explicacao: 'Use as primeiras conversas frias para gerar introduções calorosas e criar um efeito bola de neve. Cada conversa pode levar a muitas outras.',
    dica: 'Pense no longo prazo: transforme frio em quente.',
    correta: 'a'
  },
  {
    id: '2',
    pergunta: 'Qual é o objetivo final das estratégias de conexão?',
    opcoes: [
      { valor: 'a', label: 'Parar de ter conversas frias' },
      { valor: 'b', label: 'Vender imediatamente' },
      { valor: 'c', label: 'Ter muitos clientes' },
      { valor: 'd', label: 'Ser famoso' }
    ],
    explicacao: 'O objetivo final é parar de ter conversas frias. Crie um sistema onde as pessoas te procuram ou são apresentadas por alguém de confiança.',
    dica: 'Quente é melhor que frio.',
    correta: 'a'
  }
];

const MicroLesson19 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Efeito Bola de Neve"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima nona e última microlição! Parabéns, você domina The Mom Test!"
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson19;