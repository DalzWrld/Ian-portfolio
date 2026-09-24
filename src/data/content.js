export const projects = [
 {
    slug: "wanderlist",
    image: "src/images/WanderList-screenshot.png",
    category: "Full Stack",
    title: "WanderList",
    description: "A single-page app for saving and organizing dream travel destinations — add a place, note why you want to go, and track it as plans evolve. Built as a 4-person team project.",
    stack: ["React", "React Router", "JSON Server", "TailwindCSS"],
    status: "Completed",
    link: "https://wander-list-three.vercel.app/",
    repo: "https://github.com/RecursiveLeo/WanderList",
    details: {
      challenge: "Travel wishlists usually end up scattered across notes apps, screenshots and spreadsheets, with the reasoning behind each place forgotten by the time it matters.",
      approach: "Built with teammates George Mburu, Leo Macau and Emmanuel Sum, with full CRUD around a single destinations resource backed by JSON Server. My role covered styling, the db.json data structure, and client-side routing.",
      outcome: "A working single-page app demonstrating controlled forms, RESTful CRUD operations, and React Router navigation patterns.",
    },
  },
  {
    slug: "questly",
    image: "src/images/Questly-screenshot.png",
    category: "Full Stack",
    title: "Questly",
    description: "A crowdsourced learning platform with gamification — learners discover and complete challenges, contributors create content, and admins manage the platform. Built as a 5-person capstone team.",
    stack: ["React", "TailwindCSS", "Flask", "SQLAlchemy", "SQLite"],
    status: "In Progress",
    link: "https://questly-dun.vercel.app",
    repo: "https://github.com/penzimbuthia-sudo/Questly",
    details: {
      challenge: "Design a full learning platform — think Canvas with Duolingo-style gamification — with distinct Learner, Contributor and Admin roles, split fairly across a 5-person team on a tight deadline.",
      approach: "As Scrum Master, I divided work across the team and personally owned core app setup, authentication and routing on both the frontend and backend, alongside teammates Penzi Mbuthia, Leo Macau, Allan Chome and Nyaga Murimi.",
      outcome: "A deployed capstone project demonstrating full stack collaboration, JWT-based auth, and role-based access across a real team codebase. Some features (including payment integration) remain unfinished, as noted honestly in the repo.",
    },
  },
  {
    slug: "plantsy",
    image: "src/images/Plantsy-screenshot.png",
    category: "Frontend",
    title: "Plantsy",
    description: "An e-commerce web app for plant lovers to discover and shop their favorite indoor plants.",
    stack: ["React", "TailwindCSS", "REST API"],
    status: "Frontend project",
    link: "https://react-plantshop.vercel.app/",
    repo: "https://github.com/DalzWrld/react-plantshop",
    details: {
      challenge: "Make product discovery feel calm and visual without sacrificing useful shopping interactions.",
      approach:
        "Use reusable product cards, filtering patterns and clear hierarchy to keep browsing effortless.",
      outcome: "A polished frontend project demonstrating component composition and responsive design.",
    },
  },
  {
    slug: "cosmos-explorer",
    image: "src/images/Cosmos-Explorer-screenshot.png",
    category: "Full Stack",
    title: "Cosmos Explorer",
    description: "Space is complicated — exploring it doesn't have to be. A discovery app for astronomy picture of the day, near-earth objects, and NASA's image library.",
    stack: ["React", "Flask", "PostgreSQL", "SQLAlchemy", "TailwindCSS"],
    status: "In Progress",
    link: "https://cosmos-explorer-eight.vercel.app/",
    repo: "https://github.com/DalzWrld/cosmos-explorer",
    details: {
      challenge: "Space and astronomy data is abundant but scattered and hard to casually explore — most sources are either too technical or too shallow.",
      approach: "Layered React components over custom hooks and a dedicated API service layer, pulling from NASA's APOD and Near-Earth Object APIs, then added a Flask + PostgreSQL backend so users can save discoveries into their own named collections.",
      outcome: "A full stack app covering the whole loop — frontend consumption of a public API, then a self-built backend with authenticated, user-owned CRUD.",
    },
  },
  {
    slug: "wordly",
    image: "",
    category: "Frontend",
    title: "Wordly",
    description: "A simple dictionary lookup tool — search any word to get its definitions, phonetics and usage, pulled live from a public dictionary API.",
    stack: ["JavaScript", "HTML5", "CSS3", "Fetch API"],
    status: "Completed",
    link: "",
    repo: "https://github.com/DalzWrld/wordly-dictionary-api-js",
    details: {
      challenge: "Practice consuming a real external API and rendering its response cleanly, without a framework to lean on.",
      approach: "Used vanilla JavaScript and the Fetch API to query the Free Dictionary API, then rendered results dynamically into the DOM.",
      outcome: "A small, focused project demonstrating async/await, DOM manipulation and API error handling in plain JavaScript.",
    },
  },
  {
    slug: "project-management-cli",
    image: "",
    category: "Backend",
    title: "Project Management CLI Tool",
    description: "A command-line multi-user project tracker built around OOP with inheritance — create users, assign projects, manage tasks, and persist everything to JSON with no database.",
    stack: ["Python", "argparse", "OOP", "JSON persistence"],
    status: "Completed",
    link: "#",
    repo: "https://github.com/DalzWrld/python-project-management-cli-tool",
    details: {
      challenge: "Demonstrate object-oriented Python design (including inheritance) and durable data persistence, without a database or web framework.",
      approach: "Modeled users, projects and tasks as classes with inheritance, exposed through argparse subcommands, using the rich and python-dateutil packages for output and date handling.",
      outcome: "Backed by a 35-test pytest suite, built to hit the assignment's 'Excelled' rubric tier.",
    },
  },
  {
    slug: "cookit",
    image: "src/images/CookIt-screenshot.png",
    category: "Frontend",
    title: "CookIt",
    description: "A recipe discovery app for browsing and searching recipes, built with a component-driven React frontend and a local mock dataset.",
    stack: ["React", "TailwindCSS", "shadcn/ui", "JSON Server", "Vitest"],
    status: "Live",
    link: "https://cook-it-recipes.vercel.app",
    repo: "https://github.com/DalzWrld/CookIt-recipes",
    details: {
      challenge: "Make browsing recipes feel quick and visual, with a consistent, reusable component system — before having learned live API integration.",
      approach: "Used a db.json file served through JSON Server as the recipe data source, styled with shadcn/ui, and tested with Vitest and React Testing Library.",
      outcome: "A deployed frontend project showing component design and test coverage, with real API integration as a natural next step.",
    },
  },
  {
    slug: "checkit",
    image: "src/images/CheckIt-screenshot.png",
    category: "Frontend",
    title: "CheckIt",
    description: "An interactive shopping list for adding and checking off items, built with plain JavaScript as an early practice project.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    status: "Completed",
    link: "https://check-it-liart.vercel.app/",
    repo: "https://github.com/DalzWrld/CheckIt-interactive-shopping-list",
    details: {
      challenge: "Practice core DOM manipulation and event handling in plain JavaScript before introducing any persistence layer.",
      approach: "Managed list state directly in JavaScript, with no external libraries — an earlier-stage project than CookIt, so data resets on refresh rather than persisting.",
      outcome: "A lightweight foundational exercise in vanilla JS state and DOM updates.",
    },
  },
]

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TailwindCSS",
  "Git & GitHub",
  "Figma",
  "Node.js",
  "Python & Flask",
  "SQL",
]

