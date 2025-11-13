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
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-6"
    >
      <div className="w-full max-w-3xl">
        <ProgressBar progress={0} />
        
        <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diagnóstico "Ponto Cego"
            </h1>
            
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full" />
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Você sabe <span className="font-semibold text-foreground">o que</span> fazer para emagrecer, 
              mas algo invisível te sabota. Responda 10 perguntas rápidas, baseadas em princípios da 
              <span className="font-semibold text-primary"> Nutrição Comportamental</span>, para mapearmos 
              o 'Ponto Cego' que está travando seus resultados.
            </p>
            
            <Button
              onClick={onStart}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated"
            >
              INICIAR DIAGNÓSTICO
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
