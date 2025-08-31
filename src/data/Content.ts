export interface Content {
  _id: string;
  section: "hero" | "footer" | "about";
  title: string;
  subtitle: string;
  description: string;
  content: any;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
export const contentData: Content[] = [
  {
    _id: "content_hero",
    section: "hero",
    title: "Mohammad Asad Khan",
    subtitle: "Full-Stack Developer | AI Enthusiast",
    description:
      "I’m a results-driven Full-Stack Developer with nearly 3 years of experience in front-end, back-end, and system design. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js) along with modern tools like Next.js and TypeScript. I’m passionate about integrating AI technologies and automation into applications to deliver smarter, scalable, and high-performance solutions. I take pride in writing clean, maintainable code and crafting user-centric designs that create real-world impact.",
    content: {
      greeting: "Hello, I'm",
      name: "Mohammad Asad Khan",
      tagline: "Full-Stack Developer | MERN & AI Integration",
      description:
        "I build robust, scalable applications with expertise in MERN stack, system architecture, and AI-powered solutions. My mission is to create impactful digital products that solve real-world problems.",
      cta: {
        primary: "View My Work",
        secondary: "Get In Touch",
      },
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
  {
    _id: "content_about",
    section: "about",
    title: "About Me",
    subtitle: "Committed to Innovation & Excellence",
    description:
      "I’m pursuing a B.Tech in Computer Science Engineering at Galgotias University (CGPA 8.4 so far) and have almost 3 years of professional experience as a Full-Stack Developer. I’ve led projects across e-learning, SaaS, and e-commerce, consistently focusing on scalability, performance, and innovation.",
    content: {
      introduction:
        "I'm a Full-Stack Developer from New Delhi, India, specializing in the MERN stack and modern frameworks like Next.js and React Native. I thrive on building scalable, high-performance systems and solving challenging problems with technology.",
      passion:
        "I’m passionate about integrating AI and automation into applications, making them smarter, more efficient, and future-ready.",
      approach:
        "I combine frontend expertise, backend robustness, and thoughtful system design to deliver impactful digital solutions.",
      values: [
        "Clean, maintainable code",
        "User-focused design",
        "Continuous learning & growth",
        "Collaborative teamwork",
        "Innovation-driven mindset",
      ],
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
  {
    _id: "content_footer",
    section: "footer",
    title: "Let's Work Together",
    subtitle: "Get in Touch",
    description:
      "I’m always open to discussing exciting projects, collaborations, or opportunities to contribute to innovative teams.",
    content: {
      message:
        "Have a project in mind or looking for a developer to bring your ideas to life? Let’s connect and make it happen.",
      copyright: "© 2025 Mohammad Asad Khan. All rights reserved.",
      links: {
        privacy: "/privacy",
        terms: "/terms",
      },
    },
    isActive: true,
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2025-07-11T00:00:00.000Z",
  },
];