export const whatIDo = [
  {
    title: "UI/UX Design",
    description: "Designing clean, intuitive interfaces that provide meaningful experiences.",
  },
  {
    title: "Frontend Development",
    description: "Building responsive, accessible and performant web applications.",
  },
  {
    title: "Problem Solving",
    description: "Turning ideas and challenges into efficient, scalable solutions.",
  },
]

export const process = [
  { step: "01", title: "Discover", description: "I learn about your goals, audience and the problem we're solving." },
  { step: "02", title: "Plan", description: "I research, analyze and map out the best approach for your project." },
  { step: "03", title: "Design", description: "I create wireframes and designs that are clean, clear and user-focused." },
  { step: "04", title: "Develop", description: "I bring the design to life with clean code and modern technologies." },
  { step: "05", title: "Deliver", description: "I test, refine and deliver a product you'll be proud to launch." },
]

export const testimonials = [
  {
    quote:
      "Iann was a pleasure to work with. He's dedicated, communicates well, and delivers quality work on time. I'd definitely work with him again.",
    name: "Client Name",
    role: "Founder, Company",
  },
]

export const principles = [
  { title: "Clarity", description: "Good interfaces should make the next action obvious." },
  { title: "Curiosity", description: "I like understanding why something works, not just making it work." },
  { title: "Craft", description: "Small details matter, especially when they compound across a product." },
]

export const workHistory = [
  {
    role: "Full Stack Web Development",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    type: "Education",
    period: "March 2026 — Present",
    points: [
      "Training in HTML, CSS, JavaScript, React, Python, Flask and SQL.",
      "Built projects including WanderList, Questly and Plantsy.",
    ],
  },
]

export const education = [
  {
    degree: "BSc Food Science & Technology",
    institution: "University of Nairobi",
    location: "Nairobi, Kenya",
    period: "September 2021 — September 2025",
  },
  {
    degree: "Full Stack Software Engineering",
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    period: "March 2026 — Present",
  },
]