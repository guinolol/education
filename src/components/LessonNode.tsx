"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Lock, Check, Play, Star, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

export interface LessonNodeProps {
  title: string;
  teaser: string;
  status: 'completed' | 'current' | 'locked' | 'unlocked';
  xp: number;
  type?: 'lesson' | 'checkpoint' | 'treasure';
  position: 'left' | 'center' | 'right';
  onClick: () => void;
}

const statusConfig = {
  completed: {
    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
    border: "border-yellow-300 border-4",
    shadow: "shadow-lg shadow-yellow-200/50",
    icon: Check,
    glow: "ring-4 ring-yellow-200/50"
  },
  current: {
    bg: "bg-gradient-to-br from-green-400 to-green-500",
    border: "border-green-300 border-4",
    shadow: "shadow-xl shadow-green-300/60 animate-pulse",
    icon: Play,
    glow: "ring-4 ring-green-300 ring-offset-2"
  },
  unlocked: {
    bg: "bg-gradient-to-br from-blue-400 to-blue-500",
    border: "border-blue-300 border-4",
    shadow: "shadow-md shadow-blue-200/50",
    icon: Star,
    glow: ""
  },
  locked: {
    bg: "bg-gray-300",
    border: "border-gray-400 border-4",
    shadow: "",
    icon: Lock,
    glow: ""
  },
};

const positionClasses = {
  left: 'self-start ml-8',
  center: 'self-center',
  right: 'self-end mr-8'
};

const LessonNode = ({ 
  title, 
  teaser, 
  status, 
  xp, 
  type = 'lesson', 
  position,
  onClick 
}: LessonNodeProps) => {
  const [showTeaser, setShowTeaser] = useState(false);
  const config = statusConfig[status];
  const Icon = config.icon;
  const isDisabled = status === 'locked';
  const isCheckpoint = type === 'checkpoint';
  const isTreasure = type === 'treasure';

  return (
    <div className={cn("relative flex flex-col items-center", positionClasses[position])}>
      {isCheckpoint && (
        <Crown className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 text-yellow-500 drop-shadow-lg animate-bounce z-20" />
      )}
      {isTreasure && (
        <Sparkles className="absolute -top-6 left-1/2 -translate-x-1/2 w-7 h-7 text-purple-500 drop-shadow-lg animate-pulse z-20" />
      )}

      <div
        className="relative"
        onMouseEnter={() => !isDisabled && setShowTeaser(true)}
        onMouseLeave={() => setShowTeaser(false)}
        onClick={() => !isDisabled && setShowTeaser(!showTeaser)}
      >
        <Button
          className={cn(
            "w-20 h-20 rounded-full p-0 transition-all duration-300 relative z-10",
            config.bg,
            config.border,
            config.shadow,
            config.glow,
            !isDisabled && "hover:scale-110 active:scale-95 cursor-pointer",
            isDisabled && "cursor-not-allowed opacity-60"
          )}
          onClick={onClick}
          disabled={isDisabled}
        >
          <Icon className="w-10 h-10 text-white" />
        </Button>

        {showTeaser && !isDisabled && (
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 w-72 bg-white rounded-2xl shadow-2xl p-4 z-30 border-2",
            "animate-in fade-in slide-in-from-bottom-2 duration-200",
            position === 'left' ? 'left-24' : position === 'right' ? 'right-24' : 'left-24',
            status === 'completed' ? 'border-yellow-300' : status === 'current' ? 'border-green-300' : 'border-blue-300'
          )}>
            <div className={cn(
              "absolute top-1/2 -translate-y-1/2 w-0 h-0",
              "border-t-[10px] border-t-transparent",
              "border-b-[10px] border-b-transparent",
              position === 'right' ? 'right-full border-r-[12px] border-r-white' : 'left-full border-l-[12px] border-l-white'
            )} />

            <div className="space-y-2">
              <h4 className="font-bold text-gray-800 text-sm leading-tight">
                {title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {teaser}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-gray-700">+{xp} XP</span>
                </div>
                {status === 'completed' && (
                  <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Concluído
                  </span>
                )}
                {status === 'current' && (
                  <span className="text-xs font-semibold text-green-600">
                    Em andamento
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {!isDisabled && (
        <div className="mt-2 text-center max-w-[100px]">
          <p className="text-xs font-medium text-gray-700 truncate">
            {title.split(':')[1] || title}
          </p>
        </div>
      )}
      
      {isDisabled && (
        <div className="mt-2 text-center">
          <Lock className="w-4 h-4 text-gray-400 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default LessonNode;