"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    pergunta: 'Como estruturar um pedido de ajuda eficaz?',
    opcoes: [
      { valor: 'a', label: 'Seja vago e deixe eles adivinharem' },
      { valor: 'b', label: 'Seja específico sobre o que você precisa e por quê' },
      { valor: 'c', label: 'Peça tudo de uma vez' },
      { valor: 'd', label: 'Não peça - espere oferecerem' }
    ],
    explicacao: 'Seja específico sobre o que você precisa e por quê. Isso torna mais fácil para as pessoas te ajudarem e aumenta as chancesde receber ajuda útil.',
    dica: 'Especificidade gera ajuda.',
    correta: 'b'
  },
  {
    id: '4',
    pergunta: 'Por que é importante contextualizar seu estágio ao pedir ajuda?',
    opcoes: [
      { valor: 'a', label: 'Porque as pessoas gostam de histórias' },
      { valor: 'b', label: 'Porque ajuda as pessoas a entender como melhor te ajudar' },
      { valor: 'c', label: 'Porque mostra que você é transparente' },
      { valor: 'd', label: 'Porque é esperado' }
    ],
    explicacao: 'Contextualizar seu estágio ajuda as pessoas a entender como melhor te ajudar. Elas podem calibrar o tipo e nível de ajuda baseado em onde você está.',
    dica: 'Contexto cria ajuda melhor.',
    correta: 'b'
  },
  {
    id: '5',
    pergunta: 'O que fazer se a pessoa não puder te ajudar diretamente?',
    opcoes: [
      { valor: 'a', label: 'Aceite e pare por aí' },
      { valor: 'b', label: 'Pergunte se conhece alguém que possa te ajudar' },
      { valor: 'c', label: 'Insista até conseguir' },
      { valor: 'd', label: 'Fique chateado' }
    ],
    explicacao: 'Pergunte se conhecem alguém que possa te ajudar. Isso mantém o efeito bola de neve crescendo e pode levar a ajuda indireta valiosa.',
    dica: 'Ajuda indireta é melhor que nenhuma ajuda.',
    correta: 'b'
  },
  {
    id: '6',
    pergunta: 'Como mostrar que você valoriza a ajuda de alguém?',
    opcoes: [
      { valor: 'a', label: 'Agradeça genericamente' },
      { valor: 'b', label: 'Explique especificamente por que a ajuda deles é valiosa e única' },
      { valor: 'c', label: 'Ofereça pagar' },
      { valor: 'd', label: 'Prometa retribuir' }
    ],
    explicacao: 'Explique especificamente por que a ajuda deles é valiosa e única. Isso mostra que você reconhece e aprecia o valor específico que eles trazem.',
    dica: 'Valor específico cria apreciação real.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Qual é o erro comum ao estruturar pedidos de ajuda?',
    opcoes: [
      { valor: 'a', label: 'Ser muito específico' },
      { valor: 'b', label: 'Ser vago sobre o que você precisa' },
      { valor: 'c', label: 'Ser muito educado' },
      { valor: 'd', label: 'Agradecer demais' }
    ],
    explicacao: 'Ser vago sobre o que você precisa é o erro comum. As pessoas querem ajudar, mas precisam saber exatamente como podem ser úteis.',
    dica: 'Especificidade é chave.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'Como seguir após receber ajuda?',
    opcoes: [
      { valor: 'a', label: 'Esqueça e siga em frente' },
      { valor: 'b', label: 'Agradeça, compartilhe resultados e mantenha contato' },
      { valor: 'c', label: 'Peça mais ajuda imediatamente' },
      { valor: 'd', label: 'Apenas agradeça uma vez' }
    ],
    explicacao: 'Agradeça, compartilhe resultados e mantenha contato. Isso constrói relacionamentos duradouros e pode levar a mais ajuda no futuro.',
    dica: 'Relacionamentos são construídos com tempo.',
    correta: 'b'
  }
];

const MicroLesson16 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Estrutura do Pedido"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima sexta microlição sobre estrutura do pedido. Agora você domina como estruturar pedidos de ajuda eficazes usando o mnemônico VFWPA."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson16;