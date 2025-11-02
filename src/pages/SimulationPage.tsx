"use client";

import { useParams, useNavigate } from 'react-router-dom';
import SimulationTemplate from '@/components/SimulationTemplate';
import NotFound from './NotFound';
import simulationsData from '@/data/crucial-conversations/Crucial_Conversations_Sim.json';

const SimulationPage = () => {
  const { simulationId } = useParams<{ simulationId: string }>();
  const navigate = useNavigate();

  const simulation = simulationsData.find(s => s.simulationId.toString() === simulationId);

  if (!simulation) {
    return <NotFound />;
  }

  const handleConclude = () => {
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