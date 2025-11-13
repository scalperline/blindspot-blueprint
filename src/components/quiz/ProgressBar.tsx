import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">
          Radar de Pontos Cegos
        </span>
        <span className="text-sm font-bold text-primary">
          {progress}% Mapeado
        </span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden shadow-soft">
        <motion.div
          className="h-full bg-gradient-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
