import { Topic } from '../types';

export const memory: Topic = {
  id: 'memory',
  title: 'Memory Management',
  description: 'Techniques for managing system memory including virtual memory and paging.',
  overview: 'Memory management involves allocating and deallocating memory space for processes, implementing virtual memory systems, and optimizing memory usage for better system performance.',
  objectives: [
    'Understand memory hierarchy and organization',
    'Learn about virtual memory concepts',
    'Explore paging and segmentation techniques',
    'Study memory allocation strategies'
  ],
  subtopics: [
    {
      id: 'memory-hierarchy',
      title: 'Memory Hierarchy',
      description: 'Understanding the different levels of memory in computer systems.',
      duration: '20 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Computer systems use a hierarchy of memory types, each with different speed, capacity, and cost characteristics.'
        },
        {
          type: 'heading',
          content: 'Memory Levels (Fastest to Slowest)'
        },
        {
          type: 'list',
          items: [
            'CPU Registers: Fastest, smallest capacity',
            'Cache Memory: L1, L2, L3 caches',
            'Main Memory (RAM): Primary storage',
            'Secondary Storage: Hard drives, SSDs',
            'Tertiary Storage: Optical disks, tapes'
          ]
        }
      ],
      keyPoints: [
        'Faster memory is more expensive and smaller',
        'Memory hierarchy optimizes cost vs performance',
        'CPU accesses memory levels in order of speed',
        'Cache systems improve effective access time'
      ]
    },
    {
      id: 'virtual-memory',
      title: 'Virtual Memory',
      description: 'Concept and implementation of virtual memory systems.',
      duration: '30 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Virtual memory is a memory management technique that provides an abstraction of the storage resources, allowing programs to use more memory than physically available.'
        },
        {
          type: 'heading',
          content: 'Benefits of Virtual Memory'
        },
        {
          type: 'list',
          items: [
            'Programs can be larger than physical memory',
            'Multiple programs can run simultaneously',
            'Memory protection between processes',
            'Simplified memory allocation'
          ]
        },
        {
          type: 'heading',
          content: 'Implementation Techniques'
        },
        {
          type: 'list',
          items: [
            'Paging: Memory divided into fixed-size pages',
            'Segmentation: Memory divided into variable-size segments',
            'Combined: Segmented paging systems'
          ]
        }
      ],
      keyPoints: [
        'Virtual memory extends available memory',
        'Provides memory protection and isolation',
        'Uses secondary storage as extension',
        'Transparent to application programs'
      ]
    }
  ]
};