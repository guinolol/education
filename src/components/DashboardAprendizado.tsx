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
import DynamicLesson from "@/components/DynamicLesson";
import { useNavigate } from "react-router-dom";

interface DashboardAprendizadoProps {
  resultadoQuiz: any;
}

interface Modulo {
  id: string;
  titulo: string;
  descricao: string;
  progresso: number;
  desbloqueado: boolean;
  concluido: boolean;
  xp: number;
  dificuldade: string;
  duracao: string;
  licaoId: string;
}

const DashboardAprendizado = ({ resultadoQuiz }: DashboardAprendizadoProps) => {
  const navigate = useNavigate();
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(150);
  const [xpProximoNivel, setXpProximoNivel] = useState(300);
  const [streak, setStreak] = useState(5);
  const [licaoAtiva, setLicaoAtiva] = useState<string | null>(null);
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarModulos();
  }, []);

  const carregarModulos = async () => {
    try {
      // Carregar dados do curso
      const response = await fetch('/src/data/mom-test-course.json');
      const curso = await response.json();
      
      // Transformar em módulos do dashboard
      const modulosTransformados: Modulo[] = [];
      
      curso.modulos.forEach((modulo: any, indexModulo: number) => {
        modulo.licoes.forEach((licao: any, indexLicao: number) => {
          // Simular progresso baseado no perfil do usuário
          const progressoBase = resultadoQuiz?.perfil === 'rapido' ? 100 : 0;
          const desbloqueado = indexModulo === 0 || indexLicao < 3; // Primeiro módulo e primeiras lições desbloqueadas
          
          modulosTransformados.push({
            id: licao.id,
            titulo: licao.titulo,
            descricao: licao.descricao,
            progresso: progressoBase,
            desbloqueado,
            concluido: progressoBase === 100,
            xp: licao.xp,
            dificuldade: licao.dificuldade,
            duracao: licao.duracao,
            licaoId: licao.id
          });
        });
      });
      
      setModulos(modulosTransformados);
    } catch (error) {
      console.error('Erro ao carregar módulos:', error);
      // Fallback para dados estáticos se o JSON não carregar
      setModulos(getModulosEstaticos());
    } finally {
      setCarregando(false);
    }
  };

  const getModulosEstaticos = (): Modulo[] => [
    {
      id: "licao-1-1",
      titulo: "O Teste da Mãe - Fundamentos",
      descricao: "Aprenda as regras básicas para conversas eficazes com clientes",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 50,
      dificuldade: "iniciante",
      duracao: "10 min",
      licaoId: "licao-1-1"
    },
    {
      id: "licao-2-1",
      titulo: "Evitando Dados Ruins",
      descricao: "Como identificar e evitar elogios, fluff e ideias inúteis",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "iniciante",
      duracao: "10 min",
      licaoId: "licao-2-1"
    }
  ];

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", descricao: "Complete sua primeira microlição", icon: Trophy, conquistado: false },
    { id: 2, titulo: "Maratona de 5 Dias", descricao: "Estude por 5 dias consecutivos", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", descricao: "Complete 3 microlições em uma semana", icon: Zap, conquistado: false },
    { id: 4, titulo: "Expert em Progresso", descricao: "Alcance o nível 5", icon: Award, conquistado: false }
  ];

  const handleIniciarModulo = (moduloId: string) => {
    const modulo = modulos.find(m => m.id === moduloId);
    if (modulo && modulo.desbloqueado) {
      setLicaoAtiva(modulo.licaoId);
    }
  };

  const handleCompletarLicao = (xpGanho: number) => {
    if (licaoAtiva) {
      const novosModulos = modulos.map(m => {
        if (m.licaoId === licaoAtiva) {
          return { ...m, progresso: 100, concluido: true };
        }
        // Desbloquear próxima lição
        const indexAtual = modulos.findIndex(m => m.licaoId === licaoAtiva);
        if (indexAtual >= 0 && modulos[indexAtual + 1] && m.id === modulos[indexAtual + 1].id) {
          return { ...m, desbloqueado: true };
        }
        return m;
      });
      setModulos(novosModulos);
      setXp(prev => prev + xpGanho);
      setLicaoAtiva(null);
    }
  };

  const getDificuldadeCor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'iniciante': return 'bg-green-500';
      case 'intermediario': return 'bg-yellow-500';
      case 'avancado': return 'bg-orange-500';
      case 'expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // Renderizar lição ativa
  if (licaoAtiva) {
    return (
      <DynamicLesson
        licaoId={licaoAtiva}
        onComplete={handleCompletarLicao}
        onBack={() => setLicaoAtiva(null)}
      />
    );
  }

  if (carregando) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Carregando módulos...</h2>
          <Progress value={66} className="h-2" />
        </Card>
      </div>
    );
  }

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
                    <span className="text-xl font-bold">{conquistas.filter(c => c.conquistado).length}</span>
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
                <h2 className="text-2xl font-bold">Microlições - The Mom Test</h2>
                <Badge variant="secondary">{modulos.length} Lições</Badge>
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

                        {modulo.desbloqueado && modulo.progresso > 0 && !modulo.concluido && (
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
                            {modulo.progresso > 0 ? 'Continuar' : 'Iniciar'}
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
                    <span className="font-semibold">{Math.round((modulos.filter(m => m.concluido).length / modulos.length) * 100)}%</span>
                  </div>
                  <Progress value={(modulos.filter(m => m.concluido).length / modulos.length) * 100} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-50 dark:bg-purple-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{modulos.filter(m => m.concluido).length}</p>
                    <p className="text-xs text-gray-500">Lições Completas</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{modulos.length - modulos.filter(m => m.concluido).length}</p>
                    <p className="text-xs text-gray-500">Restantes</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Dica do Dia */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
                Dica do Dia
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                "A consistência é mais importante que a intensidade. Estude 10 minutos por dia todos os dias em vez de 1 hora apenas no fim de semana."
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