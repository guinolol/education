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
    correta: 'a',
    exemploLivro: 'Email: "Vision: Estou construindo X para tornar Y melhor. Framing: Estou no estágio de pesquisa. Weakness: Preciso entender Z. Pedestal: Você é especialista em Z. Ask: Posso te ligar por 15 min?"'
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
    correta: 'a',
    exemploLivro: '"Estou trabalhando para tornar mais fácil para pequenas empresas gerenciarem suas finanças sem precisar de contador."'
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
    correta: 'a',
    exemploLivro: '"Estou no estágio de pesquisa, tentando entender quais são os maiores desafios que gerentes de equipe remota enfrentam com comunicação."'
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
    correta: 'a',
    exemploLivro: '"Estou particularmente perdido em entender como grandes equipes lidam com fusos horários diferentes. Não consigo encontrar bons dados sobre isso."'
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
    correta: 'a',
    exemploLivro: '"Vi que você gerencia uma equipe global na Microsoft - exatamente o tipo de experiência que preciso entender melhor."'
  },
  {
    id: '6',
    pergunta: 'O que é "Ask" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Peça ajuda de forma clara e específica' },
      { valor: 'b', label: 'Pergunte sobre o problema' },
      { valor: 'c', label: 'Pergunte sobre a solução' },
      { valor: 'd', label: 'Pergunte sobre o mercado' }
    ],
    explicacao: 'Ask: Peça ajuda de forma clara e específica. Seja direto sobre o que você precisa e por que.',
    dica: 'Seja direto e específico em seu pedido.',
    correta: 'a',
    exemploLivro: '"Posso te ligar por 15 minutos na próxima semana para perguntar sobre 3 coisas específicas sobre como sua equipe lida com comunicação assíncrona?"'
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
    correta: 'b',
    exemploLivro: '"Estou particularmente perdido em..." é muito mais efetivo que "Estou construendo uma solução revolucionária..."'
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
    correta: 'b',
    exemploLivro: 'Email completo: "Vision: Estou trabalhando emX. Framing: Estou no estágio de pesquisa. Weakness: Perdido sobre Y. Pedestal: Você é especialista. Ask: Posso te ligar 15min?"'
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