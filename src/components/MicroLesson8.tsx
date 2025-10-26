"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Por que opiniões são inúteis na validação de uma ideia?',
    opcoes: [
      { valor: 'a', label: 'As pessoas não sabem o que querem' },
      { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa' },
      { valor: 'c', label: 'As pessoas são egoístas' },
      { valor: 'd', label: 'As opiniões são difíceis de medir' }
    ],
    explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
    dica: 'Quem realmente valida uma ideia de negócio?',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Qual é o problema com depender de opiniões de amigos e familiares?',
    opcoes: [
      { valor: 'a', label: 'Eles não entendem o negócio' },
      { valor: 'b', label: 'Eles tendem a ser gentis e proteger seus sentimentos' },
      { valor: 'c', label: 'Eles não têm experiência no mercado' },
      { valor: 'd', label: 'Eles não têm tempo para dar feedback' }
    ],
    explicacao: 'Amigos e familiares tendem a ser gentis e proteger seus sentimentos. Eles querem te apoiar, não te desencorajar, mesmo que sua ideia não seja boa.',
    dica: 'Pense sobre o que as pessoas querem quando você pergunta sua opinião.',
    correta: 'b'
  },
  {
    id: '3',
    pergunta: 'O que é um "falso positivo" no contexto de validação de ideias?',
    opcoes: [
      { valor: 'a', label: 'Uma ideia que é realmente boa' },
      { valor: 'b', label: 'Feedback positivo que não reflete intenção real de compra' },
      { valor: 'c', label: 'Um cliente que compra muito' },
      { valor: 'd', label: 'Um produto que funciona bem' }
    ],
    explicacao: 'Falsos positivos são feedbacks positivos que não refletem intenção real de compra. As pessoas dizem que gostam da ideia para serem educadas, mas nunca comprariam.',
    dica: 'O que é mais comum: pessoas dizendo que gostam ou realmente comprando?',
    correta: 'b'
  },
  {
    id: '4',
    pergunta: 'Como o mercado realmente valida uma ideia?',
    opcoes: [
      { valor: 'a', label: 'Através de pesquisas e questionários' },
      { valor: 'b', label: 'Através de ações reais como compras, uso e recompra' },
      { valor: 'c', label: 'Através de likes e compartilhamentos' },
      { valor: 'd', label: 'Através de opiniões de experts' }
    ],
    explicacao: 'O mercado valida uma ideia através de ações reais: pessoas pagando dinheiro, usando o produto repetidamente e recomendando para outros.',
    dica: 'Ações falam mais alto que palavras.',
    correta: 'b'
  },
  {
    id: '5',
    pergunta: 'Qual é a diferença entre validação e aprovação social?',
    opcoes: [
      { valor: 'a', label: 'Não há diferença' },
      { valor: 'b', label: 'Validação é sobre ações, aprovação social é sobre palavras' },
      { valor: 'c', label: 'Validação é mais barata' },
      { valor: 'd', label: 'Aprovação social é mais confiável' }
    ],
    explicacao: 'Validação é sobre ações reais (compras, uso), enquanto aprovação social é sobre palavras (elogios, likes). Apenas a validação importa para o negócio.',
    dica: 'O que importa mais: o que as pessoas dizem ou o que fazem?',
    correta: 'b'
  },
  {
    id: '6',
    pergunta: 'Por que é perigoso confiar apenas em feedback positivo?',
    opcoes: [
      { valor: 'a', label: 'Porque as pessoas mentem' },
      { valor: 'b', label: 'Porque feedback positivo não indica necessariamente interesse em comprar' },
      { valor: 'c', label: 'Porque é difícil de obter' },
      { valor: 'd', label: 'Porque é caro' }
    ],
    explicacao: 'Feedback positivo não indica necessariamente interesse em comprar. As pessoas podem gostar da ideia mas nunca se tornar clientes pagantes.',
    dica: 'Gostar é diferente de comprar.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Qual é a melhor maneira de evitar ser enganado por opiniões?',
    opcoes: [
      { valor: 'a', label: 'Pedir opiniões para mais pessoas' },
      { valor: 'b', label: 'Focar em comportamentos passados e ações reais' },
      { valor: 'c', label: 'Ignorar todo feedback' },
      { valor: 'd', label: 'Apenas ouvir experts' }
    ],
    explicacao: 'A melhor maneira de evitar ser enganado por opiniões é focar em comportamentos passados e ações reais. Pergunte sobre o que as pessoas já fizeram, não o que dizem que farão.',
    dica: 'Passado é o melhor preditor do futuro.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'O que significa "o mercado sempre tem razão"?',
    opcoes: [
      { valor: 'a', label: 'Clientes sempre sabem o que querem' },
      { valor: 'b', label: 'Apenas resultados reais de vendas e uso importam' },
      { valor: 'c', label: 'Você deve sempre ouvir o mercado' },
      { valor: 'd', label: 'O mercado nunca erra' }
    ],
    explicacao: '"O mercado sempre tem razão" significa que apenas resultados reais de vendas, uso e retenção importam. Tudo o mais é especulação.',
    dica: 'Resultados reais superam qualquer teoria.',
    correta: 'b'
  }
];

const MicroLesson8 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Opiniões e Mercado"
      perguntas={perguntas}
      mensagemConclusao="Você completou a oitava microlição sobre opiniões e mercado. Agora você sabe por que apenas o mercado pode validar sua ideia e como evitar armadilhas de feedback enganoso."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson8;