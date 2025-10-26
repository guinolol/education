"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [nivel, setNivel] = useState(1);
  const [xp, setXp] = useState(150);
  const [xpProximoNivel, setXpProximoNivel] = useState(300);
  const [streak, setStreak] = useState(5);
  
  const [modulos, setModulos] = useState([
    {
      id: 1,
      titulo: "O Teste da Mãe - Fundamentos",
      descricao: "Aprenda as regras básicas para conversas eficazes com clientes",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 50,
      dificuldade: "iniciante",
      duracao: "10 min"
    },
    {
      id: 2,
      titulo: "Evitando Dados Ruins",
      descricao: "Como identificar e evitar elogios, fluff e ideias inúteis",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "iniciante",
      duracao: "10 min"
    },
    {
      id: 3,
      titulo: "Perguntas Eficazes",
      descricao: "Domine a arte de fazer perguntas que geram insights valiosos",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "15 min"
    },
    {
      id: 4,
      titulo: "Compromisso e Avanço",
      descricao: "Aprenda a validar sua solução e obter comprometimento real",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "15 min"
    },
    {
      id: 5,
      titulo: "Encontrando Pessoas",
      descricao: "Estratégias para encontrar e conversar com clientes potenciais",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "intermediario",
      duracao: "12 min"
    },
    {
      id: 6,
      titulo: "Escolhendo Clientes",
      descricao: "Como segmentar e encontrar seus clientes ideais",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 150,
      dificuldade: "avancado",
      duracao: "20 min"
    },
    {
      id: 7,
      titulo: "Conversas Iniciais com Clientes",
      descricao: "Como obter fatos concretos sobre a vida e visão de mundo do cliente",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "iniciante",
      duracao: "10 min"
    },
    {
      id: 8,
      titulo: "Opiniões e Mercado",
      descricao: "Entendendo por que apenas o mercado pode dizer se sua ideia é boa",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 75,
      dificuldade: "iniciante",
      duracao: "10 min"
    },
    {
      id: 9,
      titulo: "Perguntas sobre o Futuro",
      descricao: "Como lidar com intenções futuras e mentiras otimistas",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "12 min"
    },
    {
      id: 10,
      titulo: "Problemas e Soluções",
      descricao: "Entendendo que os clientes sabem dos problemas mas você tem a solução",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "12 min"
    },
    {
      id: 11,
      titulo: "Objetivos dos Clientes",
      descricao: "Como descobrir os verdadeiros objetivos por trás dos problemas percebidos",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "15 min"
    },
    {
      id: 12,
      titulo: "Distinguindo Problemas",
      descricao: "Como identificar problemas que as pessoas pagarão para resolver",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 100,
      dificuldade: "intermediario",
      duracao: "15 min"
    },
    {
      id: 13,
      titulo: "Observação Prática",
      descricao: "Como observar alguém realizando uma tarefa para identificar problemas reais",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 125,
      dificuldade: "avancado",
      duracao: "18 min"
    },
    {
      id: 14,
      titulo: "Seriedade dos Problemas",
      descricao: "Como avaliar se os problemas são sérios o suficiente para gerar vendas",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 125,
      dificuldade: "avancado",
      duracao: "18 min"
    },
    {
      id: 15,
      titulo: "Valor dos Problemas",
      descricao: "Como entender o valor real de um problema para o cliente",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 150,
      dificuldade: "avancado",
      duracao: "20 min"
    },
    {
      id: 16,
      titulo: "Ajuda Valiosa",
      descricao: "Como obter ajuda e insights valiosos dos próprios clientes",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 150,
      dificuldade: "avancado",
      duracao: "20 min"
    },
    {
      id: 17,
      titulo: "Conversas Frias",
      descricao: "Como parar de ter conversas frias e gerar introduções calorosas",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 175,
      dificuldade: "expert",
      duracao: "25 min"
    },
    {
      id: 18,
      titulo: "Estratégias de Conexão",
      descricao: "Técnicas para encontrar e conversar com clientes potenciais",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 175,
      dificuldade: "expert",
      duracao: "25 min"
    },
    {
      id: 19,
      titulo: "Introduções Calorosas",
      descricao: "Como criar introduções valiosas com contatos, conselheiros e investidores",
      progresso: 0,
      desbloqueado: true,
      concluido: false,
      xp: 200,
      dificuldade: "expert",
      duracao: "30 min"
    }
  ]);

  const conquistas = [
    { id: 1, titulo: "Primeiros Passos", descricao: "Complete sua primeira microlição", icon: Trophy, conquistado: false },
    { id: 2, titulo: "Maratona de 5 Dias", descricao: "Estude por 5 dias consecutivos", icon: Flame, conquistado: true },
    { id: 3, titulo: "Aprendiz Rápido", descricao: "Complete 3 microlições em uma semana", icon: Zap, conquistado: false },
    { id: 4, titulo: "Expert em Progresso", descricao: "Alcance o nível 5", icon: Award, conquistado: false }
  ];

  const handleIniciarModulo = (moduloId: number) => {
    const modulo = modulos.find(m => m.id === moduloId);
    if (modulo && modulo.desbloqueado) {
      navigate(`/lesson/${moduloId}`);
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