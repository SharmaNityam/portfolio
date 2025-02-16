import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nityam Sharma",
  initials: "NS",
  location: "Chennai, India",
  description:
    "Software Developer Engineer. I love building things and helping people.",
  summary:
    "At the beginning of 2025, I joined HeyDoc AI as an SDE Intern, focusing on AI-powered mobile applications. Previously, I interned at multiple startups, including Infiheal, Rhyno Wheels, and Kreative Tech, where I worked on building and optimizing Flutter applications. Along the way, I’ve developed projects ranging from blockchain-based transaction platforms to dynamic e-commerce apps. I specialize in Flutter, Firebase, Riverpod, Provider, and RESTful APIs, always looking to push the boundaries of mobile development. Beyond work, I enjoy exploring new technologies and contributing to impactful digital experiences that blend performance, scalability, and seamless user interaction.",
  avatarUrl: "/me.jgp",
  skills: [
    "Flutter",
    "Firebase",
    "Riverpod",
    "Provider",
    "RESTful APIs",
    "Dart",
    "Python",
    "C",
    "C++",
    "Node.js",
    "Git",
    "Figma",
    "Java"
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sharmanityam03@gmail.com",
    tel: "+91 9056282368",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SharmaNityam",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nityamsharma-cse/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_nityamsharma_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HeyDoc AI",
      href: "",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/heydoc.jpg",
      start: "January 2025",
      end: "Present",
      description:
        "Engaged in advanced mobile application development, specializing in Firebase Firestore integration, Genkit and Vertex AI integration, as well as prompt engineering and model tuning to enhance AI-driven functionalities. Integrated complex APIs, Firebase Firestore, and AI models using Genkit and Vertex AI, enabling intelligent and scalable application functionality.",
    },
    {
      company: "Infiheal",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer Intern",
      logoUrl: "/infiheal.jpg",
      start: "October 2024",
      end: "December 2024",
      description:
        "Developed and optimized cross-platform mobile applications using the Flutter framework, refining user interfaces to deliver intuitive and visually appealing experiences. Implemented efficient state management solutions to enhance user interaction responsiveness and integrated complex APIs to ensure seamless application functionality.",
    },
    {
      company: "Rhyno Wheels Private Limited",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer Intern",
      logoUrl: "/rhyno.jpg",
      start: "August 2024",
      end: "October 2024",
      description:
        "Developed a production-level mobile application using Flutter and Firebase Firestore; successfully deployed the application to the Google Play Store. Enhanced app performance for a smooth and responsive user experience.",
    },
    {
      company: "Kreative Tech",
      href: "",
      badges: [],
      location: "Remote",
      title: "Flutter Developer Intern",
      logoUrl: "/kreative.jpg",
      start: "March 2024",
      end: "May 2024",
      description:
        "Created mobile applications with a focus on API integration and robust implementation.",
    }
],

education: [
  {
    school: "SRM Institute of Science & Technology",
    href: "https://www.srmist.edu.in",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    logoUrl: "/srm.jpg",
    start: "2023",
    end: "Expected 2027",
    cgpa: "9.0",
  }
],

projects: [
  {
    title: "MediScan – AI-Powered Medical Report Analysis",
    href: "https://github.com/SharmaNityam/MediScan",
    dates: "2024 - Present",
    active: true,
    description:
      "Developed a Flutter-based mobile app that analyzes medical reports using Firebase GenKit and Google's Gemini API. Users can upload reports as text or images and receive AI-powered insights with follow-up question capabilities.",
    technologies: [
      "Flutter",
      "Firebase",
      "GenKit",
      "Google Gemini API",
      "Firestore",
      "Storage",
      "Authentication",
      "Dart"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/MediScan",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  },
  {
    title: "Crude Oil Processing Chart App",
    href: "https://github.com/SharmaNityam/crude-oil-processing-chart-app",
    dates: "2024",
    active: true,
    description:
      "Designed a Flutter app that visualizes crude oil processing data using bar charts. Implemented API integration, Riverpod for state management, and fl_chart for dynamic chart rendering.",
    technologies: [
      "Flutter",
      "Riverpod",
      "RESTful APIs",
      "fl_chart",
      "GoRouter",
      "Dart"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/crude-oil-processing-chart-app",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  },
  {
    title: "SmartShop – E-commerce Sneaker Store",
    href: "https://github.com/SharmaNityam/Shopping-App-using-Flutter",
    dates: "2024",
    active: true,
    description:
      "Built a cross-platform e-commerce app for sneaker shopping. Features include product browsing, cart management, and secure checkout with optimized UI/UX.",
    technologies: [
      "Flutter",
      "Provider",
      "Firebase",
      "Dart",
      "Stripe API"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/Shopping-App-using-Flutter",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  },
  {
    title: "CryptoPay – Blockchain Transaction Platform",
    href: "https://github.com/SharmaNityam/CryptoWallet",
    dates: "Genesis Hackathon 2024",
    active: true,
    description:
      "Developed a Flutter-based blockchain platform integrating MetaMask for Ethereum transactions. Features a secure cryptocurrency wallet with real-time transaction verification.",
    technologies: [
      "Flutter",
      "Blockchain",
      "MetaMask",
      "Ethereum",
      "Dart"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/CryptoWallet",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  },
  {
    title: "Dynamic Contextual Cards App",
    href: "https://github.com/SharmaNityam/fampay_assignment",
    dates: "2024",
    active: true,
    description:
      "Flutter app that dynamically fetches and renders contextual cards from an API. Implements deep linking, CTA handling, long-press actions, pull-to-refresh, and error handling.",
    technologies: [
      "Flutter",
      "Cubit",
      "BLoC",
      "RESTful API",
      "Dart"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/fampay_assignment",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  },
  {
    title: "Firestore To-Do App – Real-Time Task Management",
    href: "https://github.com/SharmaNityam/firebase_todo",
    dates: "2024",
    active: true,
    description:
      "Developed a Flutter To-Do app with real-time updates using Firebase Firestore. Implements batch writes, transactions, pagination, and structured state management.",
    technologies: [
      "Flutter",
      "Firebase Firestore",
      "State Management",
      "Dart",
      "StreamBuilder"
    ],
    links: [
      {
        type: "GitHub",
        href: "https://github.com/SharmaNityam/firebase_todo",
        icon: "<Icons.github className='size-3' />",
      },
    ],
    image: "",
  }
]
} as const;
