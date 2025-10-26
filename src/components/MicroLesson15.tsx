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
  },
  {
    id: '3',
    pergunta: 'O que é "Framing" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Em que estágio você está e o que procura' },
      { valor: 'b', label: 'Qual é o seu problema' },
      { valor: 'c', label: 'Qual é a sua solução' },
      { valor: 'd', label: 'Quem você é' }
    ],
    explicacao: 'Framing: Em que estágio você está e o que procura. Isso dá contexto sobre onde você está no seu processo.',
    dica: 'Contextualize sua posição atual.',
    correta: 'a'
  },
  {
    id: '4',
    pergunta: 'O que é "Weakness" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Onde você precisa de ajuda específica' },
      { valor: 'b', label: 'Quais são seus pontos fortes' },
      { valor: 'c', label: 'Quais são seus objetivos' },
      { valor: 'd', label: 'Quais são seus recursos' }
    ],
    explicacao: 'Weakness: Mostre onde você precisa de ajuda específica. Isso mostra vulnerabilidade e necessidade.',
    dica: 'Mostre vulnerabilidade para criar conexão.',
    correta: 'a'
  },
  {
    id: '5',
    pergunta: 'O que é "Pedestal" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa' },
      { valor: 'b', label: 'Por que você é importante' },
      { valor: 'c', label: 'Por que o problema é importante' },
      { valor: 'd', label: 'Por que a solução é importante' }
    ],
    explicacao: 'Pedestal: Explique por que a ajuda deles é particularmente valiosa. Isso flata a pessoa e mostra que você valoriza sua expertise.',
    dica: 'Faça a pessoa se sentir especial e útil.',
    correta: 'a'
  },
  {
    id: '6',
    pergunta: 'O que é "Ask" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Peça ajuda de forma clara' },
      { valor: 'b', label: 'Pergunte sobre o problema' },
      { valor: 'c', label: 'Pergunte sobre a solução' },
      { valor: 'd', label: 'Pergunte sobre o mercado' }
    ],
    explicacao: 'Ask: Peça ajuda de forma clara. Seja específico sobre o que você precisa.',
    dica: 'Seja direto e específico em seu pedido.',
    correta: 'a'
  },
  {
    id: '7',
    pergunta: 'Por que é importante mostrar vulnerabilidade ao pedir ajuda?',
    opcoes: [
      { valor: 'a', label: 'Porque as pessoas gostam de ver fraqueza' },
      { valor: 'b', label: 'Porque cria conexão humana e torna mais fácil ajudar' },
      { valor: 'c', label: 'Porque mostra que você é honesto' },
      { valor: 'd', label: 'Porque é esperado' }
    ],
    explicacao: 'Mostrar vulnerabilidade cria conexão humana e torna mais fácil para as pessoas se conectarem e quererem ajudar. Mostra que você é real e autêntico.',
    dica: 'Vulnerabilidade cria conexão.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'Como adaptar VFWPA para diferentes situações?',
    opcoes: [
      { valor: 'a', label: 'Use sempre exatamente na mesma ordem' },
      { valor: 'b', label: 'Ajuste a ordem e o foco baseado no contexto e na pessoa' },
      { valor: 'c', label: 'Use apenas partes dele' },
      { valor: 'd', label: 'Não adapte - é perfeito como está' }
    ],
    explicacao: 'Ajuste a ordem e o foco baseado no contexto e na pessoa. A estrutura é um guia, não uma fórmula rígida. Seja flexível e natural.',
    dica: 'Estrutura é guia, não prisão.',
    correta: 'b'
  }
];

const MicroLesson15 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Estratégias de Conexão"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima quinta microlição sobre estratégias de conexão. Agora você domina o mnemônico VFWPA e sabe como estruturar pedidos de reunião eficazes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson15;