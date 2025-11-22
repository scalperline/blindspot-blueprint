import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { Question } from "@/data/quizData";

interface QuestionScreenProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

export const QuestionScreen = ({ question, onAnswer }: QuestionScreenProps) => {
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl shadow-elevated p-4 sm:p-6 md:p-8 lg:p-12"
        >
          <div className="mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Princípio {question.id}: {question.principle}
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
              {question.text}
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {question.answers.map((answer, index) => (
              <motion.div
                key={answer.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Button
                  onClick={() => onAnswer(answer.id)}
                  variant="outline"
                  className="w-full text-left justify-start p-3 sm:p-4 md:p-5 lg:p-6 h-auto border-2 hover:border-primary hover:bg-secondary transition-all text-sm sm:text-base leading-relaxed min-h-[60px] sm:min-h-[70px] overflow-hidden whitespace-normal"
                >
                  <span className="font-semibold text-primary mr-2 sm:mr-3 flex-shrink-0">
                    {String.fromCharCode(97 + index)})
                  </span>
                  <span className="flex-1 break-words">{answer.text}</span>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
