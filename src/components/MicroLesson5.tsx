"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o objetivo das conversas frias segundo o livro?',
    opcoes: [
      { valor: 'a', label: 'Vender imediatamente' },
      { valor: 'b', label: 'Parar de tê-las e gerar introduções calorosas' },
      { valor: 'c', label: 'Construir relacionamentos' },
      { valor: 'd', label: 'Validar o mercado' }
    ],
    explicacao: 'O objetivo das conversas frias é parar de tê-las. Use as primeiras para gerar introduções calorosas e criar um efeito bola de neve.',
    dica: 'Pense no longo prazo: como transformar frio em quente?',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Como criar introduções calorosas segundo Rob Fitzpatrick?',
    opcoes: [
      { valor: 'a', label: 'Peça ajuda a contatos, conselheiros, professores ou investidores' },
      { valor: 'b', label: 'Use apenas redes sociais' },
      { valor: 'c', label: 'Fique mandando cold email em massa' },
      { valor: 'd', label: 'Espere as pessoas te encontrarem' }
    ],
    explicacao: 'Crie introduções calorosas: Peça ajuda a contatos, conselheiros da indústria, professores universitários ou investidores.',
    dica: 'Use sua rede existente para abrir portas.',
    correta: 'a'
  },
  {
    id: '3',
    pergunta: 'Qual é a melhor abordagem para uma conversa fria inicial?',
    opcoes: [
      { valor: 'a', label: 'Vender imediatamente' },
      { valor: 'b', label: 'Focar em aprender e pedir ajuda, não vender' },
      { valor: 'c', label: 'Falar sobre seu produto' },
      { valor: 'd', label: 'Pedir dinheiro' }
    ],
    explicacao: 'Foque em aprender e pedir ajuda, não vender. As pessoas são mais propensas a ajudar do que a serem vendidas para.',
    dica: 'Ajuda primeiro, vendas depois.',
    correta: 'b'
  },
  {
    id: '4',
    pergunta: 'Como transformar uma conversa fria em quente?',
    opcoes: [
      { valor: 'a', label: 'Falando sobre seu produto' },
      { valor: 'b', label: 'Fazendo perguntas boas e mostrando genuíno interesse nelas' },
      { valor: 'c', label: 'Sendo muito persistente' },
      { valor: 'd', label: 'Oferecendo descontos' }
    ],
    explicacao: 'Faça perguntas boas e mostre genuíno interesse nas respostas. Isso cria conexão e transforma uma interação fria em uma conversa valiosa.',
    dica: 'Interesse genuíno cria conexão.',
    correta: 'b'
  },
  {
    id: '5',
    pergunta: 'Qual é o erro comum em conversas frias que o livro destaca?',
    opcoes: [
      { valor: 'a', label: 'Ser muito curto' },
      { valor: 'b', label: 'Falar demais sobre seu produto ou ideia' },
      { valor: 'c', label: 'Fazer muitas perguntas' },
      { valor: 'd', label: 'Ser muito específico' }
    ],
    explicacao: 'O erro comum é falar demais sobre seu produto ou ideia. Foque em ouvir e aprender sobre eles, não em apresentar sua solução.',
    dica: 'Ouça mais, fale menos.',
    correta: 'b'
  },
  {
    id: '6',
    pergunta: 'Como preparar para uma conversa fria segundo o livro?',
    opcoes: [
      { valor: 'a', label: 'Pratique seu pitch de vendas' },
      { valor: 'b', label: 'Pesquise a pessoa e prepare perguntas específicas sobre eles' },
      { valor: 'c', label: 'Prepare apresentações' },
      { valor: 'd', label: 'Memorize estatísticas do mercado' }
    ],
    explicacao: 'Pesquise a pessoa e prepare perguntas específicas sobre eles. Mostrar que você fez lição de casa demonstra respeito e aumenta chances de sucesso.',
    dica: 'Preparação mostra respeito.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Como manter relacionamentos após uma conversa fria?',
    opcoes: [
      { valor: 'a', label: 'Mandar emails de vendas regularmente' },
      { valor: 'b', label: 'Agradecer, compartilhar resultados e manter contato com valor' },
      { valor: 'c', label: 'Esperar eles entrarem em contato' },
      { valor: 'd', label: 'Adicionar no LinkedIn e esquecer' }
    ],
    explicacao: 'Agradeça, compartilhe resultados e mantenha contato com valor. Relacionamentos são construídos com tempo e troca de valor.',
    dica: 'Relacionamentos precisam de manutenção.',
    correta: 'b'
  }
];

const MicroLesson5 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Encontrando Pessoas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a quinta microlição sobre encontrando pessoas para conversar. Agora você sabe como transformar conversas frias em conexões valiosas e criar um efeito bola de neve de introduções."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson5;