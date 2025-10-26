"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
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
    id: '2',
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
  }
];

const MicroLesson17 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Finalizando o Pedido"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima sétima microlição sobre finalização do pedido. Agora você domina completamente o VFWPA."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson17;