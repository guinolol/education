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
  TrendingUp, Award, BookOpen, MessageSquare
} from "lucide-react";
import LearningPath from "./LearningPath";

// Importar os dados da trilha existente
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

const mapLessonsToModules = (data: any[], baseId: number, titlePrefix: string, difficulty: string): Modulo[] => {
  return data.map((lesson, index) => {
    let progresso = 0;
    let concluido = false;
    let desbloqueado = index === 0; // A primeira lição é sempre desbloqueada

    // Simulação de progresso para o efeito visual da trilha
    if (index < 3) {
      concluido = true;
      progresso = 100;
      desbloqueado = true;
    } else if (index === 3) {
      progresso = 50;
      desbloqueado = true;
    } else if (index === 4) {
      desbloqueado = true;
    }
    
    // Se uma lição está concluída, a próxima deve estar desbloqueada
    if (index > 0 && data[index - 1] && data[index - 1].concluido) {
        desbloqueado = true;
    }


    return {
      id: baseId + index,
      titulo: `${titlePrefix}: ${lesson.title}`,
      descricao: lesson.conclusionMessage.split('.')[0] + '.',
      progresso: progresso,
      desbloqueado: desbloqueado,
      concluido: concluido,
      xp: 50 + index * 10,
      dificuldade: difficulty,
      duracao: `${Math.ceil(lesson.questions.length * 1.5)} min`,
      lessonId: lesson.id,
    };
  });
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
      titulo: "Trilha: Crucial Conversations",
      icone: MessageSquare,
      lessons: mapLessonsToModules(crucialConversationsLessons, 100, "Conversa Crucial", "iniciante"),
      totalLessons: crucialConversationsLessons.length,
    },
  ];

  const [trilhas] = useState(trilhasData);
  const trilhaSelecionada = trilhas[0];

  const handleIniciarModulo = (lessonId: number) => {
    const trilha = trilhas.find(t => t.id === trilhaSelecionada.id);
    const modulo = trilha?.lessons.find(m => m.lessonId === lessonId);

    if (modulo && modulo.desbloqueado) {
      navigate(`/lesson/${modulo.lessonId}?trilha=${trilhaSelecionada.id}`);
    }
  };

  const totalLessons = trilhaSelecionada.totalLessons;
  const completedLessons = trilhaSelecionada.lessons.filter(m => m.concluido).length;
  const completionRate = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", descricao: "Complete sua primeira microlição", icon: Trophy, conquistado: completedLessons > 0 },
    { id: 2, titulo: "Maratona de 5 Dias", descricao: "Estude por 5 dias consecutivos", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", descricao: "Complete 3 microlições em uma semana", icon: Zap, conquistado: completedLessons >= 3 },
    { id: 4, titulo: "Expert em Progresso", descricao: "Alcance o nível 5", icon: Award, conquistado: nivel >= 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
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

        {/* Learning Path Section */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <trilhaSelecionada.icone className="w-6 h-6 text-purple-600" />
                {trilhaSelecionada.titulo}
            </div>
            <Badge variant="secondary">{completedLessons}/{totalLessons} Lições</Badge>
          </h2>
          
          <LearningPath
            trilhaId={trilhaSelecionada.id}
            lessons={trilhaSelecionada.lessons}
            onLessonClick={handleIniciarModulo}
          />
        </Card>
        
        {/* Conquistas e Dica do Dia */}
        <div className="grid md:grid-cols-2 gap-6">
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
  );
};

export default DashboardAprendizado;