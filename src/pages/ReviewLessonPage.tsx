"use client";

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReviewLessonTemplate from '@/components/ReviewLessonTemplate';
import NotFound from './NotFound';
import React, { useEffect, useState } from 'react';
import allLessons from '@/data/crucial-conversations/Crucial_Conversations.json';
import { saveUserProgress } from '@/integrations/supabase/progress';
import { useQueryClient } from '@tanstack/react-query';

// Helper to shuffle an array
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ReviewLessonPage = () => {
  const { reviewId } = useParams<{ reviewId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<any[] | null>(null);
  const [infographicHtml, setInfographicHtml] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { lessonsToReview } = location.state || { lessonsToReview: [] };
  const reviewNumber = parseInt(reviewId || '0');

  useEffect(() => {
    if (lessonsToReview.length > 0) {
      const relevantLessons = allLessons.filter(lesson => lessonsToReview.includes(lesson.id));
      
      let selectedQuestions: any[] = [];
      relevantLessons.forEach(lesson => {
        const shuffledQuestions = shuffleArray([...lesson.questions]);
        // Seleciona 3 perguntas por lição para a revisão
        selectedQuestions.push(...shuffledQuestions.slice(0, 3));
      });

      setQuestions(shuffleArray(selectedQuestions));
    }
  }, [lessonsToReview, reviewId]);

  // Função para carregar o HTML do infográfico
  const loadInfographic = async (reviewNum: number) => {
    // Mapeia o ID da revisão (ex: 800, 801, ...) para o índice do arquivo (ex: 1, 2, ...)
    // Assumindo que o ID base é 800 e o índice do arquivo começa em 1.
    const fileIndex = reviewNum - 799; 
    
    try {
      // Verifica se o índice está dentro do intervalo esperado (1 a 5)
      if (fileIndex >= 1 && fileIndex <= 5) {
        const module = await import(`@/data/crucial-conversations/info_${fileIndex}.html?raw`);
        setInfographicHtml(module.default);
      } else {
        console.error(`Índice de infográfico inválido: ${fileIndex}`);
        setInfographicHtml(null);
      }
    } catch (error) {
      console.error(`Erro ao carregar infográfico para revisão ${reviewNum}:`, error);
      setInfographicHtml(null);
    }
  };

  useEffect(() => {
    if (reviewNumber >= 800) {
      loadInfographic(reviewNumber);
    }
  }, [reviewNumber]);


  if (!lessonsToReview || lessonsToReview.length === 0) {
    return <NotFound />;
  }

  if (!questions || !infographicHtml) {
    return <div>Carregando revisão...</div>;
  }

  const handleConclude = async (xpEarned: number, score: number) => {
    const reviewNumId = parseInt(reviewId || '0');
    if (isNaN(reviewNumId)) return;

    // O reviewNumId (e.g., 800, 801) já é o lessonId correto para o progresso.
    const lessonId = reviewNumId; 

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
    <ReviewLessonTemplate
      title={`Revisão ${reviewId}`}
      questions={questions}
      infographicHtml={infographicHtml}
      onConclude={handleConclude}
    />
  );
};

export default ReviewLessonPage;