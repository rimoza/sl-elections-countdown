"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quizData = [
  {
    question: "How often are presidential elections held in Somaliland?",
    options: [
      "Every 3 years",
      "Every 4 years",
      "Every 5 years",
      "Every 6 years",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "What is the minimum age requirement for a presidential candidate?",
    options: ["30 years", "35 years", "40 years", "45 years"],
    correctAnswer: 2,
  },
  {
    question:
      "Which body is responsible for organizing elections in Somaliland?",
    options: [
      "Supreme Court",
      "Parliament",
      "National Electoral Commission",
      "Council of Ministers",
    ],
    correctAnswer: 2,
  },
  // Add more questions as needed
];

const ElectionQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Take Election Quiz</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Somaliland Election Quiz</DialogTitle>
          <DialogDescription>
            Test your knowledge about Somaliland&apos;s electoral process
          </DialogDescription>
        </DialogHeader>
        <Card>
          <CardContent className="p-6">
            {!showResults ? (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  {quizData[currentQuestion].question}
                </h3>
                <div className="space-y-2">
                  {quizData[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      variant="outline"
                      className="w-full text-left justify-start"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Quiz Complete!</h3>
                <p className="text-lg mb-4">
                  Your score: {score} out of {quizData.length}
                </p>
                <Button onClick={resetQuiz}>Try Again</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ElectionQuiz;
