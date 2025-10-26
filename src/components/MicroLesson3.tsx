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

const MicroLesson3 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo principal de uma conversa inicial com o cliente?',
      opcoes: [
        { valor: 'a', label: 'Vender sua ideia', icone: Circle },
        { valor: 'b', label: 'Obter fatos concretos sobre a vida e a visão de mundo do cliente', icone: Circle },
        { valor: 'c', label: 'Construir relacionamentos', icone: Circle },
        { valor: 'd', label: 'Apresentar sua solução', icone: Circle }
      ],
      explicacao: 'O objetivo de uma conversa inicial com o cliente é obter fatos concretos sobre a vida e a visão de mundo dele, que permitam melhorar o negócio.',
      dica: 'Pense sobre o que você realmente precisa saber do cliente.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Por que opiniões são inúteis?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não sabem o que querem', icone: Circle },
        { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa', icone: Circle },
        { valor: 'c', label: 'As pessoas são egoístas', icone: Circle },
        { valor: 'd', label: 'As opiniões são difíceis de medir', icone: Circle }
      ],
      explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
      dica: 'Quem realmente valida uma ideia de negócio?',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Por que perguntas sobre o futuro são problemáticas?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não conseguem prever o futuro', icone: Circle },
        { valor: 'b', label: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista', icone: Circle },
        { valor: 'c', label: 'As pessoas mentem sobre o futuro', icone: Circle },
        { valor: 'd', label: 'O futuro é incerto', icone: Circle }
      ],
      explicacao: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista. Perguntas como "Você compraria..." ou "Quanto você pagaria..." convidam a respostas hipotéticas e otimistas que não se traduzem em vendas reais.',
      dica: 'O que é mais confiável: intenções ou ações passadas?',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Por que as pessoas sabem quais são seus problemas, mas não sabem como resolvê-los?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não são criativas', icone: Circle },
        { valor: 'b', label: 'Você é o dono da solução, eles são os donos do problema', icone: Circle },
        { valor: 'c', label: 'As pessoas não têm tempo para pensar em soluções', icone: Circle },
        { valor: 'd', label: 'As pessoas não entendem tecnologia', icone: Circle }
      ],
      explicacao: 'As pessoas sabem quais são seus problemas, mas não sabem como resolvê-los. Você é o dono da solução, eles são os donos do problema.',
      dica: 'Pense na divisão de responsabilidades na conversa.',
      correta: 'b'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor pergunta para entender os objetivos de um cliente?',
      opcoes: [
        { valor: 'a', label: 'Qual seria o seu produto dos sonhos?', icone: Circle },
        { valor: 'b', label: 'Por que você se dá ao trabalho?', icone: Circle },
        { valor: 'c', label: 'O que você gostaria de melhorar?', icone: Circle },
        { valor: 'd', label: 'Quais funcionalidades você gostaria?', icone: Circle }
      ],
      explicacao: 'Você está atirando no escuro até entender os objetivos deles. Perguntas como "Por que você se dá ao trabalho?" ajudam a ir do problema percebido ao problema real, revelando as motivações essenciais.',
      dica: 'Qual pergunta revela a motivação real por trás do trabalho?',
      correta: 'b'
    },
    {
      id: '6',
      pergunta: 'Como distinguir problemas que as pessoas pagarão para resolver de meras inconveniências?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Quais são as implicações disso?"', icone: Circle },
        { valor: 'b', label: 'Perguntar "Quanto isso te custa?"', icone: Circle },
        { valor: 'c', label: 'Perguntar "Isso é importante para você?"', icone: Circle },
        { valor: 'd', label: 'Perguntar "Você já tentou resolver isso?"', icone: Circle }
      ],
      explicacao: 'Alguns problemas, na verdade, não importam. Usar perguntas como "Quais são as implicações disso?" ajuda a distinguir problemas que as pessoas pagarão para resolver de meras inconveniências.',
      dica: 'Como transformar um problema vago em algo concreto e urgente?',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'Por que é importante observar alguém realizando uma tarefa?',
      opcoes: [
        { valor: 'a', label: 'Para aprender a fazer a tarefa', icone: Circle },
        { valor: 'b', label: 'Para mostrar que você é um bom observador', icone: Circle },
        { valor: 'c', label: 'Para ver onde os problemas e ineficiências realmente estão', icone: Circle },
        { valor: 'd', label: 'Para entender o fluxo de trabalho', icone: Circle }
      ],
      explicacao: 'Observar alguém realizando uma tarefa mostrará onde os problemas e ineficiências realmente estão, não onde o cliente pensa que eles estão.',
      dica: 'Ações falam mais alto que palavras sobre problemas reais.',
      correta: 'c'
    },
    {
      id: '8',
      pergunta: 'Qual é a melhor pergunta para avaliar a seriedade de um problema?',
      opcoes: [
        { valor: 'a', label: 'Quão sério é este problema para você?', icone: Circle },
        { valor: 'b', label: 'O que mais você já tentou?', icone: Circle },
        { valor: 'c', label: 'Você já procurou soluções?', icone: Circle },
        { valor: 'd', label: 'Você está disposto a pagar para resolver isso?', icone: Circle }
      ],
      explicacao: 'Se eles ainda não procuraram maneiras de resolver o problema, não vão procurar (ou comprar) a sua. Pergunte "O que mais você já tentou?" para avaliar o quão sério o problema é.',
      dica: 'Ações passadas indicam seriedade futura.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'Como entender o valor de um problema para um cliente?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Quanto você pagaria por isso?"', icone: Circle },
        { valor: 'b', label: 'Perguntar "Como você está lidando com isso agora?"', icone: Circle },
        { valor: 'c', label: 'Perguntar "Isso é importante para você?"', icone: Circle },
        { valor: 'd', label: 'Perguntar "Você já gastou dinheiro para resolver isso?"', icone: Circle }
      ],
      explicacao: 'Embora seja raro alguém dizer precisamente o que vai pagar, muitas vezes eles mostram o quanto vale para eles. Pergunte "Como você está lidando com isso agora?" para entender os custos atuais (em tempo e dinheiro), o que fornece uma âncora de preço.',
      dica: 'Custos atuais revelam valor futuro.',
      correta: 'b'
    },
    {
      id: '10',
      pergunta: 'Como obter ajuda valiosa de clientes?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Você pode me ajudar?"', icone: Circle },
        { valor: 'b', label: 'Perguntar "Com quem mais eu deveria conversar?"', icone: Circle },
        { valor: 'c', label: 'Perguntar "Há mais alguma coisa que eu deveria ter perguntado?"', icone: Circle },
        { valor: 'd', label: 'Todas as anteriores', icone: Circle }
      ],
      explicacao: 'As pessoas querem te ajudar, mas raramente o farão a menos que você lhes dê uma desculpa para isso. Perguntas como "Com quem mais eu deveria conversar?" e "Há mais alguma coisa que eu deveria ter perguntado?" abrem a porta para ajuda e insights valiosos.',
      dica: 'Dê às pessoas uma desculpa para te ajudarem.',
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
            Você completou a terceira microlição sobre perguntas eficazes. Agora você sabe como fazer perguntas que realmente geram insights valiosos.
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

export default MicroLesson3;