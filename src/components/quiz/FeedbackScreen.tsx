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
      className="min-h-screen bg-gradient-hero flex items-center justify-center p-6"
    >
      <div className="w-full max-w-3xl">
        <ProgressBar progress={progress} />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {feedback.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
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
              className="px-8 py-6 text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-elevated"
            >
              {isLast ? "VER MEU DIAGNÓSTICO FINAL" : "Próxima Pergunta"} →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
