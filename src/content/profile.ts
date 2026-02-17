export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  impact: string[];
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  result: string;
  modules: string[];
};

export type CertificationStatus = "Completed" | "Ongoing";
export type VerificationStatus = "Provided" | "Pending";

export type CertificationItem = {
  title: string;
  provider: string;
  status: CertificationStatus;
  dateLabel?: string;
  url?: string;
  credentialUrl?: string;
  verification?: VerificationStatus;
};

export type PhoneContact = {
  label: string;
  value: string;
  tel: string;
};

export type GreetingVideo = {
  src: string;
  poster: string;
  delayAfterEndMs: number;
};

export type RoleTaglineLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Anubhav Kumar",
  brandMonogram: "AK",
  displayName: "Anubhav Kumar",
  roleTagline: "MSc Financial Technology | CFA LvL 1 | FMVA - CFI",
  roleTaglineLinks: [
    { label: "MSc Financial Technology", href: "#education" },
    { label: "CFA LvL 1", href: "#certifications" },
    { label: "FMVA - CFI", href: "#certifications" },
  ] as RoleTaglineLink[],
  summary:
    "Detail-oriented and results-focused postgraduate pursuing MSc Financial Technology at the University of Exeter, with strengths in financial modelling, quantitative analysis, and business research.",
  locationFocus:
    "Currently seeking entry-level opportunities in financial services or FinTech through graduate schemes or internships.",
  email: "anubhavkumar9310@gmail.com",
  calendly: "https://calendly.com/your-placeholder-link",
  cvPath: "/cv/anubhav-kumar-cv.pdf",
  websiteUrl: "https://example.com",
  phones: {
    uk: {
      label: "UK",
      value: "+44 7887047081",
      tel: "+447887047081",
    } as PhoneContact,
    india: {
      label: "India",
      value: "+91 9560204259",
      tel: "+919560204259",
    } as PhoneContact,
  },
  greetingVideo: {
    src: "/videos/my-intro-resource.mp4",
    poster: "/images/greeting-poster.jpg",
    delayAfterEndMs: 3000,
  } as GreetingVideo,
  heroVisuals: {
    primarySkyline: "/images/finance/ny-skyscraper.jpg",
    secondarySkyline: "/images/finance/city-finance.jpg",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anubhavkumar9310" },
    { label: "Email", href: "mailto:anubhavkumar9310@gmail.com" },
  ] as SocialLink[],
  navItems: [
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

export const aboutLines = [
  "Detail-oriented and results-focused postgraduate currently pursuing MSc Financial Technology at the University of Exeter.",
  "Skilled in Python, financial modelling, quantitative analysis, and business research.",
  "Built practical commercial exposure through internship sales outcomes, client communication, and data-backed strategy execution.",
  "Comfortable translating analytics into business decisions with clear stakeholder communication.",
  "Seeking entry-level opportunities in financial services or FinTech through graduate schemes or internships.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Finance & Analytics",
    items: [
      "Financial Modelling",
      "Market Research",
      "Risk Analysis",
      "Corporate Finance",
      "Credit Fundamentals",
      "Applied Econometrics",
    ],
  },
  {
    title: "Tools",
    items: [
      "Excel (Advanced)",
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Java",
      "HTML/CSS",
    ],
  },
  {
    title: "Core Strengths",
    items: [
      "Client Communication",
      "Presentation",
      "Problem Solving",
      "Stakeholder Handling",
      "Adaptability",
      "Critical Thinking",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Digital Document Workflow Platform (MSc Project)",
    context: "University of Exeter, Mar 2025 - Aug 2025",
    problem:
      "Institutions face document tampering risk, inefficient approval workflows, and weak auditability in legacy paper-heavy systems.",
    approach:
      "Designed a blockchain-backed digital documentation concept and led the finance strategy: TAM-SAM-SOM sizing, adoption-led revenue modelling, and activity-based cost projections.",
    outcome:
      "Presented an investor-style business case to faculty, mentors, and entrepreneurs with scalable unit economics and institutional adoption roadmap.",
    impact: [
      "Built bottom-up forecasts in Excel using pricing, adoption rates, and market research assumptions.",
      "Benchmarked cost and monetization structure against SaaS norms to validate commercial feasibility.",
      "Model outputs indicated a potential 4-5 million pounds revenue opportunity under scaled institutional adoption.",
    ],
    tech: ["Excel", "Financial Modelling", "Blockchain Analytics", "Market Sizing"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Business Development Intern",
    company: "AAj-neeti Advertising",
    location: "Noida, India",
    period: "Aug 2023 - Jan 2024",
    highlights: [
      "Sold digital advertising services across Google and Facebook channels, generating over 9,500 pounds in client revenue.",
      "Supported promotion of luxury real-estate inventory worth approximately 71,000 to 380,000 pounds, contributing to 60+ high-intent leads.",
      "Conducted 100+ client calls per week, pitching strategy and maintaining CRM follow-ups to improve conversion outcomes.",
    ],
  },
  {
    role: "Part-time Associate",
    company: "Subway and Sports Direct",
    location: "Exeter, United Kingdom",
    period: "Mar 2025 - Dec 2025",
    highlights: [
      "Balanced postgraduate study with part-time work, demonstrating reliability, scheduling discipline, and consistent performance.",
      "Built practical customer communication, teamwork, and problem-solving skills in fast-paced service environments.",
      "Managed high-volume shifts with focus on operational standards, time management, and adaptability under pressure.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Exeter",
    degree: "MSc Financial Technology",
    period: "Sep 2024 - Sep 2025",
    result: "2:1 (Upper Second Class)",
    modules: [
      "Blockchain Analytics",
      "Financial Modelling",
      "Programming for Business Analytics",
      "Financial Instruments",
      "Digital Transformation",
      "Corporate Governance and Finance",
      "Banking and Financial Services",
      "Applied Econometrics",
    ],
  },
  {
    institution: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Computer Applications",
    period: "2019 - 2022",
    result: "CGPA: 8.76",
    modules: [
      "Java",
      "Python",
      "Web Technologies",
      "Data Structures",
      "Database Systems",
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Python for Data Science",
    provider: "IBM",
    status: "Completed",
    dateLabel: "Mar 2023",
    url: "https://www.ibm.com",
    verification: "Pending",
  },
  {
    title: "Crash Course on Python",
    provider: "Google",
    status: "Completed",
    dateLabel: "Mar 2023",
    url: "https://grow.google/certificates",
    verification: "Pending",
  },
  {
    title: "Accounting Fundamentals",
    provider: "CFI",
    status: "Ongoing",
    dateLabel: "Ongoing",
    url: "https://corporatefinanceinstitute.com",
    verification: "Pending",
  },
  {
    title: "Excel Fundamentals - Formulas for Finance",
    provider: "CFI",
    status: "Ongoing",
    dateLabel: "Status as provided",
    url: "https://corporatefinanceinstitute.com",
    verification: "Pending",
  },
  {
    title: "Financial Planning & Analysis Professional (FPAP)",
    provider: "CFI",
    status: "Ongoing",
    dateLabel: "Ongoing",
    url: "https://corporatefinanceinstitute.com",
    verification: "Pending",
  },
  {
    title: "Financial Modeling & Valuation Analyst (FMVA)",
    provider: "CFI",
    status: "Ongoing",
    dateLabel: "Ongoing",
    url: "https://corporatefinanceinstitute.com",
    verification: "Pending",
  },
];
