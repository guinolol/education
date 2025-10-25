"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock } from 'lucide-react';

const MicroLesson1 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Qual é o problema fundamental das conversas com clientes?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não entendem o mercado', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Conversas com clientes são ruins por padrão', icone: <Clock className="w-4 h-4" /> },
        { valor: 'c', label: 'Os empreendedores não sabem ouvir', icone: <Clock className="w-4 h-4" /> },
        { valor: 'd', label: 'As empresas não têm tempo', icone: <Clock className="w-4 h-4" /> }
      ],
      explicacao: 'O problema fundamental é que conversas com clientes são ruins por padrão. É seu trabalho consertá-las.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'O que é o Teste da Mãe?',
      opcoes: [
        { valor: 'a', label: 'Um conjunto de regras para elaborar boas perguntas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'b', label: 'Um método para validar ideias de negócios', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'c', label: 'Um framework para análise de mercado', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Um guia para apresentações de negócios', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'O Teste da Mãe é um conjunto de regras simples para elaborar boas perguntas sobre as quais nem mesmo sua mãe pode mentir.',
      correta: 'a'
    },
    {
      id: '3',
      pergunta: 'Qual é a regra geral sobre conversas com clientes?',
      opcoes: [
        { valor: 'a', label: 'Quanto mais você fala, melhor está se saindo', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Quanto mais você ouve, melhor está se saindo', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'É preciso apresentar sua ideia para ganhar confiança', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'É preciso ouvir mais do que falar', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Regra geral: Quanto mais você fala, pior está se saindo. Você não aprende nada enquanto está falando.',
      correta: 'b'
    },
    {
      id: '4',
      pergunta: 'Por que opiniões são inúteis?',
      opcoes: [
        { valor: 'a', label: 'As pessoas não sabem o que querem', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Apenas o mercado pode dizer se sua ideia é boa', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'As pessoas são egoístas', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'As opiniões são difíceis de medir', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Opiniões são inúteis. Apenas o mercado pode dizer se sua ideia é boa. Opiniões, especialmente de não especialistas, são ruído e geram falsos positivos.',
      correta: 'b'
    },
    {
      id: '5',
      pergunta: 'Qual é a melhor abordagem para perguntar sobre o futuro?',
      opcoes: [
        { valor: 'a', label: 'Perguntar se a pessoa compraria algo', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Perguntar sobre ações passadas', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Perguntar sobre desejos pessoais', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'Perguntar sobre tendências do mercado', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Pergunte sobre especificidades do passado, em vez de generalidades ou opiniões sobre o futuro. Ações passadas são fatos; intenções futuras são mentiras otimistas.',
      correta: 'b'
    },
    {
      id: '6',
      pergunta: 'O que é "fluff" e como lidar com isso?',
      opcoes: [
        { valor: 'a', label: 'Informações vagas que devem ser ignoradas', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Elogios que devem ser ignorados', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Ideias que devem ser implementadas', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'Informações vagas que devem ser ancoradas em exemplos específicos', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: '"Fluff" vem em três formas: alegações genéricas, promessas futuras e possibilidades hipotéticas. Ancore essas declarações vagas em exemplos específicos do passado.',
      correta: 'd'
    },
    {
      id: '7',
      pergunta: 'Como evitar pedidos de funcionalidades?',
      opcoes: [
        { valor: 'a', label: 'Ignorar os clientes', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Usar perguntas de aprofundamento para encontrar a causa raiz', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Oferecer mais opções', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'Focar em melhorar a interface', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Ideias e pedidos de funcionalidades devem ser compreendidos, mas não obedecidos. Use perguntas de aprofundamento para encontrar a causa raiz.',
      correta: 'b'
    },
    {
      id: '8',
      pergunta: 'Qual é a regra geral sobre busca de aprovação?',
      opcoes: [
        { valor: 'a', label: 'É importante buscar aprovação constante', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'É preciso sempre apresentar sua ideia', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'É melhor evitar conversas com clientes', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Se você mencionar sua ideia, as pessoas tentarão proteger seus sentimentos. Evite "pescar elogios" ou expor seu ego.',
      correta: 'b'
    },
    {
      id: '9',
      pergunta: 'O que é importante em uma conversa?',
      opcoes: [
        { valor: 'a', label: 'Fazer muitas perguntas', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Ouvir mais do que falar', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Manter o foco na sua ideia', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'Usar linguagem técnica', icone: <Target className="w-4 h-4" /> }
      ],
      explicacao: 'Você deve ter medo de pelo menos uma das perguntas que está fazendo em cada conversa. Perguntas importantes são aquelas cujas respostas podem mudar completamente ou invalidar seu negócio.',
      correta: 'a'
    },
    {
      id: '10',
      pergunta: 'Qual é a melhor estratégia para encontrar pessoas para conversar?',
      opcoes: [
        { valor: 'a', label: 'Usar ligações frias', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Organizar meetups', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Criar introduções calorosas', icone: <Trophy className="w-4 h-4" /> },
        { valor: 'd', label: 'Todas as anteriores', icone: <Target className="w-4 h-4" /> }
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
            Você completou a primeira microlição sobre The Mom Test. Agora você está pronto para aplicar essas técnicas em suas conversas com clientes.
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

export default MicroLesson1;