import { Topic } from '../types';

export const fileSystems: Topic = {
  id: 'file-systems',
  title: 'File Systems',
  description: 'Organization, storage, and management of files and directories.',
  overview: 'File systems provide organized storage and retrieval of data on storage devices. They manage directory structures, file allocation, and access permissions.',
  objectives: [
    'Understand file system concepts and structures',
    'Learn about different file allocation methods',
    'Explore directory implementation techniques',
    'Study file system reliability and performance'
  ],
  subtopics: [
    {
      id: 'file-concepts',
      title: 'File Concepts',
      description: 'Basic file operations, attributes, and types.',
      duration: '25 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'A file is a named collection of related information stored on secondary storage. Files provide a uniform logical view of information storage.'
        },
        {
          type: 'heading',
          content: 'File Attributes'
        },
        {
          type: 'list',
          items: [
            'Name: Human-readable identifier',
            'Type: File format and content type',
            'Size: Current file size in bytes',
            'Location: Pointer to file location on device',
            'Protection: Access permissions',
            'Time stamps: Creation, modification, access times'
          ]
        }
      ],
      keyPoints: [
        'Files abstract storage device details',
        'File attributes provide metadata',
        'File operations provide consistent interface',
        'File types determine handling methods'
      ]
    },
    {
      id: 'directory-structure',
      title: 'Directory Structure',
      description: 'Organization of files in directories and directory implementation.',
      duration: '20 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Directories organize files into logical groups and provide a naming structure for the file system.'
        },
        {
          type: 'heading',
          content: 'Directory Types'
        },
        {
          type: 'list',
          items: [
            'Single-level: All files in one directory',
            'Two-level: Separate directory for each user',
            'Tree-structured: Hierarchical directory tree',
            'Acyclic graph: Allows sharing of files',
            'General graph: Allows links and cycles'
          ]
        }
      ],
      keyPoints: [
        'Directories provide file organization',
        'Hierarchical structure is most common',
        'Path names specify file locations',
        'Directory implementation affects performance'
      ]
    }
  ]
};