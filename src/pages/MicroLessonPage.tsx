"use client";

import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import MicroLessonTemplate from '@/components/MicroLessonTemplate';
import NotFound from './NotFound';
import React, { useEffect, useState } from 'react';

const MicroLessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [searchParams] = useSearchParams();
  const trilhaId = searchParams.get('trilha');
  const navigate = useNavigate();
  const [lessons, setLessons] = useState<any[] | null>(null);

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

  if (!trilhaId || !lesson) {
    return <NotFound />;
  }

  const handleConclude = () => {
    // Aqui você poderia adicionar lógica para salvar o progresso
    // Por enquanto, apenas navegamos de volta para o dashboard
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
      onConclude={handleConclude}
    />
  );
};

export default MicroLessonPage;