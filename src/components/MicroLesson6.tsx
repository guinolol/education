"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, BookOpen, Target, Zap, Clock, ChevronLeft } from 'lucide-react';

const MicroLesson6 = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntas = [
    {
      id: '1',
      pergunta: 'Por que startups não morrem de fome?',
      opcoes: [
        { valor: 'a', label: 'Porque têm dinheiro suficiente', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Porque se afogam em opções e feedback contraditório', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Porque têm muitos clientes', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Porque têm boas ideias', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Startups não morrem de fome, elas se afogam. Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opções e feedback contraditório.',
      correta: 'b'
    },
    {
      id: '2',
      pergunta: 'Qual é a regra geral sobre segmentação de clientes?',
      opcoes: [
        { valor: 'a', label: 'Se você não está encontrando problemas e objetivos consistentes, seu segmento ainda não é específico o suficiente', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Quanto mais clientes, melhor', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Segmentação não é importante no início', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Qualquer segmento serve', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Regra geral: Se você não está encontrando problemas e objetivos consistentes, seu segmento de cliente ainda não é específico o suficiente.',
      correta: 'a'
    },
    {
      id: '3',
      pergunta: 'O que é "fatiar o cliente" (customer slicing)?',
      opcoes: [
        { valor: 'a', label: 'Pegar um segmento amplo e dividi-lo em subconjuntos cada vez mais específicos', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Cortar clientes em pedaços', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Eliminar clientes ruins', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Aumentar o número de clientes', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Fatiar o Cliente (Customer Slicing): Pegue um segmento amplo e continue a dividi-lo em subconjuntos cada vez mais específicos até que você tenha uma ideia tangível de quem contatar e onde encontrá-los.',
      correta: 'a'
    },
    {
      id: '4',
      pergunta: 'Qual é a regra geral sobre bons segmentos de clientes?',
      opcoes: [
        { valor: 'a', label: 'Bons segmentos de clientes são um par "quem-onde"', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Bons segmentos de clientes são os maiores', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Bons segmentos de clientes são os mais ricos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Bons segmentos de clientes são os mais fáceis', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Regra geral: Bons segmentos de clientes são um par "quem-onde". Se você não sabe onde encontrar seus clientes, continue fatiando seu segmento até saber.',
      correta: 'a'
    },
    {
      id: '5',
      pergunta: 'Por que é importante ter um segmento focado?',
      opcoes: [
        { valor: 'a', label: 'Para evitar o afogamento em opções e feedback contraditório', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Para ter mais clientes', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Para vender mais', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Para ter mais feedback', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opções e feedback contraditório.',
      correta: 'a'
    },
    {
      id: '6',
      pergunta: 'Como saber se seu segmento é bom?',
      opcoes: [
        { valor: 'a', label: 'Se você está encontrando problemas e objetivos consistentes', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Se você tem muitos clientes', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Se você está vendendo muito', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Se você tem feedback positivo', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Se você está encontrando problemas e objetivos consistentes, seu segmento está no caminho certo. Se não, continue fatiando.',
      correta: 'a'
    },
    {
      id: '7',
      pergunta: 'O que é um "par quem-onde"?',
      opcoes: [
        { valor: 'a', label: 'Um par que define quem são seus clientes e onde encontrá-los', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Um par que define o que você vende e onde', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Um par que define quando e como', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Um par que define por quê e quanto', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Um par "quem-onde" define quem são seus clientes e onde encontrá-los. Isso é essencial para um bom segmento.',
      correta: 'a'
    },
    {
      id: '8',
      pergunta: 'Como encontrar seus clientes?',
      opcoes: [
        { valor: 'a', label: 'Continuar fatiando seu segmento até saber onde encontrá-los', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Esperar que eles encontrem você', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Usar apenas anúncios', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Fazer cold calling aleatório', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Se você não sabe onde encontrar seus clientes, continue fatiando seu segmento até saber.',
      correta: 'a'
    },
    {
      id: '9',
      pergunta: 'Por que feedback contraditório é problemático?',
      opcoes: [
        { valor: 'a', label: 'Porque confunde sobre o que construir', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Porque mostra que você está no caminho errado', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Porque indica que os clientes não gostam', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Porque mostra falta de interesse', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Feedback contraditório confunde sobre o que construir e pode levar a decisões erradas. Um segmento focado ajuda a evitar isso.',
      correta: 'a'
    },
    {
      id: '10',
      pergunta: 'Qual é a melhor abordagem para escolher clientes?',
      opcoes: [
        { valor: 'a', label: 'Ter um segmento focado e específico', icone: <Clock className="w-4 h-4" /> },
        { valor: 'b', label: 'Ter o máximo de clientes possível', icone: <BookOpen className="w-4 h-4" /> },
        { valor: 'c', label: 'Ter clientes ricos', icone: <Target className="w-4 h-4" /> },
        { valor: 'd', label: 'Ter clientes famosos', icone: <Zap className="w-4 h-4" /> }
      ],
      explicacao: 'Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opções e feedback contraditório.',
      correta: 'a'
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
            Você completou a sexta microlição sobre escolha de clientes. Agora você sabe como segmentar e encontrar seus clientes ideais.
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

export default MicroLesson6;