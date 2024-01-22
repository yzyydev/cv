import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yumin Zhao",
  initials: "YZ",
  location: "Aachen, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Aachen",
  about:
    "Computer Science Engineer focused on building products with high scaling potential",
  summary:
    "As a self-motivated individual, my focus extends beyond simply completing tasks. I am committed to scaling efforts and saving your time and resources. I have successfully taken multiple projects from 0 to 1.",
  avatarUrl: "https://avatars.githubusercontent.com/u/137713642?s=400&u=6f7543e755ee22612dcf544d6f31d12f153c502e&v=4",
  personalWebsiteUrl: "https://yzyy.dev",
  contact: {
    email: "yz@yzyy.dev",
    tel: "+4915221879031",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yzyydev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yumin-zhao/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/yzyydev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "RWTH Aachen University",
      degree: "Bachelor's Degree in Computer Science",
      thesis:"Thesis: Repositories for Data Monetization - An Eco-system for Distributed Management of Data and Monitoring of Use",
      start: "2016",
      timeline: "-",
      end: "2023",
    },
  ],
  certifications: [
    {
      school: "Google Project Management: Specialization",
      degree: "Google Career Certificates",
      date: "2024",
    },
    {
      school: "Basics of digital marketing",
      degree: "Google Career Certificates",
      date: "2017",
    },
  ],
  work: [
    {
      company: "Brand Designer GbR",
      link: "",
      badges: [],
      title: "Self-employed",
      logo: ParabolLogo,
      start: "2023",
      timeline: "-",
      end: "2024",
      description:
        "Performance Marketing, Project-Management, Corporate Identity, E-Commerce Conversion Optimizations",
    },
    {
      company: "real sales & online marketing",
      link: "https://realsales-onlinemarketing.com/",
      badges: ["Remote"],
      title: "IT-Specialist",
      logo: ClevertechLogo,
      start: "09.2021",
      timeline: "-",
      end: "02.2022",
      description:
        "IT-Specialist for the ERP-System microtech. Initiating and setting up project-management tools.",
    },
    {
      company: "DFA – Deutsche Fussball Agentur GmbH",
      link: "https://deutschefussballagentur.de/",
      badges: ["Hybrid"],
      title: "Web Developer and Event Technology Coordinator",
      logo: ClevertechLogo,
      start: "07.2021",
      timeline: "-",
      end: "01.2022",
      description:
        "Developed a website with CMS for a football tournament with 1. FC Union Berlin, including branding and ticketing systems. Provided support and maintenance for the website, ticketing system, and LED wall panels with sponsors and scores during the tournaments. Developed, supported, and maintained two additional football tournaments in Saarland.",
    },
    {
      company: "talpasolutions GmbH",
      link: "https://talpasolutions.com/",
      badges: ["Internship"],
      title: "Voluntary internship",
      logo: JojoMobileLogo,
      start: "05.2020",
      timeline: "-",
      end: "07.2020",
      description:
        "Designing and developing websites, Pagespeed Optimizations, Web Solutions",
    },
    {
      company: "Kosch Klink Performance GmbH",
      link: "https://koschklinkperformance.de/",
      badges: ["Internship"],
      title: "Voluntary internship",
      logo: JojoMobileLogo,
      start: "07.2016",
      timeline: "",
      end: "",
      description:
        "Designing and developing websites, SEO",
    },
    {
      company: "HYDAC Fluidtechnik GmbH",
      link: "https://www.hydac.com/en/",
      badges: ["Internship"],
      title: "Orientation internship",
      logo: NSNLogo,
      start: "08.2013",
      timeline: "",
      end: "",
      description: "Development and testing for mobile hydraulics/mobile technology",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Solidity",
    "Github",
    "Meta Ads/Google Ads",
    "Shopify",
    "Wordpress",
    "Huggingface",
    "Google Colab",
    "Gradio",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
