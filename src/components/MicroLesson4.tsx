"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson4 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o objetivo real das vendas em estágio inicial?',
      opcoes: [
        { valor: 'a', label: 'Gerar receita máxima', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'O aprendizado', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Construir relacionamentos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Validar o produto', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O objetivo real das vendas em estágio inicial é o aprendizado. A receita é apenas um efeito colateral.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Quais são os tipos de compromisso (moedas da conversa)?',
      opcoes: [
        { valor: 'a', label: 'Tempo, reputação e dinheiro', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Tempo, recursos e feedback', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Tempo, introduções e feedback', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Tempo, reputação e dinheiro', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'As principais "moedas" que eles podem oferecer são: Tempo (agendar reuniões, testar protótipos), Reputação (apresentar a outros, fornecer depoimentos) e Dinheiro (carta de intenção, pré-pedido).',
      correta: 'a'
    },
    {
      id: '3',
      pergunta: 'Por que compromisso é importante?',
      opcoes: [
        { valor: 'a', label: 'Para garantir que o cliente pague', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Para separar os leads reais dos "leads zumbis"', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Para construir confiança', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Para validar a ideia', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Após a fase de aprendizado, você precisa validar sua solução pedindo compromissos para separar os leads reais dos "leads zumbis" (aqueles que são amigáveis, mas nunca compram).',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Como identificar os primeiros clientes?',
      opcoes: [
        { valor: 'a', label: 'Pessoas que se emocionam com o que você está fazendo', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Pessoas que têm dinheiro para investir', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Pessoas que têm problemas sérios', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Pessoas que conhecem o mercado', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Seus primeiros clientes são loucos (no bom sentido). Eles querem tanto sua solução que estão dispostos a correr o risco de serem os primeiros. Fique atento às pessoas que se emocionam com o que você está fazendo.',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'Qual é a regra geral sobre compromisso?',
      opcoes: [
        { valor: 'a', label: 'Quanto mais eles estão abrindo mão, mais a sério você pode levar suas palavras gentis', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Compromisso é sempre bom', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Compromimento é opcional', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Compromimento deve ser mínimo', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Regra geral: Quanto mais eles estão abrindo mão, mais a sério você pode levar suas palavras gentis.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'O que é um "lead zumbi"?',
      opcoes: [
        { valor: 'a', label: 'Um cliente que não paga', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Um cliente que é amigável mas nunca compra', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Um cliente que não responde', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Um cliente que não tem interesse', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: '"Leads zumbis" são aqueles que são amigáveis, mas nunca compram. Eles dão feedback positivo mas não se comprometem.',
      correta: 'b'
    },
    {
      id: '7',
      pergunta: 'Qual é a melhor abordagem para pedir compromisso?',
      opcoes: [
        { valor: 'a', label: 'Perguntar diretamente "Você vai comprar?"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Pedir um próximo passo específico', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Esperar que o cliente ofereça', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Não pedir compromimento', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Uma reunião bem-sucedida termina com um avanço claro para o próximo passo. O compromisso é a prova de que as palavras do cliente são sérias.',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Por que é importante ter uma lista de 3 grandes perguntas?',
      opcoes: [
        { valor: 'a', label: 'Para mostrar que você está preparado', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Para manter o foco, evitar perguntas triviais e forçar a encarar questões difíceis', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Para impressionar o cliente', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Para garantir que você aprenda tudo', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Antes de qualquer conversa, defina com sua equipe as 3 coisas mais importantes que você precisa aprender. Isso mantém o foco, ajuda a evitar perguntas triviais e te força a encarar as questões difíceis.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'Como estruturar um pedido de reunião?',
      opcoes: [
        { valor: 'a', label: 'Visão, Enquadramento, Fraqueza, Pedestal, Pedido (VFWPA)', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Problema, Solução, Benefícios, Custo, Ação', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Introdução, Problema, Solução, Chamada para ação', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Contexto, Problema, Solução, Próximos passos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Mnemônico VFWPA - Vision (como você está tornando o mundo melhor), Framing (em que estágio você está e o que procura), Weakness (onde você precisa de ajuda específica), Pedestal (por que a ajuda deles é particularmente valiosa), Ask (peça ajuda de forma clara).',
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
            Você completou a quarta microlição sobre compromisso e avanço. Agora você sabe como validar sua solução e obter comprometimento real.
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

export default MicroLesson4;