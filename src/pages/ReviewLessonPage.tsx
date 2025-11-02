"use client";

import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReviewLessonTemplate from '@/components/ReviewLessonTemplate';
import NotFound from './NotFound';
import React, { useEffect, useState } from 'react';
import allLessons from '@/data/crucial-conversations/Crucial_Conversations.json';

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
    try {
      const module = await import(`@/data/crucial-conversations/info_${reviewNum}.html?raw`);
      setInfographicHtml(module.default);
    } catch (error) {
      console.error(`Erro ao carregar infográfico para revisão ${reviewNum}:`, error);
      setInfographicHtml(null);
    }
  };

  useEffect(() => {
    if (reviewNumber >= 1 && reviewNumber <= 5) {
      loadInfographic(reviewNumber);
    }
  }, [reviewNumber]);


  if (!lessonsToReview || lessonsToReview.length === 0) {
    return <NotFound />;
  }

  if (!questions || !infographicHtml) {
    return <div>Carregando revisão...</div>;
  }

  const handleConclude = () => {
    navigate('/aprendizado');
  };

  return (
    <ReviewLessonTemplate
      title={`Revisão Aleatória ${reviewId}`}
      questions={questions}
      infographicHtml={infographicHtml}
      onConclude={handleConclude}
    />
  );
};

export default ReviewLessonPage;