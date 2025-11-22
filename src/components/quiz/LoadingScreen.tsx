import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 segundos
    const interval = 16; // ~60fps
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // Pequeno delay antes de chamar onComplete
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-8 sm:p-10 md:p-12 w-full max-w-md"
      >
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex justify-center"
          >
            <img
              src="/nutricoffeebrasil.png"
              alt="NutriCoffee Brasil®"
              className="w-48 sm:w-56 md:w-64 h-auto"
            />
          </motion.div>

          {/* Barra de Progresso */}
          <div className="w-full space-y-3">
            <div className="relative h-3 sm:h-4 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
            <motion.p
              key={Math.floor(progress)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="text-center text-sm sm:text-base text-muted-foreground font-medium"
            >
              {Math.floor(progress)}%
            </motion.p>
          </div>

          {/* Texto de carregamento */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm sm:text-base text-muted-foreground"
          >
            Preparando seu diagnóstico...
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

