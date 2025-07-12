import React from 'react';
import { Search, ArrowRight, BookOpen } from 'lucide-react';

interface SearchResultsProps {
  results: any[];
  query: string;
  onNavigate: (topicId: string, subtopicId?: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query, onNavigate }) => {
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <Search size={48} className="mx-auto text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No results found
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Try searching with different keywords or browse topics below.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
        </p>
      </div>

      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <BookOpen size={14} />
                  <span>{result.topicTitle}</span>
                  {result.subtopicTitle && (
                    <>
                      <span>→</span>
                      <span>{result.subtopicTitle}</span>
                    </>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlightText(result.title, query)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {highlightText(result.description, query)}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate(result.topicId, result.subtopicId)}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
            >
              <span className="font-medium">
                {result.subtopicId ? 'View Subtopic' : 'View Topic'}
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;