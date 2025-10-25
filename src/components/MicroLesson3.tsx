"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson3 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo principal de uma conversa inicial com o cliente?',
      opcoes: [
        { valor: 'a', label: 'Vender sua ideia', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Obter fatos concretos sobre a vida e a visão de mundo do cliente', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Construir relacionamentos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Apresentar sua solução', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O objetivo de uma conversa inicial com o cliente é obter fatos concretos sobre a vida e a visão de mundo dele, que permitam melhorar o negócio.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Por que opiniões são inúteis?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não sabem o que querem', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas são egoístas', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'As opiniões são difíceis de medir', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Por que perguntas sobre o futuro são problemáticas?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não conseguem prever o futuro', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas mentem sobre o futuro', icone: <Target className="w-4 h-4" /> },

<dyad-write path="src/components/MicroLesson3.tsx" description="Fixing syntax errors and missing imports">
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson3 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo principal de uma conversa inicial com o cliente?',
      opcoes: [
        { valor: 'a', label: 'Vender sua ideia', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Obter fatos concretos sobre a vida e a visão de mundo do cliente', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Construir relacionamentos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Apresentar sua solução', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O objetivo de uma conversa inicial com o cliente é obter fatos concretos sobre a vida e a visão de mundo dele, que permitam melhorar o negócio.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Por que opiniões são inúteis?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não sabem o que querem', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas são egoístas', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'As opiniões são difíceis de medir', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
      correta: 'b'
    },
    {
      id: '3',
      pergunta: 'Por que perguntas sobre o futuro são problemáticas?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não conseguem prever o futuro', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas mentem sobre o futuro', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'O futuro é incerto', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Qualquer coisa que envolva o futuro é uma mentira excessivamente otimista. Perguntas como "Você compraria..." ou "Quanto você pagaria..." convidam a respostas hipotéticas e otimistas que não se traduzem em vendas reais.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Por que as pessoas sabem quais são seus problemas, mas não sabem como resolvê-los?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não são criativas', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Você é o dono da solução, eles são os donos do problema', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas não têm tempo para pensar em soluções', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'As pessoas não entendem tecnologia', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'As pessoas sabem quais são seus problemas, mas não sabem como resolvê-los. Você é o dono da solução, eles são os donos do problema.',
      correta: 'b'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor pergunta para entender os objetivos de um cliente?',
      opcoes: [
        { valor: 'a', label: 'Qual seria o seu produto dos sonhos?', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Por que você se dá ao trabalho?', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'O que você gostaria de melhorar?', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Quais funcionalidades você gostaria?', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Você está atirando no escuro até entender os objetivos deles. Perguntas como "Por que você se dá ao trabalho?" ajudam a ir do problema percebido ao problema real, revelando as motivações essenciais.',
      correta: 'b'
    },
    {
      id: '6',
      pergunta: 'Como distinguir problemas que as pessoas pagarão para resolver de meras inconveniências?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Quais são as implicações disso?"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Perguntar "Quanto isso te custa?"', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Perguntar "Isso é importante para você?"', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Perguntar "Você já tentou resolver isso?"', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Alguns problemas, na verdade, não importam. Usar perguntas como "Quais são as implicações disso?" ajuda a distinguir problemas que as pessoas pagarão para resolver de meras inconveniências.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'Por que é importante observar alguém realizando uma tarefa?',
      opcoes: [
        { valor: 'a', label: 'Para aprender a fazer a tarefa', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Para mostrar que você é um bom observador', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Para ver onde os problemas e ineficiências realmente estão', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Para entender o fluxo de trabalho', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Observar alguém realizando uma tarefa mostrará onde os problemas e ineficiências realmente estão, não onde o cliente pensa que eles estão.',
      correta: 'c'
    },
    {
      id: '8',
      pergunta: 'Qual é a melhor pergunta para avaliar a seriedade de um problema?',
      opcoes: [
        { valor: 'a', label: 'Quão sério é este problema para você?', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'O que mais você já tentou?', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Você já procurou soluções?', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Você está disposto a pagar para resolver isso?', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Se eles ainda não procuraram maneiras de resolver o problema, não vão procurar (ou comprar) a sua. Pergunte "O que mais você já tentou?" para avaliar o quão sério o problema é.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'Como entender o valor de um problema para um cliente?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Quanto você pagaria por isso?"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Perguntar "Como você está lidando com isso agora?"', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Perguntar "Isso é importante para você?"', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Perguntar "Você já gastou dinheiro para resolver isso?"', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Embora seja raro alguém dizer precisamente o que vai pagar, muitas vezes eles mostram o quanto vale para eles. Pergunte "Como você está lidando com isso agora?" para entender os custos atuais (em tempo e dinheiro), o que fornece uma âncora de preço.',
      correta: 'b'
    },
    {
      id: '10',
      pergunta: 'Como obter ajuda valiosa de clientes?',
      opcoes: [
        { valor: 'a', label: 'Perguntar "Você pode me ajudar?"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Perguntar "Com quem mais eu deveria conversar?"', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Perguntar "Há mais alguma coisa que eu deveria ter perguntado?"', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Todas as anteriores', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'As pessoas querem te ajudar, mas raramente o farão a menos que você lhes dê uma desculpa para isso. Perguntas como "Com quem mais eu deveria conversar?" e "Há mais alguma coisa que eu deveria ter perguntado?" abrem a porta para ajuda e insights valiosos.',
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
            Você completou a terceira microlição sobre perguntas eficazes. Agora você sabe como fazer perguntas que realmente geram insights valiosos.
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

export default MicroLesson3;