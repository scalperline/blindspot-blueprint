import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  onLogoClick?: () => void;
}

export const ProgressBar = ({ progress, onLogoClick }: ProgressBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-soft border-b border-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <img
          src="/nutricoffeebrasil.png"
          alt="NutriCoffee Brasil® Logo"
          onClick={onLogoClick}
          className={`absolute top-3 left-4 sm:left-6 lg:left-8 h-[18.48px] sm:h-8 w-auto object-contain ${onLogoClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
        />
        <div className="flex items-center justify-end mb-2 pl-8 sm:pl-10 lg:pl-12 gap-2">
          <span className="text-xs sm:text-sm font-medium text-foreground">
            Radar de Pontos Cegos
          </span>
          <span className="text-xs sm:text-sm font-bold text-primary">
            {progress}% Mapeado
          </span>
        </div>
        <div className="h-2 sm:h-3 bg-secondary rounded-full overflow-hidden shadow-soft">
          <motion.div
            className="h-full"
            style={{
              background: "linear-gradient(135deg, #F67717 0%, #FF9A4D 100%)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};
