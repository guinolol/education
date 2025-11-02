"use client";

import LessonNode, { LessonNodeProps } from "./LessonNode";

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

  const pathPattern = ['center', 'right', 'center', 'left', 'center', 'right', 'left', 'center'];

  return (
    <div className="relative w-full py-8">
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

      <div className="relative flex flex-col gap-16 items-center" style={{ zIndex: 1 }}>
        {lessons.map((lesson, index) => {
          let status: LessonNodeProps['status'];
          
          if (lesson.concluido) {
            status = 'completed';
          } else if (index === currentLessonIndex) {
            status = 'current';
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

      <div className="flex justify-center mt-12">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center border-4 border-gray-400 opacity-40">
          <span className="text-2xl">🔒</span>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;