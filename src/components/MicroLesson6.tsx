"use client";

import MicroLessonTemplate, { Pergunta } from './MicroLessonTemplate';
import { useNavigate } from 'react-router-dom';

const perguntas: Pergunta[] = [
  {
    id: '1',
    pergunta: 'Por que startups não morrem de fome?',
    opcoes: [
      { valor: 'a', label: 'Porque têm dinheiro suficiente' },
      { valor: 'b', label: 'Porque se afogam em opções e feedback contraditório' },
      { valor: 'c', label: 'Porque têm muitos clientes' },
      { valor: 'd', label: 'Porque têm boas ideias' }
    ],
    explicacao: 'Startups não morrem de fome, elas se afogam. Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opções e feedback contraditório.',
    dica: 'Pense no que realmente mata startups: falta de foco ou falta de dinheiro?',
    correta: 'b'
  },
  {
    id: '2',
    pergunta: 'Qual é a regra geral sobre segmentação de clientes?',
    opcoes: [
      { valor: 'a', label: 'Se você não está encontrando problemas e objetivos consistentes, seu segmento ainda não é específico o suficiente' },
      { valor: 'b', label: 'Quanto mais clientes, melhor' },
      { valor: 'c', label: 'Segmentação não é importante no início' },
      { valor: 'd', label: 'Qualquer segmento serve' }
    ],
    explicacao: 'Regra geral: Se você não está encontrando problemas e objetivos consistentes, seu segmento de cliente ainda não é específico o suficiente.',
    dica: 'Consistência é mais importante que quantidade no início.',
    correta: 'a'
  },
  {
    id: '3',
    pergunta: 'O que é "fatiar o cliente" (customer slicing)?',
    opcoes: [
      { valor: 'a', label: 'Pegar um segmento amplo e dividi-lo em subconjuntos cada vez mais específicos' },
      { valor: 'b', label: 'Cortar clientes em pedaços' },
      { valor: 'c', label: 'Eliminar clientes ruins' },
      { valor: 'd', label: 'Aumentar o número de clientes' }
    ],
    explicacao: 'Fatiar o Cliente (Customer Slicing): Pegue um segmento amplo e continue a dividi-lo em subconjuntos cada vez mais específicos até que você tenha uma ideia tangível de quem contatar e onde encontrá-los.',
    dica: 'Pense em como ir do geral para o específico.',
    correta: 'a'
  },
  {
    id: '4',
    pergunta: 'Qual é a regra geral sobre bons segmentos de clientes?',
    opcoes: [
      { valor: 'a', label: 'Bons segmentos de clientes são um par "quem-onde"' },
      { valor: 'b', label: 'Bons segmentos de clientes são os maiores' },
      { valor: 'c', label: 'Bons segmentos de clientes são os mais ricos' },
      { valor: 'd', label: 'Bons segmentos de clientes são os mais fáceis' }
    ],
    explicacao: 'Regra geral: Bons segmentos de clientes são um par "quem-onde". Se você não sabe onde encontrar seus clientes, continue fatiando seu segmento até saber.',
    dica: 'Você precisa saber quem são e onde encontrá-los.',
    correta: 'a'
  },
  {
    id: '5',
    pergunta: 'Por que é importante ter um segmento focado?',
    opcoes: [
      { valor: 'a', label: 'Para evitar o afogamento em opções e feedback contraditório' },
      { valor: 'b', label: 'Para ter mais clientes' },
      { valor: 'c', label: 'Para vender mais' },
      { valor: 'd', label: 'Para ter mais feedback' }
    ],
    explicacao: 'Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opções e feedback contraditório.',
    dica: 'Foco é sobre dizer não a muitas coisas para dizer sim a uma.',
    correta: 'a'
  },
  {
    id: '6',
    pergunta: 'Como saber se seu segmento é bom?',
    opcoes: [
      { valor: 'a', label: 'Se você está encontrando problemas e objetivos consistentes' },
      { valor: 'b', label: 'Se você tem muitos clientes' },
      { valor: 'c', label: 'Se você está vendendo muito' },
      { valor: 'd', label: 'Se você tem feedback positivo' }
    ],
    explicacao: 'Se você está encontrando problemas e objetivos consistentes, seu segmento está no caminho certo. Se não, continue fatiando.',
    dica: 'Consistência é o sinal de que você está no caminho certo.',
    correta: 'a'
  },
  {
    id: '7',
    pergunta: 'O que é um "par quem-onde"?',
    opcoes: [
      { valor: 'a', label: 'Um par que define quem são seus clientes e onde encontrá-los' },
      { valor: 'b', label: 'Um par que define o que você vende e onde' },
      { valor: 'c', label: 'Um par que define quando e como' },
      { valor: 'd', label: 'Um par que define por quê e quanto' }
    ],
    explicacao: 'Um par "quem-onde" define quem são seus clientes e onde encontrá-los. Isso é essencial para um bom segmento.',
    dica: 'Você precisa de ambos: identidade e localização.',
    correta: 'a'
  },
  {
    id: '8',
    pergunta: 'Como encontrar seus clientes?',
    opcoes: [
      { valor: 'a', label: 'Continuar fatiando seu segmento até saber onde encontrá-los' },
      { valor: 'b', label: 'Esperar que eles encontrem você' },
      { valor: 'c', label: 'Usar apenas anúncios' },
      { valor: 'd', label: 'Fazer cold calling aleatório' }
    ],
    explicacao: 'Se você não sabe onde encontrar seus clientes, continue fatiando seu segmento até saber.',
    dica: 'Se você não sabe onde encontrá-los, seu segmento ainda é muito amplo.',
    correta: 'a'
  },
  {
    id: '9',
    pergunta: 'Por que feedback contraditório é problemático?',
    opcoes: [
      { valor: 'a', label: 'Porque confunde sobre o que construir' },
      { valor: 'b', label: 'Porque mostra que você está no caminho errado' },
      { valor: 'c', label: 'Porque indica que os clientes não gostam' },
      { valor: 'd', label: 'Porque mostra falta de interesse' }
    ],
    explicacao: 'Feedback contraditório confunde sobre o que construir e pode levar a decisões erradas. Um segmento focado ajuda a evitar isso.',
    dica: 'Quando todos falam coisas diferentes, é difícil saber o que fazer.',
    correta: 'a'
  },
  {
    id: '10',
    pergunta: 'Qual é a melhor abordagem para escolher clientes?',
    opcoes: [
      { valor: 'a', label: 'Ter um segmento focado e específico' },
      { valor: 'b', label: 'Ter o máximo de clientes possível' },
      { valor: 'c', label: 'Ter clientes ricos' },
      { valor: 'd', label: 'Ter clientes famosos' }
    ],
    explicacao: 'Ter um segmento de cliente focado é sua melhor defesa contra o afogamento em opçõese feedback contraditório.',
    dica: 'Foco é melhor que dispersão, mesmo que pareça contrário.',
    correta: 'a'
  }
];

const MicroLesson6 = () => {
  const navigate = useNavigate();
  return (
    <MicroLessonTemplate
      titulo="Escolhendo Clientes"
      perguntas={perguntas}
      mensagemConclusao="Você completou a sexta microlição sobre escolha de clientes. Agora você sabe como segmentar e encontrar seus clientes ideais."
      onConcluir={() => navigate('/aprendizado')}
    />
  );
};

export default MicroLesson6;