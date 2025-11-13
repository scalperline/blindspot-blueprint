import { useState } from "react";
import { WelcomeScreen } from "@/components/quiz/WelcomeScreen";
import { QuestionScreen } from "@/components/quiz/QuestionScreen";
import { FeedbackScreen } from "@/components/quiz/FeedbackScreen";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { quizData } from "@/data/quizData";

type ScreenType = "welcome" | "question" | "feedback" | "result";

const Index = () => {
  const [screen, setScreen] = useState<ScreenType>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedFeedback, setSelectedFeedback] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [collectedFeedbacks, setCollectedFeedbacks] = useState<
    Array<{ title: string; description: string }>
  >([]);

  const handleStart = () => {
    setScreen("question");
  };

  const handleAnswer = (answerId: string) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers.find(
      (a) => a.id === answerId
    );

    if (selectedAnswer) {
      setSelectedFeedback(selectedAnswer.feedback);
      setCollectedFeedbacks([...collectedFeedbacks, selectedAnswer.feedback]);
      setScreen("feedback");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setScreen("question");
    } else {
      setScreen("result");
    }
  };

  const getProgress = () => {
    if (screen === "welcome") return 0;
    if (screen === "result") return 100;
    return ((currentQuestionIndex + 1) / quizData.length) * 100;
  };

  return (
    <>
      <ProgressBar progress={getProgress()} />
      
      {screen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      
      {screen === "question" && (
        <QuestionScreen
          question={quizData[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      
      {screen === "feedback" && selectedFeedback && (
        <FeedbackScreen
          feedback={selectedFeedback}
          progress={getProgress()}
          onNext={handleNext}
          isLast={currentQuestionIndex === quizData.length - 1}
        />
      )}
      
      {screen === "result" && (
        <ResultScreen feedbacks={collectedFeedbacks} />
      )}
    </>
  );
};

export default Index;
