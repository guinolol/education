"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson2 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é a principal razão para desviar de elogios?',
      opcoes: [
        { valor: 'a', label: 'Elogios são irrelevantes para o negócio', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Elogios são ouro de tolo: brilhantes, distrativos e sem valor', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Elogios indicam que você está no caminho certo', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Elogios são raros e valiosos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Elogios são o ouro de tolo do aprendizado com o cliente: brilhantes, distrativos e totalmente sem valor. As pessoas fazem elogios para serem educadas, para te apoiar ou para se livrarem de você.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Como corrigir um elogio recebido?',
      opcoes: [
        { valor: 'a', label: 'Agradeça e continue com sua ideia', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Desvie o elogio imediatamente para perguntas sobre a vida e os problemas do cliente', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Pergunte por que o cliente deu o elogio', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Use o elogio como base para apresentar mais da sua ideia', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Como corrigir: Quando receber um elogio ("Que legal! Adorei!"), desvie-o imediatamente para perguntas sobre a vida e os problemas deles ("Opa, desculpe, comecei a apresentar a ideia. Como vocês estão lidando com isso atualmente?").',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Qual é a principal causa dos dados ruins?',
      opcoes: [
        { valor: 'a', label: 'Falta de habilidade dos entrevistadores', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Elogios, "fluff" e ideias', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Falta de interesse dos clientes', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Problemas técnicos na coleta de dados', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Dados ruins são piores do que nenhum dado, pois geram falsos positivos perigosos. Existem três tipos principais de dados ruins: elogios, "fluff" (generalidades/hipóteses) e ideias.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'O que é "fluff" e como lidar com isso?',
      opcoes: [
        { valor: 'a', label: 'Informações vagas que devem ser ignoradas', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Elogios que devem ser ignorados', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Ideias que devem ser implementadas', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Informações vagas que devem ser ancoradas em exemplos específicos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: '"Fluff" vem em três formas: alegações genéricas ("Eu geralmente..."), promessas futuras ("Eu compraria...") e possibilidades hipotéticas ("Eu poderia..."). Ancore essas declarações vagas em exemplos específicos do passado.',
      correta: 'd'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor abordagem para lidar com ideias e pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Implementar todas as ideias e pedidos', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Obedecer às ideias e pedidos imediatamente', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Compreender as ideias e pedidos, mas não obedecê-los', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Ignorar ideias e pedidos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Você é o dono da solução, eles são os donos do problema.',
      correta: 'c'
    },
    {
      id: '6',
      pergunta: 'Como descobrir a motivação por trás de um pedido de funcionalidade?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Por que você quer isso?"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Perguntar "O que isso permitiria que você fizesse?"', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Perguntar "Como você está lidando com a falta disso atualmente?"', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Todas as anteriores', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Use perguntas de aprofundamento para encontrar a causa raiz. "Por que você quer isso?", "O que isso permitiria que você fizesse?", "Como você está lidando com a falta disso atualmente?"',
      correta: 'd'
    },
    {
      id: '7',
      pergunta: 'Qual é a regra geral sobre busca de aprovação?',
      opcoes: [
        { valor: 'a', label: 'É importante buscar aprovação constante', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'É preciso sempre apresentar sua ideia', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'É melhor evitar conversas com clientes', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos. Evite "pescar elogios" ("Acha que vai funcionar?") ou expor seu ego ("Abandonei meu emprego por este projeto... o que você acha?").',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Qual é a melhor estratégia para encontrar pessoas para conversar?',
      opcoes: [
        { valor: 'a', label: 'Usar ligações frias', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Organizar meetups', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Criar introduções calorosas', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Todas as anteriores', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
      correta: 'd'
    },
    {
      id: '9',
      pergunta: 'Qual é a regra geral sobre o que fazer com ideias e pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Implementar todas as ideias e pedidos', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Obedecer às ideias e pedidos imediatamente', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Compreender as ideias e pedidos, mas não obedecê-los', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Ignorar ideias e pedidos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Você é o dono da solução, eles são os donos do problema.',
      correta: 'c'
    },
    {
      id: '10',
      pergunta: 'Qual é a melhor abordagem para lidar com emoções intensas?',
      opcoes: [
        { valor: 'a', label: 'Ignorar as emoções', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Explorar as emoções para entender a história por trás', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Usar as emoções para validar sua ideia', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Evitar perguntas sobre emoções', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Qualquer sinal emocional forte (raiva, frustração, alegria) é um sinal para cavar mais fundo e entender a história por trás da emoção.',
      correta: 'b'
    }
  ];

  const handleResposta = (perguntaId: string, resposta: string) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: resposta }));
    
    if (perguntaAtual < perguntas.length - 1) {
      setTimeout(() => setPerguntaAtual(prev => prev + 1), 300);
    } else {
      setTimeout(() => setMostrarResultado(true), 300);
    }
  };

  if (mostrarResultado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Microlição Concluída!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Você completou a segunda microlição sobre dados ruins. Agora você sabe como evitar elogios, fluff e ideias inúteis.
          </p>
          <Button 
            size="lg" 
            className="w-full"
          >
            Voltar para o Quiz
          </Button>
        </Card>
      </div>
    );
  }

  const pergunta = perguntas[perguntaAtual];
  const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Progress value={progresso} className="h-2" />
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Pergunta {perguntaAtual + 1} de {perguntas.length}
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">{pergunta.pergunta}</h2>
          
          <div className="space-y-4">
            {pergunta.opcoes.map((opcao) => (
              <div key={opcao.valor}>
                <input
                  type="radio"
                  id={opcao.valor}
                  name="resposta"
                  value={opcao.valor}
                  checked={respostas[pergunta.id] === opcao.valor}
                  onChange={() => handleResposta(pergunta.id, opcao.valor)}
                  className="sr-only peer"
                />
                <label
                  htmlFor={opcao.valor}
                  className="flex items-center p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 cursor-pointer peer-data-[state=checked]:border-purple-500 peer-data-[state=checked]:bg-purple-50 dark:peer-data-[state=checked]:bg-purple-900 transition-all"
                >
                  <span className="mr-3">{opcao.icone}</span>
                  {opcao.label}
                </label>
              </div>
            ))}
          </div>

          {respostas[pergunta.id] && (
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-2">Explicação:</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{pergunta.explicacao}</p>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setPerguntaAtual(prev => prev - 1)}
              disabled={perguntaAtual === 0}
            >
              <ChevronLeft className="mr-2" />
              Anterior
            </Button>
            <Button 
              size="sm" 
              onClick={() => handleResposta(pergunta.id, respostas[pergunta.id] || '')}
              disabled={!respostas[pergunta.id]}
            >
              Próxima
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MicroLesson2;