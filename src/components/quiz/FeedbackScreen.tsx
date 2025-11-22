import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";

interface FeedbackScreenProps {
  feedback: {
    title: string;
    description: string;
  };
  progress: number;
  onNext: () => void;
  isLast: boolean;
}

export const FeedbackScreen = ({
  feedback,
  progress,
  onNext,
  isLast,
}: FeedbackScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 pt-16 sm:pt-20"
    >
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6 sm:mb-8"
          >
            {feedback.title === "Ponto Cego da 'Despedida da Comida'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/despedida-da-comiga.png"
                  alt="Despedida da Comida"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Antecipação da Culpa'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/antecipacao-culpa.png"
                  alt="Antecipação da Culpa"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fadiga de Dieta'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fadiga-de-dieta.png"
                  alt="Fadiga de Dieta"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Culpa Flutuante'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/culpa-flutuante.png"
                  alt="Culpa Flutuante"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Excelente" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/rejeitar-mentalidade-dieta.png"
                  alt="Rejeitar a Mentalidade de Dieta"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome Reativa'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-reativa.png"
                  alt="Fome Reativa"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome de Satisfação'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-de-satisfacao.png"
                  alt="Fome de Satisfação"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome Ansiosa'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-ansiosa.png"
                  alt="Fome Ansiosa"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome de Exaustão'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-exaustao.png"
                  alt="Fome de Exaustão"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome de Tédio'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-tedio.png"
                  alt="Fome de Tédio"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome de Conforto'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-conforto.png"
                  alt="Fome de Conforto"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Desconfiança Corporal'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/desconfianca-corporal.png"
                  alt="Desconfiança Corporal"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Insatisfação Corporal'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/insatisfacao-corporal.png"
                  alt="Insatisfação Corporal"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Métrica Externa'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/metrica-externa.png"
                  alt="Métrica Externa"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego importante" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/falta-de-energia.png"
                  alt="Falta de Energia"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da Urgência" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/exames-alterados.png"
                  alt="Exames Alterados"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego de Alerta de Saúde" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/desequilibrio-metabolico.png"
                  alt="Desequilíbrio Metabólico"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Fome por Energia Rápida'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-de-acucar.png"
                  alt="Fome por Energia Rápida"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Perfeito" && feedback.description.includes("honrar a fome") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/honrar-fome.png"
                  alt="Honrar a Fome"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Perfeito" && feedback.description.includes("sentir a saciedade") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/sentir-saciedade.png"
                  alt="Sentir a Saciedade"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Perfeito" && feedback.description.includes("sente a diferença") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/sente-a-diferenca.png"
                  alt="Sente a Diferença"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Pensamento Dicotômico'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/pensamento-dicotomico.png"
                  alt="Pensamento Dicotômico"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Comida como Dívida'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-divida.png"
                  alt="Comida como Dívida"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Comida como Prêmio'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/comida-premio.png"
                  alt="Comida como Prêmio"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Pensamento Catastrófico'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/pensamento-catastrofico.png"
                  alt="Pensamento Catastrófico"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Obsessão pela Privação'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/obsessao-privacao.png"
                  alt="Obsessão pela Privação"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Comer Clandestino'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/comer-clandestino.png"
                  alt="Comer Clandestino"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Policial Alimentar'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/policial-alimentar.png"
                  alt="Policial Alimentar"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Comer Racionalizado'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/comer-racionalizado.png"
                  alt="Comer Racionalizado"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Comer Inconsciente'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/comer-inconsciente.png"
                  alt="Comer Inconsciente"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Restrição pelo Medo'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/restricao-medo.png"
                  alt="Restrição pelo Medo"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Falsa Liberdade'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fome-rebelde.png"
                  alt="Falsa Liberdade"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Virtude Faminta'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/virtude-faminta.png"
                  alt="Virtude Faminta"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Regra Externa'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/regra-externa.png"
                  alt="Regra Externa"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Saciedade Atrasada'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/saciedade-atrasada.png"
                  alt="Saciedade Atrasada"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Restrição Cognitiva'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/restricao-cognitiva.png"
                  alt="Restrição Cognitiva"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Fantástico" && feedback.description.includes("lidando com as emoções sem usar a comida") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/lidar-emocoes.png"
                  alt="Lidar com as Emoções"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Maravilha" && feedback.description.includes("fazer as pazes com a comida") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/fazer-as-pazes.png"
                  alt="Fazer as Pazes com a Comida"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Maravilha" && feedback.description.includes("Respeitar seu Corpo") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/respeitar-seu-corpo.png"
                  alt="Respeitar seu Corpo"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Exercício Punitivo'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/exercicio-punitivo.png"
                  alt="Exercício Punitivo"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Foco Estético'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/foco-estetico.png"
                  alt="Foco Estético"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Obrigação Moral'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/obrigacao-moral.png"
                  alt="Obrigação Moral"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Odeio Academia'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/odeio-academia.png"
                  alt="Odeio Academia"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego do 'Pânico da Restrição'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/panico-restricao.png"
                  alt="Pânico da Restrição"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Paralisia por Análise'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/paralisia-analise.png"
                  alt="Paralisia por Análise"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego da 'Rebeldia Autodestrutiva'" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/rebeldia-autodestrutiva.png"
                  alt="Rebeldia Autodestrutiva"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Ponto Cego Perigoso" && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/vou-morrer.png"
                  alt="Descaso"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            {feedback.title === "Exato" && feedback.description.includes("Nutrição Equilibrada") && (
              <div className="flex justify-center mb-4 sm:mb-6">
                <img
                  src="/nutricao-equilibrada.png"
                  alt="Nutrição Equilibrada"
                  className="w-full max-w-md h-auto rounded-lg object-cover"
                />
              </div>
            )}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              {feedback.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-accent mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              {feedback.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                onClick={onNext}
                size="lg"
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated w-full sm:w-auto"
              >
                {isLast ? "VER MEU DIAGNÓSTICO FINAL" : "Próxima Pergunta"} →
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
