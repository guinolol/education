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
  const [lessons, setLessons] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (trilhaId === 'crucialConversations') {
        const { default: crucialConversationsData } = await import('@/data/crucial-conversations/Crucial_Conversations.json');
        setLessons(crucialConversationsData);
      }
    };

    loadData();
  }, [trilhaId]);

  if (!trilhaId || !lessons) {
    return <NotFound />;
  }

  const lesson = lessons.find(l => l.id.toString() === lessonId);

  if (!lesson) {
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
      questions={lesson.questions}
      conclusionMessage={lesson.conclusionMessage}
      onConclude={handleConclude}
    />
  );
};

export default MicroLessonPage;