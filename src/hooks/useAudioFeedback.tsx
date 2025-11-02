"use client";

import React, { useCallback } from 'react';

// Define os caminhos para os arquivos de áudio na pasta public
const SOUND_PATHS = {
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  gameOver: '/sounds/gameover.mp3',
  win: '/sounds/win.mp3',
};

// Função utilitária para criar e reproduzir um elemento de áudio
const playSound = (path: string) => {
  try {
    const audio = new Audio(path);
    // Garante que o som seja reproduzido do início, mesmo se for chamado rapidamente
    audio.currentTime = 0; 
    audio.play().catch(e => console.warn("Audio playback blocked or failed:", e));
  } catch (e) {
    console.error("Failed to create or play audio element:", e);
  }
};

export function useAudioFeedback() {
  // Funções de reprodução específicas
  const playSuccess = useCallback(() => {
    playSound(SOUND_PATHS.success);
  }, []);

  const playError = useCallback(() => {
    playSound(SOUND_PATHS.error);
  }, []);

  const playGameOver = useCallback(() => {
    playSound(SOUND_PATHS.gameOver);
  }, []);

  const playWin = useCallback(() => {
    playSound(SOUND_PATHS.win);
  }, []);

  return {
    playSuccess,
    playError,
    playGameOver,
    playWin,
  };
}