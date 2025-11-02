"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Trophy, ChevronLeft, ChevronRight,
  CheckCircle, XCircle,
  Check, X, Circle, BookOpen, Lightbulb, RefreshCw
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import InfographicViewer from './InfographicViewer';

export interface Question {
  id: string;
  question: string;
  options: { value: string; label: string }[];
  explanation: string;
  hint: string;
  correctAnswer: string;
  bookExample?: string;
}

interface ReviewLessonTemplateProps {
  title: string;
  questions: Question[];
  infographicHtml: string;
  onConclude: (xpEarned: number, score: number) => void;
}

const ReviewLessonTemplate = ({
  title,
  questions,
  infographicHtml,
  onConclude,
}: ReviewLessonTemplateProps) => {
  const [view, setView] = useState<'explanation' | 'quiz' | 'result'>('explanation');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return {
      correctCount,
      totalQuestions: questions.length,
      scorePercentage: questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0,
      xpEarned: correctCount * 15, // 15 XP por resposta correta na revisão
    };
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setView('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  if (view === 'explanation') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
            </div>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">A revisão é uma das ferramentas mais poderosas para a retenção de conhecimento a longo prazo. Ao revisitar conceitos, você fortalece as conexões neurais, tornando a informação mais acessível quando você mais precisa. Esta sessão de revisão aleatória foi projetada para testar seu conhecimento das últimas lições de forma misturada, simulando os desafios do mundo real onde os problemas não vêm em ordem. Prepare-se para reforçar o que aprendeu!</p>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={() => setView('quiz')} 
              className="mt-8 w-full"
            >
              Iniciar Revisão
              <ChevronRight className="ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (view === 'result') {
    const { correctCount, totalQuestions, scorePercentage, xpEarned } = calculateScore();

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Revisão Concluída!</h2>
              <p className="text-gray-600 dark:text-gray-300">Você completou a revisão de {totalQuestions} perguntas.</p>
              
              <div className="my-6 p-6 bg-purple-50 dark:bg-purple-900/50 rounded-lg border border-purple-200 dark:border-purple-700 inline-block">
                <p className="text-lg font-semibold">Sua Pontuação:</p>
                <p className="text-5xl font-bold my-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{scorePercentage}%</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Você acertou {correctCount} de {totalQuestions} questões.</p>
                <Badge className="mt-3 bg-amber-500 hover:bg-amber-600 text-white">+{xpEarned} XP</Badge>
              </div>
            </div>

            {infographicHtml && (
              <InfographicViewer
                htmlContent={infographicHtml}
                title={title}
              />
            )}

            <div className="mt-10 flex justify-center">
              <Button size="lg" className="w-full md:w-1/2" onClick={() => onConclude(xpEarned, scorePercentage)}>
                Voltar para o Dashboard
                <ChevronRight className="ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (view === 'quiz') {
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const isCorrect = answers[question.id] === question.correctAnswer;

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold">{title}</h1>
              <Badge variant="secondary">Exercício {currentQuestionIndex + 1}/{questions.length}</Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </p>
          </div>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold">{question.question}</h2>
            </div>

            <div className="space-y-4 mb-6">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option.value;
                const isCorrectOption = option.value === question.correctAnswer;
                let bgColor = "bg-white dark:bg-gray-800";
                let iconToShow = <Circle className="w-5 h-5 text-gray-400" />;

                if (showFeedback) {
                  if (isSelected && isCorrectOption) {
                    bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                    iconToShow = <Check className="w-5 h-5 text-green-600" />;
                  } else if (isSelected && !isCorrectOption) {
                    bgColor = "bg-red-100 dark:bg-red-900 border-red-500";
                    iconToShow = <X className="w-5 h-5 text-red-600" />;
                  } else if (!isSelected && isCorrectOption) {
                    bgColor = "bg-green-100 dark:bg-green-900 border-green-500";
                    iconToShow = <Check className="w-5 h-5 text-green-600" />;
                  }
                }

                return (
                  <div key={option.value}>
                    <input
                      type="radio"
                      id={option.value}
                      name="answer"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => handleAnswer(question.id, option.value)}
                      className="sr-only peer"
                      disabled={showFeedback}
                    />
                    <label
                      htmlFor={option.value}
                      className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${bgColor} ${
                        !showFeedback
                          ? "hover:border-purple-400 dark:hover:border-purple-600"
                          : "cursor-default"
                      }`}
                    >
                      <span className="mr-3">{iconToShow}</span>
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>

            {showFeedback && (
              <div className="mb-6">
                <div
                  className={`p-4 rounded-lg ${
                    isCorrect ? "bg-green-50 dark:bg-green-900" : "bg-red-50 dark:bg-red-900"
                  }`}
                >
                  <h3 className="font-semibold mb-2 flex items-center">
                    {isCorrect ? (
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
                  <p className="text-sm mb-3">{question.explanation}</p>
                  {question.bookExample && (
                    <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-sm font-medium flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Exemplo do livro:
                      </p>
                      <p className="text-sm italic">{question.bookExample}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <Accordion type="single" collapsible className="mb-6">
              <AccordionItem value="dica">
                <AccordionTrigger className="text-sm hover:no-underline">
                  <div className="flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Precisa de uma dica?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300 p-2">
                    {question.hint}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft className="mr-2" />
                Anterior
              </Button>

              {showFeedback ? (
                <Button size="sm" onClick={handleNextQuestion}>
                  {currentQuestionIndex < questions.length - 1 ? "Próxima" : "Concluir"}
                  <ChevronRight className="ml-2" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => {}}
                  disabled={!selectedAnswer}
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
  }

  return null;
};

export default ReviewLessonTemplate;