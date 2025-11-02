"use client";

import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import MicroLessonTemplate from '@/components/MicroLessonTemplate';
import * as crucialConversationsModule from '@/data/crucial-conversations/Crucial_Conversations.json';
import NotFound from './NotFound';

// Acessa a exportação padrão do objeto módulo para lidar com problemas de interop
const crucialConversationsLessons = crucialConversationsModule.default || crucialConversationsModule;

const lessonDataMap: Record<string, any[]> = {
  crucialConversations: crucialConversationsLessons as any[],
};

const MicroLessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const [searchParams] = useSearchParams();
  const trilhaId = searchParams.get('trilha');
  const navigate = useNavigate();

  if (!trilhaId || !lessonDataMap[trilhaId]) {
    return <NotFound />;
  }

  const lessons = lessonDataMap[trilhaId];
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