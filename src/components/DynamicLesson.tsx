"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, BookOpen, Target, Zap, Clock, 
  ChevronLeft, ChevronRight, 
  CheckCircle, XCircle, 
  Check, X, Circle
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";

interface Alternativa {
  id: string;
  texto: string;
  correta: boolean;
  feedback: string;
}

interface Pergunta {
  id: string;
  texto: string;
  dica: string;
  explicacao: string;
  alternativas: Alternativa[];
}

interface Conteudo {
  introducao: string;
  conceitos: {
    titulo: string;
    texto: string;
  }[];
}

interface Licao {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  xp: number;
  dificuldade: string;
  conteudo: Conteudo;
  perguntas: Pergunta[];
}

interface DynamicLessonProps {
  licaoId: string;
  cursoId?: string;
  onComplete: () => void;
  onBack: () => void;
}

const DynamicLesson = ({ licaoId, cursoId = 'mom-test-course', onComplete, onBack }: DynamicLessonProps) => {
  const [licao, setLicao] = useState<Licao | null>(null);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarFeedback, setMostrarFeedback] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarLicao();
  }, [licaoId]);

  const carregarLicao = async () => {
    try {
      // Em produção, isso viria de uma API
      const response = await fetch(`/src/data/${cursoId}.json`);
      const curso = await response.json();
      
      // Encontrar a lição pelo ID
      let licaoEncontrada = null;
      for (const modulo of curso.modulos) {
        const licao = modulo.licoes.find((l: Licao) => l.id === licaoId);
        if (licao) {
          licaoEncontrada = licao;
          break;
        }
      }
      
      if (licaoEncontrada) {
        setLicao(licaoEncontrada);
      }
    } catch (error) {
      console.error('Erro ao carregar lição:', error);
    } finally {
      setCarregando(false);
    }
  };

  const handleResposta = (perguntaId: string, resposta: string) => {
    setRespostas(prev => ({ ...prev, [perguntaId]: resposta }));
    setRespostaSelecionada(resposta);
    setMostrarFeedback(true);
  };

  const handleProximaPergunta = () => {
    if (perguntaAtual < (licao?.perguntas.length || 0) - 1) {
      setPerguntaAtual(prev => prev + 1);
      setRespostaSelecionada(null);
      setMostrarFeedback(false);
    } else {
      onComplete();
    }
  };

  const handleAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual(prev => prev - 1);
      setRespostaSelecionada(null);
      setMostrarFeedback(false);
    }
  };

  if (carregando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Carregando lição...</h2>
          <Progress value={66} className="h-2" />
        </Card>
      </div>
    );
  }

  if (!licao) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Lição não encontrada</h2>
          <Button onClick={onBack}>Voltar</Button>
        </Card>
      </div>
    );
  }

  const progresso = ((perguntaAtual + 1) / licao.perguntas.length) * 100;
  const pergunta = licao.perguntas[perguntaAtual];
  const respostaCorreta = respostas[pergunta.id] === pergunta.alternativas.find(a => a.correta)?.id;

  // Mostrar conteúdo teórico antes das perguntas
  if (perguntaAtual === 0 && !respostaSelecionada) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="sm" onClick={onBack}>
                <ChevronLeft className="mr-2" />
                Voltar
              </Button>
              <Badge variant="secondary">{licao.duracao}</Badge>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2">{licao.titulo}</h1>
              <p className="text-gray-600 dark:text-gray-300">{licao.descricao}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Conteúdo da Lição</h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <p className="text-lg mb-4">{licao.conteudo.introducao}</p>
                
                {licao.conteudo.conceitos.map((conceito, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">{conceito.titulo}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{conceito.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={() => setPerguntaAtual(0)}>
                Começar Quiz
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" size="sm" onClick={handleAnterior} disabled={perguntaAtual === 0}>
              <ChevronLeft className="mr-2" />
              Anterior
            </Button>
            <Badge variant="secondary">Pergunta {perguntaAtual + 1}/{licao.perguntas.length}</Badge>
          </div>
          <Progress value={progresso} className="h-2" />
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">{pergunta.texto}</h2>
          
          <div className="space-y-4 mb-6">
            {pergunta.alternativas.map((alternativa) => {
              const isSelected = respostaSelecionada === alternativa.id;
              let bgColor = "bg-white dark:bg-gray-800";
              let iconMostrar = <Circle className="w-5 h-5 text-gray-400" />;
              
              if (mostrarFeedback) {
                if (isSelected && alternativa.correta) {
                  bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                  iconMostrar = <Check className="w-5 h-5 text-green-600" />;
                } else if (isSelected && !alternativa.correta) {
                  bgColor = "bg-red-100 dark:bg-red-900 border-red-500";
                  iconMostrar = <X className="w-5 h-5 text-red-600" />;
                } else if (!isSelected && alternativa.correta) {
                  bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                  iconMostrar = <Check className="w-5 h-5 text-green-600" />;
                }
              }
              
              return (
                <div key={alternativa.id}>
                  <input
                    type="radio"
                    id={alternativa.id}
                    name="resposta"
                    value={alternativa.id}
                    checked={isSelected}
                    onChange={() => handleResposta(pergunta.id, alternativa.id)}
                    className="sr-only peer"
                    disabled={mostrarFeedback}
                  />
                  <label
                    htmlFor={alternativa.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${bgColor} ${
                      !mostrarFeedback 
                        ? "hover:border-purple-400 dark:hover:border-purple-600" 
                        : "cursor-default"
                    }`}
                  >
                    <span className="mr-3">{iconMostrar}</span>
                    {alternativa.texto}
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
                <p className="text-sm mb-3">{pergunta.explicacao}</p>
                <p className="text-sm font-medium">{alternativas.find(a => a.id === respostaSelecionada)?.feedback}</p>
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
              onClick={onBack}
            >
              <ChevronLeft className="mr-2" />
              Sair
            </Button>
            
            {mostrarFeedback ? (
              <Button 
                size="sm" 
                onClick={handleProximaPergunta}
              >
                {perguntaAtual < licao.perguntas.length - 1 ? "Próxima" : "Concluir"}
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

export default DynamicLesson;