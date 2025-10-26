"use client";

import { useParams, useNavigate } from 'react-router-dom';
import MicroLessonTemplate from '@/components/MicroLessonTemplate';
import microLessonsData from '@/data/microLessons.json';
import NotFound from './NotFound';

const MicroLessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  const lesson = microLessonsData.find(l => l.id.toString() === lessonId);

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