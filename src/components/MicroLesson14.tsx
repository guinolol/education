"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o objetivo das conversas frias?',
    opcoes: [
      { valor: 'a', label: 'Vender imediatamente' },
      { valor: 'b', label: 'Parar de tê-las e gerar introduções calorosas' },
      { valor: 'c', label: 'Construir relacionamentos' },
      { valor: 'd', label: 'Validar o mercado' }
    ],
    explicacao: 'O objetivo das conversas frias é parar de tê-las. Use as primeiras para gerar introduções calorosase criar um efeito bola de neve.',
    dica: 'Pense no longo prazo: como transformar frio em quente?',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Como criar introduções calorosas?',
    opcoes: [
      { valor: 'a', label: 'Pedir ajuda a contatos, conselheiros, professores ou investidores' },
      { valor: 'b', label: 'Usar apenas redes sociais' },
      { valor: 'c', label: 'Fazer cold calling' },
      { valor: 'd', label: 'Esperar que as pessoas te encontrem' }
    ],
    explicacao: 'Crie introduções calorosas: Peça ajuda a contatos, conselheiros da indústria, professores universitários ou investidores.',
    dica: 'Use sua rede existente para abrir portas.',
    correta: 'a'
  }
];

const MicroLesson14 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Conversas Frias"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima quarta microlição sobre conversas frias. Agora você sabe como parar de tê-las e gerar introduções calorosas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson14;