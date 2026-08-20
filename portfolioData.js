export const personalInfo = {
  name: "Ayshree Patro",
  title: "B.Tech CSE, 3rd Year",
  college: "NIST University",
  collegeLocation: "Berhampur, Odisha",
  careerTarget: "Software Developer",
  headline: "CSE Student | Python & C Developer | AI/ML Enthusiast",
  shortIntro: "Building practical software solutions while exploring Explainable AI research.",
  email: "ayshree.patro.cse.2024@nist.edu",
  instagram: "https://instagram.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  aboutBio: `I'm Ayshree Patro, a Computer Science Engineering student at NIST University with a strong interest in software development and Explainable AI (XAI). I enjoy learning new technologies and am currently exploring research in AI explainability for software engineering — including work on automated evaluation frameworks for code translation models. Outside academics, I'm an active NSS volunteer, driven by a genuine interest in community service, and I bring a creative, detail-oriented mindset from a background in music and writing.`
};

export const stats = [
  { label: "Academic Standing", value: "3rd Year B.Tech CSE", icon: "GraduationCap" },
  { label: "Primary Languages", value: "Python & C", icon: "Code2" },
  { label: "Research Focus", value: "Explainable AI (XAI)", icon: "Brain" },
  { label: "Community Service", value: "NSS Volunteer", icon: "HeartHandshake" }
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    description: "Core languages for software development and algorithms",
    skills: [
      { name: "Python", level: "Advanced", badge: "Primary", icon: "Py" },
      { name: "C", level: "Intermediate", badge: "Core", icon: "C" },
      { name: "Java", level: "Intermediate", badge: "OOP", icon: "Jv" }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "Data management and relational database concepts",
    skills: [
      { name: "MySQL", level: "Intermediate", badge: "Relational", icon: "SQL" },
      { name: "DBMS Concepts", level: "Foundational", badge: "Theory", icon: "DB" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Development environments and interactive tools",
    skills: [
      { name: "VS Code", level: "Daily Use", badge: "IDE", icon: "VSC" },
      { name: "IntelliJ IDEA", level: "Intermediate", badge: "IDE", icon: "IJ" },
      { name: "Google Colab", level: "Intermediate", badge: "AI Notebook", icon: "Colab" },
      { name: "MySQL Workbench", level: "Intermediate", badge: "DB Tool", icon: "WB" }
    ]
  }
];

export const researchInterests = [
  {
    id: "research-1",
    title: "Explainable Artificial Intelligence Techniques for Software Development Lifecycle",
    badge: "Current Focus",
    tagline: "Exploring transparency, interpretability, and trust in AI-driven software tools.",
    description: "Investigating how explainability techniques (such as post-hoc attribution and feature importance mapping) can be integrated into early and middle phases of the SDLC to improve developer trust, model reliability, and bug traceability.",
    keyPoints: [
      "Interpretability in automated code generation",
      "Developer-centric explanations for model outputs",
      "Evaluating model confidence & bias in engineering tasks"
    ]
  },
  {
    id: "research-2",
    title: "Rosetta-XAI: Automated Evaluation & Explainability for Code Translation Models",
    badge: "Active Exploration",
    tagline: "Framework design for evaluating multi-language source code translation fidelity.",
    description: "Studying automated frameworks that assess neural code translation (e.g., C to Python or Java to Python) not just by syntactical correctness, but through semantic attribution graphs and structural alignment metrics.",
    keyPoints: [
      "Semantic validation of translated syntax trees",
      "Automated explainability metrics for neural translation",
      "Comparative analysis of code representation models"
    ]
  }
];

export const placeholderProjects = [
  {
    id: "proj-1",
    title: "Rosetta-XAI Model Evaluator",
    category: "AI / Research Tool",
    status: "Coming Soon",
    progress: 65,
    tagline: "Automated explainability & accuracy evaluation suite for code translation models.",
    description: "A Python-based evaluation framework designed to benchmark code translation fidelity and visualize token-level attention maps.",
    techStack: ["Python", "Explainable AI", "AST Parsing", "MySQL"],
    featured: true
  },
  {
    id: "proj-2",
    title: "Smart DBMS Query & Schema Visualizer",
    category: "Software Tool",
    status: "In Planning",
    progress: 40,
    tagline: "Interactive SQL query analyzer and relational schema visualizer.",
    description: "A desktop application that helps students and developers understand SQL execution plans, query optimizations, and database relationships visualizer.",
    techStack: ["Python", "MySQL Workbench", "SQL", "GUI Framework"],
    featured: true
  },
  {
    id: "proj-3",
    title: "DevPulse Code Health & Metrics Analyzer",
    category: "Developer Utility",
    status: "Coming Soon",
    progress: 30,
    tagline: "Static code analysis tool for C and Python projects.",
    description: "Computes cyclomatic complexity, code duplications, and standard compliance guidelines with clean visual reporting.",
    techStack: ["C", "Python", "Static Analysis", "CLI"],
    featured: false
  }
];

export const experienceTimeline = [
  {
    id: "exp-1",
    role: "Advanced Python Trainee",
    institution: "Lakshaya Academy",
    duration: "2 Months",
    period: "2nd Year / Recent",
    type: "Technical Training",
    icon: "Code",
    description: "Completed intensive 2-month training in Advanced Python programming. Mastered object-oriented design patterns, data handling scripts, and project building using PyCharm IDE.",
    tags: ["Python", "PyCharm", "OOP", "Data Structures"]
  },
  {
    id: "exp-2",
    role: "C++ Programming Trainee",
    institution: "NIST University, Berhampur",
    duration: "1 Month",
    period: "1st Year",
    type: "Academic Foundation",
    icon: "GraduationCap",
    description: "Completed 1-month foundational training program organized by NIST University. Built strong problem-solving skills and learned C++ object-oriented principles using Dev C++.",
    tags: ["C++", "Dev C++", "Algorithms", "Problem Solving"]
  }
];

export const certifications = [
  {
    title: "Cisco Certification",
    issuer: "Cisco Networking Academy",
    badge: "Technical",
    date: "Verified",
    description: "Foundational certification covering network fundamentals, routing protocols, and IT infrastructure essentials.",
    icon: "Award"
  },
  {
    title: "Geetam (Indian Classical Music)",
    issuer: "Pracheen Kala Kendra, Chandigarh",
    badge: "Music Exam",
    date: "Certified",
    description: "Song examination conducted by Pracheen Kala Kendra, Chandigarh.",
    icon: "Award"
  },
  {
    title: "Anchoring Certification",
    issuer: "Kids Planet School",
    badge: "Public Speaking",
    date: "Certified",
    description: "Certified for excellence in event anchoring and public presentation.",
    icon: "Award"
  },
  {
    title: "National Science Day Celebration",
    issuer: "NIST University",
    badge: "Appreciation",
    date: "Certified",
    description: "Appreciation Certificate awarded during National Science Day Celebration at NIST University.",
    icon: "Award"
  },
  {
    title: "Song & Storytelling Certification",
    issuer: "Shree Satya Sai Seva Organisation",
    badge: "Cultural",
    date: "Certified",
    description: "Certification in singing and storytelling performance.",
    icon: "Award"
  },
  {
    title: "MARRS International Spelling Bee School Championship",
    issuer: "MARRS International Spelling Bee",
    badge: "Merit",
    date: "2013",
    description: "Certificate of Merit, Category 1 (2013).",
    icon: "Award"
  }
];

export const achievements = {
  community: [
    {
      title: "NSS Volunteer",
      organization: "NIST University NSS Unit",
      event: "Nasha Mukt Bharat Awareness Camp at Berhampur University",
      description: "Active community volunteer contributing to social awareness drives, youth leadership initiatives, and substance abuse prevention campaigns.",
      bulletPoints: [
        "Actively organize and participate in blood donation camps as part of community health initiatives",
        "Regularly visit and volunteer at blind schools and orphanages to support inclusive community engagement",
        "Contribute to \"Joy of Giving\" drives, coordinating the collection and distribution of clothes to underprivileged individuals",
        "Attended the Nasha Mukt Bharat (Drug-Free India) awareness campaign at Berhampur University"
      ],
      badge: "Community Service",
      icon: "Heart"
    }
  ],
  creative: [
    {
      title: "Good Handwriting Certification",
      issuer: "The Telegraph",
      description: "Recognized for exceptional penmanship, precision, and typographical aesthetics.",
      badge: "National Recognition",
      icon: "Feather"
    },
    {
      title: "Vocal Music & Singing Certifications",
      issuers: ["LG Company", "Kranti Institute", "Lakshaya Academy", "DAV School"],
      description: "Multiple awards and formal certifications celebrating artistic excellence, disciplined practice, and vocal musical performances.",
      badge: "Artistic Pursuit",
      icon: "Music"
    }
  ]
};
