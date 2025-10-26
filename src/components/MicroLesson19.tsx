"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é o objetivo final das estratégias de conexão do livro?',
    opcoes: [
      { valor: 'a', label: 'Ter muitos clientes' },
      { valor: 'b', label: 'Parar de ter conversas frias e criar sistema de introduções' },
      { valor: 'c', label: 'Ser famoso' },
      { valor: 'd', label: 'Vender imediatamente' }
    ],
    explicacao: 'O objetivo final é parar de ter conversas frias. Crie um sistema onde as pessoas te procuram ou são apresentadas por alguém de confiança.',
    dica: 'Quente é melhor que frio no longo prazo.',
    correta: 'b',
    exemploLivro: 'O sistema ideal: você raramente precisa fazer cold outreach porque tem uma rede de introduções que funciona automaticamente.'
  },
  {
    id: '2',
    pergunta: 'Como transformar conversas frias em quentes segundo o livro?',
    opcoes: [
      { valor: 'a', label: 'Use as primeiras para gerar introduções e criar efeito bola de neve' },
      { valor: 'b', label: 'Use apenas cold calling' },
      { valor: 'c', label: 'Espere as pessoas te encontrarem' },
      { valor: 'd', label: 'Use apenas anúncios' }
    ],
    explicacao: 'Use as primeiras conversas frias para gerar introduções calorosas e criar um efeito bola de neve. Cada conversa pode levar a muitas outras.',
    dica: 'Transforme frio em quente com introduções.',
    correta: 'a',
    exemploLivro: 'Cada cold call bem feito gera 2-3 introduções. Em 3 gerações, você tem 8-27 conversas quentes de uma cold call original.'
  },
  {
    id: '3',
    pergunta: 'Por que o efeito bola de neve de introduções é poderoso?',
    opcoes: [
      { valor: 'a', label: 'Porque é rápido' },
      { valor: 'b', label: 'Porque cresce exponencialmente - cada nova conexão pode gerar múltiplas introduções' },
      { valor: 'c', label: 'Porque é fácil' },
      { valor: 'd', label: 'Porque não requer esforço' }
    ],
    explicacao: 'O efeito bola de neve é poderoso porque cresce exponencialmente. Cada nova conexão pode gerar múltiplas introduções, criando crescimento acelerado.',
    dica: 'Exponencial > Linear.',
    correta: 'b',
    exemploLivro: '1 → 3 → 9 → 27 introduções. Cada nível cresce exponencialmente, não linearmente.'
  },
  {
    id: '4',
    pergunta: 'Qual é o erro comum ao tentar criar efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Ser muito paciente' },
      { valor: 'b', label: 'Focar apenas em si mesmo e esquecer de retribuir' },
      { valor: 'c', label: 'Ser muito generoso' },
      { valor: 'd', label: 'Agradecer demais' }
    ],
    explicacao: 'Focar apenas em si mesmo e esquecer de retribuir mata o efeito bola de neve. Redes são sobre troca mútua, não apenas receber.',
    dica: 'Redes são bidirecionais.',
    correta: 'b',
    exemploLivro: 'Se você sempre pede mas nunca retribui ou agradece adequadamente, as pessoas param de te ajudar.'
  },
  {
    id: '5',
    pergunta: 'Como manter o momentum do efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Peça mais introduções de cada pessoa' },
      { valor: 'b', label: 'Agradeça, retribua e mantenha relacionamentos fortes com quem te conectou' },
      { valor: 'c', label: 'Foque apenas em novas conexões' },
      { valor: 'd', label: 'Peça mais do que você dá' }
    ],
    explicacao: 'Agradeça, retribua e mantenha relacionamentos fortes com quem te conectou. Relacionamentos duradouros sustentam o crescimento exponencial.',
    dica: 'Relacionamentos sustentam crescimento.',
    correta: 'b',
    exemploLivro: 'Sempre retribua: compartilhe insights, faça introduções para eles, mantenha contato com valor.'
  },
  {
    id: '6',
    pergunta: 'Como medir sucesso real do seu efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Número de cartões de visita coletados' },
      { valor: 'b', label: 'Qualidade das introduções e relações construídas' },
      { valor: 'c', label: 'Quantidade de conexões no LinkedIn' },
      { valor: 'd', label: 'Tempo gasto em networking' }
    ],
    explicacao: 'Meça a qualidade das introduções e relações construídas, não apenas quantidade. Introduções valiosas são melhores que muitas conexões superficiais.',
    dica: 'Qualidade > Quantidade.',
    correta: 'b',
    exemploLivro: '3 introduções para CEOs que te abrem portas > 30 conexões superficiais no LinkedIn.'
  },
  {
    id: '7',
    pergunta: 'Qual é o mindset correto para escalar conexões segundo o livro?',
    opcoes: [
      { valor: 'a', label: 'O que posso ganhar?' },
      { valor: 'b', label: 'Como posso criar valor para outros para que queiram me conectar?' },
      { valor: 'c', label: 'Como posso pedir mais?' },
      { valor: 'd', label: 'Como posso fazer isso sozinho?' }
    ],
    explicacao: 'Pense em como criar valor para outros para que queiram te conectar com mais pessoas. Valor cria conexões naturais.',
    dica: 'Valor cria conexões.',
    correta: 'b',
    exemploLivro: 'Compartilhe insights valiosos, faça introduções úteis para outros, seja conhecido por ajudar - as pessoas naturalmente querem te conectar.'
  },
  {
    id: '8',
    pergunta: 'Qual é a métrica final de sucesso com The Mom Test?',
    opcoes: [
      { valor: 'a', label: 'Quantidade de conversas' },
      { valor: 'b', label: 'Qualidade das conversas e insights que levam a decisões melhores' },
      { valor: 'c', label: 'Número de ideias validadas' },
      { valor: 'd', label: 'Tempo gasto conversando' }
    ],
    explicacao: 'A métrica final é a qualidade das conversas e insights que levam a decisões melhores. Conversas bem feitas geram dados reais para tomar decisões melhores.',
    dica: 'Qualidade gera melhores decisões.',
    correta: 'b',
    exemploLivro: '5 conversas bem feitas que te mostram que você está no caminho errado > 50 conversas ruins que te dão falsa confiança.'
  }
];

const MicroLesson19 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Domínio do The Mom Test"
      perguntas={perguntas}
      mensagemConclusao="Parabéns! Você completou todas as microlições e dominou The Mom Test! Agora você sabe como fazer perguntas que geram insights reais, evitar dados ruins e criar um sistema de conexões valiosas. Continue praticando!"
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson19;