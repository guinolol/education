"use client";

import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import MicroLessonTemplate from '@/components/MicroLessonTemplate';
import crucialConversationsLessons from '@/data/crucial-conversations/Crucial_Conversations.json';
import tractionLessons from '@/data/tractionLessons.json';
import buildTrapLessons from '@/data/escapingBuildTrapLessons.json';
import runningLeanLessons from '@/data/runningLeanLessons.json';
import leanCustomerDevelopmentLessons from '@/data/leanCustomerDevelopmentLessons.json';
import scalingPeopleLessons from '@/data/scalingPeopleLessons.json';
import foundingSalesLessons from '@/data/foundingSalesLessons.json';
import NotFound from './NotFound';

const lessonDataMap: Record<string, any[]> = {
  crucialConversations: crucialConversationsLessons,
  traction: tractionLessons,
  buildTrap: buildTrapLessons,
  runningLean: runningLeanLessons,
  leanCustomerDev: leanCustomerDevelopmentLessons,
  scalingPeople: scalingPeopleLessons,
  foundingSales: foundingSalesLessons,
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