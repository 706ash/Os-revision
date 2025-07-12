import { useState, useMemo } from 'react';

export function useSearch(topics: any[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: any[] = [];

    topics.forEach(topic => {
      // Search in topic title and description
      if (topic.title.toLowerCase().includes(query) || 
          topic.description.toLowerCase().includes(query)) {
        results.push({
          type: 'topic',
          topicId: topic.id,
          topicTitle: topic.title,
          title: topic.title,
          description: topic.description
        });
      }

      // Search in subtopics
      topic.subtopics.forEach((subtopic: any) => {
        if (subtopic.title.toLowerCase().includes(query) || 
            subtopic.description.toLowerCase().includes(query)) {
          results.push({
            type: 'subtopic',
            topicId: topic.id,
            subtopicId: subtopic.id,
            topicTitle: topic.title,
            subtopicTitle: subtopic.title,
            title: subtopic.title,
            description: subtopic.description
          });
        }
      });
    });

    return results;
  }, [searchQuery, topics]);

  const clearSearch = () => setSearchQuery('');

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching: searchQuery.trim().length > 0,
    clearSearch
  };
}