"use client";

import LessonNode, { LessonNodeProps } from "./LessonNode";

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

interface LearningPathProps {
  trilhaId: string;
  lessons: Modulo[];
  onLessonClick: (lessonId: number) => void;
}

const LearningPath = ({ lessons, onLessonClick }: LearningPathProps) => {
  
  // Encontra o índice da primeira lição incompleta para marcar como 'current'
  const firstIncompleteIndex = lessons.findIndex(l => !l.concluido);
  const currentLessonIndex = firstIncompleteIndex === -1 ? lessons.length - 1 : firstIncompleteIndex;

  return (
    <div className="relative py-8 px-4">
      {/* Linha Vertical da Trilha */}
      <div className="absolute left-8 top-0 bottom-0 w-2 bg-gray-200 dark:bg-gray-700 rounded-full z-0"></div>

      <div className="space-y-12">
        {lessons.map((lesson, index) => {
          let status: LessonNodeProps['status'];
          
          if (lesson.concluido) {
            status = 'completed';
          } else if (index === currentLessonIndex) {
            status = 'current';
          } else {
            status = 'locked';
          }
          
          // Se a lição estiver desbloqueada, mas não for a atual, marque como unlocked (pronta para ser a próxima)
          if (lesson.desbloqueado && !lesson.concluido && index !== currentLessonIndex) {
              status = 'unlocked';
          }
          
          // Garante que lições após a atual fiquem bloqueadas
          if (index > currentLessonIndex) {
              status = 'locked';
          }

          return (
            <div key={lesson.id} className="relative">
              <LessonNode
                title={lesson.titulo}
                status={status}
                xp={lesson.xp}
                onClick={() => onLessonClick(lesson.lessonId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;