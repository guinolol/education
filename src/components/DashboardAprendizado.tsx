"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Star, Zap, Target, Clock, 
  Play, CheckCircle, Lock, Flame,
  TrendingUp, Award, BookOpen
} from "lucide-react";

interface DashboardAprendizadoProps {
  resultadoQuiz: any;
}

const DashboardAprendizado = ({ resultadoQuiz }: DashboardAprendizadoProps) => {
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(150);
  const [xpProximoNivel, setXpProximoNivel] = useState(300);
  const [streak, setStreak] = useState(5);
  const [modulos, setModulos] = useState([
    {
      id: 1,
      titulo: "Fundamentos Essenciais",
      descricao: "Comece com os conceitos básicos",
      progresso: 100,
      desbloqueado: true,
      concluido: true,
      xp: 50,
      dificuldade: "iniciante",
      duracao: "30 min"
    },
    {
      id: 2,
      titulo: "Técnicas Avançadas",
      descricao: "Aprofunde seus conhecimentos",
      progresso: 65,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "intermediario",
      duracao: "45 min"
    },
    {
      id: 3,
      titulo: "Prática com Projetos",
      descricao: "Aplique o que aprendeu",
      progresso: 0,
      desbloqueado: false,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "1h 20min"
    },
    {
      id: 4,
      titulo: "Mestre do Assunto",
      descricao: "Domine completamente",
      progresso: 0,
      desbloqueado: false,
      concluido: false,
      xp: 150,
      dificuldade: "avancado",
      duracao: "2h"
    }
  ]);

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", descricao: "Complete seu primeiro módulo", icon: Trophy, conquistado: true },
    { id: 2, titulo: "Maratona de 5 Dias", descricao: "Estude por 5 dias consecutivos", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", descricao: "Complete 3 módulos em uma semana", icon: Zap, conquistado: false },
    { id: 4, titulo: "Expert em Progresso", descricao: "Alcance o nível 5", icon: Award, conquistado: false }
  ];

  const handleIniciarModulo = (moduloId: number) => {
    const modulo = modulos.find(m => m.id === moduloId);
    if (modulo && modulo.desbloqueado) {
      // Simular progresso
      const novosModulos = modulos.map(m => {
        if (m.id === moduloId) {
          return { ...m, progresso: Math.min(m.progresso + 20, 100) };
        }
        if (m.id === moduloId + 1 && modulos.find(m2 => m2.id === moduloId)?.progresso >= 80) {
          return { ...m, desbloqueado: true };
        }
        return m;
      });
      setModulos(novosModulos);
      setXp(prev => prev + 10);
    }
  };

  const getDificuldadeCor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'iniciante': return 'bg-green-500';
      case 'intermediario': return 'bg-yellow-500';
      case 'avancado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header com Status */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Nível {nivel}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Experiente</div>
                </div>
                
                <div className="w-32">
                  <Progress value={(xp / xpProximoNivel) * 100} className="h-3" />
                  <p className="text-xs text-center mt-1">{xp}/{xpProximoNivel} XP</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="text-xl font-bold">{streak}</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Dias</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Conquistas</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Módulos de Aprendizado */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Sua Trilha de Aprendizado</h2>
                <Badge variant="secondary">Personalizada</Badge>
              </div>

              <div className="space-y-4">
                {modulos.map((modulo) => (
                  <Card 
                    key={modulo.id} 
                    className={`p-4 ${!modulo.desbloqueado ? 'opacity-60' : 'hover:shadow-lg'} transition-all cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{modulo.titulo}</h3>
                          <Badge className={`${getDificuldadeCor(modulo.dificuldade)} text-white`}>
                            {modulo.dificuldade}
                          </Badge>
                          {!modulo.desbloqueado && <Lock className="w-4 h-4 text-gray-400" />}
                          {modulo.concluido && <CheckCircle className="w-4 h-4 text-green-500" />}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{modulo.descricao}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {modulo.duracao}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {modulo.xp} XP
                          </span>
                        </div>

                        {modulo.desbloqueado && (
                          <div className="mt-3">
                            <Progress value={modulo.progresso} className="h-2" />
                            <p className="text-xs text-gray-500 mt-1">{modulo.progresso}% completo</p>
                          </div>
                        )}
                      </div>

                      <div className="ml-4">
                        {modulo.desbloqueado && !modulo.concluido && (
                          <Button 
                            size="sm"
                            onClick={() => handleIniciarModulo(modulo.id)}
                          >
                            <Play className="w-4 h-4 mr-1" />
                            Continuar
                          </Button>
                        )}
                        {modulo.concluido && (
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Concluído
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          {/* Conquistas e Stats */}
          <div className="space-y-6">
            {/* Conquistas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Conquistas
              </h3>
              <div className="space-y-3">
                {conquistas.map((conquista) => (
                  <div 
                    key={conquista.id} 
                    className={`p-3 rounded-lg ${conquista.conquistado ? 'bg-yellow-50 dark:bg-yellow-900' : 'bg-gray-50 dark:bg-gray-800'}`}
                  >
                    <div className="flex items-center gap-3">
                      <conquista.icon className={`w-5 h-5 ${conquista.conquistado ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{conquista.titulo}</p>
                        <p className="text-xs text-gray-500">{conquista.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Estatísticas */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                Progresso
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Taxa de Conclusão</span>
                    <span className="font-semibold">41%</span>
                  </div>
                  <Progress value={41} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</p>
                    <p className="text-xs text-gray-500">Aulas Completas</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">8.5h</p>
                    <p className="text-xs text-gray-500">Tempo de Estudo</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Próximos Passos */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                Dica do Dia
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                "A consistência é mais importante que a intensidade. Estude 30 minutos por dia todos os dias em vez de 3 horas apenas no fim de semana."
              </p>
              <Button size="sm" className="w-full mt-4">
                Ver Mais Dicas
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAprendizado;