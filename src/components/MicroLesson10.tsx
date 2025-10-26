"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Por que as pessoas sabem quais são seus problemas, mas não sabem como resolvê-los?',
    opcoes: [
      { valor: 'a', label: 'As pessoas não são criativas' },
      { valor: 'b', label: 'Você é o dono da solução, eles são os donos do problema' },
      { valor: 'c', label: 'As pessoas não têm tempo para pensar em soluções' },
      { valor: 'd', label: 'As pessoas não entendem tecnologia' }
    ],
    explicacao: 'As pessoas sabem quais são seus problemas, mas não sabem como resolvê-los. Você é o dono da solução, eles são os donos do problema.',
    dica: 'Pense na divisão de responsabilidades na conversa.',
    correta: 'b',
    exemploLivro: 'Cliente: "É difícil gerenciar minha equipe remota." Você não pergunta "Como você gostaria de gerenciar?", mas "Como você está gerenciando atualmente? O que está difícil?"'
  },
  {
    id: '2',
    pergunta: 'Qual é a melhor pergunta para entender os objetivos de um cliente?',
    opcoes: [
      { valor: 'a', label: 'Qual seria o seu produto dos sonhos?' },
      { valor: 'b', label: 'Por que você se dá ao trabalho?' },
      { valor: 'c', label: 'O que você gostaria de melhorar?' },
      { valor: 'd', label: 'Quais funcionalidades você gostaria?' }
    ],
    explicacao: 'Você está atirando no escuro até entender os objetivos deles. Perguntas como "Por que você se dá ao trabalho?" ajudam a ir do problema percebido ao problema real, revelando as motivações essenciais.',
    dica: 'Qual pergunta revela a motivação real por trás do trabalho?',
    correta: 'b',
    exemploLivro: '"Por que você se dá ao trabalho de gerenciar uma equipe remota? O que você está tentando alcançar?"'
  },
  {
    id: '3',
    pergunta: 'O que revela mais sobre os objetivos de um cliente?',
    opcoes: [
      { valor: 'a', label: 'O que eles dizem que querem' },
      { valor: 'b', label: 'Por que eles fazem o que fazem' },
      { valor: 'c', label: 'O que eles compram' },
      { valor: 'd', label: 'O que eles planejam' }
    ],
    explicacao: 'O "por que" revela mais que o "o que". Entender a motivação por trás das ações mostra os objetivos reais, não apenas desejos superficiais.',
    dica: 'Foque no motivo, não no que.',
    correta: 'b',
    exemploLivro: 'Cliente compra software de RH. "Por que você está trocando de sistema? O que não está funcionando no atual?"'
  },
  {
    id: '4',
    pergunta: 'Como descobrir o problema real por trás do problema percebido?',
    opcoes: [
      { valor: 'a', label: 'Pergunte "Qual é o seu problema?"' },
      { valor: 'b', label: 'Pergunte "Por que isso é um problema para você?"' },
      { valor: 'c', label: 'Pergunte se eles querem resolver' },
      { valor: 'd', label: 'Pergunte quanto eles pagariam' }
    ],
    explicacao: '"Por que isso é um problema para você?" ajuda a ir do sintoma (problema percebido) para a causa (problema real) e entender a motivação real.',
    dica: 'Cave mais fundo com "por que".',
    correta: 'b',
    exemploLivro: 'Cliente: "Preciso de um app melhor." Você: "Por que você precisa de um app melhor? O que o atual não faz?"'
  },
  {
    id: '5',
    pergunta: 'Por que é importante entender os objetivos do cliente?',
    opcoes: [
      { valor: 'a', label: 'Para fazer um produto melhor' },
      { valor: 'b', label: 'Para garantir que você está resolvendo o problema certo' },
      { valor: 'c', label: 'Para impressionar o cliente' },
      { valor: 'd', label: 'Para vender mais rápido' }
    ],
    explicacao: 'Entender os objetivos garante que você está resolvendo o problema certo, não apenas um sintoma. As pessoas não querem ferramentas, querem resultados.',
    dica: 'Resolva o problema certo, não apenas um problema.',
    correta: 'b',
    exemploLivro: 'Cliente quer "melhor comunicação". Objetivo real: "Não quero perder bons funcionários por falta de engajamento."'
  },
  {
    id: '6',
    pergunta: 'Qual é o erro comum ao tentar entender objetivos?',
    opcoes: [
      { valor: 'a', label: 'Fazer muitas perguntas' },
      { valor: 'b', label: 'Aceitar o primeiro problema mencionado como o real' },
      { valor: 'c', label: 'Ouvir demais' },
      { valor: 'd', label: 'Ser muito específico' }
    ],
    explicacao: 'O erro comum é aceitar o primeiro problema mencionado como o real. Muitas vezes é apenas um sintoma de um problema mais profundo que revela os verdadeiros objetivos.',
    dica: 'Não pare na primeira resposta.',
    correta: 'b',
    exemploLivro: 'Cliente: "Preciso de relatórios melhores." Real: "Meu chefe não entende o valor do meu time e eu preciso provar nosso impacto."'
  },
  {
    id: '7',
    pergunta: 'Como saber se você realmente entendeu os objetivos do cliente?',
    opcoes: [
      { valor: 'a', label: 'Eles dizem que gostam da sua ideia' },
      { valor: 'b', label: 'Você pode prever o que eles fariam em diferentes situações' },
      { valor: 'c', label: 'Eles concordam em comprar' },
      { valor: 'd', label: 'Eles dão muitos detalhes' }
    ],
    explicacao: 'Quando você realmente entende os objetivos, pode prever o que o cliente faria em diferentes situações. Isso mostra compreensão profunda, não superficial.',
    dica: 'Teste sua compreensão com cenários.',
    correta: 'b',
    exemploLivro: 'Se entende que objetivo é "reter talentos", pode prever: "Se eu oferecesse X, eles diriam sim porque ajuda reter a equipe."'
  },
  {
    id: '8',
    pergunta: 'O que fazer quando o cliente não sabe seus próprios objetivos?',
    opcoes: [
      { valor: 'a', label: 'Aceite o que eles dizem' },
      { valor: 'b', label: 'Use perguntas sobre comportamentos passados para revelar padrões' },
      { valor: 'c', label: 'Diga a eles quais são seus objetivos' },
      { valor: 'd', label: 'Pare de fazer perguntas' }
    ],
    explicacao: 'Quando clientes não sabem seus objetivos, use perguntas sobre comportamentos passados para revelar padrões. Ações passadas mostram motivações reais.',
    dica: 'Ações revelam mais que palavras.',
    correta: 'b',
    exemploLivro: '"Me conta sobre a última vez que você tentou resolver isso. O que você fez? Por que escolheu aquele caminho?"'
  }
];

const MicroLesson10 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Objetivos dos Clientes"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima microlição sobre objetivos dos clientes. Agora você sabe como descobrir os verdadeiros objetivos por trás dos problemas e entender a motivação real dos clientes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson10;