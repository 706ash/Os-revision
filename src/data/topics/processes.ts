import { Topic } from '../types';

export const processManagementTopic: Topic = {
  id: 'process-management',
  title: 'Process Management',
  description: 'Covers the fundamental concepts of processes in an operating system, including PCB, process states, operations, and context switching.',
  overview: 'Process Management is a core responsibility of any operating system. It involves creating, scheduling, and terminating processes, maintaining their states, and switching between them efficiently. Understanding these concepts helps in analyzing how multitasking, resource allocation, and CPU scheduling work.',

  objectives: [
    'Understand what a process is and how it differs from a program.',
    'Explain the structure and purpose of a Process Control Block (PCB).',
    'Describe different process states and transitions.',
    'Understand operations performed on processes by the OS.',
    'Explain the concept and overhead of context switching.'
  ],

  quiz: [
    'What is a Process Control Block and what does it store?',
    'Name the typical process states in an OS.',
    'What happens during a context switch?'
  ],

  subtopics: [
    {
      id: 'pcb',
      title: 'Process Control Block (PCB)',
      description: 'Details the structure and role of the PCB.',
      duration: '10 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'A Process Control Block (PCB) is a data structure used by the operating system to store all information about a specific process. It acts as the process\'s identity within the OS.'
        },
        {
          type: 'heading',
          content: 'Typical Fields in a PCB'
        },
        {
          type: 'list',
          content: 'Main information stored in a PCB:',
          items: [
            'Process ID (PID)',
            'Process state (e.g., ready, running, waiting)',
            'Program counter (address of next instruction)',
            'CPU registers and scheduling info',
            'Memory management info (base/limit, page tables)',
            'I/O status info (open files, I/O devices)'
          ]
        },
        {
          type: 'note',
          content: 'The PCB is essential for process management, allowing the OS to save and restore process states during scheduling.'
        }
      ],
      keyPoints: [
        'PCB uniquely identifies each process.',
        'Stores critical info needed to resume execution.',
        'Enables context switching.'
      ],
      questions: [
        'What would happen if a PCB gets corrupted?',
        'How does PCB size affect OS performance?'
      ],
      quiz: [
        {
          id: 'pcb-q1',
          question: 'Which of the following best describes a Process Control Block (PCB)?',
          options: [
            { id: 'a', text: 'A block of memory allocated to a process.', isCorrect: false },
            { id: 'b', text: 'A structure storing information needed to manage a process.', isCorrect: true },
            { id: 'c', text: 'A scheduling queue.', isCorrect: false },
            { id: 'd', text: 'A system call for process creation.', isCorrect: false }
          ],
          explanation: 'A PCB holds all the necessary info about a process for the OS to manage it.'
        },
        {
          id: 'pcb-q2',
          question: 'Which field is NOT typically part of a PCB?',
          options: [
            { id: 'a', text: 'Process ID', isCorrect: false },
            { id: 'b', text: 'CPU register values', isCorrect: false },
            { id: 'c', text: 'Scheduling information', isCorrect: false },
            { id: 'd', text: 'Source code of the process', isCorrect: true }
          ],
          explanation: 'Source code is not stored in the PCB — only info needed to manage execution.'
        }
      ]
    },

    {
      id: 'process-states',
      title: 'Process States',
      description: 'Explains the different states a process can be in.',
      duration: '8 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'A process transitions through various states during its lifetime. These states help the OS manage process scheduling and execution.'
        },
        {
          type: 'heading',
          content: 'Common Process States'
        },
        {
          type: 'list',
          content: 'Typical states include:',
          items: [
            'New: Process is being created.',
            'Ready: Process is waiting to be assigned to CPU.',
            'Running: Instructions are being executed.',
            'Waiting/Blocked: Process is waiting for an event (like I/O).',
            'Terminated: Process has finished execution.'
          ]
        },
        {
          type: 'note',
          content: 'State transitions happen due to scheduling decisions, I/O requests, interrupts, or process completion.'
        }
      ],
      keyPoints: [
        'Processes move through states based on events.',
        'The ready queue holds processes waiting for CPU time.',
        'Efficient state management is key for multitasking.'
      ],
      quiz: [
        {
          id: 'states-q1',
          question: 'What is the state of a process that is waiting for I/O?',
          options: [
            { id: 'a', text: 'New', isCorrect: false },
            { id: 'b', text: 'Ready', isCorrect: false },
            { id: 'c', text: 'Blocked/Waiting', isCorrect: true },
            { id: 'd', text: 'Running', isCorrect: false }
          ],
          explanation: 'Processes waiting for an event like I/O enter the blocked or waiting state.'
        },
        {
          id: 'states-q2',
          question: 'Which transition moves a process from Ready to Running?',
          options: [
            { id: 'a', text: 'Admitted', isCorrect: false },
            { id: 'b', text: 'Dispatched by the scheduler', isCorrect: true },
            { id: 'c', text: 'I/O completion', isCorrect: false },
            { id: 'd', text: 'Exit', isCorrect: false }
          ],
          explanation: 'The scheduler dispatches a ready process to the CPU.'
        }
      ]
    },

    {
      id: 'operations-on-processes',
      title: 'Operations on Processes',
      description: 'Discusses how processes are created, scheduled, and terminated.',
      duration: '7 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'The OS performs various operations to manage processes throughout their life cycle.'
        },
        {
          type: 'heading',
          content: 'Key Operations'
        },
        {
          type: 'list',
          content: 'Operations include:',
          items: [
            'Process Creation: OS creates a process, e.g., fork() in UNIX.',
            'Scheduling: OS selects processes for execution.',
            'Blocking/Suspension: Process is moved to waiting state for I/O or resources.',
            'Resumption: Process moves back to ready state.',
            'Termination: Process finishes and resources are reclaimed.'
          ]
        }
      ],
      keyPoints: [
        'Process creation and termination are basic operations.',
        'Process scheduling determines execution order.',
        'Suspending/resuming allows resource sharing.'
      ],
      quiz: [
        {
          id: 'ops-q1',
          question: 'Which system call is commonly used for creating a new process in UNIX?',
          options: [
            { id: 'a', text: 'exec()', isCorrect: false },
            { id: 'b', text: 'fork()', isCorrect: true },
            { id: 'c', text: 'wait()', isCorrect: false },
            { id: 'd', text: 'kill()', isCorrect: false }
          ],
          explanation: 'fork() duplicates the calling process to create a child.'
        },
        {
          id: 'ops-q2',
          question: 'When does the OS terminate a process?',
          options: [
            { id: 'a', text: 'When it enters the waiting state.', isCorrect: false },
            { id: 'b', text: 'When it completes execution or is killed.', isCorrect: true },
            { id: 'c', text: 'When it is suspended.', isCorrect: false },
            { id: 'd', text: 'When it enters the ready queue.', isCorrect: false }
          ],
          explanation: 'Termination occurs when a process finishes or is explicitly killed.'
        }
      ]
    },

    {
      id: 'context-switching',
      title: 'Context Switching',
      description: 'Explains what context switching is and its overhead.',
      duration: '5 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Context switching is the process of storing the state of a currently running process and loading the saved state of another process.'
        },
        {
          type: 'heading',
          content: 'Steps in Context Switching'
        },
        {
          type: 'list',
          content: 'The OS must:',
          items: [
            'Save the CPU state (registers, program counter) of the current process into its PCB.',
            'Load the CPU state from the PCB of the next scheduled process.',
            'Update process states accordingly.'
          ]
        },
        {
          type: 'note',
          content: 'Context switching adds overhead because the CPU is not doing useful work during the switch. Minimizing context switches improves performance.'
        }
      ],
      keyPoints: [
        'Context switching enables multitasking.',
        'PCBs store all necessary state data.',
        'Switching too often can hurt performance.'
      ],
      quiz: [
        {
          id: 'context-q1',
          question: 'What is saved during a context switch?',
          options: [
            { id: 'a', text: 'CPU register values and program counter.', isCorrect: true },
            { id: 'b', text: 'Only the process ID.', isCorrect: false },
            { id: 'c', text: 'The source code.', isCorrect: false },
            { id: 'd', text: 'User input data.', isCorrect: false }
          ],
          explanation: 'CPU state (registers, PC) is saved in the PCB so the process can resume correctly.'
        },
        {
          id: 'context-q2',
          question: 'Why is context switching considered overhead?',
          options: [
            { id: 'a', text: 'It consumes CPU cycles without doing useful work.', isCorrect: true },
            { id: 'b', text: 'It permanently blocks other processes.', isCorrect: false },
            { id: 'c', text: 'It increases program size.', isCorrect: false },
            { id: 'd', text: 'It creates new processes unnecessarily.', isCorrect: false }
          ],
          explanation: 'Context switching wastes CPU cycles because no actual process execution happens during the switch.'
        }
      ]
    }
  ]
};
