import { Project, Experience, ResumeData } from '@/types/desktop';

export const resumeData: ResumeData = {
  name: 'Pallav Rai',
  email: 'pallav191913@gmail.com',
  phone: '+91-6209689309',
  linkedin: 'https://www.linkedin.com/in/pallav-rai-8a2252245/',
  github: 'https://github.com/youknowhim',
  education: [
    {
      id: 'vit',
      institution: 'Vellore Institute of Technology Bhopal',
      degree: 'B.E. in Computer Science and Engineering',
      location: 'Bhopal, India',
      duration: '2022 – 2026',
      highlights: [
        'Among the top 20% of the batch',
        'Relevant coursework: DBMS, OS, CN'
      ]
    },
    {
      id: 'rpm',
      institution: 'RPM Academy Civil Lines',
      degree: 'Higher Secondary Education in Mathematics',
      location: 'Gorakhpur, UP, India',
      duration: '2019 – 2021',
      highlights: [
        'Among the top 5% of the batch',
        'Percentage – 86.5%'
      ]
    },
    {
      id: 'njm',
      institution: 'Nav Jeevan Mission School',
      degree: 'Elementary to Secondary Education',
      location: 'Kushinagar, UP, India',
      duration: '2009 – 2019',
      highlights: [
        'Percentage – 85.4%'
      ]
    }
  ],
  skills: {
    technical: ['SQL', 'Java', 'JavaScript', 'ReactJS', 'ExpressJS', 'JIRA', 'GIT', 'Machine Learning', 'NLP'],
    tools: ['MySQL', 'Workbench', 'VSCode', 'Node.JS', 'npm', 'Vite', 'Bitbucket', 'Pandas']
  },
  certifications: [
    'National Programme on Technology Enhanced Learning (NPTEL)',
    'Flipkart Grid 5.0 Participation',
    'Paid Internship Completion Certificate'
  ],
  achievements: [
    'Startup selected for funding by fintech investors in first year (Idea-Cycle renting in colleges)',
    'Best Intern award in 3 months Internship period',
    'Best Singer Award',
    'Runner-up in a Hackathon Conducted by VIT'
  ]
};

export const projects: Project[] = [
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis Platform',
    description: 'Created a sentiment analysis platform that uses natural language processing (NLP) to categorize user sentiment after ingesting data from e-commerce reviews and integrating with the Facebook API.',
    techStack: ['Python', 'Flask', 'React', 'SQL', 'NLTK', 'Beautiful Soup', 'REST APIs', 'Scikit-learn'],
    duration: 'Mar 2024 - Jul 2024',
    highlights: [
      '85%+ time saved by automating manual review analysis',
      'Actionable insights for data-driven decisions about content and products'
    ],
    links: {
      github: 'https://github.com/youknowhim/surplus-food-network'
    }
  },
  {
    id: 'surplus-ngo',
    title: 'SURPLUS-NGO Bridge',
    description: 'Developed a full-stack platform to link local NGOs with surplus food donors in order to prevent food waste. NGOs use a map-based interface driven by the Google Maps API to locate and request donations.',
    techStack: ['Node.js', 'Express', 'React', 'MySQL', 'JWT', 'Google Maps API', 'WebSockets', 'REST APIs'],
    duration: 'Jun 2023 - Nov 2023',
    highlights: [
      'Real-time chat feature for logistics coordination',
      'Secure channel between NGOs and donors with JWT authentication',
      'Map-based interface for donation discovery'
    ],
    links: {
      github: 'https://github.com/youknowhim/surplus-food-network'
    }
  },
  {
    id: 'parkinsons-detection',
    title: "Parkinson's Disease Detection",
    description: "A web-based diagnostic tool for Parkinson's disease early prediction. The system analyses user-submitted health metrics using a machine learning classification model trained on patient dataset.",
    techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Pandas', 'Scikit-learn'],
    duration: 'Feb 2023 - Apr 2023',
    highlights: [
      '93% model prediction accuracy',
      'User-friendly early-stage screening tool',
      'Successfully integrated ML model into working web application'
    ],
    links: {
      github: 'https://github.com/youknowhim/multimodal-parkinson-s-disease-analysis-portal'
    }
  }
];

export const experiences: Experience[] = [
  {
    id: 'fusionstalk',
    company: 'FusionStak LLC',
    role: 'Software Developer Intern',
    location: 'Pune, India',
    duration: 'Sep 2024 – Dec 2024',
    description: 'Worked on a US (Louisiana) based Application which works in collaboration with the Local administration, serving locals for keeping full track record of their household utilities billings and much more.',
    techStack: ['Angular JS', '.NET', 'HTML', 'Bitbucket', 'JIRA'],
    achievements: [
      'Rewarded as Best Intern of the Year',
      'Worked on 42 JIRA tickets',
      'Collaborated with US-based team and local administration'
    ]
  }
];