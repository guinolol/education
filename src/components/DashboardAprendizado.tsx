"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Star, Flame, MessageSquare, Crown
} from "lucide-react";
import LearningPath from "./LearningPath";

import crucialConversationsLessons from '@/data/crucial-conversations/Crucial_Conversations.json';

interface DashboardAprendizadoProps {
  resultadoQuiz: any;
}

interface Modulo {
  id: number;
  titulo: string;
  teaser?: string;
  descricao: string;
  progresso: number;
  desbloqueado: boolean;
  concluido: boolean;
  xp: number;
  dificuldade: string;
  duracao: string;
  lessonId: number;
  type?: 'lesson' | 'checkpoint' | 'treasure';
}

const mapLessonsToModules = (data: any[], baseId: number, titlePrefix: string): Modulo[] => {
  return data.map((lesson, index) => {
    let progresso = 0;
    let concluido = false;
    let desbloqueado = index === 0;

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
    
    if (index > 0 && concluido) {
        desbloqueado = true;
    }

    let type: 'lesson' | 'checkpoint' | 'treasure' = 'lesson';
    if ((index + 1) % 4 === 0) {
      type = 'checkpoint';
    } else if ((index + 1) % 8 === 0) {
      type = 'treasure';
    }

    return {
      id: baseId + index,
      titulo: `${titlePrefix}: ${lesson.title}`,
      teaser: lesson.teaser || lesson.conclusionMessage?.split('.')[0] + '.',
      descricao: lesson.conclusionMessage?.split('.')[0] + '.',
      progresso,
      desbloqueado,
      concluido,
      xp: 50 + index * 10,
      dificuldade: 'iniciante',
      duracao: `${Math.ceil(lesson.questions?.length * 1.5) || 10} min`,
      lessonId: lesson.id,
      type
    };
  });
};

const DashboardAprendizado = ({ resultadoQuiz }: DashboardAprendizadoProps) => {
  const navigate = useNavigate();
  const [nivel] = useState(5);
  const [xp] = useState(240);
  const [xpProximoNivel] = useState(500);
  const [streak] = useState(12);

  const trilhaSelecionada = {
    id: 'crucialConversations',
    titulo: "Conversas Cruciais",
    icone: MessageSquare,
    lessons: mapLessonsToModules(crucialConversationsLessons, 100, "Lição"),
  };

  const handleIniciarModulo = (lessonId: number) => {
    const modulo = trilhaSelecionada.lessons.find(m => m.lessonId === lessonId);
    if (modulo?.desbloqueado) {
      navigate(`/lesson/${lessonId}?trilha=${trilhaSelecionada.id}`);
    }
  };

  const completedLessons = trilhaSelecionada.lessons.filter(m => m.concluido).length;
  const totalLessons = trilhaSelecionada.lessons.length;

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", icon: Trophy, conquistado: completedLessons > 0 },
    { id: 2, titulo: "Maratona de 5 Dias", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", icon: Star, conquistado: completedLessons >= 3 },
    { id: 4, titulo: "Expert em Progresso", icon: Crown, conquistado: nivel >= 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-5xl mx-auto">
        <Card className="p-6 mb-6 border-2 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl border-4 border-purple-200 shadow-lg">
                {nivel}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600">Nível {nivel}</p>
                <div className="w-40 mt-1">
                  <Progress value={(xp / xpProximoNivel) * 100} className="h-3" />
                </div>
                <p className="text-xs text-gray-500 mt-1">{xp}/{xpProximoNivel} XP</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold">{streak}</p>
                  <p className="text-xs text-gray-500">dias</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold">{conquistas.filter(c => c.conquistado).length}</p>
                  <p className="text-xs text-gray-500">conquistas</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 mb-6 border-2 shadow-lg bg-gradient-to-b from-white to-purple-50/30">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <trilhaSelecionada.icone className="w-8 h-8 text-purple-600" />
              {trilhaSelecionada.titulo}
            </h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {completedLessons}/{totalLessons}
            </Badge>
          </div>

          <LearningPath
            trilhaId={trilhaSelecionada.id}
            lessons={trilhaSelecionada.lessons}
            onLessonClick={handleIniciarModulo}
          />
        </Card>

        <Card className="p-6 border-2 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Conquistas Recentes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {conquistas.map((c) => (
              <div
                key={c.id}
                className={`p-4 rounded-xl text-center transition-all ${
                  c.conquistado
                    ? 'bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-md'
                    : 'bg-gray-100 opacity-50'
                }`}
              >
                <c.icon className={`w-8 h-8 mx-auto mb-2 ${c.conquistado ? 'text-yellow-600' : 'text-gray-400'}`} />
                <p className="text-xs font-semibold">{c.titulo}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAprendizado;