"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson5 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo das conversas frias?',
      opcoes: [
        { valor: 'a', label: 'Vender imediatamente', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Parar de tê-las e gerar introduções calorosas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Construir relacionamentos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Validar o mercado', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O objetivo das conversas frias é parar de tê-las. Use as primeiras para gerar introduções calorosas e criar um efeito bola de neve.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Quais são as estratégias para encontrar conversas?',
      opcoes: [
        { valor: 'a', label: 'Vá até eles e traga eles até você', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Vá até eles, traga eles até você e crie introduções calorosas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Use apenas ligações frias', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Apenas organize meetups', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem: Vá até eles (ligações frias, aproveite a sorte, crie uma boa desculpa, mergulhe no ambiente deles) e traga eles até você (organize meetups, dê palestras, escreva em um blog).',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Como criar introduções calorosas?',
      opcoes: [
        { valor: 'a', label: 'Pedir ajuda a contatos, conselheiros, professores ou investidores', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Usar apenas redes sociais', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Fazer cold calling', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Esperar que as pessoas te encontrem', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Crie introduções calorosas: Peça ajuda a contatos, conselheiros da indústria, professores universitários ou investidores.',
      correta: 'a'
    },
    {
      id: '4',
      pergunta: 'Qual é o mnemônico para estruturar o pedido de reunião?',
      opcoes: [
        { valor: 'a', label: 'VFWPA - Vision, Framing, Weakness, Pedestal, Ask', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'PSBA - Problem, Solution, Benefits, Ask', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'PASA - Problem, Ask, Solution, Action', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'SPSA - Solution, Problem, Solution, Ask', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'O que é "Vision" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Como você está tornando o mundo melhor', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qual é o seu problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Qual é a sua solução', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quem você é', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Vision: Como você está tornando o mundo melhor. Isso mostra o impacto positivo do seu trabalho.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'O que é "Framing" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Em que estágio você está e o que procura', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qual é o seu problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Qual é a sua solução', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quem você é', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Framing: Em que estágio você está e o que procura. Isso dá contexto sobre onde você está no seu processo.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'O que é "Weakness" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Onde você precisa de ajuda específica', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Quais são seus pontos fortes', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Quais são seus objetivos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quais são seus recursos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Weakness: Mostre onde você precisa de ajuda específica. Isso mostra vulnerabilidade e necessidade.',
      correta: 'a'
    },
    {
      id: '8',
      pergunta: 'O que é "Pedestal" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Por que você é importante', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Por que o problema é importante', icone: <Target className="w
<dyad-write path="src/components/MicroLesson5.tsx" description="Fixing syntax errors and structure">
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson5 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo das conversas frias?',
      opcoes: [
        { valor: 'a', label: 'Vender imediatamente', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Parar de tê-las e gerar introduções calorosas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Construir relacionamentos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Validar o mercado', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O objetivo das conversas frias é parar de tê-las. Use as primeiras para gerar introduções calorosas e criar um efeito bola de neve.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Quais são as estratégias para encontrar conversas?',
      opcoes: [
        { valor: 'a', label: 'Vá até eles e traga eles até você', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Vá até eles, traga eles até você e crie introduções calorosas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Use apenas ligações frias', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Apenas organize meetups', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem: Vá até eles (ligações frias, aproveite a sorte, crie uma boa desculpa, mergulhe no ambiente deles) e traga eles até você (organize meetups, dê palestras, escreva em um blog).',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Como criar introduções calorosas?',
      opcoes: [
        { valor: 'a', label: 'Pedir ajuda a contatos, conselheiros, professores ou investidores', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Usar apenas redes sociais', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Fazer cold calling', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Esperar que as pessoas te encontrem', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Crie introduções calorosas: Peça ajuda a contatos, conselheiros da indústria, professores universitários ou investidores.',
      correta: 'a'
    },
    {
      id: '4',
      pergunta: 'Qual é o mnemônico para estruturar o pedido de reunião?',
      opcoes: [
        { valor: 'a', label: 'VFWPA - Vision, Framing, Weakness, Pedestal, Ask', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'PSBA - Problem, Solution, Benefits, Ask', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'PASA - Problem, Ask, Solution, Action', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'SPSA - Solution, Problem, Solution, Ask', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'O que é "Vision" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Como você está tornando o mundo melhor', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qual é o seu problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Qual é a sua solução', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quem você é', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Vision: Como você está tornando o mundo melhor. Isso mostra o impacto positivo do seu trabalho.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'O que é "Framing" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Em que estágio você está e o que procura', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qual é o seu problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Qual é a sua solução', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quem você é', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Framing: Em que estágio você está e o que procura. Isso dá contexto sobre onde você está no seu processo.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'O que é "Weakness" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Onde você precisa de ajuda específica', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Quais são seus pontos fortes', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Quais são seus objetivos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quais são seus recursos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Weakness: Mostre onde você precisa de ajuda específica. Isso mostra vulnerabilidade e necessidade.',
      correta: 'a'
    },
    {
      id: '8',
      pergunta: 'O que é "Pedestal" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Por que você é importante', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Por que o problema é importante', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Por que a solução é importante', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Pedestal: Explique por que a ajuda deles é particularmente valiosa. Isso flata a pessoa e mostra que você valoriza sua expertise.',
      correta: 'a'
    },
    {
      id: '9',
      pergunta: 'O que é "Ask" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Peça ajuda de forma clara', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Pergunte sobre o problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Pergunte sobre a solução', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Pergunte sobre o mercado', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Ask: Peça ajuda de forma clara. Seja específico sobre o que você precisa.',
      correta: 'a'
    },
    {
      id: '10',
      pergunta: 'Qual é a melhor abordagem para encontrar pessoas para conversar?',
      opcoes: [
        { valor: 'a', label: 'Usar ligações frias', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Organizar meetups', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Criar introduções calorosas', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Todas as anteriores', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
      correta: 'd'
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
            Você completou a quinta microlição sobre encontrar pessoas para conversar. Agora você sabe como gerar introduções e criar um efeito bola de neve.
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

export default MicroLesson5;