"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Como criar introduções calorosas valiosas?',
    opcoes: [
      { valor: 'a', label: 'Use contatos, conselheiros e investidores' },
      { valor: 'b', label: 'Use apenas redes sociais' },
      { valor: 'c', label: 'Use cold calling' },
      { valor: 'd', label: 'Espere as pessoas te encontrarem' }
    ],
    explicacao: 'Crie introduções calorosas usando sua rede de contatos, conselheiros e investidores. Cada pessoa que você conhece pode abrir portas para outras.',
    dica: 'Sua rede é seu ativo mais valioso.',
    correta: 'a'
  },
  {
    id: '2',
    pergunta: 'Qual é a melhor abordagem para encontrar pessoas para conversar?',
    opcoes: [
      { valor: 'a', label: 'Usar ligações frias' },
      { valor: 'b', label: 'Organizar meetups' },
      { valor: 'c', label: 'Criar introduções calorosas' },
      { valor: 'd', label: 'Todas as anteriores' }
    ],
    explicacao: 'Estratégias para encontrar conversas incluem ir até eles (ligações frias), trazer eles até você (meetups), ou criar introduções calorosas (contatos, conselheiros).',
    dica: 'Diversifique suas abordagens para maximizar chances.',
    correta: 'd'
    }
];

const MicroLesson18 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Introduções Valiosas"
      perguntas={perguntas}
      mensagemConclusao="Você completou a décima oitava microlição sobre introduções valiosas. Agora você sabe como criar conexões poderosas."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson18;