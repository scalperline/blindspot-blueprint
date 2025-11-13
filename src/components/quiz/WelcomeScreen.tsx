import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28"
    >
      <div className="w-full max-w-3xl">
        <div className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10 lg:p-12 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Diagnóstico "Ponto Cego"
            </h1>
            
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6 rounded-full" />
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              Você sabe <span className="font-semibold text-foreground">o que</span> fazer para emagrecer, 
              mas algo invisível te sabota. Responda 10 perguntas rápidas, baseadas em princípios da 
              <span className="font-semibold text-primary"> Nutrição Comportamental</span>, para mapearmos 
              o 'Ponto Cego' que está travando seus resultados.
            </p>
            
            <Button
              onClick={onStart}
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated w-full sm:w-auto"
            >
              INICIAR DIAGNÓSTICO
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
