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
  }
];

const MicroLesson16 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Estrutura do Pedido"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima sexta microlição sobre estrutura do pedido. Agora você domina o mnemônico VFWPA."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson16;