"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Lock, Check, Play, Star, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

interface LessonNodeProps {
  title: string;
  teaser: string;
  status: 'completed' | 'current' | 'locked' | 'unlocked';
  xp: number;
  type?: 'lesson' | 'checkpoint' | 'treasure';
  position: 'left' | 'center' | 'right';
  onClick: () => void;
}

const statusConfig = {
  completed: {
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    border: "border-yellow-300 border-4",
    shadow: "shadow-lg shadow-yellow-200/50",
    icon: Check,
    glow: "ring-4 ring-yellow-200/50"
  },
  current: {
    bg: "bg-gradient-to-br from-green-400 to-green-500",
    border: "border-green-300 border-4",
    shadow: "shadow-xl shadow-green-300/60 animate-pulse",
    icon: Play,
    glow: "ring-4 ring-green-300 ring-offset-2"
  },
  unlocked: {
    bg: "bg-gradient-to-br from-blue-400 to-blue-500",
    border: "border-blue-300 border-4",
    shadow: "shadow-md shadow-blue-200/50",
    icon: Star,
    glow: ""
  },
  locked: {
    bg: "bg-gray-300",
    border: "border-gray-400 border-4",
    shadow: "",
    icon: Lock,
    glow: ""
  },
};

const positionClasses = {
  left: 'self-start ml-8',
  center: 'self-center',
  right: 'self-end mr-8'
};

const LessonNode = ({ 
  title, 
  teaser, 
  status, 
  xp, 
  type = 'lesson', 
  position,
  onClick 
}: LessonNodeProps) => {
  const [showTeaser, setShowTeaser] = useState(false);
  const config = statusConfig[status];
  const Icon = config.icon;
  const isDisabled = status === 'locked';
  const isCheckpoint = type === 'checkpoint';
  const isTreasure = type === 'treasure';

  return (
    <div className={cn("relative flex flex-col items-center", positionClasses[position])}>
      {/* Badge especial */}
      {isCheckpoint && (
        <Crown className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-500 drop-shadow-lg animate-bounce z-20" />
      )}
      {isTreasure && (
        <Sparkles className="absolute -top-6 left-1/2 -translate-x-1/2 w-7 h-7 text-purple-500 drop-shadow-lg animate-pulse z-20" />
      )}

      {/* Nó principal */}
      <div
        className="relative"
        onMouseEnter={() => !isDisabled && setShowTeaser(true)}
        onMouseLeave={() => setShowTeaser(false)}
        onClick={() => !isDisabled && setShowTeaser(!showTeaser)}
      >
        <Button
          className={cn(
            "w-20 h-20 rounded-full p-0 transition-all duration-300 relative z-10",
            config.bg,
            config.border,
            config.shadow,
            config.glow,
            !isDisabled && "hover:scale-110 active:scale-95 cursor-pointer",
            isDisabled && "cursor-not-allowed opacity-60"
          )}
          onClick={onClick}
          disabled={isDisabled}
        >
          <Icon className="w-10 h-10 text-white" />
        </Button>

        {/* Teaser popup */}
        {showTeaser && !isDisabled && (
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 w-72 bg-white rounded-2xl shadow-2xl p-4 z-30 border-2",
            "animate-in fade-in slide-in-from-bottom-2 duration-200",
            position === 'left' ? 'left-24' : position === 'right' ? 'right-24' : 'left-24',
            status === 'completed' ? 'border-yellow-300' : status === 'current' ? 'border-green-300' : 'border-blue-300'
          )}>
            {/* Seta apontando pro nó */}
            <div className={cn(
              "absolute top-1/2 -translate-y-1/2 w-0 h-0",
              "border-t-[10px] border-t-transparent",
              "border-b-[10px] border-b-transparent",
              position === 'right' ? 'right-full border-r-[12px] border-r-white' : 'left-full border-l-[12px] border-l-white'
            )} />

            <div className="space-y-2">
              <h4 className="font-bold text-gray-800 text-sm leading-tight">
                {title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {teaser}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-700">+{xp} XP</span>
                </div>
                {status === 'completed' && (
                  <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Concluído
                  </span>
                )}
                {status === 'current' && (
                  <span className="text-xs font-semibold text-green-600">
                    Em andamento
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Label abaixo do nó (sempre visível) */}
      {!isDisabled && (
        <div className="mt-2 text-center max-w-[100px]">
          <p className="text-xs font-medium text-gray-700 truncate">
            {title.split(':')[1] || title}
          </p>
        </div>
      )}
      
      {isDisabled && (
        <div className="mt-2 text-center">
          <Lock className="w-4 h-4 text-gray-400 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default LessonNode;


// ============================================
// 2. LearningPath.tsx
// ============================================
"use client";

import LessonNode from "./LessonNode";

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

interface LearningPathProps {
  trilhaId: string;
  lessons: Modulo[];
  onLessonClick: (lessonId: number) => void;
}

const LearningPath = ({ lessons, onLessonClick }: LearningPathProps) => {
  const firstIncompleteIndex = lessons.findIndex(l => !l.concluido);
  const currentLessonIndex = firstIncompleteIndex === -1 ? lessons.length - 1 : firstIncompleteIndex;

  // Padrão de posições para criar o caminho sinuoso
  const pathPattern = ['center', 'right', 'center', 'left', 'center', 'right', 'left', 'center'];

  return (
    <div className="relative w-full py-8">
      {/* Caminho decorativo de fundo */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
        style={{ zIndex: 0 }}
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d={`M 50% 0 Q 70% 10%, 50% 15% T 30% 30% T 70% 45% T 50% 60% T 30% 75% T 50% 90% T 50% 100%`}
          stroke="url(#pathGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="8 4"
        />
      </svg>

      {/* Nós das lições */}
      <div className="relative flex flex-col gap-16 items-center" style={{ zIndex: 1 }}>
        {lessons.map((lesson, index) => {
          let status: 'completed' | 'current' | 'locked' | 'unlocked';
          
          if (lesson.concluido) {
            status = 'completed';
          } else if (index === currentLessonIndex) {
            status = 'current';
          } else if (lesson.desbloqueado && index < currentLessonIndex) {
            status = 'unlocked';
          } else if (lesson.desbloqueado) {
            status = 'unlocked';
          } else {
            status = 'locked';
          }

          const position = pathPattern[index % pathPattern.length] as 'left' | 'center' | 'right';

          return (
            <LessonNode
              key={lesson.id}
              title={lesson.titulo}
              teaser={lesson.teaser || lesson.descricao}
              status={status}
              xp={lesson.xp}
              type={lesson.type}
              position={position}
              onClick={() => onLessonClick(lesson.lessonId)}
            />
          );
        })}
      </div>

      {/* Indicador de continuação */}
      <div className="flex justify-center mt-12">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-4 border-gray-400 opacity-40">
          <span className="text-2xl">🔒</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;


// ============================================
// 3. DashboardAprendizado.tsx (Atualizado)
// ============================================
"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Star, Flame, BookOpen, MessageSquare, Crown
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

    // Define tipos especiais
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
        {/* Header */}
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

        {/* Trilha */}
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

        {/* Conquistas */}
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