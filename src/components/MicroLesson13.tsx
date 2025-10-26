"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como obter ajuda valiosa de clientes?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Você pode me ajudar?"' },
      { valor: 'b', label: 'Perguntar "Com quem mais eu deveria conversar?"' },
      { valor: 'c', label: 'Perguntar "Há mais alguma coisa que eu deveria ter perguntado?"' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'As pessoas querem te ajudar, mas raramente o farão a menos que você lhes dê uma desculpa para isso. Perguntas como "Com quem mais eu deveria conversar?" e "Há mais alguma coisa que eu deveria ter perguntado?" abrem a porta para ajuda e insights valiosos.',
    dica: 'Dê às pessoas uma desculpa para te ajudarem.',
    correta: 'd'
  },
  {
    id: '2',
    pergunta: 'Por que é importante pedir introduções?',
    opcoes: [
      { valor: 'a', label: 'Para aumentar sua rede de contatos' },
      { valor: 'b', label: 'Para encontrar mais clientes potenciais' },
      { valor: 'c', label: 'Para criar um efeito bola de neve de conversas' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'Pedir introduções é crucial para criar um efeito bola de neve de conversas. Cada conversa pode levar a mais conversas, expandindo exponencialmente sua rede de contatos e clientes potenciais.',
    dica: 'Introduções são a chave para escalar suas conversas.',
    correta: 'd'
  }
];

const MicroLesson13 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Ajuda Valiosa"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima terceira microlição sobre ajuda valiosa. Agora você sabe como obter ajuda e insights valiosos dos próprios clientes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson13;