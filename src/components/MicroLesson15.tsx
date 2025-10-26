"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o mnemônico para estruturar o pedido de reunião?',
    opcoes: [
      { valor: 'a', label: 'VFWPA - Vision, Framing, Weakness, Pedestal, Ask' },
      { valor: 'b', label: 'PSBA - Problem, Solution, Benefits, Ask' },
      { valor: 'c', label: 'PASA - Problem, Ask, Solution, Action' },
      { valor: 'd', label: 'SPSA - Solution, Problem, Solution, Ask' }
    ],
    explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
    dica: 'Memorize a sequência que mostra valor e necessidade.',
    correta: 'a'
  },
  {
    id: '2',
    pergunta: 'O que é "Vision" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Como você está tornando o mundo melhor' },
      { valor: 'b', label: 'Qual é o seu problema' },
      { valor: 'c', label: 'Qual é a sua solução' },
      { valor: 'd', label: 'Quem você é' }
    ],
    explicacao: 'Vision: Como você está tornando o mundo melhor. Isso mostra o impacto positivo do seu trabalho.',
    dica: 'Comece com o propósito maior.',
    correta: 'a'
  }
];

const MicroLesson15 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Estratégias de Conexão"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima quinta microlição sobre estratégias de conexão. Agora você sabe como estruturar pedidos de reunião eficazes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson15;