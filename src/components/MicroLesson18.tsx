"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como criar introduções calorosas valiosas?',
    opcoes: [
      { valor: 'a', label: 'Use contatos, conselheiros e investidores' },
      { valor: 'b', label: 'Use apenas redes sociais' },
      { valor: 'c', label: 'Use cold calling' },
      { valor: 'd', label: 'Espere as pessoas te procurarem' }
    ],
    explicacao: 'Crie introduções calorosas usando sua rede de contatos, conselheiros e investidores. Cada pessoa que você conhece pode abrir portas para outras.',
    dica: 'Sua rede é seu ativo mais valioso.',
    correta: 'a',
    exemploLivro: 'Email: "Oi João, estou estudando como gerentes de produto priorizam features. Você conhece algum ex-aluno nosso que eu poderia conversar?"'
  },
  {
    id: '2',
    pergunta: 'Qual é a melhor abordagem para encontrar pessoas para conversar?',
    opcoes: [
      { valor: 'a', label: 'Usar ligações frias' },
      { valor: 'b', label: 'Organizar meetups' },
      { valor: 'c', label: 'Criar introduções calorosas' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
    dica: 'Diversifique suas abordagens para maximizar chances.',
    correta: 'd',
    exemploLivro: 'Trifecta: Cold calls para começar, meetups para atrair, introduções para escalar.'
  },
  {
    id: '3',
    pergunta: 'Por que introduções calorosas são mais eficazes que cold outreach?',
    opcoes: [
      { valor: 'a', label: 'Porque são mais rápidas' },
      { valor: 'b', label: 'Porque vêm com confiança pré-estabelecida e validação social' },
      { valor: 'c', label: 'Porque são mais baratas' },
      { valor: 'd', label: 'Porque são mais fáceis de fazer' }
    ],
    explicacao: 'Introduções calorosas vêm com confiança pré-estabelecida e validação social. A pessoa que faz a introdução está essencialmente vouching por você.',
    dica: 'Confiança é a moeda mais valiosa.',
    correta: 'b',
    exemploLivro: '"João, conheço o Pedro há 5 anos, ele é ótimo em pesquisa de clientes. Pedro, João é ex-Google e gerencia a maior equipe remota que conheço."'
  },
  {
    id: '4',
    pergunta: 'Como pedir introduções de forma eficaz?',
    opcoes: [
      { valor: 'a', label: 'Peça para ser introduzido a qualquer pessoa' },
      { valor: 'b', label: 'Seja específico sobre quem você quer conhecer e por quê' },
      { valor: 'c', label: 'Não peça - espere oferecerem' },
      { valor: 'd', label: 'Peça muitas de uma vez' }
    ],
    explicacao: 'Seja específico sobre quem você quer conhecer e por quê. Isso torna mais fácil para as pessoas te ajudarem e resulta em introduções mais valiosas.',
    dica: 'Especificidade gera melhores resultados.',
    correta: 'b',
    exemploLivro: 'Ruim: "Conhece alguém em vendas?" Bom: "Conhece alguém que gerencia equipes de vendas B2B com +10 pessoas? Estou estudando como eles treinam novos vendedores."'
  },
  {
    id: '5',
    pergunta: 'O que fazer após receber uma introdução?',
    opcoes: [
      { valor: 'a', label: 'Entre em contato imediatamente' },
      { valor: 'b', label: 'Agradeça ao conector, respeite o timing e mantenha ambos informados' },
      { valor: 'c', label: 'Espere uma semana' },
      { valor: 'd', label: 'Apenas agradeça e siga em frente' }
    ],
    explicacao: 'Agradeça ao conector, respeite o timing e mantenha ambos informados. Isso mostra respeito e constrói relacionamentos com todos os envolvidos.',
    dica: 'Respeite a rede.',
    correta: 'b',
    exemploLivro: 'Email: "Oi João, muito obrigado pela conexão com Maria! Vou entrar em contato na próxima semana e te mantenho informado sobre como foi."'
  },
  {
    id: '6',
    pergunta: 'Como manter sua rede de introduções ativa?',
    opcoes: [
      { valor: 'a', label: 'Peça introduções constantemente' },
      { valor: 'b', label: 'Retribua favores, agradeça e mantenha contato com valor' },
      { valor: 'c', label: 'Apenas use quando precisar' },
      { valor: 'd', label: 'Esqueça até precisar novamente' }
    ],
    explicacao: 'Retribua favores, agradeça e mantenha contato com valor. Redes precisam de manutenção e troca mútua para permanecerem fortes.',
    dica: 'Redes precisam de manutenção.',
    correta: 'b',
    exemploLivro: 'Compartilhe insights: "Oi João, lembrei de você quando descobri que 3 gerentes têm o mesmo desafio que você mencionou. Posso compartilhar o que aprendi?"'
  },
  {
    id: '7',
    pergunta: 'Qual é o erro comum ao pedir introduções?',
    opcoes: [
      { valor: 'a', label: 'Ser muito específico' },
      { valor: 'b', label: 'Ser vago sobre quem você quer conhecer' },
      { valor: 'c', label: 'Agradecer demais' },
      { valor: 'd', label: 'Ser muito educado' }
    ],
    explicacao: 'Ser vago sobre quem você quer conhecer torna difícil para as pessoas te ajudarem. Especificidade é crucial para introduções valiosas.',
    dica: 'Especificidade é chave.',
    correta: 'b',
    exemploLivro: 'Ruim: "Conhece alguém em tecnologia?" Bom: "Conhece alguém que lidera transformação digital em empresas tradicionais?"'
  },
  {
    id: '8',
    pergunta: 'Como escalar suas introduções ao longo do tempo?',
    opcoes: [
      { valor: 'a', label: 'Peça mais introduções de cada pessoa' },
      { valor: 'b', label: 'Crie um efeito bola de neve: cada nova conexão pode gerar mais introduções' },
     { valor: 'c', label: 'Foque apenas em poucas pessoas' },
      { valor: 'd', label: 'Espere as pessoas te procurarem' }
    ],
    explicacao: 'Crie um efeito bola de neve: cada nova conexão pode gerar múltiplas introduções. Isso crescimento exponencial em vez de linear.',
    dica: 'Bola de neve cresce exponencialmente.',
    correta: 'b',
    exemploLivro: 'Meta: cada introdução gera 2 novas. Em 5 gerações, você tem 32 conversas de uma única introdução original.'
  }
];

const MicroLesson18 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Introduções Valiosas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima oitava microlição sobre introduções valiosas. Agora você sabe como criar conexões poderosas e escalar sua rede através de introduções estratégicas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson18;