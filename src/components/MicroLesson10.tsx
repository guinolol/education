"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Por que as pessoas sabem quais são seus problemas, mas não sabem como resolvê-los?',
    opcoes: [
      { valor: 'a', label: 'As pessoas não são criativas' },
      { valor: 'b', label: 'Você é o dono da solução, eles são os donos do problema' },
      { valor: 'c', label: 'As pessoas não têm tempo para pensar em soluções' },
      { valor: 'd', label: 'As pessoas não entendem tecnologia' }
    ],
    explicacao: 'As pessoas sabem quais são seus problemas, mas não sabem como resolvê-los. Você é o dono da solução, eles são os donos do problema.',
    dica: 'Pense na divisão de responsabilidades na conversa.',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Qual é a melhor pergunta para entender os objetivos de um cliente?',
    opcoes: [
      { valor: 'a', label: 'Qual seria o seu produto dos sonhos?' },
      { valor: 'b', label: 'Por que você se dá ao trabalho?' },
      { valor: 'c', label: 'O que você gostaria de melhorar?' },
      { valor: 'd', label: 'Quais funcionalidades você gostaria?' }
    ],
    explicacao: 'Você está atirando no escuro até entender os objetivos deles. Perguntas como "Por que você se dá ao trabalho?" ajudam a ir do problema percebido ao problema real, revelando as motivações essenciais.',
    dica: 'Qual pergunta revela a motivação real por trás do trabalho?',
    correta: 'b'
  }
];

const MicroLesson10 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Objetivos dos Clientes"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima microlição sobre objetivos dos clientes. Agora você sabe como descobrir os verdadeiros objetivos por trás dos problemas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson10;