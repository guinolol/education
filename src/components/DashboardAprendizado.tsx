"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Star, Zap, Target, Clock, 
  Play, CheckCircle, Lock, Flame,
  TrendingUp, Award, BookOpen, Users, Rocket, Lightbulb, MessageSquare
} from "lucide-react";

// Importar os dados das novas trilhas
import crucialConversationsLessons from '@/data/crucial-conversations/Crucial_Conversations.json';

interface DashboardAprendizadoProps {
  resultadoQuiz: any;
}

interface Modulo {
  id: number;
  titulo: string;
  descricao: string;
  progresso: number;
  desbloqueado: boolean;
  concluido: boolean;
  xp: number;
  dificuldade: string;
  duracao: string;
  lessonId: number;
}

interface Trilha {
  id: string;
  titulo: string;
  icone: React.ElementType;
  lessons: Modulo[];
  totalLessons: number;
}

const mapLessonsToModules = (data: any[], baseId: number, titlePrefix: string, icon: React.ElementType, difficulty: string): Modulo[] => {
  return data.map((lesson, index) => ({
    id: baseId + index,
    titulo: `${titlePrefix}: ${lesson.title}`,
    descricao: lesson.conclusionMessage.split('.')[0] + '.',
    progresso: 0,
    desbloqueado: true,
    concluido: false,
    xp: 50 + index * 10,
    dificuldade: difficulty,
    duracao: `${Math.ceil(lesson.questions.length * 1.5)} min`,
    lessonId: lesson.id,
  }));
};

