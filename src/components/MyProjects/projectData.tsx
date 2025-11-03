import { LayoutDashboard, Server, Database, Workflow } from "lucide-react";

const projectData = {
  exclusiveKratomClub: {
    projectName: "www.exclusivekratomclub.com",
    videoSrc: "./videos/ExclusiveKratomClub.webm",
    parahraps: [
      ` 
    This project's goal was to fuse a high-end "art piece" design with a
      high-performance backend.
    `,
      `
     The result is a seamless, responsive e-commerce site with a
      CMS-driven blog and buttery-smooth animations.
    `,
      `
      I architected the entire platform solo, from the database schema and
        custom Go API all the way to the final production deploy.
    `,
    ],
    stackData: [
      {
        title: "High-Performance Go API",
        subtitle: "The engine behind the e-shop.",
        description: "Go (Gin) | REST API Architecture | JWT Authentication",
        icon: <Server size={46} strokeWidth={1} />,
      },

      {
        title: "Dynamic React Frontend",
        subtitle: "The 'art piece' user experience.",
        description:
          "React (TypeScript) | Framer Motion | Responsive & SEO-Friendly",
        icon: <LayoutDashboard size={46} strokeWidth={1} />,
      },
      {
        title: "Robust Database Design",
        subtitle: "The foundation for complex data.",
        description:
          "PostgreSQL | E-commerce Schema Design | Optimized Queries",
        icon: <Database size={46} strokeWidth={1} />,
      },
      {
        title: "Full Production Deployment",
        subtitle: 'More than just "git push"',
        description: "CI/CD Pipeline | DNS & SSL Config | CORS Debugging",
        icon: <Workflow size={46} strokeWidth={1} />,
      },
    ],
  },
};

export { projectData };
