import React from 'react';
import { BookOpen, CheckCircle2, Circle, ArrowRight, Clock, Target } from 'lucide-react';

interface HomePageProps {
  topics: any[];
  completedTopics: Set<string>;
  onNavigateToTopic: (topicId: string) => void;
  onToggleComplete: (topicId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  topics,
  completedTopics,
  onNavigateToTopic,
  onToggleComplete
}) => {
  const getOverallProgress = () => {
    const totalTopics = topics.length;
    const completedCount = topics.filter(topic => completedTopics.has(topic.id)).length;
    return { completed: completedCount, total: totalTopics, percentage: Math.round((completedCount / totalTopics) * 100) || 0 };
  };

  const getTopicProgress = (topic: any) => {
    const totalSubtopics = topic.subtopics.length;
    const completedSubtopics = topic.subtopics.filter((sub: any) => 
      completedTopics.has(`${topic.id}-${sub.id}`)
    ).length;
    return { completed: completedSubtopics, total: totalSubtopics, percentage: Math.round((completedSubtopics / totalSubtopics) * 100) || 0 };
  };

  const recentTopics = topics.slice(0, 3);
  const progress = getOverallProgress();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <BookOpen size={32} className="text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Operating Systems Revision
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Master the fundamentals of operating systems with this interactive notebook. 
          Track your progress, search through topics, and organize your learning journey.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
            <Target size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
            Overall Progress
          </h2>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {progress.percentage}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{progress.completed} of {progress.total} topics completed</span>
          <span>{progress.total - progress.completed} remaining</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Completed</p>
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">{progress.completed}</p>
            </div>
            <CheckCircle2 size={24} className="text-green-500" />
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">In Progress</p>
              <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                {topics.length - progress.completed}
              </p>
            </div>
            <Clock size={24} className="text-yellow-500" />
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Topics</p>
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{topics.length}</p>
            </div>
            <BookOpen size={24} className="text-blue-500" />
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => {
            const topicProgress = getTopicProgress(topic);
            const isCompleted = completedTopics.has(topic.id);

            return (
              <div
                key={topic.id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleComplete(topic.id);
                    }}
                    className="ml-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : (
                      <Circle size={20} className="text-gray-400 hover:text-green-500" />
                    )}
                  </button>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{topicProgress.completed}/{topicProgress.total} subtopics</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${topicProgress.percentage}%` }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToTopic(topic.id)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Explore Topic
                  </span>
                  <ArrowRight size={16} className="text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;