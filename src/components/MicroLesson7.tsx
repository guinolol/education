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
  },
  {
    id: '3',
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
    id: '4',
    pergunta: 'O que é "fluff" e como lidar com isso?',
    opcoes: [
      { valor: 'a', label: 'Informações vagas que devem ser ancoradas em exemplos específicos' },
      { valor: 'b', label: 'Elogios que devem ser ignorados' },
      { valor: 'c', label: 'Ideias que devem ser implementadas' },
      { valor: 'd', label: 'Dados ruins que devem ser evitados' }
    ],
    explicacao: '"Fluff" vem em três formas: alegações genéricas, promessas futuras e possibilidades hipotéticas. Ancore essas declarações vagas em exemplos específicos do passado.',
    dica: 'Como transformar "eu geralmente" em algo concreto?',
    correta: 'a'
  },
  {
    id: '5',
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
    id: '6',
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
  },
  {
    id: '7',
    pergunta: 'O que é importante em uma conversa?',
    opcoes: [
      { valor: 'a', label: 'Fazer muitas perguntas' },
      { valor: 'b', label: 'Ouvir mais do que falar' },
      { valor: 'c', label: 'Manter o foco na sua ideia' },
      { valor: 'd', label: 'Usar linguagem técnica' }
    ],
    explicacao: 'Você deve ter medo de pelo menos uma das perguntas que está fazendo em cada conversa. Perguntas importantes são aquelas cujas respostas podem mudar completamente ou invalidar seu negócio.',
    dica: 'Perguntas valiosas muitas vezes são desconfortáveis de fazer.',
    correta: 'a'
  },
  {
    id: '8',
    pergunta: 'Qual é a melhor estratégia para encontrar pessoas para conversar?',
    opcoes: [
      { valor: 'a', label: 'Usar ligações frias' },
      { valor: 'b', label: 'Organizar meetups' },
      { valor: 'c', label: 'Criar introduções calorosas' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
    dica: 'Diversas abordagens aumentam suas chances de sucesso.',
    correta: 'd'
  }
];

const MicroLesson7 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Conversas Iniciais com Clientes"
      perguntas={perguntas}
      mensagemConclusao="Você completou a sétima microlição sobre perguntas eficazes. Agora você sabe como fazer perguntas que realmente geram insights valiosos."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson7;