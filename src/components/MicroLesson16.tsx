"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o mnemônico VFWPA para pedir reuniões?',
    opcoes: [
      { valor: 'a', label: 'Vision, Framing, Weakness, Pedestal, Ask' },
      { valor: 'b', label: 'Problem, Solution, Benefits, Ask' },
      { valor: 'c', label: 'Introduction, Problem, Solution, Action' },
      { valor: 'd', label: 'Context, Question, Answer, Follow-up' }
    ],
    explicacao: 'VFWPA é o mnemônico do livro: Vision (como você está tornando o mundo melhor), Framing (em que estágio você está), Weakness (onde precisa de ajuda), Pedestal (por que a ajuda deles é valiosa), Ask (peça ajuda claramente).',
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
    explicacao: 'Vision: Como você está tornando o mundo melhor. Isso mostra o impacto positivo do seu trabalho e dá contexto ao seu pedido.',
    dica: 'Comece com o propósito maior.',
    correta: 'a'
  },
  {
    id: '3',
    pergunta: 'O que é "Framing" no VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Em que estágio você está e o que procura' },
      { valor: 'b', label: 'Qual é o seu problema' },
      { valor: 'c', label: 'Qual é a sua solução' },
      { valor: 'd', label: 'Quem você é' }
    ],
    explicacao: 'Framing: Em que estágio você está e o que procura. Isso dá contexto sobre onde você está no processo e o que está tentando aprender.',
    dica: 'Contextualize sua posição atual.',
    correta: 'a'
  },
  {
    id: '4',
    pergunta: 'O que é "Weakness" no VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Onde você precisa de ajuda específica' },
      { valor: 'b', label: 'Quais são seus pontos fortes' },
      { valor: 'c', label: 'Quais são seus objetivos' },
      { valor: 'd', label: 'Quais são seus recursos' }
    ],
    explicacao:'Weakness: Mostre onde você precisa de ajuda específica. Isso mostra vulnerabilidade e cria conexão humana.',
    dica: 'Mostre vulnerabilidade para criar conexão.',
    correta: 'a'
  },
  {
    id: '5',
    pergunta: 'O que é "Pedestal" no VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa' },
      { valor: 'b', label: 'Por que você é importante' },
      { valor: 'c', label: 'Por que o problema é importante' },
      { valor: 'd', label: 'Por que a solução é importante' }
    ],
    explicacao: 'Pedestal: Explique por que a ajuda deles é particularmente valiosa. Isso flata a pessoa e mostra que você reconhece expertise única deles.',
    dica: 'Faça a pessoa se sentir especial e útil.',
    correta: 'a'
  },
  {
    id: '6',
    pergunta: 'O que é "Ask" no VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Peça ajuda de forma clara e específica' },
      { valor: 'b', label: 'Pergunte sobre o problema' },
      { valor: 'c', label: 'Pergunte sobre a solução' },
      { valor: 'd', label: 'Pergunte sobre o mercado' }
    ],
    explicacao: 'Ask: Peça ajuda de forma clara e específica. Seja direto sobre o que você precisa e por que.',
    dica: 'Seja direto e específico em seu pedido.',
    correta: 'a'
  },
  {
    id: '7',
    pergunta: 'Por que mostrar vulnerabilidade ao pedir ajuda funciona?',
    opcoes: [
      { valor: 'a', label: 'Porque as pessoas gostam de ver fraqueza' },
      { valor: 'b', label: 'Porque cria conexão humana e torna mais fácil ajudar' },
      { valor: 'c', label: 'Porque mostra que você é honesto' },
      { valor: 'd', label: 'Porque é esperado' }
    ],
    explicacao: 'Mostrar vulnerabilidade cria conexão humana e torna mais fácil para as pessoas se conectarem e quererem ajudar.',
    dica: 'Vulnerabilidade cria conexão.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'Como aplicar VFWPA na prática?',
    opcoes: [
      { valor: 'a', label: 'Use sempre exatamente na mesma ordem' },
      { valor: 'b', label: 'Use como guia flexível, adapte à conversa natural' },
      { valor: 'c', label: 'Use apenas partes dele' },
      { valor: 'd', label: 'Memorize como script rígido' }
    ],
    explicacao: 'Use VFWPA como guia flexível, adapte à conversa natural. A estrutura é um guia, não uma fórmula rígida.',
    dica: 'Estrutura é guia, não prisão.',
    correta: 'b'
  }
];

const MicroLesson16 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Estrutura do Pedido - VFWPA"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima sexta microlição sobre estrutura do pedido. Agora domina o mnemônico VFWPA e sabe como estruturar pedidos de ajuda eficazes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson16;