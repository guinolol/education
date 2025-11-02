"use client";

import { useParams, useNavigate } from 'react-router-dom';
import SimulationTemplate from '@/components/SimulationTemplate';
import NotFound from './NotFound';
import simulationsData from '@/data/crucial-conversations/Crucial_Conversations_Sim.json';
import { saveUserProgress } from '@/integrations/supabase/progress';
import { useQueryClient } from '@tanstack/react-query';

const SimulationPage = () => {
  const { simulationId } = useParams<{ simulationId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const simulation = simulationsData.find(s => s.simulationId.toString() === simulationId);

  if (!simulation || !simulationId) {
    return <NotFound />;
  }

  const handleConclude = async (xpEarned: number, score: number) => {
    const simNumId = parseInt(simulationId);
    if (isNaN(simNumId)) return;

    // Usamos um ID base 500 para simulações para evitar conflito com IDs de lições (1-20)
    const lessonId = 500 + simNumId; 

    await saveUserProgress({
      lessonId: lessonId,
      xpEarned: xpEarned,
      score: score,
      isCompleted: true,
    });
    
    queryClient.invalidateQueries({ queryKey: ['userProgress'] });
    navigate('/aprendizado');
  };

  return (
    <SimulationTemplate
      simulation={simulation}
      onConclude={handleConclude}
    />
  );
};

export default SimulationPage;