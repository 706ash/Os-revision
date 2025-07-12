import { Topic } from './src/data/types';

// COMPLETE TOPIC TEMPLATE
// This template shows all components and structures used in OS revision topics

export const topicTemplate: Topic = {
  // ===== TOPIC LEVEL PROPERTIES =====
  id: 'template-topic-id',
  title: 'Template Topic Title',
  description: 'Brief description of what this topic covers.',
  overview: 'Detailed overview explaining the topic and its importance in operating systems.',
  
  // Optional: Learning objectives for the topic
  objectives: [
    'First learning objective',
    'Second learning objective',
    'Third learning objective'
  ],
  
  // Optional: General quiz questions for the topic
  quiz: [
    'General question about the topic?',
    'Another broad question?',
    'Third general question?'
  ],
  
  // ===== SUBTOPICS ARRAY =====
  subtopics: [
    {
      // ===== SUBTOPIC LEVEL PROPERTIES =====
      id: 'subtopic-id',
      title: 'Subtopic Title',
      description: 'Description of what this subtopic covers.',
      duration: '20 minutes', // Optional: estimated time
      
      // ===== CONTENT SECTIONS =====
      content: [
        // 1. PARAGRAPH - Basic text content
        {
          type: 'paragraph',
          content: 'This is a paragraph of text explaining concepts, definitions, or detailed information about the topic.'
        },
        
        // 2. HEADING - Section headers
        {
          type: 'heading',
          content: 'Section Heading'
        },
        
        // 3. LIST - Bullet points or numbered lists
        {
          type: 'list',
          content: 'List of items',
          items: [
            'First list item',
            'Second list item',
            'Third list item with more detail'
          ]
        },
        
        // 4. NOTE - Important information or tips
        {
          type: 'note',
          content: 'This is a note that provides additional context, tips, or important information to remember.'
        },
        
        // 5. IMAGE - Visual content
        {
          type: 'image',
          content: 'Example image',
          src: 'https://example.com/image-url.jpg',
          alt: 'Alternative text for accessibility',
          caption: 'Caption explaining the image',
          width: '100%', // Optional: CSS width
          height: 'auto'  // Optional: CSS height
        },
        
        // 6. CODE - Code examples (if needed)
        {
          type: 'code',
          content: '// Example code here\nfunction example() {\n  return "Hello World";\n}',
          language: 'javascript' // Optional: programming language
        }
      ],
      
      // ===== KEY POINTS =====
      keyPoints: [
        'First key point to remember',
        'Second important concept',
        'Third critical understanding',
        'Fourth essential takeaway'
      ],
      
      // ===== QUESTIONS =====
      // Optional: Discussion questions (not quiz format)
      questions: [
        'What are the implications of this concept?',
        'How does this relate to other topics?',
        'What are the trade-offs involved?'
      ],
      
      // ===== QUIZ =====
      // Optional: Multiple choice questions for this subtopic
      quiz: [
        {
          id: 'q1',
          question: 'What is the primary function of this concept?',
          options: [
            { id: 'a', text: 'Incorrect option A', isCorrect: false },
            { id: 'b', text: 'Correct option B', isCorrect: true },
            { id: 'c', text: 'Incorrect option C', isCorrect: false },
            { id: 'd', text: 'Incorrect option D', isCorrect: false }
          ],
          explanation: 'Explanation of why the correct answer is right and why others are wrong.'
        },
        {
          id: 'q2',
          question: 'Which of the following is NOT a characteristic of this concept?',
          options: [
            { id: 'a', text: 'Characteristic A', isCorrect: false },
            { id: 'b', text: 'Characteristic B', isCorrect: false },
            { id: 'c', text: 'This is NOT a characteristic', isCorrect: true },
            { id: 'd', text: 'Characteristic D', isCorrect: false }
          ],
          explanation: 'Detailed explanation of the correct answer.'
        }
      ]
    },
    
    // ===== ADDITIONAL SUBTOPICS =====
    {
      id: 'second-subtopic',
      title: 'Second Subtopic',
      description: 'Description of the second subtopic.',
      duration: '15 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Content for the second subtopic.'
        },
        {
          type: 'heading',
          content: 'Another Section'
        },
        {
          type: 'list',
          content: 'List items',
          items: [
            'Item 1',
            'Item 2',
            'Item 3'
          ]
        }
      ],
      keyPoints: [
        'Key point 1',
        'Key point 2'
      ]
    }
  ]
};

// ===== CONTENT TYPE REFERENCE =====
/*
Available Content Types:
1. 'paragraph' - Text content
2. 'heading' - Section headers
3. 'list' - Bullet points (requires 'items' array)
4. 'note' - Important information/tips
5. 'image' - Visual content (requires 'src', 'alt', optional: 'caption', 'width', 'height')
6. 'code' - Code examples (optional: 'language')

Required Properties for Each Type:
- All types: 'type' and 'content'
- 'list': requires 'items' array
- 'image': requires 'src' and 'alt'
- 'code': optional 'language'

Quiz Structure:
- 'id': unique identifier
- 'question': the question text
- 'options': array of MCQOption objects
- 'explanation': optional explanation of the answer
*/ 