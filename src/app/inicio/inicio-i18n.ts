export type Lang = 'en' | 'es';

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface PortfolioCopy {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    work: string;
    contact: string;
  };
  hero: {
    badge: string;
    iam: string;
    role: string;
    bio: string;
    viewProjects: string;
    downloadCv: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    stats: [string, string, string, string];
  };
  experience: {
    titlePrefix: string;
    titleHighlight: string;
    items: ExperienceItem[];
  };
  skills: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    backend: string;
    frontend: string;
    tools: string;
    levels: {
      expert: string;
      advanced: string;
      senior: string;
      architect: string;
      fluent: string;
      strategic: string;
    };
  };
  work: {
    titlePrefix: string;
    titleHighlight: string;
    exploreGithub: string;
    projects: [
      { title: string; description: string; viewLabel: string },
      { title: string; description: string; viewLabel: string }
    ];
  };
  education: {
    academicTitle: string;
    certificationsTitle: string;
    degrees: [
      { title: string; school: string; status: string },
      { title: string; school: string; status: string }
    ];
    certs: [
      { title: string; issuer: string },
      { title: string; issuer: string },
      { title: string; issuer: string },
      { title: string; issuer: string }
    ];
  };
  contact: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    location: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    aboutMe: string;
    portfolio: string;
    technologies: string;
    privacy: string;
    social: string;
    copyright: string;
    coords: string;
  };
}

