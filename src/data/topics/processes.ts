import { Topic } from '../types';

export const processes: Topic = {
  id: 'processes',
  title: 'Process Management',
  description: 'How operating systems create, schedule, and manage processes and threads.',
  overview: 'Process management is one of the most important functions of an operating system. It involves creating, scheduling, synchronizing, and terminating processes to ensure efficient use of system resources.',
  objectives: [
    'Understand what processes and threads are',
    'Learn process states and state transitions',
    'Explore process scheduling algorithms',
    'Study inter-process communication mechanisms'
  ],
  subtopics: [
    {
      id: 'process-concept',
      title: 'Process Concepts',
      description: 'Basic concepts of processes including definition, states, and control blocks.',
      duration: '20 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'A process is a program in execution. It includes the program code, current activity, program counter, stack, data section, and heap.'
        },
        {
          type: 'heading',
          content: 'Process vs Program'
        },
        {
          type: 'list',
          items: [
            'Program: Static set of instructions stored on disk',
            'Process: Dynamic instance of a program being executed',
            'One program can have multiple processes running simultaneously'
          ]
        },
        {
          type: 'heading',
          content: 'Process Control Block (PCB)'
        },
        {
          type: 'paragraph',
          content: 'The PCB contains all information about a process that the OS needs to manage it:'
        },
        {
          type: 'list',
          items: [
            'Process ID (PID)',
            'Process state (running, waiting, etc.)',
            'Program counter and CPU registers',
            'Memory management information',
            'I/O status information',
            'Accounting information'
          ]
        }
      ],
      keyPoints: [
        'Process is a program in execution',
        'PCB stores all process information',
        'OS uses PCB for process management',
        'Multiple processes can run from same program'
      ]
    },
    {
      id: 'process-states',
      title: 'Process States and Transitions',
      description: 'Different states a process can be in and how it transitions between them.',
      duration: '25 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Processes move through different states during their lifecycle. Understanding these states is crucial for process management.'
        },
        {
          type: 'heading',
          content: 'Five-State Model'
        },
        {
          type: 'list',
          items: [
            'New: Process is being created',
            'Ready: Process is waiting to be assigned to processor',
            'Running: Instructions are being executed',
            'Waiting: Process is waiting for some event to occur',
            'Terminated: Process has finished execution'
          ]
        },
        {
          type: 'note',
          content: 'State transitions are triggered by events such as scheduling decisions, I/O completion, or system calls.'
        }
      ],
      keyPoints: [
        'Processes have distinct lifecycle states',
        'State transitions are event-driven',
        'Only one process can be running on a CPU at a time',
        'Multiple processes can be in ready or waiting states'
      ]
    },
    {
      id: 'scheduling',
      title: 'Process Scheduling',
      description: 'Algorithms and techniques for deciding which process to run next.',
      duration: '35 minutes',
      content: [
        {
          type: 'paragraph',
          content: 'Process scheduling determines which process runs when, aiming to maximize CPU utilization and system throughput while minimizing response time.'
        },
        {
          type: 'heading',
          content: 'Scheduling Criteria'
        },
        {
          type: 'list',
          items: [
            'CPU Utilization: Keep CPU busy',
            'Throughput: Number of processes completed per time unit',
            'Turnaround Time: Time from submission to completion',
            'Waiting Time: Time spent waiting in ready queue',
            'Response Time: Time from request to first response'
          ]
        },
        {
          type: 'heading',
          content: 'Common Scheduling Algorithms'
        },
        {
          type: 'list',
          items: [
            'First-Come, First-Served (FCFS)',
            'Shortest Job First (SJF)',
            'Round Robin (RR)',
            'Priority Scheduling',
            'Multilevel Queue Scheduling'
          ]
        }
      ],
      keyPoints: [
        'Scheduling optimizes system performance',
        'Different algorithms suit different scenarios',
        'Trade-offs exist between fairness and efficiency',
        'Modern OS use complex hybrid algorithms'
      ]
    }
  ]
};