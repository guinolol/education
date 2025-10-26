"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é a pergunta "mágica" que o livro recomenda para começar conversas?',
    opcoes: [
      { valor: 'a', label: 'Você compraria meu produto?' },
      { valor: 'b', label: 'Como você está lidando com isso atualmente?' },
      { valor: 'c', label: 'O que você acha da minha ideia?' },
      { valor: 'd', label: 'Você tem esse problema?' }
    ],
    explicacao: '"Como você está lidando com isso atualmente?" é a pergunta mágica do livro. Ela foca no comportamento real atual, não em intenções futuras.',
    dica: 'Pense em uma pergunta que revela o comportamento real.',
    correta: 'b'
  },
  {
    id: '2',
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
    id: '3',
    pergunta: 'Qual é a regra geral sobre conversas com clientes?',
    opcoes: [
      { valor: 'a', label: 'Quanto mais você fala, melhor está se saindo' },
      { valor: 'b', label: 'Quanto mais você ouve, melhor está se saindo' },
      { valor: 'c', label: 'É preciso apresentar sua ideia para ganhar confiança' },
      { valor: 'd', label: 'É preciso ouvir mais do que falar' }
    ],
    explicacao: 'Regra geral: Quanto mais você fala, pior está se saindo. Você não aprende nada enquanto está falando.',
    dica: 'O foco deve ser em coletar informações, não em transmiti-las.',
    correta: 'b'
  },
  {
    id: '4',
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
    id: '5',
    pergunta: 'O que é "fluff" e como lidar com isso?',
    opcoes: [
      { valor: 'a', label: 'Informações vagas que devem ser ignoradas' },
      { valor: 'b', label: 'Elogios que devem ser ignorados' },
      { valor: 'c', label: 'Ideias que devem ser implementadas' },
      { valor: 'd', label: 'Informações vagas que devem ser ancoradas em exemplos específicos' }
    ],
    explicacao: '"Fluff" vem em três formas: alegações genéricas, promessas futuras e possibilidades hipotéticas. Ancore essas declarações vagas em exemplos específicos do passado.',
    dica: 'Como transformar "eu geralmente" em algo concreto?',
    correta: 'd'
  },
  {
    id: '6',
    pergunta: 'Como evitar pedidos de funcionalidades?',
    opcoes: [
      { valor: 'a', label: 'Ignorar os clientes' },
      { valor: 'b', label: 'Usar perguntas de aprofundamento para encontrar a causa raiz' },
      { valor: 'c', label: 'Oferecer mais opções' },
      { valor: 'd', label: 'Focar em melhorar a interface' }
    ],
    explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Use perguntas de aprofundamento para encontrar a causa raiz.',
    dica: 'Você é o especialista em soluções, eles são especialistas em problemas.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Qual é a regra geral sobre busca de aprovação?',
    opcoes: [
      { valor: 'a', label: 'É importante buscar aprovação constante' },
      { valor: 'b', label: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos' },
      { valor: 'c', label: 'É preciso sempre apresentar sua ideia' },
      { valor: 'd', label: 'É melhor evitar conversas com clientes' }
    ],
    explicacao: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos. Evite "pescar elogios" ou expor seu ego.',
    dica: 'As pessoas tendem a ser gentis, mesmo quando não estão interessadas.',
    correta: 'b'
  }
];

const MicroLesson7 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Conversas Iniciais com Clientes"
      perguntas={perguntas}
      mensagemConclusao="Você completou a sétima microlição sobre perguntas eficazes. Agora você domina a pergunta mágica e sabe como evitar armadilhas comuns."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson7;