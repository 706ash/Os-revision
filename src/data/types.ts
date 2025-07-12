export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  explanation?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'note' | 'image';
  content: string;
  language?: string;
  items?: string[];
  // Image-specific properties
  src?: string;
  alt?: string;
  caption?: string;
  width?: string;
  height?: string;
}

export interface Subtopic {
  id: string;
  title: string;
  description: string;
  duration?: string;
  content: ContentSection[];
  keyPoints?: string[];
  questions?: string[];
  quiz?: MCQQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  overview?: string;
  objectives?: string[];
  quiz?: string[];
  subtopics: Subtopic[];
}

export interface OSTopics {
  [key: string]: Topic;
}