"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é a melhor pergunta para avaliar a seriedade de um problema?',
    opcoes: [
      { valor: 'a', label: 'Quão sério é este problema para você?' },
      { valor: 'b', label: 'O que mais você já tentou?' },
      { valor: 'c', label: 'Você já procurou soluções?' },
      { valor: 'd', label: 'Você está disposto a pagar para resolver isso?' }
    ],
    explicacao: 'Se eles ainda não procuraram maneiras de resolver o problema, não vão procurar (ou comprar) a sua. Pergunte "O que mais você já tentou?" para avaliar o quão sério o problema é.',
    dica: 'Ações passadas indicam seriedade futura.',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Como entender o valor de um problema para um cliente?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Quanto você pagaria por isso?"' },
      { valor: 'b', label: 'Perguntar "Como você está lidando com isso agora?"' },
      { valor: 'c', label: 'Perguntar "Isso é importante para você?"' },
      { valor: 'd', label: 'Perguntar "Você já gastou dinheiro para resolver isso?"' }
    ],
    explicacao: 'Embora seja raro alguém dizer precisamente o que vai pagar, muitas vezes eles mostram o quanto vale para eles. Pergunte "Como você está lidando com isso agora?" para entender os custos atuais (em tempo e dinheiro), o que fornece uma âncora de preço.',
    dica: 'Custos atuais revelam valor futuro.',
    correta: 'b'
  }
];

const MicroLesson12 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Seriedade dos Problemas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima segunda microlição sobre seriedade dos problemas. Agora você sabe avaliar se os problemas são sérios o suficiente para gerar vendas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson12;