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

  const { lessonsToReview } = location.state || { lessonsToReview: [] };

  useEffect(() => {
    if (lessonsToReview.length > 0) {
      const relevantLessons = allLessons.filter(lesson => lessonsToReview.includes(lesson.id));
      
      let selectedQuestions: any[] = [];
      relevantLessons.forEach(lesson => {
        const shuffledQuestions = shuffleArray([...lesson.questions]);
        selectedQuestions.push(...shuffledQuestions.slice(0, 3));
      });

      setQuestions(shuffleArray(selectedQuestions));
    }
  }, [lessonsToReview, reviewId]);

  if (!lessonsToReview || lessonsToReview.length === 0) {
    return <NotFound />;
  }

  if (!questions) {
    return <div>Carregando revisão...</div>;
  }

  const handleConclude = () => {
    navigate('/aprendizado');
  };

  return (
    <ReviewLessonTemplate
      title={`Revisão Aleatória ${reviewId}`}
      questions={questions}
      onConclude={handleConclude}
    />
  );
};

export default ReviewLessonPage;