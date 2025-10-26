"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como distinguir problemas que as pessoas pagarão para resolver de meras inconveniências?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Quais são as implicações disso?"' },
      { valor: 'b', label: 'Perguntar "Quanto isso te custa?"' },
      { valor: 'c', label: 'Perguntar "Isso é importante para você?"' },
      { valor: 'd', label: 'Perguntar "Você já tentou resolver isso?"' }
    ],
    explicacao: 'Alguns problemas, na verdade, não importam. Usar perguntas como "Quais são as implicações disso?" ajuda a distinguir problemas que as pessoas pagarão para resolver de meras inconveniências.',
    dica: 'Como transformar um problema vago em algo concreto e urgente?',
    correta: 'a'
  },
  {
    id: '2',
    pergunta: 'Por que é importante observar alguém realizando uma tarefa?',
    opcoes: [
      { valor: 'a', label: 'Para aprender a fazer a tarefa' },
      { valor: 'b', label: 'Para mostrar que você é um bom observador' },
      { valor: 'c', label: 'Para ver onde os problemas e ineficiências realmente estão' },
      { valor: 'd', label: 'Para entender o fluxo de trabalho' }
    ],
    explicacao: 'Observar alguém realizando uma tarefa mostrará onde os problemas e ineficiências realmente estão, não onde o cliente pensa que eles estão.',
    dica: 'Ações falam mais alto que palavras sobre problemas reais.',
    correta: 'c'
  }
];

const MicroLesson11 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Distinguindo Problemas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima primeira microlição sobre distinguir problemas. Agora você sabe identificar problemas que as pessoas realmente pagarão para resolver."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson11;