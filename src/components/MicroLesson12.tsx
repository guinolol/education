"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Qual é a melhor pergunta para avaliar a seriedade de um problema?',
    opcoes: [
      { valor: 'a', label: 'Quão sério é este problema para você?' },
      { valor: 'b', label: 'O que mais você já tentou?' },
      { valor: 'c', label: 'Você já procurou soluções?' },
      { valor: 'd', label: 'Você está disposto a pagar para resolver isso?' }
    ],
    explicacao: 'Se eles ainda não procuraram maneiras de resolver o problema, não vão procurar (ou comprar) a sua. Pergunte "O que mais você já tentou?" para avaliar o quão sério o problema é.',
    dica: 'Ações passadas indicam seriedade futura.',
    correta: 'b',
    exemploLivro: 'Cliente: "É difícil treinar novos funcionários." Você: "O que mais você já tentou para resolver isso? O que funcionou e o que não funcionou?"'
  },
  {
    id: '2',
    pergunta: 'Como entender o valor de um problema para um cliente?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Quanto você pagaria por isso?"' },
      { valor: 'b', label: 'Perguntar "Como você está lidando com isso agora?"' },
      { valor: 'c', label: 'Perguntar "Isso é importante para você?"' },
      { valor: 'd', label: 'Perguntar "Você já gastou dinheiro para resolver isso?"' }
    ],
    explicacao: 'Embora seja raro alguém dizer precisamente o que vai pagar, muitas vezes eles mostram o quanto vale para eles. Pergunte "Como você está lidando com isso agora?" para entender os custos atuais (em tempo e dinheiro), o que fornece uma âncora de preço.',
    dica: 'Custos atuais revelam valor futuro.',
    correta: 'b',
    exemploLivro: 'Cliente: "É caro treinar novos funcionários." Você: "Como você está lidando com isso agora? Quanto tempo e dinheiro isso custa?"'
  },
  {
    id: '3',
    pergunta: 'O que revela que um problema NÃO é sério?',
    opcoes: [
      { valor: 'a', label: 'As pessoas falam sobre ele frequentemente' },
      { valor: 'b', label: 'As pessoas nunca tomaram ação para resolver' },
      { valor: 'c', label: 'As pessoas parecem irritadas' },
      { valor: 'd', label: 'As pessoas têm opiniões fortes sobre ele' }
    ],
    explicacao: 'Se as pessoas nunca tomaram ação para resolver (buscar soluções, pagar, mudar processos), o problema provavelmente não é sério o suficiente.',
    dica: 'Ações revelam seriedade.',
    correta: 'b',
    exemploLivro: 'Se alguém reclama que "organizar eventos é difícil" mas nunca tentou usar ferramentas de planejamento ou contratar ajuda, provavelmente não é um problema valioso.'
  },
  {
    id: '4',
    pergunta: 'Como testar se um problema é sério o suficiente?',
    opcoes: [
      { valor: 'a', label: 'Pergunte se eles pagariam' },
      { valor: 'b', label: 'Veja se eles já pagaram para resolver algo similar' },
      { valor: 'c', label: 'Pergunte se acham importante' },
      { valor: 'd', label: 'Espere eles oferecerem dinheiro' }
    ],
    explicacao: 'O melhor teste é ver se eles já pagaram para resolver algo similar no passado. Ações passadas são o melhor preditor de comportamento futuro.',
    dica: 'Passado prediz futuro.',
    correta: 'b',
    exemploLivro: 'Se eles pagaram $3000 para um consultor resolver um problema de processo similar, é sinal de que o problema tem valor real e urgência.'
  },
  {
    id: '5',
    pergunta: 'Qual é o sinal de que você está lidando com um problema valioso?',
    opcoes: [
      { valor: 'a', label: 'As pessoas reclamam muito' },
      { valor: 'b', label: 'As pessoas já pagaram para resolver ou tentaram várias soluções' },
      { valor: 'c', label: 'As pessoas perguntam muito sobre isso' },
      { valor: 'd', label: 'As pessoas parecem irritadas' }
    ],
    explicacao: 'Quando as pessoas já pagaram para resolver ou tentaram várias soluções, é sinal de que o problema é valioso o suficiente para justificar investimento.',
    dica: 'Investimento passado indica valor.',
    correta: 'b',
    exemploLivro: 'Cliente que já tentou 3 ferramentas diferentes, contratou freelancers, e ainda está procurando solução - esse é um problema valioso e urgente.'
  },
  {
    id: '6',
    pergunta: 'Por que perguntar "Quanto você pagaria?" é problemático?',
    opcoes: [
      { valor: 'a', label: 'É muito direta' },
      { valor: 'b', label: 'As pessoas não sabem quanto pagariam até ver a solução' },
      { valor: 'c', label: 'As pessoas ficam irritadas' },
      { valor: 'd', label: 'É muito técnica' }
    ],
explicacao: 'As pessoas raramente sabem quanto pagariam até ver uma solução real. É melhor entender o que já pagaram e os custos atuais do problema.',
    dica: 'Foque no passado, não no futuro hipotético.',
    correta: 'b',
    exemploLivro: 'Em vez de "Quanto você pagaria por um app de finanças?", pergunte "Quanto você pagou por softwares de finanças no último ano?"'
  },
  {
    id: '7',
    pergunta: 'Como descobrir o valor real de um problema?',
    opcoes: [
      { valor: 'a', label: 'Pergunte "Quanto vale isso para você?"' },
      { valor: 'b', label: 'Entenda os custos atuais em tempo, dinheiro e frustração' },
      { valor: 'c', label: 'Pergunte "Você acha isso caro?"' },
      { valor: 'd', label: 'Assuma um valor baseado no mercado' }
    ],
    explicacao: 'Entenda os custos atuais em tempo, dinheiro e frustração que o problema causa. Isso revela o valor real que as pessoas atribuem a resolver esse problema.',
    dica: 'Custos atuais revelam valor futuro.',
    correta: 'b',
    exemploLivro: 'Cliente: "Treinar novos funcionários é caro." Você: "Quanto tempo você gasta? Quanto dinheiro isso custa? O que acontece quando o treinamento falha?"'
  },
  {
    id: '8',
    pergunta: 'O que fazer quando alguém diz que pagaria mas nunca pagou por nada similar?',
    opcoes: [
      { valor: 'a', label: 'Aceite a palavra deles' },
      { valor: 'b', label: 'Questione a seriedade - ações passadas são melhores indicadores' },
      { valor: 'c', label: 'Desconto o que dizem' },
      { valor: 'd', label: 'Ignore completamente' }
    ],
    explicacao: 'Se alguém nunca pagou por nada similar, questione a seriedade. Ações passadas são melhores indicadores que intenções futuras.',
    dica: 'Passado > Futuro.',
    correta: 'b',
    exemploLivro: 'Cliente: "Eu pagaria $1000 por isso." Você: "Você já pagou por algo similar? Quanto? O que fez você pagar por isso?"'
  }
];

const MicroLesson12 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Seriedade dos Problemas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima segunda microlição sobre seriedade dos problemas. Agora você sabe avaliar se os problemas são sérios o suficiente para gerar vendas e tem valor real para os clientes."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson12;