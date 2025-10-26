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

const MicroLesson2 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é a principal razão para desviar de elogios?',
      opcoes: [
        { valor: 'a', label: 'Elogios são irrelevantes para o negócio', icone: Circle },
        { valor: 'b', label: 'Elogios são ouro de tolo: brilhantes, distrativos e sem valor', icone: Circle },
        { valor: 'c', label: 'Elogios indicam que você está no caminho certo', icone: Circle },
        { valor: 'd', label: 'Elogios são raros e valiosos', icone: Circle }
      ],
      explicacao: 'Elogios são o ouro de tolo do aprendizado com o cliente: brilhantes, distrativos e totalmente sem valor. As pessoas fazem elogios para serem educadas, para te apoiar ou para se livrarem de você.',
      dica: 'Pense sobre o que realmente importa: validação ou validação de ego?',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Como corrigir um elogio recebido?',
      opcoes: [
        { valor: 'a', label: 'Agradeça e continue com sua ideia', icone: Circle },
        { valor: 'b', label: 'Desvie o elogio imediatamente para perguntas sobre a vida e os problemas do cliente', icone: Circle },
        { valor: 'c', label: 'Pergunte por que o cliente deu o elogio', icone: Circle },
        { valor: 'd', label: 'Use o elogio como base para apresentar mais da sua ideia', icone: Circle }
      ],
      explicacao: 'Como corrigir: Quando receber um elogio ("Que legal! Adorei!"), desvie-o imediatamente para perguntas sobre a vida e os problemas deles ("Opa, desculpe, comecei a apresentar a ideia. Como vocês estão lidando com isso atualmente?").',
      dica: 'O foco deve voltar para o cliente, não para sua ideia.',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Qual é a principal causa dos dados ruins?',
      opcoes: [
        { valor: 'a', label: 'Falta de habilidade dos entrevistadores', icone: Circle },
        { valor: 'b', label: 'Elogios, "fluff" e ideias', icone: Circle },
        { valor: 'c', label: 'Falta de interesse dos clientes', icone: Circle },
        { valor: 'd', label: 'Problemas técnicos na coleta de dados', icone: Circle }
      ],
      explicacao: 'Dados ruins são piores do que nenhum dado, pois geram falsos positivos perigosos. Existem três tipos principais de dados ruins: elogios, "fluff" (generalidades/hipóteses) e ideias.',
      dica: 'Pense nos três tipos de informações que parecem úteis mas não são.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'O que é "fluff" e como lidar com isso?',
      opcoes: [
        { valor: 'a', label: 'Informações vagas que devem ser ignoradas', icone: Circle },
        { valor: 'b', label: 'Elogios que devem ser ignorados', icone: Circle },
        { valor: 'c', label: 'Ideias que devem ser implementadas', icone: Circle },
        { valor: 'd', label: 'Informações vagas que devem ser ancoradas em exemplos específicos', icone: Circle }
      ],
      explicacao: '"Fluff" vem em três formas: alegações genéricas ("Eu geralmente..."), promessas futuras ("Eu compraria...") e possibilidades hipotéticas ("Eu poderia..."). Ancore essas declarações vagas em exemplos específicos do passado.',
      dica: 'Como transformar "eu geralmente" em algo concreto?',
      correta: 'd'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor abordagem para lidar com ideias e pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Implementar todas as ideias e pedidos', icone: Circle },
        { valor: 'b', label: 'Obedecer às ideias e pedidos imediatamente', icone: Circle },
        { valor: 'c', label: 'Compreender as ideias e pedidos, mas não obedecê-los', icone: Circle },
        { valor: 'd', label: 'Ignorar ideias e pedidos', icone: Circle }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Você é o dono da solução, eles são os donos do problema.',
      dica: 'Quem é o especialista em soluções vs problemas?',
      correta: 'c'
    },
    {
      id: '6',
      pergunta: 'Como descobrir a motivação por trás de um pedido de funcionalidade?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Por que você quer isso?"', icone: Circle },
        { valor: 'b', label: 'Perguntar "O que isso permitiria que você fizesse?"', icone: Circle },
        { valor: 'c', label: 'Perguntar "Como você está lidando com a falta disso atualmente?"', icone: Circle },
        { valor: 'd', label: 'Todas as anteriores', icone: Circle }
      ],
      explicacao: 'Use perguntas de aprofundamento para encontrar a causa raiz. "Por que você quer isso?", "O que isso permitiria que você fizesse?", "Como você está lidando com a falta disso atualmente?"',
      dica: 'Perguntas de aprofundamento revelam o problema real.',
      correta: 'd'
    },
    {
      id: '7',
      pergunta: 'Qual é a regra geral sobre busca de aprovação?',
      opcoes: [
        { valor: 'a', label: 'É importante buscar aprovação constante', icone: Circle },
        { valor: 'b', label: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos', icone: Circle },
        { valor: 'c', label: 'É preciso sempre apresentar sua ideia', icone: Circle },
        { valor: 'd', label: 'É melhor evitar conversas com clientes', icone: Circle }
      ],
      explicacao: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos. Evite "pescar elogios" ("Acha que vai funcionar?") ou expor seu ego ("Abandonei meu emprego por este projeto... o que você acha?").',
      dica: 'As pessoas tendem a ser gentis, mesmo quando não estão interessadas.',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Qual é a melhor estratégia para encontrar pessoas para conversar?',
      opcoes: [
        { valor: 'a', label: 'Usar ligações frias', icone: Circle },
        { valor: 'b', label: 'Organizar meetups', icone: Circle },
        { valor: 'c', label: 'Criar introduções calorosas', icone: Circle },
        { valor: 'd', label: 'Todas as anteriores', icone: Circle }
      ],
      explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
      dica: 'Diversas abordagens aumentam suas chances de sucesso.',
      correta: 'd'
    },
    {
      id: '9',
      pergunta: 'Qual é a regra geral sobre o que fazer com ideias e pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Implementar todas as ideias e pedidos', icone: Circle },
        { valor: 'b', label: 'Obedecer às ideias e pedidos imediatamente', icone: Circle },
        { valor: 'c', label: 'Compreender as ideias e pedidos, mas não obedecê-los', icone: Circle },
        { valor: 'd', label: 'Ignorar ideias e pedidos', icone: Circle }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Você é o dono da solução, eles são os donos do problema.',
      dica: 'Quem é o especialista em soluções vs problemas?',
      correta: 'c'
    },
    {
      id: '10',
      pergunta: 'Como lidar com emoções intensas?',
      opcoes: [
        { valor: 'a', label: 'Ignorar as emoções', icone: Circle },
        { valor: 'b', label: 'Explorar as emoções para entender a história por trás', icone: Circle },
        { valor: 'c', label: 'Usar as emoções para validar sua ideia', icone: Circle },
        { valor: 'd', label: 'Evitar perguntas sobre emoções', icone: Circle }
      ],
      explicacao: 'Qualquer sinal emocional forte (raiva, frustração, alegria) é um sinal para cavar mais fundo e entender a história por trás da emoção.',
      dica: 'Emoções revelam problemas reais e urgentes.',
      correta: 'b'
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
            Você completou a segunda microlição sobre dados ruins. Agora você sabe como evitar elogios, fluff e ideias inúteis.
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

export default MicroLesson2;