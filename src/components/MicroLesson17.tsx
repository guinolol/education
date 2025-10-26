"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'O que é "Pedestal" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa' },
      { valor: 'b', label: 'Por que você é importante' },
      { valor: 'c', label: 'Por que o problema é importante' },
      { valor: 'd', label: 'Por que a solução é importante' }
    ],
    explicacao: 'Pedestal: Explique por que a ajuda deles é particularmente valiosa. Isso flata a pessoa e mostra que você valoriza sua expertise.',
    dica: 'Faça a pessoa se sentir especial e útil.',
    correta: 'a',
    exemploLivro: '"Vi que você gerencia uma equipe global na Microsoft - exatamente o tipo de experiência que preciso entender melhor."'
  },
  {
    id: '2',
    pergunta: 'O que é "Ask" no mnemônico VFWPA?',
    opcoes: [
      { valor: 'a', label: 'Peça ajuda de forma clara' },
      { valor: 'b', label: 'Pergunte sobre o problema' },
      { valor: 'c', label: 'Pergunte sobre a solução' },
      { valor: 'd', label: 'Pergunte sobre o mercado' }
    ],
    explicacao: 'Ask: Peça ajuda de forma clara. Seja específico sobre o que você precisa.',
    dica: 'Seja direto e específico em seu pedido.',
    correta: 'a',
    exemploLivro: '"Posso te ligar por 15 minutos na próxima semana para perguntar sobre 3 coisas específicas sobre como sua equipe lida com comunicação assíncrona?"'
  },
  {
    id: '3',
    pergunta: 'Como fazer um pedido claro e eficaz?',
    opcoes: [
      { valor: 'a', label: 'Seja vago para dar liberdade' },
      { valor: 'b', label: 'Seja específico sobre o que, por que e até quando' },
      { valor: 'c', label: 'Tornar o mais grande possível' },
      { valor: 'd', label: 'Não seja muito direto' }
    ],
    explicacao: 'Seja específico sobre o que você precisa, por que precisa e até quando. Isso torna mais fácil para as pessoas te ajudarem e aumenta as chances de sucesso.',
    dica: 'Clareza gera ação.',
    correta: 'b',
    exemploLivro: '"Posso te ligar por 15 minutos na terça ou quarta da próxima semana para te fazer 3 perguntas específicas sobre como você gerencia fusos horários?"'
  },
  {
    id: '4',
    pergunta: 'Por que é importante explicar por que a ajuda de alguém é única?',
    opcoes: [
      { valor: 'a', label: 'Para flatar a pessoa' },
      { valor: 'b', label: 'Para mostrar que você reconhece o valor específico que eles trazem' },
      { valor: 'c', label: 'Para manipular' },
      { valor: 'd', label: 'Porque é esperado' }
    ],
    explicacao: 'Mostrar que você reconhece o valor específico que eles trazem demonstra que não é um pedido genérico e que você valoriza expertise única deles.',
    dica: 'Valor específico cria conexão real.',
    correta: 'b',
    exemploLivro: '"Você é especialmente qualificado para me ajudar porque gerencia a maior equipe remota que já vi - exatamente o que preciso entender."'
  },
  {
    id: '5',
    pergunta: 'Como lidar com pedidos de ajuda recusados?',
    opcoes: [
      { valor: 'a', label: 'Insista até conseguir' },
      { valor: 'b', label: 'Aceite graciosamente e pergunte por referências' },
      { valor: 'c', label: 'Fique chateado' },
      { valor: 'd', label: 'Pare de falar com a pessoa' }
    ],
    explicacao: 'Aceite graciosamente e pergunte por referências. Uma recusa direta pode ainda levar a ajuda indireta através de introduções.',
    dica: 'Graciosidade mantém portas abertas.',
    correta: 'b',
    exemploLivro: '"Entendo perfeitamente! Você conhece alguém que tenha lidado com esse desafio que eu poderia conversar?"'
  },
  {
    id: '6',
    pergunta: 'Qual é o erro comum ao fazer o pedido final?',
    opcoes: [
      { valor: 'a', label: 'Ser muito claro' },
      { valor: 'b', label: 'Ser vago sobre o que precisa' },
      { valor: 'c', label: 'Agradecer' },
      { valor: 'd', label: 'Ser específico' }
    ],
    explicacao: 'Ser vago sobre o que precisa é o erro comum. Pessoas ocupadas precisam de clareza para poder ajudar eficientemente.',
    dica: 'Vagueza mata ajuda.',
    correta: 'b',
    exemploLivro: 'Ruim: "Posso te fazer umas perguntas?" Bom: "Posso te ligar por 15 min para te fazer 3 perguntas sobre X na terça ou quarta?"'
  },
  {
    id: '7',
    pergunta: 'Como tornar seu pedido mais fácil de aceitar?',
    opcoes: [
      { valor: 'a', label: 'Tornar o mais grande possível' },
      { valor: 'b', label: 'Quebrar em partes menores e gerenciáveis' },
      { valor: 'c', label: 'Adicionar complexidade' },
      { valor: 'd', label: 'Não dar opções' }
    ],
    explicacao: 'Quebre em partes menores e gerenciáveis. Isso reduz a barreira para ajudar e aumenta as chances de as pessoas dizerem sim.',
    dica: 'Menor é mais fácil.',
    correta: 'b',
    exemploLivro: '"15 minutos para 3 perguntas" é melhor que "Uma hora para conversar sobre várias coisas"'
  },
  {
    id: '8',
    pergunta: 'O que fazer após fazer um pedido?',
    opcoes: [
      { valor: 'a', label: 'Espere' },
      { valor: 'b', label: 'Siga com gratidão e mantenha contato sobre progresso' },
      { valor: 'c', label: 'Esqueça e siga em frente' },
      { valor: 'd', label: 'Peça mais' }
    ],
    explicacao: 'Siga com gratidão e mantenha contato sobre progresso. Isso mostra que você valoriza a ajuda e constrói relacionamentos para o futuro.',
    dica: 'Seguimento constrói relacionamentos.',
    correta: 'b',
    exemploLivro: 'Email: "Oi Ana, consegui falar com o João que você me indicou. Descobri que [insight específico]. Muito obrigado pela conexão!"'
  }
];

const MicroLesson17 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Finalizando o Pedido"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima sétima microlição sobre finalização do pedido. Agora você domina como fazer pedidos claros e eficazes que aumentam as chances de receber ajuda valiosa."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson17;