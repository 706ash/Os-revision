import React from 'react';
import { Clock, BookOpen, Code, CheckSquare, Lightbulb } from 'lucide-react';
import ImageDiagram from './ImageDiagram';
import MCQQuiz from './MCQQuiz';

interface SubtopicPageProps {
  subtopic: any;
  topic: any;
}

const SubtopicPage: React.FC<SubtopicPageProps> = ({ subtopic, topic }) => {
  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      return <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content}</p>;
    }

    return content.map((section: any, index: number) => {
      switch (section.type) {
        case 'heading':
          return (
            <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
              {section.content}
            </h3>
          );
        
        case 'paragraph':
          return (
            <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {section.content}
            </p>
          );
        
        case 'list':
          return (
            <ul key={index} className="space-y-2 mb-4 ml-4">
              {section.items.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          );
        
        case 'code':
          return (
            <div key={index} className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 mb-4 overflow-x-auto">
              <div className="flex items-center space-x-2 mb-2">
                <Code size={16} className="text-blue-400" />
                <span className="text-gray-400 text-sm font-medium">{section.language || 'Code'}</span>
              </div>
              <pre className="text-green-400 text-sm font-mono">
                <code>{section.content}</code>
              </pre>
            </div>
          );
        
        case 'note':
          return (
            <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-3">
                <Lightbulb size={18} className="text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Note</p>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">{section.content}</p>
                </div>
              </div>
            </div>
          );
        
        case 'image':
          return (
            <ImageDiagram
              key={index}
              src={section.src || ''}
              alt={section.alt || 'Diagram'}
              caption={section.caption}
              width={section.width}
              height={section.height}
            />
          );
        
        default:
          return null;
      }
    });
  };

  return (
    <div className="space-y-8">
      {/* Subtopic Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
          <BookOpen size={16} />
          <span>{topic.title}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {subtopic.title}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {subtopic.description}
        </p>
        
        {subtopic.duration && (
          <div className="flex items-center space-x-2 mt-3 text-gray-500 dark:text-gray-400">
            <Clock size={16} />
            <span className="text-sm">Estimated reading time: {subtopic.duration}</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {renderContent(subtopic.content)}
      </div>

      {/* Key Points */}
      {subtopic.keyPoints && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CheckSquare size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
            Key Points to Remember
          </h2>
          <ul className="space-y-3">
            {subtopic.keyPoints.map((point: string, index: number) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* MCQ Quiz */}
      {subtopic.quiz && (
        <MCQQuiz 
          questions={subtopic.quiz} 
          title={`${subtopic.title} Quiz`}
        />
      )}

      {/* Practice Questions */}
      {subtopic.questions && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Practice Questions
          </h2>
          <div className="space-y-4">
            {subtopic.questions.map((question: string, index: number) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {index + 1}. {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubtopicPage;