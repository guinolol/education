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

const MicroLesson4 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo real das vendas em estágio inicial?',
      opcoes: [
        { valor: 'a', label: 'Gerar receita máxima', icone: Circle },
        { valor: 'b', label: 'O aprendizado', icone: Circle },
        { valor: 'c', label: 'Construir relacionamentos', icone: Circle },
        { valor: 'd', label: 'Validar o produto', icone: Circle }
      ],
      explicacao: 'O objetivo real das vendas em estágio inicial é o aprendizado. A receita é apenas um efeito colateral.',
      dica: 'Pense sobre o que é mais importante no início: aprender ou ganhar dinheiro?',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Quais são os tipos de compromisso (moedas da conversa)?',
      opcoes: [
        { valor: 'a', label: 'Tempo, reputação e dinheiro', icone: Circle },
        { valor: 'b', label: 'Tempo, recursos e feedback', icone: Circle },
        { valor: 'c', label: 'Tempo, introduções e feedback', icone: Circle },
        { valor: 'd', label: 'Tempo, reputação e dinheiro', icone: Circle }
      ],
      explicacao: 'As principais "moedas" que eles podem oferecer são: Tempo (agendar reuniões, testar protótipos), Reputação (apresentar a outros, fornecer depoimentos) e Dinheiro (carta de intenção, pré-pedido).',
      dica: 'Pense nos três tipos de compromissos que mostram seriedade.',
      correta: 'a'
    },
    {
      id: '3',
      pergunta: 'Por que compromisso é importante?',
      opcoes: [
        { valor: 'a', label: 'Para garantir que o cliente pague', icone: Circle },
        { valor: 'b', label: 'Para separar os leads reais dos "leads zumbis"', icone: Circle },
        { valor: 'c', label: 'Para construir confiança', icone: Circle },
        { valor: 'd', label: 'Para validar a ideia', icone: Circle }
      ],
      explicacao: 'Após a fase de aprendizado, você precisa validar sua solução pedindo compromissos para separar os leads reais dos "leads zumbis" (aqueles que são amigáveis, mas nunca compram).',
      dica: 'Compromisso separa interesse real de apenas educação.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Como identificar os primeiros clientes?',
      opcoes: [
        { valor: 'a', label: 'Pessoas que se emocionam com o que você está fazendo', icone: Circle },
        { valor: 'b', label: 'Pessoas que têm dinheiro para investir', icone: Circle },
        { valor: 'c', label: 'Pessoas que têm problemas sérios', icone: Circle },
        { valor: 'd', label: 'Pessoas que conhecem o mercado', icone: Circle }
      ],
      explicacao: 'Seus primeiros clientes são loucos (no bom sentido). Eles querem tanto sua solução que estão dispostos a correr o risco de serem os primeiros. Fique atento às pessoas que se emocionam com o que você está fazendo.',
      dica: 'Procure por entusiasmo genuíno, não apenas interesse.',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'Qual é a regra geral sobre compromisso?',
      opcoes: [
        { valor: 'a', label: 'Quanto mais eles estão abrindo mão, mais a sério você pode levar suas palavras gentis', icone: Circle },
        { valor: 'b', label: 'Compromisso é sempre bom', icone: Circle },
        { valor: 'c', label: 'Compromimento é opcional', icone: Circle },
        { valor: 'd', label: 'Compromimento deve ser mínimo', icone: Circle }
      ],
      explicacao: 'Regra geral: Quanto mais eles estão abrindo mão, mais a sério você pode levar suas palavras gentis.',
      dica: 'Pense no nível de compromisso como indicador de seriedade.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'O que é um "lead zumbi"?',
      opcoes: [
        { valor: 'a', label: 'Um cliente que não paga', icone: Circle },
        { valor: 'b', label: 'Um cliente que é amigável mas nunca compra', icone: Circle },
        { valor: 'c', label: 'Um cliente que não responde', icone: Circle },
        { valor: 'd', label: 'Um cliente que não tem interesse', icone: Circle }
      ],
      explicacao: '"Leads zumbis" são aqueles que são amigáveis, mas nunca compram. Eles dão feedback positivo mas não se comprometem.',
      dica: 'Pense em leads que parecem interessados mas nunca compram.',
      correta: 'b'
    },
    {
      id: '7',
      pergunta: 'Qual é a melhor abordagem para pedir compromisso?',
      opcoes: [
        { valor: 'a', label: 'Perguntar diretamente "Você vai comprar?"', icone: Circle },
        { valor: 'b', label: 'Pedir um próximo passo específico', icone: Circle },
        { valor: 'c', label: 'Esperar que o cliente ofereça', icone: Circle },
        { valor: 'd', label: 'Não pedir compromimento', icone: Circle }
      ],
      explicacao: 'Uma reunião bem-sucedida termina com um avanço claro para o próximo passo. O compromisso é a prova de que as palavras do cliente são sérias.',
      dica: 'Compromisso deve ser claro e mensurável.',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Por que é importante ter uma lista de 3 grandes perguntas?',
      opcoes: [
        { valor: 'a', label: 'Para mostrar que você está preparado', icone: Circle },
        { valor: 'b', label: 'Para manter o foco, evitar perguntas triviais e forçar a encarar questões difíceis', icone: Circle },
        { valor: 'c', label: 'Para impressionar o cliente', icone: Circle },
        { valor: 'd', label: 'Para garantir que você aprenda tudo', icone: Circle }
      ],
      explicacao: 'Antes de qualquer conversa, defina com sua equipe as 3 coisas mais importantes que você precisa aprender. Isso mantém o foco, ajuda a evitar perguntas triviais e te força a encarar as questões difíceis.',
      dica: 'Qualidade sobre quantidade nas perguntas.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'Como estruturar um pedido de reunião?',
      opcoes: [
        { valor: 'a', label: 'Visão, Enquadramento, Fraqueza, Pedestal, Pedido (VFWPA)', icone: Circle },
        { valor: 'b', label: 'Problema, Solução, Benefícios, Custo, Ação', icone: Circle },
        { valor: 'c', label: 'Introdução, Problema, Solução, Chamada para ação', icone: Circle },
        { valor: 'd', label: 'Contexto, Problema, Solução, Próximos passos', icone: Circle }
      ],
      explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
      dica: 'Pense em uma estrutura que mostre valor e necessidade.',
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
      dica: 'Diversas abordagens aumentam suas chances de sucesso.',
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
            Você completou a quarta microlição sobre compromisso e avanço. Agora você sabe como validar sua solução e obter comprometimento real.
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
                <p className="text-sm textContinuando o código da MicroLesson4:

<dyad-write path="src/components/MicroLesson4.tsx">
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

export default MicroLesson4;