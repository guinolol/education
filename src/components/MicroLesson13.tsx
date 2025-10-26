"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como obter ajuda valiosa de clientes?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Você pode me ajudar?"' },
      { valor: 'b', label: 'Perguntar "Com quem mais eu deveria conversar?"' },
      { valor: 'c', label: 'Perguntar "Há mais alguma coisa que eu deveria ter perguntado?"' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'As pessoas querem te ajudar, mas raramente o farão a menos que você lhes dê uma desculpa para isso. Perguntas como "Com quem mais eu deveria conversar?" e "Há mais alguma coisa que eu deveria ter perguntado?" abrem a porta para ajuda e insights valiosos.',
    dica: 'Dê às pessoas uma desculpa para te ajudarem.',
    correta: 'd',
    exemploLivro: 'Final da conversa: "Há mais alguma coisa que eu deveria ter perguntado? Alguém mais que eu deveria conversar sobre isso?"'
  },
  {
    id: '2',
    pergunta: 'Por que é importante pedir introduções?',
    opcoes: [
      { valor: 'a', label: 'Para aumentar sua rede de contatos' },
      { valor: 'b', label: 'Para encontrar mais clientes potenciais' },
      { valor: 'c', label: 'Para criar um efeito bola de neve de conversas' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'Pedir introduções é crucial para criar um efeito bola de neve de conversas. Cada conversa pode levar a mais conversas, expandindo exponencialmente sua rede de contatos e clientes potenciais.',
    dica: 'Introduções são a chave para escalar suas conversas.',
    correta: 'd',
    exemploLivro: 'Cada pessoa que você conversa pode te conectar com 2-3 pessoas melhores. Em 3-4 saltos, você chega nos decisores reais.'
  },
  {
    id: '3',
    pergunta: 'Qual é a melhor maneira de pedir introduções?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Você conhece alguém?"' },
      { valor: 'b', label: 'Ser específico sobre quem você quer conhecer e por quê' },
      { valor: 'c', label: 'Pedir para ser apresentado a qualquer pessoa' },
      { valor: 'd', label: 'Não pedir - espere oferecerem' }
    ],
    explicacao: 'Seja específico sobre quem você quer conhecer e por quê. Isso torna mais fácil para as pessoas te ajudarem e resulta em introduções mais valiosas.',
    dica: 'Especificidade gera melhores resultados.',
    correta: 'b',
    exemploLivro: 'Em vez de "Você conhece alguém?", pergunte "Você conhece alguém que gerencia equipes remotas de mais de 50 pessoas? Estou tentando entender como eles lidam com comunicação."'
  },
  {
    id: '4',
    pergunta: 'O que fazer quando alguém oferece ajuda?',
    opcoes: [
      { valor: 'a', label: 'Recuse educadamente' },
      { valor: 'b', label: 'Aceite e seja específico sobre como podem ajudar' },
      { valor: 'c', label: 'Diga que não precisa de ajuda' },
      { valor: 'd', label: 'Aceite genericamente' }
    ],
    explicacao: 'Quando alguém oferece ajuda, aceite e seja específico sobre como podem ajudar. Isso valoriza a oferta e garante ajuda real.',
    dica: 'Seja grato e específico.',
    correta: 'b',
    exemploLivro: 'Quando alguém diz "Posso te ajudar de alguma forma?", responda "Sim! Você conhece alguém que [descrição específica] que eu poderia conversar?"'
  },
  {
    id: '5',
    pergunta: 'Como manter o efeito bola de neve de introduções?',
    opcoes: [
      { valor: 'a', label: 'Agradeça e pare por aí' },
      { valor: 'b', label: 'Sempre peça mais introduções após cada conversa' },
      { valor: 'c', label: 'Espere um mês antes de pedir mais' },
      { valor: 'd', label: 'Apenas peça uma vez' }
    ],
    explicacao: 'Sempre peça mais introduções após cada conversa. Isso mantém o efeito bola de neve crescendo e expandindo sua rede continuamente.',
    dica: 'Mantenha o momentum.',
    correta: 'b',
    exemploLivro: 'Sempre termine com: "Há mais alguém que eu deveria conversar sobre isso? Alguém que entende melhor esse problema?"'
  },
  {
    id: '6',
    pergunta: 'Por que "Há mais alguma coisa que eu deveria ter perguntado?" é poderosa?',
    opcoes: [
      { valor: 'a', label: 'Porque é educado' },
      { valor: 'b', label: 'Porque revela insights que você não sabia que deveria buscar' },
      { valor: 'c', label: 'Porque encerra a conversa bem' },
      { valor: 'd', label: 'Porque é fácil de responder' }
    ],
    explicacao: 'Esta pergunta revela insights que você não sabia que deveria buscar. As pessoas frequentemente têm informações valiosas que não compartilharam porque não foram perguntadas.',
    dica: 'Perguntas abertas revelam o desconhecido.',
    correta: 'b',
    exemploLivro: 'Muitas vezes a pessoa diz "Boa pergunta! Você deveria falar com o João, ele lidou com isso no ano passado e descobriu coisas incríveis."'
  },
  {
    id: '7',
    pergunta: 'Como agradecer por ajuda recebida?',
    opcoes: [
      { valor: 'a', label: 'Apenas diga obrigado' },
      { valor: 'b', label: 'Agradeça especificamente e atualize sobre resultados' },
      { valor: 'c', label: 'Não agradeça - é esperado' },
      { valor: 'd', label: 'Agradeça genericamente' }
    ],
    explicacao: 'Agradeça especificamente e atualize sobre resultados. Isso mostra que você valoriza a ajuda e cria um ciclo positivo de mais ajuda no futuro.',
    dica: 'Agradecimento específico cria mais ajuda.',
    correta: 'b',
    exemploLivro: 'Envie um email: "Oi João, consegui falar com a Maria que você me indicou. Descobri que [insight específico]. Muito obrigado pela conexão!"'
  },
  {
    id: '8',
    pergunta: 'Qual é o erro comum ao pedir ajuda?',
    opcoes: [
      { valor: 'a', label: 'Ser muito específico' },
      { valor: 'b', label: 'Ser vago sobre o que você precisa' },
      { valor: 'c', label: 'Agradecer demais' },
      { valor: 'd', label: 'Ser muito educado' }
    ],
    explicacao: 'Ser vago sobre o que você precisa é o erro comum. As pessoas querem te ajudar, mas precisam saber exatamente como podem ser úteis.',
    dica: 'Especificidade é crucial.',
    correta: 'b',
    exemploLivro: 'Ruim: "Preciso de ajuda com minha startup." Bom: "Estou tentando entender como gerentes de equipes remotas lidam com fusos horários. Você conhece alguém que gerencia equipes globais?"'
  }
];

const MicroLesson13 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Ajuda Valiosa"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima terceira microlição sobre ajuda valiosa. Agora você sabe como obter ajuda e insights valiosos dos próprios clientes e criar um efeito bola de neve de introduções."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson13;