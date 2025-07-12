import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sun, Moon, BookOpen, CheckCircle2, Circle } from 'lucide-react';
import { osTopics } from './data/topics';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useSearch } from './hooks/useSearch';
import Sidebar from './components/Sidebar';
import SearchResults from './components/SearchResults';
import TopicPage from './components/TopicPage';
import SubtopicPage from './components/SubtopicPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState({ type: 'home' });
  const [completedTopics, setCompletedTopics] = useLocalStorage('completedTopics', new Set());
  
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    clearSearch
  } = useSearch(osTopics);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTopic = (topicId: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const navigateToTopic = (topicId: string) => {
    setCurrentPage({ type: 'topic', topicId });
    clearSearch();
    setSidebarOpen(false);
  };

  const navigateToSubtopic = (topicId: string, subtopicId: string) => {
    setCurrentPage({ type: 'subtopic', topicId, subtopicId });
    clearSearch();
    setSidebarOpen(false);
  };

  const navigateHome = () => {
    setCurrentPage({ type: 'home' });
    clearSearch();
    setSidebarOpen(false);
  };

  const getCurrentTopic = () => {
    if (currentPage.type === 'topic' || currentPage.type === 'subtopic') {
      return osTopics.find(topic => topic.id === currentPage.topicId);
    }
    return null;
  };

  const getCurrentSubtopic = () => {
    if (currentPage.type === 'subtopic') {
      const topic = getCurrentTopic();
      return topic?.subtopics.find(sub => sub.id === currentPage.subtopicId);
    }
    return null;
  };

  const renderBreadcrumbs = () => {
    const topic = getCurrentTopic();
    const subtopic = getCurrentSubtopic();
    
    if (!topic) return null;

    return (
      <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <button 
          onClick={navigateHome}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <button 
          onClick={() => navigateToTopic(topic.id)}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {topic.title}
        </button>
        {subtopic && (
          <>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-100">{subtopic.title}</span>
          </>
        )}
      </nav>
    );
  };

  const renderMainContent = () => {
    if (isSearching && searchQuery) {
      return (
        <SearchResults 
          results={searchResults} 
          query={searchQuery}
          onNavigate={(topicId, subtopicId) => {
            if (subtopicId) {
              navigateToSubtopic(topicId, subtopicId);
            } else {
              navigateToTopic(topicId);
            }
          }}
        />
      );
    }

    switch (currentPage.type) {
      case 'topic':
        const topic = getCurrentTopic();
        return topic ? (
          <TopicPage 
            topic={topic} 
            onNavigateToSubtopic={(subtopicId) => navigateToSubtopic(topic.id, subtopicId)}
            isCompleted={completedTopics.has(topic.id)}
            onToggleComplete={() => toggleTopic(topic.id)}
          />
        ) : null;
        
      case 'subtopic':
        const subtopic = getCurrentSubtopic();
        const parentTopic = getCurrentTopic();
        return subtopic && parentTopic ? (
          <SubtopicPage 
            subtopic={subtopic} 
            topic={parentTopic}
          />
        ) : null;
        
      default:
        return (
          <HomePage 
            topics={osTopics}
            completedTopics={completedTopics}
            onNavigateToTopic={navigateToTopic}
            onToggleComplete={toggleTopic}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        topics={osTopics}
        isOpen={sidebarOpen}
        completedTopics={completedTopics}
        currentPage={currentPage}
        onNavigateToTopic={navigateToTopic}
        onNavigateToSubtopic={navigateToSubtopic}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="lg:ml-80 transition-all duration-300">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Menu size={20} />
              </button>
              
              <button
                onClick={navigateHome}
                className="flex items-center space-x-2 text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
                <span className="hidden xs:inline sm:inline">Notebook OS</span>
              </button>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search */}
              <div className="relative flex-1 sm:flex-initial sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-48 md:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X size={16} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  </button>
                )}
              </div>

              {/* Theme toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0 ml-2"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-6 max-w-4xl mx-auto">
          {renderBreadcrumbs()}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-8 notebook-lines">
            {renderMainContent()}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;