"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Importação adicionada
import { Lock, Check, Play, MessageSquare } from "lucide-react";

interface LessonNodeProps {
  title: string;
  status: 'completed' | 'current' | 'locked' | 'unlocked';
  xp: number;
  onClick: () => void;
}

const statusClasses = {
  completed: "bg-green-500 hover:bg-green-600 text-white border-4 border-green-300 shadow-lg",
  current: "bg-purple-500 hover:bg-purple-600 text-white border-4 border-purple-300 shadow-xl animate-pulse",
  unlocked: "bg-blue-500 hover:bg-blue-600 text-white border-4 border-blue-300 shadow-md",
  locked: "bg-gray-300 text-gray-500 border-4 border-gray-400 cursor-not-allowed",
};

const iconMap = {
  completed: Check,
  current: Play,
  unlocked: MessageSquare,
  locked: Lock,
};

const LessonNode = ({ title, status, xp, onClick }: LessonNodeProps) => {
  const Icon = iconMap[status];
  const isDisabled = status === 'locked';

  return (
    <div className="flex items-center justify-start w-full relative">
      {/* Node Content */}
      <div className="flex items-center space-x-4 z-10">
        <Button
          className={cn(
            "w-16 h-16 rounded-full p-0 transition-all duration-300 flex-shrink-0",
            statusClasses[status]
          )}
          onClick={onClick}
          disabled={isDisabled}
        >
          <Icon className="w-8 h-8" />
        </Button>
        
        {/* Title Card */}
        <Card className={cn(
          "p-3 rounded-xl shadow-md transition-opacity duration-300",
          isDisabled ? "opacity-50" : "bg-white dark:bg-gray-800"
        )}>
          <h4 className="font-semibold text-sm leading-tight">
            {title.split(': ')[1] || title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {isDisabled ? 'Bloqueado' : `+${xp} XP`}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LessonNode;