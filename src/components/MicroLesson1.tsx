"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@//components/ui/badge";
import { 
  Trophy, BookOpen, Target, Zap, Clock, 
  ChevronLeft, ChevronRight, ChevronDown, 
  CheckCircle, XCircle, HelpCircle,
  Check, X, Circle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MicroLesson1 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o problema fundamental das conversas com clientes?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não entendem o mercado', icone: Circle },
        { valor: 'b', label: 'Conversas com clientes são ruins por padrão', icone: Circle },
        { valor: 'c', label: 'Os empreendedores não sabem ouvir', icone: Circle },
        { valor: 'd', label: 'As empresas não têm tempo', icone: Circle }
      ],
      explicacao: 'O problema fundamental é que conversas com clientes são ruins por padrão. É seu trabalho consertá-las.',
      dica: 'Pense sobre quem é responsável por melhorar a qualidade das conversas.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'O que é o Teste da Mãe?',
      opcoes: [
        { valor: 'a', label: 'Um conjunto de regras para elaborar boas perguntas', icone: Circle },
        { valor: 'b', label: 'Um método para validar ideias de negócios', icone: Circle },
        { valor: 'c', label: 'Um framework para análise de mercado', icone: Circle },
        { valor: 'd', label: 'Um guia para apresentações de negócios', icone: Circle }
      ],
      explicacao: 'O Teste da Mãe é um conjunto de regras simples para elaborar boas perguntas sobre as quais nem mesmo sua mãe pode mentir.',
      dica: 'O nome sugere algo sobre honestidade nas respostas.',
      correta: 'a'
    },
    {
      id: '3',
      pergunta: 'Qual é a regra geral sobre conversas com clientes?',
      opcoes: [
        { valor: 'a', label: 'Quanto mais você fala, melhor está se saindo', icone: Circle },
        { valor: 'b', label: 'Quanto mais você ouve, melhor está se saindo', icone: Circle },
        { valor: 'c', label: 'É preciso apresentar sua ideia para ganhar confiança', icone: Circle },
        { valor: 'd', label: 'É preciso ouvir mais do que falar', icone: Circle }
      ],
      explicacao: 'Regra geral: Quanto mais você fala, pior está se saindo. Você não aprende nada enquanto está falando.',
      dica: 'O foco deve ser em coletar informações, não em transmiti-las.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Por que opiniões são inúteis?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não sabem o que querem', icone: Circle },
        { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa', icone: Circle },
        { valor: 'c', label: 'As pessoas são egoístas', icone: Circle },
        { valor: 'd', label: 'As opiniões são difíceis de medir', icone: Circle }
      ],
      explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
      dica: 'Pense sobre quem realmente valida uma ideia de negócio.',
      correta: 'b'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor abordagem para perguntar sobre o futuro?',
      opcoes: [
        { valor: 'a', label: 'Perguntar se a pessoa compraria algo', icone: Circle },
        { valor: 'b', label: 'Perguntar sobre ações passadas', icone: Circle },
        { valor: 'c', label: 'Perguntar sobre desejos pessoais', icone: Circle },
        { valor: 'd', label: 'Perguntar sobre tendências do mercado', icone: Circle }
      ],
      explicacao: 'Pergunte sobre especificidades do passado, em vez de generalidades ou opiniões sobre o futuro. Ações passadas são fatos; intenções futuras são mentiras otimistas.',
      dica: 'O que é mais confiável: o que alguém fez ou o que diz que fará?',
      correta: 'b'
    },
    {
      id: '6',
      pergunta: 'O que é "fluff" e como lidar com isso?',
      opcoes: [
        { valor: 'a', label: 'Informações vagas que devem ser ancoradas em exemplos específicos', icone: Circle },
        { valor: 'b', label: 'Elogios que devem ser ignorados', icone: Circle },
        { valor: 'c', label: 'Ideias que devem ser implementadas', icone: Circle },
        { valor: 'd', label: 'Dados ruins que devem ser evitados', icone: Circle }
      ],
      explicacao: '"Fluff" vem em três formas: alegações genéricas, promessas futuras e possibilidades hipotéticas. Ancore essas declarações vagas em exemplos específicos do passado.',
      dica: 'Pense em como transformar generalizações em fatos concretos.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'Como evitar pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Ignorar os clientes', icone: Circle },
        { valor: 'b', label: 'Usar perguntas de aprofundamento para encontrar a causa raiz', icone: Circle },
        { valor: 'c', label: 'Oferecer mais opções', icone: Circle },
        { valor: 'd', label: 'Focar em melhorar a interface', icone: Circle }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Use perguntas de aprofundamento para encontrar a causa raiz.',
      dica: 'Você é o especialista em soluções, eles são especialistas em problemas.',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Qual é a regra geral sobre busca de aprovação?',
      opcoes: [
        { valor: 'a', label: 'É importante buscar aprovação constante', icone: Circle },
        { valor: 'b', label: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos', icone: Circle },
        { valor: 'c', label: 'É preciso sempre apresentar sua ideia', icone: Circle },
        { valor: 'd', label: 'É melhor evitar conversas com clientes', icone: Circle }
      ],
      explicacao: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos. Evite "pescar elogios" ou expor seu ego.',
      dica: 'As pessoas tendem a ser gentis, mesmo quando não estão interessadas.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'O que é importante em uma conversa?',
      opcoes: [
        { valor: 'a', label: 'Fazer muitas perguntas', icone: Circle },
        { valor: 'b', label: 'Ouvir mais do que falar', icone: Circle },
        { valor: 'c', label: 'Manter o foco na sua ideia', icone: Circle },
        { valor: 'd', label: 'Usar linguagem técnica', icone: Circle }
      ],
      explicacao: 'Você deve ter medo de pelo menos uma das perguntas que está fazendo em cada conversa. Perguntas importantes são aquelas cujas respostas podem mudar completamente ou invalidar seu negócio.',
      dica: 'Perguntas valiosas muitas vezes são desconfortáveis de fazer.',
      correta: 'a'
    },
    {
      id: '10',
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
            Você completou a primeira microlição sobre The Mom Test. Agora você está pronto para aplicar essas técnicas em suas conversas com clientes.
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

export default MicroLesson1;