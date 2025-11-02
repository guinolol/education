"use client";

import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import MicroLessonTemplate from '@/components/MicroLessonTemplate';
import NotFound from './NotFound';
import React, { useEffect, useState } from 'react';
import { saveUserProgress } from '@/integrations/supabase/progress';
import { useQueryClient } from '@tanstack/react-query';

const MicroLessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [searchParams] = useSearchParams();
  const trilhaId = searchParams.get('trilha');
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<any[] | null>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const loadData = async () => {
      if (trilhaId === 'crucialConversations') {
        const { default: crucialConversationsData } = await import('@/data/crucial-conversations/Crucial_Conversations.json');
        setLessons(crucialConversationsData);
      }
    };

    loadData();
  }, [trilhaId]);

  if (!lessons) {
    // Pode ser um estado de carregamento aqui
    return <div>Carregando...</div>;
  }

  const lesson = lessons.find(l => l.id.toString() === lessonId);

  if (!trilhaId || !lesson || !lessonId) {
    return <NotFound />;
  }

  const handleConclude = async (xpEarned: number, score: number) => {
    const lessonNumId = parseInt(lessonId);
    if (isNaN(lessonNumId)) return;

    await saveUserProgress({
      lessonId: lessonNumId,
      xpEarned: xpEarned,
      score: score,
      isCompleted: true,
    });
    
    // Invalida a query do progresso para forçar o dashboard a recarregar
    queryClient.invalidateQueries({ queryKey: ['userProgress'] });

    // Navega de volta para o dashboard de aprendizado
    navigate('/aprendizado');
  };

  return (
    <MicroLessonTemplate
      title={lesson.title}
      level1={lesson.level1}
      level2={lesson.level2}
      level3={lesson.level3}
      questions={lesson.questions}
      conclusionMessage={lesson.conclusionMessage}
      recapitulation={lesson.recapitulation}
      practicalChecklist={lesson.practicalChecklist}
      onConclude={handleConclude}
    />
  );
};

export default MicroLessonPage;