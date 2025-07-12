import { Topic } from '../types';

export const introduction: Topic = {
  id: 'introduction',
  title: 'Introduction to Operating Systems',
  description: 'Fundamental concepts, history, and basic principles of operating systems.',
  overview: 'An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between users and computer hardware.',
  objectives: [
    'Understand what an operating system is and its primary functions',
    'Learn about different types of operating systems',
    'Explore the evolution and history of operating systems',
    'Identify the main components of an operating system'
  ],
  quiz: [
    'What are the main functions of an operating system?',
    'How does an OS manage system resources?',
    'What is the difference between system software and application software?'
  ],
  subtopics: [
    {
      id: 'definition',
      title: 'What is an Operating System?',
      description: 'Basic definition and core concepts of operating systems.',
      duration: '15 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'An Operating System (OS) is a collection of software that manages computer hardware resources and provides a platform for other software to run. It serves as an interface between the user and the computer hardware.'
        },
        {
          type: 'heading',
          content: 'Key Functions of an Operating System'
        },
        {
          type: 'list',
          items: [
            'Process Management - Creating, scheduling, and terminating processes',
            'Memory Management - Allocating and deallocating memory space',
            'File System Management - Organizing and managing files and directories',
            'Device Management - Controlling and coordinating hardware devices',
            'Security and Access Control - Protecting system resources',
            'User Interface - Providing a way for users to interact with the system'
          ]
        },
        {
          type: 'note',
          content: 'Think of an OS as a government that manages resources, enforces rules, and provides services to citizens (applications and users).'
        },
        {
          type: 'image',
          src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'Operating System Architecture Diagram',
          caption: 'Conceptual view of how an operating system manages system resources',
          width: '100%'
        }
      ],
      keyPoints: [
        'OS acts as a resource manager and interface',
        'Provides abstraction over hardware complexity',
        'Enables multiple programs to run concurrently',
        'Manages system security and access control'
      ],
      quiz: [
        {
          id: 'q1',
          question: 'What is the primary function of an operating system?',
          options: [
            { id: 'a', text: 'To run applications only', isCorrect: false },
            { id: 'b', text: 'To manage hardware and software resources', isCorrect: true },
            { id: 'c', text: 'To provide internet connectivity', isCorrect: false },
            { id: 'd', text: 'To store files permanently', isCorrect: false }
          ],
          explanation: 'The primary function of an OS is to manage both hardware and software resources, acting as an intermediary between users and computer hardware.'
        },
        {
          id: 'q2',
          question: 'Which of the following is NOT a core function of an operating system?',
          options: [
            { id: 'a', text: 'Process Management', isCorrect: false },
            { id: 'b', text: 'Memory Management', isCorrect: false },
            { id: 'c', text: 'Web Browsing', isCorrect: true },
            { id: 'd', text: 'File System Management', isCorrect: false }
          ],
          explanation: 'Web browsing is an application function, not a core OS function. The OS provides the platform for web browsers to run.'
        }
      ]
    },
    {
      id: 'types',
      title: 'Types of Operating Systems',
      description: 'Classification of operating systems based on various criteria.',
      duration: '20 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Operating systems can be classified based on various criteria such as user interface, number of users, number of tasks, and system structure.'
        },
        {
          type: 'heading',
          content: 'Based on User Interface'
        },
        {
          type: 'list',
          items: [
            'Command Line Interface (CLI) - Text-based interaction',
            'Graphical User Interface (GUI) - Visual interaction with windows, icons, and menus',
            'Touch Interface - Gesture-based interaction for mobile devices'
          ]
        },
        {
          type: 'heading',
          content: 'Based on Number of Users'
        },
        {
          type: 'list',
          items: [
            'Single-user OS - Supports one user at a time (e.g., MS-DOS, early Windows)',
            'Multi-user OS - Supports multiple users simultaneously (e.g., Unix, Linux, Windows Server)'
          ]
        },
        {
          type: 'heading',
          content: 'Based on Number of Tasks'
        },
        {
          type: 'list',
          items: [
            'Single-tasking - Runs one program at a time',
            'Multi-tasking - Runs multiple programs concurrently',
            'Multi-threading - Supports multiple threads within programs'
          ]
        }
      ],
      keyPoints: [
        'Classification helps understand OS capabilities',
        'Modern OS typically support multi-user and multi-tasking',
        'User interface type affects user experience',
        'System requirements vary based on OS type'
      ],
      questions: [
        'What are the advantages of a GUI over a CLI?',
        'When would you choose a single-user OS over a multi-user OS?',
        'How does multi-tasking improve system efficiency?'
      ]
    },
    {
      id: 'history',
      title: 'History and Evolution',
      description: 'Timeline of operating system development from early computers to modern systems.',
      duration: '25 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'The evolution of operating systems closely follows the development of computer hardware, from simple batch processing systems to complex distributed systems.'
        },
        {
          type: 'heading',
          content: '1940s-1950s: First Generation'
        },
        {
          type: 'list',
          items: [
            'No operating systems - direct machine language programming',
            'Programmers operated machines directly',
            'Jobs were run one at a time manually'
          ]
        },
        {
          type: 'heading',
          content: '1950s-1960s: Second Generation'
        },
        {
          type: 'list',
          items: [
            'Batch processing systems introduced',
            'Jobs collected and processed in batches',
            'Reduced setup time and increased efficiency'
          ]
        },
        {
          type: 'heading',
          content: '1960s-1980s: Third Generation'
        },
        {
          type: 'list',
          items: [
            'Multiprogramming and time-sharing systems',
            'Interactive computing became possible',
            'UNIX operating system developed'
          ]
        },
        {
          type: 'heading',
          content: '1980s-Present: Fourth Generation'
        },
        {
          type: 'list',
          items: [
            'Personal computers and GUIs',
            'Network and distributed operating systems',
            'Mobile and embedded systems',
            'Cloud and virtualization technologies'
          ]
        }
      ],
      keyPoints: [
        'OS evolution driven by hardware advancement',
        'Each generation solved limitations of previous systems',
        'Modern OS incorporate features from all generations',
        'Current trends focus on mobility and cloud computing'
      ]
    },
    {
      id: 'components',
      title: 'OS Components and Structure',
      description: 'Main components of an operating system and how they work together.',
      duration: '30 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'An operating system consists of several key components that work together to provide a complete computing environment. Understanding these components helps in grasping how an OS functions.'
        },
        {
          type: 'heading',
          content: 'Kernel'
        },
        {
          type: 'paragraph',
          content: 'The kernel is the core component of an OS that has complete control over system resources. It manages memory, processes, device drivers, and system calls.'
        },
        {
          type: 'code',
          language: 'c',
          content: `// Example of a system call interface
#include <sys/types.h>
#include <unistd.h>

int main() {
    pid_t process_id = getpid();  // Get current process ID
    return 0;
}`
        },
        {
          type: 'heading',
          content: 'System Libraries'
        },
        {
          type: 'list',
          items: [
            'Provide interface between applications and kernel',
            'Implement common functions used by multiple programs',
            'Examples: C library (libc), graphics libraries'
          ]
        },
        {
          type: 'heading',
          content: 'System Utilities'
        },
        {
          type: 'list',
          items: [
            'Command-line tools and GUI applications',
            'File managers, text editors, compilers',
            'System configuration and monitoring tools'
          ]
        }
      ],
      keyPoints: [
        'Kernel provides core OS functionality',
        'System libraries bridge applications and kernel',
        'Utilities provide user-facing functionality',
        'All components work together as a unified system'
      ]
    }
  ]
};