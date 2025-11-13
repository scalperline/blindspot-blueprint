import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { AlertCircle } from "lucide-react";

interface ResultScreenProps {
  feedbacks: Array<{ title: string; description: string }>;
}

export const ResultScreen = ({ feedbacks }: ResultScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 pb-8"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Seu Diagnóstico "Ponto Cego" está Completo
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Obrigado pela sua honestidade. Com base nas suas respostas, 
              seu problema não é falta de disciplina. 
              Você está presa(o) em um ciclo de auto-sabotagem. 
              Veja seu diagnóstico:
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-secondary/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 border-primary"
              >
                <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">
                  {feedback.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feedback.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-accent/10 border-2 border-accent rounded-lg sm:rounded-xl p-6 sm:p-8 mb-6 sm:mb-8"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  O Gap que Você Precisa Preencher
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                  Você agora tem o <span className="font-semibold text-foreground">Diagnóstico</span>. 
                  Você vê exatamente o que está errado.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Mas você ainda não tem o <span className="font-semibold text-foreground">Plano de Ação</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-primary/5 rounded-lg sm:rounded-xl p-6 sm:p-8 mb-6 sm:mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center">
              A Solução: O Mapa Metabólico
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              É exatamente para isso que eu criei o <span className="font-semibold text-primary">'Mapa Metabólico'</span>.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Eu resumi os princípios práticos da <span className="font-semibold text-primary">Nutrição Comportamental</span> em 
              um guia de aplicação imediata. Ele é o manual passo a passo para você:
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span className="text-muted-foreground">Fazer as pazes com a comida (sem culpa).</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span className="text-muted-foreground">Aprender a honrar sua fome (sem exageros).</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span className="text-muted-foreground">Lidar com a 'Fome Emocional' (sem usar a comida).</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span className="text-muted-foreground">E gerenciar sua saúde (diabetes, HAS) com gentileza, e não com punição.</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg font-semibold text-foreground text-center mb-4 sm:mb-6">
              É a solução completa para os problemas que acabamos de diagnosticar.
            </p>
            <div className="text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Adquira o acesso imediato ao seu 'Mapa Metabólico' por apenas
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                R$ 44
              </p>
              <Button
                size="lg"
                className="px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated w-full sm:w-auto"
              >
                QUERO MEU MAPA METABÓLICO POR R$ 44
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