export const I18N: Record<Lang, PortfolioCopy> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      work: 'Work',
      contact: 'Contact'
    },
    hero: {
      badge: 'Available for Projects',
      iam: 'I am',
      role: 'Software Developer',
      bio: 'Software Engineer in training specializing in high-performance full-stack web development. Architecting digital experiences with Java, Spring Boot, and Angular.',
      viewProjects: 'View Projects',
      downloadCv: 'Download CV'
    },
    about: {
      title: 'Crafting Future-Ready Solutions',
      p1: 'My journey in software engineering is driven by a passion for technical precision and user-centric design. I specialize in building robust REST APIs and responsive front-end architectures that bridge the gap between complex logic and elegant interfaces.',
      p2: 'Based in Quindío, Colombia, I leverage my academic background at EAM University to stay at the forefront of emerging technologies, focusing on clean code, scalability, and the latest web standards.',
      stats: ['Technologies', 'Years of Exp', 'Certificates', 'Big Projects']
    },
    experience: {
      titlePrefix: 'Professional',
      titleHighlight: 'Milestones',
      items: [
        {
          company: 'Konex Innovation',
          period: '2023 - Present',
          role: 'Requirement Analyst',
          description: 'Defining technical specifications and bridging the gap between business needs and development cycles for complex software solutions.'
        },
        {
          company: 'Nueve Frutos',
          period: '2022 - 2023',
          role: 'Web Developer',
          description: 'Developed responsive web interfaces and managed content ecosystems to drive user engagement and brand presence.'
        },
        {
          company: 'Faxt',
          period: '2021 - 2022',
          role: 'Front-End Developer',
          description: 'Specialized in UI component development and performance optimization for data-heavy dashboard applications.'
        }
      ]
    },
    skills: {
      titlePrefix: 'Technical',
      titleHighlight: 'Ecosystem',
      subtitle: 'The tools and methodologies I use to bring complex digital visions to life.',
      backend: 'Back-End Core',
      frontend: 'Front-End Experience',
      tools: 'Tools & Data',
      levels: {
        expert: 'Expert',
        advanced: 'Advanced',
        senior: 'Senior',
        architect: 'Architect',
        fluent: 'Fluent',
        strategic: 'Strategic'
      }
    },
    work: {
      titlePrefix: 'Selected',
      titleHighlight: 'Works',
      exploreGithub: 'Explore Github',
      projects: [
        {
          title: 'FinTech Analytics Engine',
          description: 'High-performance data visualization platform built with Spring Boot and Angular.',
          viewLabel: 'VIEW CASE STUDY'
        },
        {
          title: 'LuxeCommerce Platform',
          description: 'A bespoke e-commerce solution with integrated payment gateways and AI recommendations.',
          viewLabel: 'VIEW PROJECT'
        }
      ]
    },
    education: {
      academicTitle: 'Academic Foundation',
      certificationsTitle: 'Certifications',
      degrees: [
        {
          title: 'Software Engineering',
          school: 'EAM University Institution',
          status: 'In Progress'
        },
        {
          title: 'Software Technology',
          school: 'EAM University Institution',
          status: '2021 - 2023'
        }
      ],
      certs: [
        { title: 'Back-End Developer Slim', issuer: 'Talento Tech' },
        { title: 'Data Analysis Expert', issuer: 'Talento Tech' },
        { title: 'Java Spring Cloud', issuer: 'Oracle Academy' },
        { title: 'UX Design Fundamentals', issuer: 'Google Certification' }
      ]
    },
    contact: {
      titlePrefix: "Let's",
      titleHighlight: 'Collaborate',
      subtitle: 'Ready to build something extraordinary? Reach out for collaborations or project inquiries.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      location: 'Quindío, Colombia'
    },
    footer: {
      description: 'Building scalable, high-fidelity software solutions for the modern web ecosystem. Focused on technical excellence and design integrity.',
      quickLinks: 'Quick Links',
      aboutMe: 'About Me',
      portfolio: 'Portfolio',
      technologies: 'Technologies',
      privacy: 'Privacy Policy',
      social: 'Social Ecosystem',
      copyright: '© 2024 Alejandra Mejía Patiño. Built with precision.',
      coords: "4°32'N 75°40'W"
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      work: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Disponible para proyectos',
      iam: 'Soy',
      role: 'Desarrolladora de Software',
      bio: 'Ingeniera de software en formación, especializada en desarrollo web full stack de alto rendimiento. Diseño experiencias digitales con Java, Spring Boot y Angular.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV'
    },
    about: {
      title: 'Creando soluciones listas para el futuro',
      p1: 'Mi camino en la ingeniería de software nace de la pasión por la precisión técnica y el diseño centrado en el usuario. Me especializo en APIs REST robustas y arquitecturas front-end que conectan la lógica compleja con interfaces elegantes.',
      p2: 'Desde Quindío, Colombia, aprovecho mi formación en la Universidad EAM para mantenerme a la vanguardia tecnológica, con foco en código limpio, escalabilidad y estándares web actuales.',
      stats: ['Tecnologías', 'Años de exp.', 'Certificados', 'Grandes proyectos']
    },
    experience: {
      titlePrefix: 'Hitos',
      titleHighlight: 'profesionales',
      items: [
        {
          company: 'Konex Innovation',
          period: '2023 - Actualidad',
          role: 'Analista de requerimientos',
          description: 'Definición de especificaciones técnicas y gestión del puente entre necesidades del negocio y ciclos de desarrollo.'
        },
        {
          company: 'Nueve Frutos',
          period: '2022 - 2023',
          role: 'Desarrolladora web',
          description: 'Desarrollo de interfaces responsivas y gestión de contenidos para impulsar engagement y presencia de marca.'
        },
        {
          company: 'Faxt',
          period: '2021 - 2022',
          role: 'Desarrolladora Front-End',
          description: 'Desarrollo de componentes UI y optimización de rendimiento en aplicaciones con alto volumen de datos.'
        }
      ]
    },
    skills: {
      titlePrefix: 'Ecosistema',
      titleHighlight: 'técnico',
      subtitle: 'Herramientas y metodologías que uso para materializar visiones digitales complejas.',
      backend: 'Núcleo Back-End',
      frontend: 'Experiencia Front-End',
      tools: 'Herramientas y datos',
      levels: {
        expert: 'Experto',
        advanced: 'Avanzado',
        senior: 'Senior',
        architect: 'Arquitecto',
        fluent: 'Fluido',
        strategic: 'Estratégico'
      }
    },
    work: {
      titlePrefix: 'Trabajos',
      titleHighlight: 'destacados',
      exploreGithub: 'Explorar Github',
      projects: [
        {
          title: 'FinTech Analytics Engine',
          description: 'Plataforma de visualización de datos de alto rendimiento con Spring Boot y Angular.',
          viewLabel: 'VER CASO DE ESTUDIO'
        },
        {
          title: 'LuxeCommerce Platform',
          description: 'Solución e-commerce a medida con pasarelas de pago e recomendaciones con IA.',
          viewLabel: 'VER PROYECTO'
        }
      ]
    },
    education: {
      academicTitle: 'Formación académica',
      certificationsTitle: 'Certificaciones',
      degrees: [
        {
          title: 'Ingeniería de software',
          school: 'Institución Universitaria EAM',
          status: 'En curso'
        },
        {
          title: 'Tecnología en software',
          school: 'Institución Universitaria EAM',
          status: '2021 - 2023'
        }
      ],
      certs: [
        { title: 'Back-End Developer Slim', issuer: 'Talento Tech' },
        { title: 'Experto en análisis de datos', issuer: 'Talento Tech' },
        { title: 'Java Spring Cloud', issuer: 'Oracle Academy' },
        { title: 'Fundamentos de diseño UX', issuer: 'Google Certification' }
      ]
    },
    contact: {
      titlePrefix: 'Trabajemos',
      titleHighlight: 'juntas',
      subtitle: '¿Lista para construir algo extraordinario? Escríbeme para colaboraciones o nuevos proyectos.',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      subjectPlaceholder: 'Asunto',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar mensaje',
      location: 'Quindío, Colombia'
    },
    footer: {
      description: 'Construyo soluciones de software escalables y de alta fidelidad para el ecosistema web moderno, con excelencia técnica e integridad de diseño.',
      quickLinks: 'Enlaces rápidos',
      aboutMe: 'Sobre mí',
      portfolio: 'Portafolio',
      technologies: 'Tecnologías',
      privacy: 'Política de privacidad',
      social: 'Redes sociales',
      copyright: '© 2024 Alejandra Mejía Patiño. Hecho con precisión.',
      coords: "4°32'N 75°40'W"
    }
  }
};
