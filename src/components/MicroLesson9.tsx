"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é a melhor abordagem para perguntar sobre o futuro?',
    opcoes: [
      { valor: 'a', label: 'Perguntar se a pessoa compraria algo' },
      { valor: 'b', label: 'Perguntar sobre ações passadas' },
      { valor: 'c', label: 'Perguntar sobre desejos pessoais' },
      { valor: 'd', label: 'Perguntar sobre tendências do mercado' }
    ],
    explicacao: 'Pergunte sobre especificidades do passado, em vez de generalidades ou opiniões sobre o futuro. Ações passadas são fatos; intenções futuras são mentiras otimistas.',
    dica: 'O que é mais confiável: o que alguém fez ou o que diz que fará?',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Por que perguntas sobre o futuro são problemáticas?',
    opcoes: [
      { valor: 'a', label: 'As pessoas não conseguem prever o futuro' },
      { valor: 'b', label: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista' },
      { valor: 'c', label: 'As pessoas mentem sobre o futuro' },
      { valor: 'd', label: 'O futuro é incerto' }
    ],
    explicacao: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista. Perguntas como "Você compraria..." ou "Quanto você pagaria..." convidam a respostas hipotéticas e otimistas que não se traduzem em vendas reais.',
    dica: 'O que é mais confiável: intenções ou ações passadas?',
    correta: 'b'
  }
];

const MicroLesson9 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Perguntas sobre o Futuro"
      perguntas={perguntas}
      mensagemConclusao="Você completou a nona microlição sobre perguntas sobre o futuro. Agora você sabe como evitar armadilhas de intenções otimistas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson9;