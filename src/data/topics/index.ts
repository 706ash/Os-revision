import { introduction } from './introduction';
import { processManagementTopic } from './processes';
import { memory } from './memory';
import { fileSystems } from './fileSystems';
import { Topic } from '../types';

// Export individual topics for direct access
export { introduction, processManagementTopic, memory, fileSystems };

// Export all topics as an array (maintains backward compatibility)
export const osTopics: Topic[] = [
  introduction,
  processManagementTopic,
  // memory,
  // fileSystems
];

// Export topics as an object for easy lookup by ID
export const topicsById = {
  introduction,
  processManagementTopic,
  memory,
  'file-systems': fileSystems
};

// Helper function to get a topic by ID
export const getTopicById = (id: string): Topic | undefined => {
  return osTopics.find(topic => topic.id === id);
};

// Helper function to get all topic IDs
export const getAllTopicIds = (): string[] => {
  return osTopics.map(topic => topic.id);
};

// Helper function to get total number of subtopics across all topics
export const getTotalSubtopicCount = (): number => {
  return osTopics.reduce((total, topic) => total + topic.subtopics.length, 0);
};