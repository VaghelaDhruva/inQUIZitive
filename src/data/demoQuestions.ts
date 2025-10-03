import { Question } from '@/types/quiz';

export const demoQuestions: Question[] = [
  // Round 1 - MCQs (20 questions)
  {
    id: 'r1-q1',
    round: 'round1',
    type: 'text',
    question: 'What does "HTTP" stand for?',
    options: [
      { id: 'a', text: 'HyperText Transfer Protocol' },
      { id: 'b', text: 'High Transfer Text Protocol' },
      { id: 'c', text: 'HyperText Transmission Process' },
      { id: 'd', text: 'High Tech Transfer Protocol' }
    ],
    answer: 'a',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q2',
    round: 'round1',
    type: 'text',
    question: 'Which data structure uses FIFO ordering?',
    options: [
      { id: 'a', text: 'Stack' },
      { id: 'b', text: 'Queue' },
      { id: 'c', text: 'Tree' },
      { id: 'd', text: 'Graph' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q3',
    round: 'round1',
    type: 'text',
    question: 'What year was Git released?',
    options: [
      { id: 'a', text: '2003' },
      { id: 'b', text: '2005' },
      { id: 'c', text: '2007' },
      { id: 'd', text: '2009' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q4',
    round: 'round1',
    type: 'text',
    question: 'Which company created the Go programming language?',
    options: [
      { id: 'a', text: 'Microsoft' },
      { id: 'b', text: 'Google' },
      { id: 'c', text: 'Apple' },
      { id: 'd', text: 'Facebook' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q5',
    round: 'round1',
    type: 'text',
    question: 'What is the time complexity of binary search?',
    options: [
      { id: 'a', text: 'O(n)' },
      { id: 'b', text: 'O(log n)' },
      { id: 'c', text: 'O(n²)' },
      { id: 'd', text: 'O(1)' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q6',
    round: 'round1',
    type: 'text',
    question: 'Which protocol is used for secure web browsing?',
    options: [
      { id: 'a', text: 'FTP' },
      { id: 'b', text: 'HTTP' },
      { id: 'c', text: 'HTTPS' },
      { id: 'd', text: 'SMTP' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q7',
    round: 'round1',
    type: 'text',
    question: 'What does CSS stand for?',
    options: [
      { id: 'a', text: 'Computer Style Sheets' },
      { id: 'b', text: 'Cascading Style Sheets' },
      { id: 'c', text: 'Creative Style System' },
      { id: 'd', text: 'Colorful Style Sheets' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q8',
    round: 'round1',
    type: 'text',
    question: 'Which of these is NOT a JavaScript framework?',
    options: [
      { id: 'a', text: 'React' },
      { id: 'b', text: 'Vue' },
      { id: 'c', text: 'Django' },
      { id: 'd', text: 'Angular' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q9',
    round: 'round1',
    type: 'text',
    question: 'What is the default port for MySQL?',
    options: [
      { id: 'a', text: '3306' },
      { id: 'b', text: '8080' },
      { id: 'c', text: '5432' },
      { id: 'd', text: '27017' }
    ],
    answer: 'a',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q10',
    round: 'round1',
    type: 'text',
    question: 'Which language is known as the "language of the web"?',
    options: [
      { id: 'a', text: 'Python' },
      { id: 'b', text: 'Java' },
      { id: 'c', text: 'JavaScript' },
      { id: 'd', text: 'C++' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q11',
    round: 'round1',
    type: 'text',
    question: 'What does API stand for?',
    options: [
      { id: 'a', text: 'Application Programming Interface' },
      { id: 'b', text: 'Advanced Programming Interface' },
      { id: 'c', text: 'Application Process Integration' },
      { id: 'd', text: 'Automated Programming Interface' }
    ],
    answer: 'a',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q12',
    round: 'round1',
    type: 'text',
    question: 'Which company developed TypeScript?',
    options: [
      { id: 'a', text: 'Google' },
      { id: 'b', text: 'Facebook' },
      { id: 'c', text: 'Microsoft' },
      { id: 'd', text: 'Apple' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q13',
    round: 'round1',
    type: 'text',
    question: 'What is the primary purpose of Docker?',
    options: [
      { id: 'a', text: 'Version Control' },
      { id: 'b', text: 'Containerization' },
      { id: 'c', text: 'Database Management' },
      { id: 'd', text: 'Code Editing' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q14',
    round: 'round1',
    type: 'text',
    question: 'Which is a NoSQL database?',
    options: [
      { id: 'a', text: 'PostgreSQL' },
      { id: 'b', text: 'MySQL' },
      { id: 'c', text: 'MongoDB' },
      { id: 'd', text: 'Oracle' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q15',
    round: 'round1',
    type: 'text',
    question: 'What does SQL stand for?',
    options: [
      { id: 'a', text: 'Structured Query Language' },
      { id: 'b', text: 'Simple Query Language' },
      { id: 'c', text: 'Standard Query Language' },
      { id: 'd', text: 'Sequential Query Language' }
    ],
    answer: 'a',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q16',
    round: 'round1',
    type: 'text',
    question: 'Which protocol is used for email transmission?',
    options: [
      { id: 'a', text: 'FTP' },
      { id: 'b', text: 'SMTP' },
      { id: 'c', text: 'HTTP' },
      { id: 'd', text: 'TCP' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q17',
    round: 'round1',
    type: 'text',
    question: 'What is the maximum value of a 32-bit signed integer?',
    options: [
      { id: 'a', text: '2,147,483,647' },
      { id: 'b', text: '4,294,967,295' },
      { id: 'c', text: '1,073,741,824' },
      { id: 'd', text: '65,536' }
    ],
    answer: 'a',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q18',
    round: 'round1',
    type: 'text',
    question: 'Which is NOT an HTTP method?',
    options: [
      { id: 'a', text: 'GET' },
      { id: 'b', text: 'POST' },
      { id: 'c', text: 'FETCH' },
      { id: 'd', text: 'DELETE' }
    ],
    answer: 'c',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q19',
    round: 'round1',
    type: 'text',
    question: 'What is the purpose of a compiler?',
    options: [
      { id: 'a', text: 'Execute code directly' },
      { id: 'b', text: 'Convert source code to machine code' },
      { id: 'c', text: 'Debug programs' },
      { id: 'd', text: 'Manage memory' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },
  {
    id: 'r1-q20',
    round: 'round1',
    type: 'text',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    options: [
      { id: 'a', text: 'Bubble Sort' },
      { id: 'b', text: 'Quick Sort' },
      { id: 'c', text: 'Selection Sort' },
      { id: 'd', text: 'Insertion Sort' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 15
  },

  // Round 2 - Buzzer (20 questions - mixed types)
  {
    id: 'r2-q1',
    round: 'round2',
    type: 'text',
    question: 'Which programming language uses the motto "Write Once, Run Anywhere"?',
    answer: 'Java',
    points: 10,
  },
  {
    id: 'r2-q2',
    round: 'round2',
    type: 'code',
    question: 'What will this C code print?',
    mediaUrl: 'printf("%d", 5 + \'A\');',
    answer: '70',
    points: 10,
  },
  {
    id: 'r2-q3',
    round: 'round2',
    type: 'text',
    question: 'What does the acronym REST stand for in web services?',
    answer: 'Representational State Transfer',
    points: 10,
  },
  {
    id: 'r2-q4',
    round: 'round2',
    type: 'code',
    question: 'What is the output of this Python code?',
    mediaUrl: 'print(type([]) == list)',
    answer: 'True',
    points: 10,
  },
  {
    id: 'r2-q5',
    round: 'round2',
    type: 'text',
    question: 'Which tech giant acquired GitHub in 2018?',
    answer: 'Microsoft',
    points: 10,
  },
  {
    id: 'r2-q6',
    round: 'round2',
    type: 'code',
    question: 'What does this JavaScript expression evaluate to?',
    mediaUrl: '[] + [] + "foo".split("")',
    answer: ',f,o,o',
    points: 10,
  },
  {
    id: 'r2-q7',
    round: 'round2',
    type: 'text',
    question: 'What is the name of the JavaScript runtime built on Chrome\'s V8 engine?',
    answer: 'Node.js',
    points: 10,
  },
  {
    id: 'r2-q8',
    round: 'round2',
    type: 'code',
    question: 'What is the result of this expression in JavaScript?',
    mediaUrl: 'typeof null',
    answer: 'object',
    points: 10,
  },
  {
    id: 'r2-q9',
    round: 'round2',
    type: 'text',
    question: 'What does GPU stand for?',
    answer: 'Graphics Processing Unit',
    points: 10,
  },
  {
    id: 'r2-q10',
    round: 'round2',
    type: 'code',
    question: 'What will this Python code return?',
    mediaUrl: 'bool([])',
    answer: 'False',
    points: 10,
  },
  {
    id: 'r2-q11',
    round: 'round2',
    type: 'text',
    question: 'Which company developed the Kotlin programming language?',
    answer: 'JetBrains',
    points: 10,
  },
  {
    id: 'r2-q12',
    round: 'round2',
    type: 'code',
    question: 'What is the output?',
    mediaUrl: 'console.log(1 + "1")',
    answer: '11',
    points: 10,
  },
  {
    id: 'r2-q13',
    round: 'round2',
    type: 'text',
    question: 'What is the default port for HTTPS?',
    answer: '443',
    points: 10,
  },
  {
    id: 'r2-q14',
    round: 'round2',
    type: 'code',
    question: 'What does this evaluate to in Python?',
    mediaUrl: '10 // 3',
    answer: '3',
    points: 10,
  },
  {
    id: 'r2-q15',
    round: 'round2',
    type: 'text',
    question: 'Which database uses the query language Cypher?',
    answer: 'Neo4j',
    points: 10,
  },
  {
    id: 'r2-q16',
    round: 'round2',
    type: 'code',
    question: 'What is the result?',
    mediaUrl: '"5" - 3',
    answer: '2',
    points: 10,
  },
  {
    id: 'r2-q17',
    round: 'round2',
    type: 'text',
    question: 'What does RAM stand for?',
    answer: 'Random Access Memory',
    points: 10,
  },
  {
    id: 'r2-q18',
    round: 'round2',
    type: 'code',
    question: 'What will this print in JavaScript?',
    mediaUrl: 'console.log(0.1 + 0.2 === 0.3)',
    answer: 'false',
    points: 10,
  },
  {
    id: 'r2-q19',
    round: 'round2',
    type: 'text',
    question: 'Which version control system was created by Linus Torvalds?',
    answer: 'Git',
    points: 10,
  },
  {
    id: 'r2-q20',
    round: 'round2',
    type: 'code',
    question: 'What is the output?',
    mediaUrl: 'print("Hello"[1])',
    answer: 'e',
    points: 10,
  },

  // Round 3 - Rapid Fire (10 questions per team)
  {
    id: 'r3-q1',
    round: 'round3',
    type: 'text',
    question: 'IPv6 addresses are 128-bit',
    isTrueFalse: true,
    answer: 'true',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q2',
    round: 'round3',
    type: 'text',
    question: 'Git command to initialize a repository',
    answer: 'git init',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q3',
    round: 'round3',
    type: 'text',
    question: 'Which port is standard for HTTPS?',
    options: [
      { id: 'a', text: '80' },
      { id: 'b', text: '443' },
      { id: 'c', text: '8080' },
      { id: 'd', text: '3000' }
    ],
    answer: 'b',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q4',
    round: 'round3',
    type: 'text',
    question: 'Which markup language is common for README files?',
    answer: 'Markdown',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q5',
    round: 'round3',
    type: 'text',
    question: 'Python is a compiled language',
    isTrueFalse: true,
    answer: 'false',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q6',
    round: 'round3',
    type: 'text',
    question: 'What does JSON stand for? (abbreviation)',
    answer: 'JavaScript Object Notation',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q7',
    round: 'round3',
    type: 'text',
    question: 'HTML is a programming language',
    isTrueFalse: true,
    answer: 'false',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q8',
    round: 'round3',
    type: 'text',
    question: 'The Linux kernel was created by _____',
    answer: 'Linus Torvalds',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q9',
    round: 'round3',
    type: 'text',
    question: 'React is maintained by Facebook/Meta',
    isTrueFalse: true,
    answer: 'true',
    points: 1,
    timeLimit: 60,
  },
  {
    id: 'r3-q10',
    round: 'round3',
    type: 'text',
    question: 'What is 2^10?',
    answer: '1024',
    points: 1,
    timeLimit: 60,
  },
];