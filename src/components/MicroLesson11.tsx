"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como distinguir problemas que as pessoas pagarão para resolver de meras inconveniências?',
    opcoes: [
      { valor: 'a', label: 'Perguntar "Quais são as implicações disso?"' },
      { valor: 'b', label: 'Perguntar "Quanto isso te custa?"' },
      { valor: 'c', label: 'Perguntar "Isso é importante para você?"' },
      { valor: 'd', label: 'Perguntar "Você já tentou resolver isso?"' }
    ],
    explicacao: 'Alguns problemas, na verdade, não importam. Usar perguntas como "Quais são as implicações disso?" ajuda a distinguir problemas que as pessoas pagarão para resolver de meras inconveniências.',
    dica: 'Como transformar um problema vago em algo concreto e urgente?',
    correta: 'a',
    exemploLivro: 'Cliente: "É difícil treinar novos funcionários." Você: "Quais são as implicações de ter funcionários mal treinados? O que isso custa para vocês?"'
  },
  {
    id: '2',
    pergunta: 'Por que é importante observar alguém realizando uma tarefa?',
    opcoes: [
      { valor: 'a', label: 'Para aprender a fazer a tarefa' },
      { valor: 'b', label: 'Para mostrar que você é um bom observador' },
      { valor: 'c', label: 'Para ver onde os problemas e ineficiências realmente estão' },
      { valor: 'd', label: 'Para entender o fluxo de trabalho' }
    ],
    explicacao: 'Observar alguém realizando uma tarefa mostrará onde os problemas e ineficiências realmente estão, não onde o cliente pensa que eles estão.',
    dica: 'Ações falam mais alto que palavras sobre problemas reais.',
    correta: 'c',
    exemploLivro: 'Um gerente pode dizer "nosso processo de onboarding é eficiente", mas observar pode revelar que novos funcionários passam 3 horas perdidos no primeiro dia.'
  },
  {
    id: '3',
    pergunta: 'Qual é a diferença entre um problema que vale dinheiro e uma inconveniência?',
    opcoes: [
      { valor: 'a', label: 'Não há diferença' },
      { valor: 'b', label: 'Problemas valiosos têm consequências reais se não forem resolvidos' },
      { valor: 'c', label: 'Inconveniências são mais fáceis de resolver' },
      { valor: 'd', label: 'Problemas valiosos são mais comuns' }
    ],
    explicacao: 'Problemas que valem dinheiro têm consequências reais, mensuráveis e urgentes se não forem resolvidos. Inconveniências são apenas irritantes.',
    dica: 'Pense em problemas que você pagaria para resolver vs. aqueles que apenas toleraria.',
    correta: 'b',
    exemploLivro: 'Inconveniência: "Meus relatórios são feios." Problema valioso: "Meus relatórios demoram 8 horas para fazer e ainda assim meu chefe não entende o valor do meu time."'
  },
  {
    id: '4',
    pergunta: 'Como revelar se um problema é valioso?',
    opcoes: [
      { valor: 'a', label: 'Pergunte "Você quer resolver isso?"' },
      { valor: 'b', label: 'Pergunte "O que acontece se você não resolver?"' },
      { valor: 'c', label: 'Pergunte "Você acha isso importante?"' },
      { valor: 'd', label: 'Pergunte "Você já tentou resolver isso?"' }
    ],
    explicacao: '"O que acontece se você não resolver?" revela as consequências reais. Problemas valiosos têm consequências caras ou dolorosas.',
    dica: 'Consequências revelam valor.',
    correta: 'b',
    exemploLivro: 'Cliente: "É difícil gerenciar projetos." Você: "O que acontece quando um projeto vai mal? Quanto isso custa para a empresa?"'
  },
  {
    id: '5',
    pergunta: 'Por que observação é melhor que apenas perguntar sobre problemas?',
    opcoes: [
      { valor: 'a', label: 'Porque as pessoas mentem' },
      { valor: 'b', label: 'Porque as pessoas não percebem todas as ineficiências' },
      { valor: 'c', label: 'Porque é mais rápido' },
      { valor: 'd', label: 'Porque é mais barato' }
    ],
    explicacao: 'As pessoas não percebem todas as ineficiências em seu próprio trabalho. Observação revela problemas que eles nem sabem que têm.',
    dica: 'Você não pode melhorar o que não percebe.',
    correta: 'b',
    exemploLivro: 'Um gerente pode dizer que o processo funciona bem, mas observar revela que ele interrompe a equipe a cada 30 minutos, destruindo a produtividade.'
  },
  {
    id: '6',
    pergunta: 'O que fazer quando o cliente descreve um problema que parece valioso?',
    opcoes: [
      { valor: 'a', label: 'Aceite imediatamente' },
      { valor: 'b', label: 'Cave mais fundo para entender as implicações reais' },
      { valor: 'c', label: 'Pergunte quanto eles pagariam' },
      { valor: 'd', label: 'Diga que você pode resolver' }
    ],
    explicacao: 'Quando um problema parece valioso, cave mais fundo. Pergunte sobre implicações, frequência, custos atuais e tentativas anteriores de resolver.',
    dica: 'Não aceite a primeira impressão.',
    correta: 'b',
    exemploLivro: 'Cliente: "Nosso processo de vendas é ineficiente." Você: "Quão ineficiente? O que isso custa? O que você já tentou?"'
  },
  {
    id: '7',
    pergunta: 'Como testar se você realmente encontrou um problema valioso?',
    opcoes: [
      { valor: 'a', label: 'Pergunte se eles pagariam' },
      { valor: 'b', label: 'Veja se eles já pagaram para resolver algo similar' },
      { valor: 'c', label: 'Pergunte se acham importante' },
      { valor: 'd', label: 'Espere eles oferecerem dinheiro' }
    ],
    explicacao: 'O melhor teste é ver se eles já pagaram para resolver algo similar no passado. Ações passadas são o melhor preditor de comportamento futuro.',
    dica: 'Passado prediz futuro.',
    correta: 'b',
    exemploLivro: 'Se eles pagaram $5000 para consultores resolverem um problema similar, é sinal de que o problema tem valor real.'
  },
  {
    id: '8',
    pergunta: 'O que é um sinal claro de que você está lidando com apenas uma inconveniência?',
    opcoes: [
      { valor: 'a', label: 'As pessoas reclamam muito' },
      { valor: 'b', label: 'As pessoas não tomaram ação para resolver' },
      { valor: 'c', label: 'As pessoas perguntam muito sobre isso' },
      { valor: 'd', label: 'As pessoas parecem irritadas' }
    ],
    explicacao: 'Se as pessoas não tomaram ação para resolver (buscar soluções, pagar, mudar processos), é provavelmente apenas uma inconveniência, não um problema valioso.',
    dica: 'Ações falam sobre seriedade.',
    correta: 'b',
    exemploLivro: 'Se alguém reclama de "relatórios feios" mas nunca tentou usar templates ou contratar designer, é apenas inconveniência.'
  }
];

const MicroLesson11 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Distinguindo Problemas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima primeira microlição sobre distinguindo problemas. Agora você sabe identificar problemas que as pessoas realmente pagarão para resolver versus meras inconveniências."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson11;