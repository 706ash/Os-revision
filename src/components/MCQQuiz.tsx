import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  explanation?: string;
}

interface MCQQuizProps {
  questions: MCQQuestion[];
  title?: string;
}

const MCQQuiz: React.FC<MCQQuizProps> = ({ questions, title = "Quiz" }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (questionId: string, optionId: string) => {
    if (showResults) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleSubmitQuestion = () => {
    setShowResults(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowResults(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      const selectedOption = selectedAnswers[question.id];
      const correctOption = question.options.find(opt => opt.isCorrect);
      if (selectedOption === correctOption?.id) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  if (quizCompleted) {
    const score = calculateScore();
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <div className="text-center">
          <Award size={48} className="mx-auto text-yellow-500 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Completed!</h3>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {score.percentage}%
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            You scored {score.correct} out of {score.total} questions correctly
          </p>
          
          <div className="space-y-4">
            {score.percentage >= 80 && (
              <p className="text-green-600 dark:text-green-400 font-medium">
                🎉 Excellent work! You have a strong understanding of this topic.
              </p>
            )}
            {score.percentage >= 60 && score.percentage < 80 && (
              <p className="text-yellow-600 dark:text-yellow-400 font-medium">
                👍 Good job! Consider reviewing the topics you missed.
              </p>
            )}
            {score.percentage < 60 && (
              <p className="text-red-600 dark:text-red-400 font-medium">
                📚 Keep studying! Review the material and try again.
              </p>
            )}
            
            <button
              onClick={handleResetQuiz}
              className="flex items-center space-x-2 mx-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RotateCcw size={16} />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[question.id];
  const correctOption = question.options.find(opt => opt.isCorrect);

  return (
    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {question.question}
        </h4>

        <div className="space-y-3">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.isCorrect;
            const isWrong = showResults && isSelected && !isCorrect;
            const shouldHighlight = showResults && isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(question.id, option.id)}
                disabled={showResults}
                className={`
                  w-full text-left p-4 rounded-lg border transition-all
                  ${isSelected && !showResults 
                    ? 'border-purple-500 bg-purple-100 dark:bg-purple-900/50' 
                    : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600'
                  }
                  ${shouldHighlight 
                    ? 'border-green-500 bg-green-100 dark:bg-green-900/50' 
                    : ''
                  }
                  ${isWrong 
                    ? 'border-red-500 bg-red-100 dark:bg-red-900/50' 
                    : ''
                  }
                  ${showResults ? 'cursor-default' : 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{option.text}</span>
                  {showResults && (
                    <div>
                      {isCorrect && <CheckCircle2 size={20} className="text-green-500" />}
                      {isWrong && <XCircle size={20} className="text-red-500" />}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showResults && question.explanation && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Explanation:</h5>
          <p className="text-blue-800 dark:text-blue-200 text-sm">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-between">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        {!showResults && selectedAnswer ? (
          <button
            onClick={handleSubmitQuestion}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Answer
          </button>
        ) : showResults ? (
          <button
            onClick={handleNextQuestion}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        ) : (
          <button
            disabled
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
          >
            Select an Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default MCQQuiz;