import { supabase } from './supabase';
import { showSuccess, showError } from '@/utils/toast';

interface SaveProgressParams {
  lessonId: number;
  xpEarned: number;
  score: number;
  isCompleted: boolean;
}

export const saveUserProgress = async ({
  lessonId,
  xpEarned,
  score,
  isCompleted,
}: SaveProgressParams) => {
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;

  if (!userId) {
    showError("Você precisa estar logado para salvar o progresso.");
    return;
  }

  const { error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      lesson_id: lessonId,
      is_completed: isCompleted,
      score: score,
      xp_earned: xpEarned,
      completed_at: new Date().toISOString(),
    }, { onConflict: 'user_id, lesson_id' });

  if (error) {
    console.error("Erro ao salvar progresso:", error);
    showError("Erro ao salvar progresso. Tente novamente.");
  } else {
    showSuccess(`Progresso salvo! Você ganhou ${xpEarned} XP.`);
  }
};