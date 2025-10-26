"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, BookOpen, Target, Zap, Clock, 
  ChevronLeft, ChevronRight, ChevronDown, 
  CheckCircle, XCircle, HelpCircle,
  Check, X, Circle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";

const MicroLesson5 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo das conversas frias?',
      opcoes: [
        { valor: 'a', label: 'Vender imediatamente', icone: Circle },
        { valor: 'b', label: 'Parar de tê-las e gerar introduções calorosas', icone: Circle },
        { valor: 'c', label: 'Construir relacionamentos', icone: Circle },
        { valor: 'd', label: 'Validar o mercado', icone: Circle }
      ],
      explicacao: 'O objetivo das conversas frias é parar de tê-las. Use as primeiras para gerar introduções calorosas e criar um efeito bola de neve.',
      dica: 'Pense no longo prazo: como transformar frio em quente?',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Quais são as estratégias para encontrar conversas?',
      opcoes: [
        { valor: 'a', label: 'Vá até eles e traga eles até você', icone: Circle },
        { valor: 'b', label: 'Vá até eles, traga eles até você e crie introduções calorosas', icone: Circle },
        { valor: 'c', label: 'Use apenas ligações frias', icone: Circle },
        { valor: 'd', label: 'Apenas organize meetups', icone: Circle }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem: Vá até eles (ligações frias, aproveite a sorte, crie uma boa desculpa, mergulhe no ambiente deles) e traga eles até você (organize meetups, dê palestras, escreva em um blog).',
      dica: 'Diversifique suas abordagens para maximizar chances.',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Como criar introduções calorosas?',
      opcoes: [
        { valor: 'a', label: 'Pedir ajuda a contatos, conselheiros, professores ou investidores', icone: Circle },
        { valor: 'b', label: 'Usar apenas redes sociais', icone: Circle },
        { valor: 'c', label: 'Fazer cold calling', icone: Circle },
        { valor: 'd', label: 'Esperar que as pessoas te encontrem', icone: Circle }
      ],
      explicacao: 'Crie introduções calorosas: Peça ajuda a contatos, conselheiros da indústria, professores universitários ou investidores.',
      dica: 'Use sua rede existente para abrir portas.',
      correta: 'a'
    },
    {
      id: '4',
      pergunta: 'Qual é o mnemônico para estruturar o pedido de reunião?',
      opcoes: [
        { valor: 'a', label: 'VFWPA - Vision, Framing, Weakness, Pedestal, Ask', icone: Circle },
        { valor: 'b', label: 'PSBA - Problem, Solution, Benefits, Ask', icone: Circle },
        { valor: 'c', label: 'PASA - Problem, Ask, Solution, Action', icone: Circle },
        { valor: 'd', label: 'SPSA - Solution, Problem, Solution, Ask', icone: Circle }
      ],
      explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
      dica: 'Memorize a sequência que mostra valor e necessidade.',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'O que é "Vision" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Como você está tornando o mundo melhor', icone: Circle },
        { valor: 'b', label: 'Qual é o seu problema', icone: Circle },
        { valor: 'c', label: 'Qual é a sua solução', icone: Circle },
        { valor: 'd', label: 'Quem você é', icone: Circle }
      ],
      explicacao: 'Vision: Como você está tornando o mundo melhor. Isso mostra o impacto positivo do seu trabalho.',
      dica: 'Comece com o propósito maior.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'O que é "Framing" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Em que estágio você está e o que procura', icone: Circle },
        { valor: 'b', label: 'Qual é o seu problema', icone: Circle },
        { valor: 'c', label: 'Qual é a sua solução', icone: Circle },
        { valor: 'd', label: 'Quem você é', icone: Circle }
      ],
      explicacao: 'Framing: Em que estágio você está e o que procura. Isso dá contexto sobre onde você está no seu processo.',
      dica: 'Contextualize sua posição atual.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'O que é "Weakness" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Onde você precisa de ajuda específica', icone: Circle },
        { valor: 'b', label: 'Quais são seus pontos fortes', icone: Circle },
        { valor: 'c', label: 'Quais são seus objetivos', icone: Circle },
        { valor: 'd', label: 'Quais são seus recursos', icone: Circle }
      ],
      explicacao: 'Weakness: Mostre onde você precisa de ajuda específica. Isso mostra vulnerabilidade e necessidade.',
      dica: 'Mostre vulnerabilidade para criar conexão.',
      correta: 'a'
    },
    {
      id: '8',
      pergunta: 'O que é "Pedestal" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Por que a ajuda deles é particularmente valiosa', icone: Circle },
        { valor: 'b', label: 'Por que você é importante', icone: Circle },
        { valor: 'c', label: 'Por que o problema é importante', icone: Circle },
        { valor: 'd', label: 'Por que a solução é importante', icone: Circle }
      ],
      explicacao: 'Pedestal: Explique por que a ajuda deles é particularmente valiosa. Isso flata a pessoa e mostra que você valoriza sua expertise.',
      dica: 'Faça a pessoa se sentir especial e útil.',
      correta: 'a'
    },
    {
      id: '9',
      pergunta: 'O que é "Ask" no mnemônico VFWPA?',
      opcoes: [
        { valor: 'a', label: 'Peça ajuda de forma clara', icone: Circle },
        { valor: 'b', label: 'Pergunte sobre o problema', icone: Circle },
        { valor: 'c', label: 'Pergunte sobre a solução', icone: Circle },
        { valor: 'd', label: 'Pergunte sobre o mercado', icone: Circle }
      ],
      explicacao: 'Ask: Peça ajuda de forma clara. Seja específico sobre o que você precisa.',
      dica: 'Seja direto e específico em seu pedido.',
      correta: 'a'
    },
    {
      id: '10',
      pergunta: 'Qual é a melhor abordagem para encontrar pessoas para conversar?',
      opcoes: [
        { valor: 'a', label: 'Usar ligações frias', icone: Circle },
        { valor: 'b', label: 'Organizar meetups', icone: Circle },
        { valor: 'c', label: 'Criar introduções calorosas', icone: Circle },
        { valor: 'd', label: 'Todas as anteriores', icone: Circle }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
      dica: 'Diversifique suas abordagens para maximizar chances.',
      correta: 'd'
    }
  ];

  const handleResposta = (perguntaId: string, resposta: string) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: resposta }));
    setRespostaSelecionada(resposta);
    setMostrarFeedback(true);
  };

  const handleProximaPergunta = () => {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual(prev => prev + 1);
      setRespostaSelecionada(null);
      setMostrarFeedback(false);
    } else {
      setMostrarResultado(true);
    }
  };

  const handleAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(prev => prev - 1);
      setRespostaSelecionada(null);
      setMostrarFeedback(false);
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
            onClick={() => window.history.back()}
          >
            Voltar para o Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const pergunta = perguntas[perguntaAtual];
  const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
  const respostaCorreta = respostas[pergunta.id] === pergunta.correta;

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
          
          <div className="space-y-4 mb-6">
            {pergunta.opcoes.map((opcao) => {
              const isSelected = respostaSelecionada === opcao.valor;
              const isCorrect = opcao.valor === pergunta.correta;
              let bgColor = "bg-white dark:bg-gray-800";
              let iconMostrar = <opcao.icone className="w-5 h-5 text-gray-400" />;
              
              if (mostrarFeedback) {
                if (isSelected && isCorrect) {
                  bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                  iconMostrar = <Check className="w-5 h-5 text-green-600" />;
                } else if (isSelected && !isCorrect) {
                  bgColor = "bg-red-100 dark:bg-red-900 border-red-500";
                  iconMostrar = <X className="w-5 h-5 text-red-600" />;
                } else if (!isSelected && isCorrect) {
                  bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                  iconMostrar = <Check className="w-5 h-5 text-green-600" />;
                }
              }
              
              return (
                <div key={opcao.valor}>
                  <input
                    type="radio"
                    id={opcao.valor}
                    name="resposta"
                    value={opcao.valor}
                    checked={isSelected}
                    onChange={() => handleResposta(pergunta.id, opcao.valor)}
                    className="sr-only peer"
                    disabled={mostrarFeedback}
                  />
                  <label
                    htmlFor={opcao.valor}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${bgColor} ${
                      !mostrarFeedback 
                        ? "hover:border-purple-400 dark:hover:border-purple-600" 
                        : "cursor-default"
                    }`}
                  >
                    <span className="mr-3">
                      {iconMostrar}
                    </span>
                    {opcao.label}
                  </label>
                </div>
              );
            })}
          </div>

          {mostrarFeedback && (
            <div className="mb-6">
              <div className={`p-4 rounded-lg ${
                respostaCorreta ? "bg-green-50 dark:bg-green-900" : "bg-red-50 dark:bg-red-900"
              }`}>
                <h3 className="font-semibold mb-2 flex items-center">
                  {respostaCorreta ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      Correto!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600 mr-2" />
                      Quase lá!
                    </>
                  )}
                </h3>
                <p className="text-sm">{pergunta.explicacao}</p>
              </div>
            </div>
          )}

          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="dica">
              <AccordionTrigger className="text-sm hover:no-underline">
                <div className="flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Precisa de uma dica?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 p-2">
                  {pergunta.dica}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleAnterior}
              disabled={perguntaAtual === 0}
            >
              <ChevronLeft className="mr-2" />
              Anterior
            </Button>
            
            {mostrarFeedback ? (
              <Button 
                size="sm" 
                onClick={handleProximaPergunta}
              >
                {perguntaAtual < perguntas.length - 1 ? "Próxima" : "Concluir"}
                <ChevronRight className="ml-2" />
              </Button>
            ) : (
              <Button 
                size="sm" 
                onClick={() => {}}
                disabled={!respostaSelecionada}
                variant="outline"
>
                Selecione uma resposta
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MicroLesson5;