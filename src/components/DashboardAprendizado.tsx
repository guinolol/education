"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Flame, MessageSquare, Star, Crown, Zap
} from "lucide-react";
import LearningPath from "./LearningPath";
import { cn } from "@/lib/utils";

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

    let type: 'lesson' | 'checkpoint' | 'treasure' = 'lesson';
    if ((index + 1) % 5 === 0) {
      type = 'checkpoint';
    } else if ((index + 1) % 10 === 0) {
      type = 'treasure';
    }

    return {
      id: baseId + index,
      titulo: `${titlePrefix} ${index + 1}: ${lesson.title}`,
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
    { id: 1, titulo: "Primeiros Passos", icon: Star, conquistado: completedLessons > 0 },
    { id: 2, titulo: "Sequência Épica", icon: Flame, conquistado: true },
    { id: 3, titulo: "Velocista", icon: Zap, conquistado: completedLessons >= 3 },
    { id: 4, titulo: "Mestre", icon: Crown, conquistado: nivel >= 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header compacto e moderno */}
        <Card className="p-6 border-2 shadow-xl bg-white/80 backdrop-blur">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            {/* Nível e XP */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-400 blur-lg opacity-40 rounded-full" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl border-4 border-purple-200 shadow-xl">
                  {nivel}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">Nível {nivel}</p>
                <div className="w-48 mt-2 bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 shadow-lg"
                    style={{ width: `${(xp / xpProximoNivel) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-1 font-semibold">{xp}/{xpProximoNivel} XP</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-400 blur-lg opacity-40 rounded-full" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{streak}</p>
                  <p className="text-xs text-slate-500 font-semibold">dias</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-40 rounded-full" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{conquistas.filter(c => c.conquistado).length}</p>
                  <p className="text-xs text-slate-500 font-semibold">conquistas</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Trilha principal */}
        <Card className="p-8 border-2 shadow-xl bg-gradient-to-b from-white via-purple-50/30 to-blue-50/30 backdrop-blur">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                <trilhaSelecionada.icone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-800">{trilhaSelecionada.titulo}</h2>
                <p className="text-sm text-slate-500">Continue sua jornada de aprendizado</p>
              </div>
            </div>
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
              {completedLessons}/{totalLessons}
            </Badge>
          </div>

          <LearningPath
            trilhaId={trilhaSelecionada.id}
            lessons={trilhaSelecionada.lessons}
            onLessonClick={handleIniciarModulo}
          />
        </Card>

        {/* Conquistas grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {conquistas.map((c) => (
            <Card
              key={c.id}
              className={cn(
                "p-6 text-center transition-all duration-300 border-2",
                c.conquistado
                  ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-300 shadow-lg hover:shadow-xl hover:-translate-y-1'
                  : 'bg-slate-50 border-slate-200 opacity-50'
              )}
            >
              <div className="relative inline-block mb-3">
                {c.conquistado && (
                  <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-40" />
                )}
                <c.icon className={cn(
                  "relative w-10 h-10 mx-auto",
                  c.conquistado ? 'text-yellow-600' : 'text-slate-400'
                )} />
              </div>
              <p className="text-sm font-bold text-slate-700">{c.titulo}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAprendizado;