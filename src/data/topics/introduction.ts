import { Topic } from '../types';

export const introduction: Topic = {
  id: 'intro-os',
  title: 'Introduction to Operating Systems',
  description: 'Fundamental overview of what an operating system is, its structure, what it does, services provided, and a brief look at system calls.',
  overview: 'Operating systems are the interface between the user and computer hardware. They manage hardware resources, provide services for application programs, and ensure secure and efficient execution. This topic gives you a tour of basic OS responsibilities, structure, services, and the role of system calls.',
  objectives: [
    'Define what an operating system is',
    'Understand the basic structure of an OS',
    'Identify the services provided by an OS',
    'Describe what system calls are and why they are needed'
  ],
  quiz: [
    'What is an operating system?',
    'Name three services an OS provides.',
    'Why are system calls important?'
  ],
  subtopics: [
    {
      id: 'what-os-does',
      title: 'What an Operating System Does',
      description: 'Introduction to the role of an OS in a computer system.',
      duration: '10 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'An operating system is software that acts as an intermediary between users and computer hardware. It manages hardware resources and provides an environment for application programs.'
        },
        {
          type: 'list',
          content: 'Major OS responsibilities',
          items: [
            'Resource allocation',
            'Program execution',
            'I/O operations control',
            'File system management',
            'Error detection and handling',
            'Security and protection'
          ]
        },
        {
          type: 'note',
          content: 'The OS acts as both a resource allocator and a control program.'
        }
      ],
      keyPoints: [
        'OS controls and coordinates hardware use',
        'Provides a stable environment for applications',
        'Acts like a government for the computer'
      ],
      quiz: [
        {
          id: 'whatosdoes-q1',
          question: 'Which of the following best describes an operating system?',
          options: [
            { id: 'a', text: 'Application software that performs user-specific tasks', isCorrect: false },
            { id: 'b', text: 'Hardware component that runs programs', isCorrect: false },
            { id: 'c', text: 'Software that manages hardware and provides services for programs', isCorrect: true },
            { id: 'd', text: 'A user-written program for data processing', isCorrect: false }
          ],
          explanation: 'The OS acts as an intermediary between users and hardware, managing resources and services.'
        },
        {
          id: 'whatosdoes-q2',
          question: 'Which of these is NOT a main function of an OS?',
          options: [
            { id: 'a', text: 'Resource allocation', isCorrect: false },
            { id: 'b', text: 'Program execution', isCorrect: false },
            { id: 'c', text: 'Hardware manufacturing', isCorrect: true },
            { id: 'd', text: 'File system management', isCorrect: false }
          ],
          explanation: 'The OS does not manufacture hardware; it controls and coordinates hardware use.'
        }
      ]
    },
    {
      id: 'os-structure',
      title: 'Operating System Structure',
      description: 'How operating systems are structured internally.',
      duration: '10 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Operating systems are large and complex, so they are structured in layers or modules. Typical structures include simple monolithic kernels, layered systems, and microkernels.'
        },
        {
          type: 'list',
          content: 'Common OS structures',
          items: [
            'Monolithic systems',
            'Layered approach',
            'Microkernel approach',
            'Modules and hybrid systems'
          ]
        },
        {
          type: 'note',
          content: 'Modern operating systems like Linux and Windows use modular hybrid approaches.'
        }
      ],
      keyPoints: [
        'Good structure simplifies design and maintenance',
        'Microkernels move services out of the kernel for better modularity',
        'Hybrid systems combine multiple approaches'
      ],
      quiz: [
        {
          id: 'osstructure-q1',
          question: 'What is the benefit of a layered OS structure?',
          options: [
            { id: 'a', text: 'Simplifies design and debugging', isCorrect: true },
            { id: 'b', text: 'Eliminates the need for hardware', isCorrect: false },
            { id: 'c', text: 'Increases complexity unnecessarily', isCorrect: false },
            { id: 'd', text: 'Prevents modular development', isCorrect: false }
          ],
          explanation: 'Layered design makes the OS easier to design, maintain, and debug.'
        },
        {
          id: 'osstructure-q2',
          question: 'Which of these is a type of OS structure?',
          options: [
            { id: 'a', text: 'Microkernel', isCorrect: true },
            { id: 'b', text: 'Megaprocessor', isCorrect: false },
            { id: 'c', text: 'Pipeline kernel', isCorrect: false },
            { id: 'd', text: 'Static scheduler', isCorrect: false }
          ],
          explanation: 'Microkernel is a known OS structure where basic services run in user space.'
        }
      ]
    },
    {
      id: 'os-services',
      title: 'Operating System Services',
      description: 'Core services provided by an operating system.',
      duration: '10 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Operating systems provide various services to users and programs. These services make the programming process easier and execution more reliable.'
        },
        {
          type: 'list',
          content: 'Key OS services',
          items: [
            'Program execution',
            'I/O operations',
            'File-system manipulation',
            'Communications',
            'Error detection',
            'Resource allocation',
            'Accounting',
            'Protection and security'
          ]
        },
        {
          type: 'image',
          content: 'Illustration of OS services',
          src: '/images/os_concept.png',
          alt: 'Diagram showing various operating system services',
          caption: 'A conceptual diagram of core operating system services',
          width: '100%'
        }
      ],
      keyPoints: [
        'Services simplify user tasks',
        'Provide standard interfaces to hardware',
        'Improve efficiency and protection'
      ],
      quiz: [
        {
          id: 'osservices-q1',
          question: 'Which service helps users execute programs conveniently?',
          options: [
            { id: 'a', text: 'Program execution', isCorrect: true },
            { id: 'b', text: 'Error logging', isCorrect: false },
            { id: 'c', text: 'Hardware manufacturing', isCorrect: false },
            { id: 'd', text: 'Data encryption', isCorrect: false }
          ],
          explanation: 'Program execution is a key OS service for running applications.'
        },
        {
          id: 'osservices-q2',
          question: 'Which OS service deals with ensuring data is protected and secure?',
          options: [
            { id: 'a', text: 'Resource allocation', isCorrect: false },
            { id: 'b', text: 'File system manipulation', isCorrect: false },
            { id: 'c', text: 'Protection and security', isCorrect: true },
            { id: 'd', text: 'Device driver installation', isCorrect: false }
          ],
          explanation: 'Protection and security services prevent unauthorized access and maintain integrity.'
        }
      ]
    },
    {
      id: 'system-calls',
      title: 'System Calls Overview',
      description: 'Introduction to system calls and their importance in operating systems.',
      duration: '10 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'System calls are the interface between applications and the operating system kernel. They allow applications to request services from the OS, such as memory allocation, process creation, and device access.'
        },
        {
          type: 'list',
          content: 'Common system calls',
          items: [
            'Process control (fork, exec, wait)',
            'Memory management (malloc, free, mmap)',
            'File operations (open, read, write, close)',
            'Device management (I/O, file, network)',
            'Communication (socket, pipe, message queue)'
          ]
        },
        {
          type: 'note',
          content: 'System calls are essential for application development and interaction with the OS.'
        }
      ],
      keyPoints: [
        'System calls are the OS interface for applications',
        'They enable applications to request OS services',
        'They are crucial for application development and interaction'
      ],
      quiz: [
        {
          id: 'syscalls-q1',
          question: 'What is a system call?',
          options: [
            { id: 'a', text: 'A hardware device', isCorrect: false },
            { id: 'b', text: 'A programming interface to request OS services', isCorrect: true },
            { id: 'c', text: 'A user command in a shell', isCorrect: false },
            { id: 'd', text: 'A software bug', isCorrect: false }
          ],
          explanation: 'System calls provide an interface for user programs to request OS services.'
        },
        {
          id: 'syscalls-q2',
          question: 'Which of these is a common type of system call?',
          options: [
            { id: 'a', text: 'Spreadsheet calculation', isCorrect: false },
            { id: 'b', text: 'File manipulation', isCorrect: true },
            { id: 'c', text: 'Power supply control', isCorrect: false },
            { id: 'd', text: 'Syntax highlighting', isCorrect: false }
          ],
          explanation: 'File manipulation (open, read, write) is a basic system call category.'
        }
      ]
    }
  ]
};