const DashboardAprendizado = ({ resultadoQuiz }: DashboardAprendizadoProps) => {
  const navigate = useNavigate();
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(150);
  const [xpProximoNivel, setXpProximoNivel] = useState(300);
  const [streak, setStreak] = useState(5);
  
  // Mapeamento das lições para o formato de módulos
  const trilhasData: Trilha[] = [
    {
      id: 'crucialConversations',
      titulo: "Trilha 1: Crucial Conversations",
      icone: MessageSquare,
      lessons: mapLessonsToModules(crucialConversationsLessons, 100, "Crucial Conversations", MessageSquare, "iniciante"),
      totalLessons: crucialConversationsLessons.length,
    },
  ];

  // Estado para armazenar o progresso real (simulado)
  const [trilhas, setTrilhas] = useState(trilhasData);
  const [trilhaSelecionada, setTrilhaSelecionada] = useState(trilhas[0]);

  // Simulação de conclusão de lição (para fins de demonstração)
  useEffect(() => {
    // Simular que a primeira lição da primeira trilha está 50% completa
    setTrilhas(prevTrilhas => {
      const newTrilhas = [...prevTrilhas];
      if (newTrilhas[0] && newTrilhas[0].lessons[0]) {
        newTrilhas[0].lessons[0].progresso = 50;
      }
      return newTrilhas;
    });
  }, []);


  const handleIniciarModulo = (trilhaId: string, lessonId: number) => {
    const trilha = trilhas.find(t => t.id === trilhaId);
    const modulo = trilha?.lessons.find(m => m.lessonId === lessonId);

    if (modulo && modulo.desbloqueado) {
      // O lessonId é o ID real dentro do JSON (1, 2, 3...)
      navigate(`/lesson/${modulo.lessonId}?trilha=${trilhaId}`);
    }
  };

  const getDificuldadeCor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'iniciante': return 'bg-green-500';
      case 'intermediario': return 'bg-yellow-500';
      case 'avancado': return 'bg-orange-500';
      case 'expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const totalLessons = trilhas.reduce((sum, t) => sum + t.totalLessons, 0);
  const completedLessons = trilhas.flatMap(t => t.lessons).filter(m => m.concluido).length;
  const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", descricao: "Complete sua primeira microlição", icon: Trophy, conquistado: completedLessons > 0 },
    { id: 2, titulo: "Maratona de 5 Dias", descricao: "Estude por 5 dias consecutivos", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", descricao: "Complete 3 microlições em uma semana", icon: Zap, conquistado: completedLessons >= 3 },
    { id: 4, titulo: "Expert em Progresso", descricao: "Alcance o nível 5", icon: Award, conquistado: nivel >= 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header com Status */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Nível {nivel}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Experiente</div>
                </div>
                
                <div className="w-32">
                  <Progress value={(xp / xpProximoNivel) * 100} className="h-3" />
                  <p className="text-xs text-center mt-1">{xp}/{xpProximoNivel} XP</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="text-xl font-bold">{streak}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Dias</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-xl font-bold">{conquistas.filter(c => c.conquistado).length}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Conquistas</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Módulos de Aprendizado */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Trilhas de Aprendizado</h2>
              
              {/* Navegação de Trilhas */}
              <div className="flex space-x-2 overflow-x-auto pb-4 mb-6 border-b border-gray-200 dark:border-gray-700">
                {trilhas.map((trilha) => (
                  <Button
                    key={trilha.id}
                    variant={trilhaSelecionada.id === trilha.id ? "default" : "outline"}
                    onClick={() => setTrilhaSelecionada(trilha)}
                    className="flex-shrink-0"
                  >
                    <trilha.icone className="w-4 h-4 mr-2" />
                    {trilha.titulo.split(': ')[1]}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <trilhaSelecionada.icone className="w-5 h-5 text-purple-600" />
                  {trilhaSelecionada.titulo}
                  <Badge variant="secondary">{trilhaSelecionada.totalLessons} Lições</Badge>
                </h3>
                
                {trilhaSelecionada.lessons.map((modulo) => (
                  <Card 
                    key={modulo.id} 
                    className={`p-4 ${!modulo.desbloqueado ? 'opacity-60' : 'hover:shadow-lg'} transition-all cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{modulo.titulo}</h3>
                          <Badge className={`${getDificuldadeCor(modulo.dificuldade)} text-white`}>
                            {modulo.dificuldade}
                          </Badge>
                          {!modulo.desbloqueado && <Lock className="w-4 h-4 text-gray-400" />}
                          {modulo.concluido && <CheckCircle className="w-4 h-4 text-green-500" />}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{modulo.descricao}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {modulo.duracao}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {modulo.xp} XP
                          </span>
                        </div>

                        {modulo.desbloqueado && modulo.progresso > 0 && !modulo.concluido && (
                          <div className="mt-3">
                            <Progress value={modulo.progresso} className="h-2" />
                            <p className="text-xs text-gray-500 mt-1">{modulo.progresso}% completo</p>
                          </div>
                        )}
                      </div>

                      <div className="ml-4">
                        {modulo.desbloqueado && !modulo.concluido && (
                          <Button 
                            size="sm"
                            onClick={() => handleIniciarModulo(trilhaSelecionada.id, modulo.lessonId)}
                          >
                            <Play className="w-4 h-4 mr-1" />
                            {modulo.progresso > 0 ? 'Continuar' : 'Iniciar'}
                          </Button>
                        )}
                        {modulo.concluido && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Concluído
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Conquistas e Stats */}
          <div className="space-y-6">
            {/* Conquistas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Conquistas
              </h3>
              <div className="space-y-3">
                {conquistas.map((conquista) => (
                  <div 
                    key={conquista.id} 
                    className={`p-3 rounded-lg ${conquista.conquistado ? 'bg-yellow-50 dark:bg-yellow-900' : 'bg-gray-50 dark:bg-gray-800'}`}
                  >
                    <div className="flex items-center gap-3">
                      <conquista.icon className={`w-5 h-5 ${conquista.conquistado ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{conquista.titulo}</p>
                        <p className="text-xs text-gray-500">{conquista.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Estatísticas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Progresso Geral
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Taxa de Conclusão</span>
                    <span className="font-semibold">{Math.round(completionRate)}%</span>
                  </div>
                  <Progress value={completionRate} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{completedLessons}</p>
                    <p className="text-xs text-gray-500">Lições Completas</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalLessons - completedLessons}</p>
                    <p className="text-xs text-gray-500">Restantes</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dica do Dia */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                Dica do Dia
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                "A consistência é mais importante que a intensidade. Estude 10 minutos por dia todos os dias em vez de 1 hora apenas no fim de semana."
              </p>
              <Button size="sm" className="w-full mt-4">
                Ver Mais Dicas
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAprendizado;