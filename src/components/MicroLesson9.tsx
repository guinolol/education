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
  },
  {
    id: '3',
    pergunta: 'Qual é o problema com a pergunta "Você compraria isso?"',
    opcoes: [
      { valor: 'a', label: 'É muito direta' },
      { valor: 'b', label: 'Convida a uma resposta hipotética e otimista que não reflete ação real' },
      { valor: 'c', label: 'As pessoas não gostam de ser pressionadas' },
      { valor: 'd', label: 'É muito técnica' }
    ],
    explicacao: 'A pergunta "Você compraria isso?" convida a uma resposta hipotética e otimista. As pessoas dizem que sim para serem educadas, mas isso não significa que realmente comprariam.',
    dica: 'Pense no que acontece quando você pergunta "você viria à minha festa?"',
    correta: 'b'
  },
  {
    id: '4',
    pergunta: 'O que é uma "mentira otimista"?',
    opcoes: [
      { valor: 'a', label: 'Uma mente intencional para enganar' },
      { valor: 'b', label: 'Uma promessa futura que as pessoas acreditam no momento mas não cumprirão' },
      { valor: 'c', label: 'Uma mentira sobre o passado' },
      { valor: 'd', label: 'Uma mentira técnica' }
    ],
    explicacao: 'Mentiras otimistas são promessas futuras que as pessoas realmente acreditam no momento, mas não cumprirão. Não é má fé, é otimismo humano natural.',
    dica: 'As pessoas não mentem de propósito, apenas são otimistas.',
    correta: 'b'
  },
  {
    id: '5',
    pergunta: 'Qual é uma alternativa melhor para "Você usaria isso?"',
    opcoes: [
      { valor: 'a', label: 'Você gostaria disso?' },
      { valor: 'b', label: 'Como você está lidando com esse problema atualmente?' },
      { valor: 'c', label: 'Você acha que isso é uma boa ideia?' },
      { valor: 'd', label: 'Você recomendaria isso para amigos?' }
    ],
    explicacao: '"Como você está lidando com esse problema atualmente?" é melhor porque foca no comportamento real atual, não em intenções futuras.',
    dica: 'Foque no presente e passado, não no futuro.',
    correta: 'b'
  },
  {
    id: '6',
    pergunta: 'Por que perguntas sobre o passado são mais confiáveis?',
    opcoes: [
      { valor: 'a', label: 'As pessoas têm melhor memória' },
      { valor: 'b', label: 'Ações passadas são fatos, não intenções' },
      { valor: 'c', label: 'O passado é mais interessante' },
      { valor: 'd', label: 'As pessoas gostam de falar sobre o passado' }
    ],
    explicacao: 'Ações passadas são fatos que realmente aconteceram, não intenções ou promessas. Você pode verificar e aprender com comportamentos reais.',
    dica: 'Fatos superam intenções.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Como transformar uma pergunta sobre o futuro em uma sobre o passado?',
    opcoes: [
      { valor: 'a', label: 'É impossível' },
      { valor: 'b', label: 'Pergunte sobre ações específicas que já tomaram' },
      { valor: 'c', label: 'Pergunte sobre planos detalhados' },
      { valor: 'd', label: 'Pergunte sobre previsões' }
    ],
    explicacao: 'Transforme perguntas futuras em passadas perguntando sobre ações específicas que as pessoas já tomaram. Ex: em vez de "Você pagaria?", pergunte "Quanto você pagou para resolver isso antes?"',
    dica: 'Refraseie para o passado.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'Qual é o risco de fazer muitas perguntas sobre o futuro?',
    opcoes: [
      { valor: 'a', label: 'As pessoas ficam confusas' },
      { valor: 'b', label: 'Você coleta dados que não refletem comportamento real' },
      { valor: 'c', label: 'As pessoas ficam irritadas' },
      { valor: 'd', label: 'É muito técnico' }
    ],
    explicacao: 'Perguntas sobre o futuro coletam dados que não refletem comportamento real. Você pode tomar decisões erradas baseadas em intenções que nunca se materializarão.',
    dica: 'Dados ruins são piores que nenhum dado.',
    correta: 'b'
  }
];

const MicroLesson9 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Perguntas sobre o Futuro"
      perguntas={perguntas}
      mensagemConclusao="Você completou a nona microlição sobre perguntas sobre o futuro. Agora você sabe como evitar armadilhas de intenções otimistas e focar em comportamentos reais."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson9;