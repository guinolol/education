"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como transformar conversas frias em quentes?',
    opcoes: [
      { valor: 'a', label: 'Use as primeiras para gerar introduções e criar efeito bola de neve' },
      { valor: 'b', label: 'Use apenas cold calling' },
      { valor: 'c', label: 'Espere as pessoas te encontrarem' },
      { valor: 'd', label: 'Use apenas anúncios' }
    ],
    explicacao: 'Use as primeiras conversas frias para gerar introduções calorosas e criar um efeito bola de neve. Cada conversa pode levar a muitas outras.',
    dica: 'Pense no longo prazo: transforme frio em quente.',
    correta: 'a'
  },
  {
    id: '2',
    pergunta: 'Qual é o objetivo final das estratégias de conexão?',
    opcoes: [
      { valor: 'a', label: 'Parar de ter conversas frias' },
      { valor: 'b', label: 'Vender imediatamente' },
      { valor: 'c', label: 'Ter muitos clientes' },
      { valor: 'd', label: 'Ser famoso' }
    ],
    explicacao: 'O objetivo final é parar de ter conversas frias. Crie um sistema onde as pessoas te procuram ou são apresentadas por alguém de confiança.',
    dica: 'Quente é melhor que frio.',
    correta: 'a'
  },
  {
    id: '3',
    pergunta: 'Como acelerar o efeito bola de neve de introduções?',
    opcoes: [
      { valor: 'a', label: 'Peça mais introduções de cada pessoa' },
      { valor: 'b', label: 'Crie valor em cada interação para que as pessoas queiram te conectar com outros' },
      { valor: 'c', label: 'Foque em quantidade sobre qualidade' },
      { valor: 'd', label: 'Use apenas email' }
    ],
    explicacao: 'Crie valor em cada interação para que as pessoas queiram te conectar com outros. Quando as pessoas veem valor, naturalmente querem compartilhar com sua rede.',
    dica: 'Valor cria momentum.',
    correta: 'b'
  },
  {
    id: '4',
    pergunta: 'Por que o efeito bola de neve é poderoso?',
    opcoes: [
      { valor: 'a', label: 'Porque é rápido' },
      { valor: 'b', label: 'Porque cresce exponencialmente - cada nova conexão pode gerar múltiplas introduções' },
      { valor: 'c', label: 'Porque é fácil' },
      { valor: 'd', label: 'Porque não requer esforço' }
    ],
    explicacao: 'O efeito bola de neve é poderoso porque cresce exponencialmente. Cada nova conexão pode gerar múltiplas introduções, criando crescimento acelerado.',
    dica: 'Exponencial > Linear.',
    correta: 'b'
  },
  {
    id: '5',
    pergunta: 'Como manter o momentum do efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Foque apenas em novas conexões' },
      { valor: 'b', label: 'Agradeça, retribua e mantenha relacionamentos fortes com quem te conectou' },
      { valor: 'c', label: 'Não olhe para trás' },
      { valor: 'd', label: 'Peça mais do que você dá' }
    ],
    explicacao: 'Agradeça, retribua e mantenha relacionamentos fortes com quem te conectou. Relacionamentos duradouros sustentam o crescimento exponencial.',
    dica: 'Relacionamentos sustentam crescimento.',
    correta: 'b'
  },
  {
    id: '6',
    pergunta: 'Qual é o erro comum ao tentar criar efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Ser muito paciente' },
      { valor: 'b', label: 'Focar apenas em si mesmo e esquecer de retribuir' },
      { valor: 'c', label: 'Ser muito generoso' },
      { valor: 'd', label: 'Agradecer demais' }
    ],
    explicacao: 'Focar apenas em si mesmo e esquecer de retribuir mata o efeito bola de neve. Redes são sobre troca mútua, não apenas receber.',
    dica: 'Redes são bidirecionais.',
    correta: 'b'
  },
  {
    id: '7',
    pergunta: 'Como medir o sucesso do seu efeito bola de neve?',
    opcoes: [
      { valor: 'a', label: 'Número de cartões de visita coletados' },
      { valor: 'b', label: 'Qualidade das introduções e relações construídas, não apenas quantidade' },
      { valor: 'c', label: 'Quantidade de conexões no LinkedIn' },
      { valor: 'd', label: 'Tempo gasto em networking' }
    ],
    explicacao: 'Meça a qualidade das introduções e relações construídas, não apenas quantidade. Introduções valiosas e relacionamentos fortes são melhores que muitas conexões superficiais.',
    dica: 'Qualidade > Quantidade.',
    correta: 'b'
  },
  {
    id: '8',
    pergunta: 'Qual é o mindset correto para escalar conexões?',
    opcoes: [
      { valor: 'a', label: 'O que posso ganhar?' },
      { valor: 'b', label: 'Como posso criar valor para outros para que queiram me conectar com mais pessoas?' },
      { valor: 'c', label: 'Como posso pedir mais?' },
      { valor: 'd', label: 'Como posso fazer isso sozinho?' }
    ],
    explicacao: 'Pense em como criar valor para outros para que queiram te conectar com mais pessoas. Quando você cria valor, as pessoas naturalmente querem compartilhar você com sua rede.',
    dica: 'Valor cria conexões.',
    correta: 'b'
  }
];

const MicroLesson19 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Efeito Bola de Neve"
      perguntas={perguntas}
      mensagemConclusao="Parabéns! Você completou a décima nona e última microlição! Você domina The Mom Test e agora sabe como criar um efeito bola de neve poderoso de conexões valiosas. Continue praticando!"
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson19;