import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProgressBar } from "./ProgressBar";
import { Question } from "@/data/quizData";

interface QuestionScreenProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

export const QuestionScreen = ({ question, onAnswer }: QuestionScreenProps) => {
  const progress = (question.id / 10) * 100;

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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-12"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Princípio: {question.principle}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {question.text}
            </h2>
          </div>

          <div className="space-y-4">
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
                  className="w-full text-left p-6 h-auto border-2 hover:border-primary hover:bg-secondary transition-all text-base"
                >
                  <span className="font-semibold text-primary mr-3">
                    {String.fromCharCode(97 + index)})
                  </span>
                  {answer.text}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
