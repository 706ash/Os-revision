import React from 'react';
import { CheckCircle2, Circle, ArrowRight, BookOpen, Clock, Target } from 'lucide-react';

interface TopicPageProps {
  topic: any;
  onNavigateToSubtopic: (subtopicId: string) => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const TopicPage: React.FC<TopicPageProps> = ({
  topic,
  onNavigateToSubtopic,
  isCompleted,
  onToggleComplete
}) => {
  return (
    <div className="space-y-8">
      {/* Topic Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {topic.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {topic.description}
          </p>
        </div>
        
        <button
          onClick={onToggleComplete}
          className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all hover:shadow-md"
        >
          {isCompleted ? (
            <>
              <CheckCircle2 size={20} className="text-green-500" />
              <span className="text-green-700 dark:text-green-300 font-medium">Completed</span>
            </>
          ) : (
            <>
              <Circle size={20} className="text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">Mark Complete</span>
            </>
          )}
        </button>
      </div>

      {/* Topic Overview */}
      {topic.overview && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <BookOpen size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
            Overview
          </h2>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {topic.overview}
            </p>
          </div>
        </div>
      )}

      {/* Learning Objectives */}
      {topic.objectives && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Target size={20} className="mr-2 text-green-600 dark:text-green-400" />
            Learning Objectives
          </h2>
          <ul className="space-y-2">
            {topic.objectives.map((objective: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Subtopics */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Subtopics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topic.subtopics.map((subtopic: any, index: number) => (
            <button
              key={subtopic.id}
              onClick={() => onNavigateToSubtopic(subtopic.id)}
              className="text-left p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {subtopic.title}
                  </h3>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {subtopic.description}
              </p>
              
              {subtopic.duration && (
                <div className="flex items-center space-x-2 mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <Clock size={14} />
                  <span>{subtopic.duration}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Quiz Section */}
      {topic.quiz && (
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Quick Knowledge Check
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Test your understanding with these key questions:
          </p>
          <ul className="space-y-2">
            {topic.quiz.map((question: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-xs flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700 dark:text-gray-300">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicPage;