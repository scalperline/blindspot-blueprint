import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { CheckCircle2 } from "lucide-react";

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
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28"
    >
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10 lg:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6 sm:mb-8"
          >
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
            <Button
              onClick={onNext}
              size="lg"
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated w-full sm:w-auto"
            >
              {isLast ? "VER MEU DIAGNÓSTICO FINAL" : "Próxima Pergunta"} →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
