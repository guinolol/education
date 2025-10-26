"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o objetivo de uma conversa inicial com o cliente?',
    opcoes: [
      { valor: 'a', label: 'Vender sua ideia' },
      { valor: 'b', label: 'Obter fatos concretos sobre a vida e a visão de mundo do cliente' },
      { valor: 'c', label: 'Construir relacionamentos' },
      { valor: 'd', label: 'Apresentar sua solução' }
    ],
    explicacao: 'O objetivo de uma conversa inicial com o cliente é obter fatos concretos sobre a vida e a visão de mundo dele, que permitam melhorar o negócio.',
    dica: 'Pense sobre o que você realmente precisa saber do cliente.',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Por que opiniões são inúteis?',
    opcoes: [
      { valor: 'a', label: 'As pessoas não sabem o que querem' },
      { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa' },
      { valor: 'c', label: 'As pessoas são egoístas' },
      { valor: 'd', label: 'As opiniões são difíceis de medir' }
    ],
    explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
    dica: 'Quem realmente valida uma ideia de negócio?',
    correta: 'b'
  }
];

const MicroLesson8 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Opiniões e Mercado"
      perguntas={perguntas}
      mensagemConclusao="Você completou a oitava microlição sobre opiniões e mercado. Agora você sabe por que apenas o mercado pode validar sua ideia."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson8;