import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, X, BookOpen } from 'lucide-react';

interface SidebarProps {
  topics: any[];
  isOpen: boolean;
  completedTopics: Set<string>;
  currentPage: any;
  onNavigateToTopic: (topicId: string) => void;
  onNavigateToSubtopic: (topicId: string, subtopicId: string) => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  topics,
  isOpen,
  completedTopics,
  currentPage,
  onNavigateToTopic,
  onNavigateToSubtopic,
  onClose
}) => {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const isTopicActive = (topicId: string) => {
    return currentPage.type === 'topic' && currentPage.topicId === topicId;
  };

  const isSubtopicActive = (topicId: string, subtopicId: string) => {
    return currentPage.type === 'subtopic' && 
           currentPage.topicId === topicId && 
           currentPage.subtopicId === subtopicId;
  };

  const getTopicProgress = (topic: any) => {
    const totalSubtopics = topic.subtopics.length;
    const completedSubtopics = topic.subtopics.filter((sub: any) => 
      completedTopics.has(`${topic.id}-${sub.id}`)
    ).length;
    return { completed: completedSubtopics, total: totalSubtopics };
  };

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md
      border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
    `}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <BookOpen size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Topics</h2>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        <nav className="p-4 space-y-2">
          {topics.map((topic) => {
            const progress = getTopicProgress(topic);
            const isExpanded = expandedTopics.has(topic.id);
            const isActive = isTopicActive(topic.id);

            return (
              <div key={topic.id} className="space-y-1">
                <div className="flex items-center group">
                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className="flex items-center justify-center w-6 h-6 mr-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown size={14} className="text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronRight size={14} className="text-gray-600 dark:text-gray-400" />
                    )}
                  </button>

                  <button
                    onClick={() => onNavigateToTopic(topic.id)}
                    className={`
                      flex-1 flex items-center justify-between p-2 rounded-md text-left transition-all
                      ${isActive 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }
                    `}
                  >
                    <span className="font-medium text-sm">{topic.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {progress.completed}/{progress.total}
                      </span>
                      {completedTopics.has(topic.id) ? (
                        <CheckCircle2 size={16} className="text-green-500" />
                      ) : (
                        <Circle size={16} className="text-gray-400" />
                      )}
                    </div>
                  </button>
                </div>

                {isExpanded && (
                  <div className="ml-8 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {topic.subtopics.map((subtopic: any) => {
                      const subtopicActive = isSubtopicActive(topic.id, subtopic.id);
                      const subtopicCompleted = completedTopics.has(`${topic.id}-${subtopic.id}`);

                      return (
                        <button
                          key={subtopic.id}
                          onClick={() => onNavigateToSubtopic(topic.id, subtopic.id)}
                          className={`
                            w-full flex items-center justify-between p-2 rounded-md text-left text-sm transition-all
                            ${subtopicActive
                              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                            }
                          `}
                        >
                          <span>{subtopic.title}</span>
                          {subtopicCompleted ? (
                            <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                          ) : (
                            <Circle size={14} className="text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;