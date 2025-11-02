"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Loader2, CheckCircle } from 'lucide-react';
import * as htmlToImage from 'html-to-image';
import { cn } from '@/lib/utils';

interface InfographicViewerProps {
  htmlContent: string;
  title: string;
  onClose: () => void;
}

const InfographicViewer = ({ htmlContent, title, onClose }: InfographicViewerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    // Simula o carregamento do iframe
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [htmlContent]);

  const handleDownload = async () => {
    if (!iframeRef.current || downloading) return;

    setDownloading(true);

    try {
      const iframeDocument = iframeRef.current.contentDocument;
      if (!iframeDocument) throw new Error("Iframe content not loaded.");

      // O elemento que queremos capturar é o body do iframe
      const targetElement = iframeDocument.body;

      // Adiciona um pequeno delay para garantir que todos os estilos estejam aplicados
      await new Promise(resolve => setTimeout(resolve, 100));

      // Usa html-to-image para converter o body do iframe
      const dataUrl = await htmlToImage.toPng(targetElement, {
        quality: 0.95,
        // Define a largura e altura baseadas no conteúdo do iframe para evitar cortes
        width: targetElement.scrollWidth,
        height: targetElement.scrollHeight,
      });

      // Cria um link de download
      const link = document.createElement('a');
      link.download = `${title.replace(/[^a-z0-9]/gi, '_')}_Infografico.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Erro ao gerar PNG:', error);
      // Aqui você poderia usar um toast para notificar o usuário sobre o erro
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900 p-4">
      <div className="max-w-5xl mx-auto">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              Revisão Concluída! Seu Infográfico Bônus
            </h2>
            <Button onClick={onClose} variant="outline">
              Voltar para o Dashboard
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <div className="relative w-full h-[600px] border-4 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-xl">
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                  </div>
                )}
                <iframe
                  ref={iframeRef}
                  srcDoc={htmlContent}
                  title={title}
                  className={cn("w-full h-full border-none transition-opacity duration-500", loading ? 'opacity-0' : 'opacity-100')}
                  onLoad={() => setLoading(false)}
                  // Garante que o iframe se ajuste ao conteúdo interno para a captura
                  style={{ height: '100%', width: '100%' }}
                />
              </div>
            </div>

            <div className="md:w-1/3 flex flex-col space-y-4">
              <Card className="p-4 bg-gray-50 dark:bg-gray-800">
                <h4 className="font-semibold mb-2">Sobre o Infográfico</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Este é um resumo visual (Sketchnote) dos principais conceitos que você revisou. Use-o como um guia rápido para aplicar as habilidades no dia a dia.
                </p>
              </Card>
              
              <Button 
                size="lg" 
                onClick={handleDownload} 
                disabled={loading || downloading}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Preparando Download...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Baixar como PNG
                  </>
                )}
              </Button>
              
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                A qualidade da imagem pode variar dependendo do navegador.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InfographicViewer;