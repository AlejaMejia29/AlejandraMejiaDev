export type Lang = 'en' | 'es';

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  imageAlt: string;
}

export interface CertItem {
  title: string;
  issuer: string;
  year: string;
  image: string;
  imageAlt: string;
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
    statValues: [string, string, string, string];
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
    prevLabel: string;
    nextLabel: string;
    groups: SkillGroup[];
  };
  work: {
    titlePrefix: string;
    titleHighlight: string;
    exploreGithub: string;
    projects: ProjectItem[];
  };
  education: {
    academicTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    viewCertificate: string;
    closeCertificate: string;
    degrees: [
      { title: string; school: string; status: string },
      { title: string; school: string; status: string }
    ];
    certs: [CertItem, CertItem];
    languages: [{ label: string; level: string }, { label: string; level: string }];
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
      bio: 'Software Engineering student with experience in full-stack web development using Java, Spring Boot, and Angular. Skilled in frontend development, UX/UI design, and REST API construction, with SQL databases, agile methodologies, and Git.',
      viewProjects: 'View Projects',
      downloadCv: 'Download CV'
    },
    about: {
      title: 'Professional Profile',
      p1: 'Software Engineering student with experience in full-stack web development using Java, Spring Boot, and Angular. Skilled in frontend development, UX/UI design, and REST API construction.',
      p2: 'Experienced with SQL databases, agile methodologies, and version control with Git. Focused on continuous learning and building efficient, user-centered technological solutions.',
      stats: ['Technologies', 'Years of Experience', 'Certifications', 'GitHub Projects'],
      statValues: ['20+', '3+', '2', '10+']
    },
    experience: {
      titlePrefix: 'Professional',
      titleHighlight: 'Experience',
      items: [
        {
          company: 'Konex Innovation S.A.S.',
          period: '2025 - 2026',
          role: 'Requirements Analyst',
          description:
            'Requirements gathering and analysis with users and technical teams. User stories, acceptance criteria, functional test cases, flow diagrams, and user manuals. Functional support during development and testing. Corporate WordPress sites with HTML, CSS, and JavaScript.'
        },
        {
          company: 'Nueve Frutos',
          period: '2025 - 2026',
          role: 'Web Developer',
          description:
            'Corporate and informational websites in WordPress. Interface layout with HTML, CSS, and JavaScript. Theme customization, UX-focused design, and responsive, manageable sites optimized for multiple devices.'
        },
        {
          company: 'Faxt',
          period: '2022 - Present',
          role: 'Front-End Developer & Database Management',
          description:
            'Database design and structuring for technology projects. Front-end development focused on UX, usability, and responsive design. Visual component building, database integration, and collaborative platform improvement.'
        }
      ]
    },
    skills: {
      titlePrefix: 'Technical',
      titleHighlight: 'Skills',
      subtitle: 'Technologies and methodologies from my academic and professional background.',
      prevLabel: 'Previous skill category',
      nextLabel: 'Next skill category',
      groups: [
        {
          title: 'Back-End & Languages',
          items: ['Java', 'Spring Boot', 'Python', 'Django', 'REST APIs', 'JWT', 'Hibernate']
        },
        {
          title: 'Front-End & Design',
          items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Figma']
        },
        {
          title: 'Tools, Databases & Methods',
          items: ['Git & GitHub', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Docker', 'Scrum', 'Agile']
        }
      ]
    },
    work: {
      titlePrefix: 'Featured',
      titleHighlight: 'Projects',
      exploreGithub: 'Explore GitHub',
      projects: [
        {
          title: 'Veterinary Clinic API',
          description:
            'REST API for a veterinary clinic built with Java 17 and Spring Boot. CRUD for owners, pets, veterinarians, appointments, and medical records with MySQL and Docker Compose.',
          tags: ['Java', 'Spring Boot', 'MySQL'],
          url: 'https://github.com/AlejaMejia29/Clinica_Veterinaria',
          image: 'assets/projects/clinica-veterinaria.svg',
          imageAlt: 'Veterinary clinic REST API with Spring Boot'
        },
        {
          title: 'HR Analytics with Machine Learning',
          description:
            'Machine Learning project applied to HR analytics: EDA, data preparation, model training, metric comparison, and predictive analysis with Python.',
          tags: ['Python', 'Pandas', 'Jupyter'],
          url: 'https://github.com/AlejaMejia29/ProyectoFinal-Mejia-Sosa',
          image: 'assets/projects/ml-rrhh.svg',
          imageAlt: 'Machine Learning analytics dashboard for human resources'
        },
        {
          title: 'Mini-GPT Sentiment Analysis',
          description:
            'Mini-GPT in PyTorch for food review sentiment classification (positive/negative) using Transformer decoders, tokenization, embeddings, and multi-head causal attention. Accuracy: 90.68%.',
          tags: ['PyTorch', 'NLP', 'Transformers'],
          url: 'https://github.com/SebasSosa10/mini-gpt-analisis-sentimientos',
          image: 'assets/projects/mini-gpt-nlp.svg',
          imageAlt: 'Mini-GPT Transformer model for NLP sentiment analysis'
        },
        {
          title: 'TUL Order Tracking Prototype',
          description:
            'Front-end prototype inspired by TUL for hardware order tracking with role-based views (customer, seller, support, logistics), dashboards, order history, delay alerts, and logistics flow visualization. React, Vite, TypeScript, and Tailwind CSS.',
          tags: ['React', 'TypeScript', 'Tailwind'],
          url: 'https://github.com/JilmarV/redisenio-seguimiento-pedidos-tul',
          image: 'assets/projects/tul-pedidos.svg',
          imageAlt: 'TUL-inspired order tracking dashboard prototype'
        }
      ]
    },
    education: {
      academicTitle: 'Education',
      certificationsTitle: 'Certifications',
      languagesTitle: 'Languages',
      viewCertificate: 'View certificate',
      closeCertificate: 'Close certificate',
      degrees: [
        {
          title: 'Software Engineering (8th Semester)',
          school: 'EAM University Institution',
          status: '2022 - Present'
        },
        {
          title: 'Software Technology (Degree Pending)',
          school: 'EAM University Institution',
          status: '2022 - 2025'
        }
      ],
      certs: [
        {
          title: 'Back-End Developer',
          issuer: 'Capacítate para el Empleo — Carlos Slim',
          year: '2023',
          image: 'assets/certificates/cert-backend.png',
          imageAlt: 'Back-End Developer certificate — Fundación Carlos Slim'
        },
        {
          title: 'Data Analysis',
          issuer: 'Talento Tech',
          year: '2025',
          image: 'assets/certificates/cert-analisis-datos.png',
          imageAlt: 'Basic Data Analysis bootcamp certificate — Talento Tech'
        }
      ],
      languages: [
        { label: 'Spanish', level: 'Native' },
        { label: 'English', level: 'Intermediate (B1)' }
      ]
    },
    contact: {
      titlePrefix: "Let's",
      titleHighlight: 'Connect',
      subtitle: 'Open to collaborations, internships, and software development opportunities.',
      namePlaceholder: 'Full Name',
      emailPlaceholder: 'Email Address',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
      location: 'Armenia, Quindío, Colombia'
    },
    footer: {
      description:
        'Software Engineering student focused on full-stack development, requirements analysis, and building efficient, user-centered technological solutions.',
      quickLinks: 'Quick Links',
      aboutMe: 'About Me',
      portfolio: 'Portfolio',
      technologies: 'Technologies',
      privacy: 'Privacy Policy',
      social: 'Social',
      copyright: '© 2026 Alejandra Mejía Patiño.',
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
      bio: 'Ingeniera de Software en formación con experiencia en desarrollo web full stack con Java, Spring Boot y Angular. Conocimientos en frontend, diseño UX/UI, APIs REST, bases de datos SQL, metodologías ágiles y Git.',
      viewProjects: 'Ver proyectos',
      downloadCv: 'Descargar CV'
    },
    about: {
      title: 'Perfil profesional',
      p1: 'Ingeniera de Software en formación con experiencia en desarrollo web full stack utilizando Java, Spring Boot y Angular. Con conocimientos en desarrollo frontend, diseño de interfaces UX/UI y construcción de APIs REST.',
      p2: 'Experiencia trabajando con bases de datos SQL, metodologías ágiles y herramientas de control de versiones como Git. Orientada al aprendizaje continuo y al desarrollo de soluciones tecnológicas eficientes.',
      stats: ['Tecnologías', 'Años de experiencia', 'Certificaciones', 'Proyectos en GitHub'],
      statValues: ['20+', '3+', '2', '10+']
    },
    experience: {
      titlePrefix: 'Experiencia',
      titleHighlight: 'profesional',
      items: [
        {
          company: 'Konex Innovation S.A.S.',
          period: '2025 - 2026',
          role: 'Analista de requerimientos',
          description:
            'Levantamiento y análisis de requerimientos con usuarios y áreas técnicas. Historias de usuario, criterios de aceptación, casos de prueba, diagramas de flujo y manuales de usuario. Acompañamiento funcional en desarrollo y pruebas. Sitios corporativos en WordPress con HTML, CSS y JavaScript.'
        },
        {
          company: 'Nueve Frutos',
          period: '2025 - 2026',
          role: 'Desarrolladora web',
          description:
            'Sitios web corporativos e informativos en WordPress. Maquetación con HTML, CSS y JavaScript. Personalización de temas, diseño UX y sitios responsivos, administrables y optimizados para distintos dispositivos.'
        },
        {
          company: 'Faxt',
          period: '2022 - Actualidad',
          role: 'Desarrolladora Front-End y gestión de base de datos',
          description:
            'Diseño y estructuración de bases de datos para proyectos tecnológicos. Desarrollo front-end enfocado en UX, usabilidad y diseño responsive. Construcción de componentes visuales, integración con bases de datos y mejora continua colaborativa.'
        }
      ]
    },
    skills: {
      titlePrefix: 'Habilidades',
      titleHighlight: 'técnicas',
      subtitle: 'Tecnologías y metodologías de mi formación académica y experiencia profesional.',
      prevLabel: 'Categoría anterior',
      nextLabel: 'Siguiente categoría',
      groups: [
        {
          title: 'Back-End y lenguajes',
          items: ['Java', 'Spring Boot', 'Python', 'Django', 'APIs REST', 'JWT', 'Hibernate']
        },
        {
          title: 'Front-End y diseño',
          items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Figma']
        },
        {
          title: 'Herramientas, BD y métodos',
          items: ['Git y GitHub', 'MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Docker', 'Scrum', 'Agile']
        }
      ]
    },
    work: {
      titlePrefix: 'Proyectos',
      titleHighlight: 'destacados',
      exploreGithub: 'Explorar GitHub',
      projects: [
        {
          title: 'API Clínica Veterinaria',
          description:
            'API REST de clínica veterinaria en Java 17 y Spring Boot. CRUD de dueños, mascotas, veterinarios, citas e historiales médicos con MySQL y Docker Compose.',
          tags: ['Java', 'Spring Boot', 'MySQL'],
          url: 'https://github.com/AlejaMejia29/Clinica_Veterinaria',
          image: 'assets/projects/clinica-veterinaria.svg',
          imageAlt: 'API REST de clínica veterinaria con Spring Boot'
        },
        {
          title: 'Analítica de RRHH con Machine Learning',
          description:
            'Proyecto de Machine Learning aplicado a analítica de Recursos Humanos: EDA, preparación de datos, entrenamiento de modelos, comparación de métricas y análisis predictivo con Python.',
          tags: ['Python', 'Pandas', 'Jupyter'],
          url: 'https://github.com/AlejaMejia29/ProyectoFinal-Mejia-Sosa',
          image: 'assets/projects/ml-rrhh.svg',
          imageAlt: 'Panel de analítica de recursos humanos con Machine Learning'
        },
        {
          title: 'Mini-GPT Análisis de Sentimiento',
          description:
            'Mini-GPT en PyTorch para clasificar reseñas de comida como positive/negative con arquitectura Transformer, tokenización, embeddings y atención causal multi-head. Accuracy: 90.68%.',
          tags: ['PyTorch', 'NLP', 'Transformers'],
          url: 'https://github.com/SebasSosa10/mini-gpt-analisis-sentimientos',
          image: 'assets/projects/mini-gpt-nlp.svg',
          imageAlt: 'Mini-GPT con Transformers para análisis de sentimiento NLP'
        },
        {
          title: 'Prototipo Seguimiento de Pedidos TUL',
          description:
            'Prototipo Front-End inspirado en TUL para seguimiento de pedidos de ferretería con vistas por rol (cliente, vendedor, atención, logística), dashboards, historial, alertas de retraso y flujo logístico. React, Vite, TypeScript y Tailwind CSS.',
          tags: ['React', 'TypeScript', 'Tailwind'],
          url: 'https://github.com/JilmarV/redisenio-seguimiento-pedidos-tul',
          image: 'assets/projects/tul-pedidos.svg',
          imageAlt: 'Prototipo de seguimiento de pedidos inspirado en TUL'
        }
      ]
    },
    education: {
      academicTitle: 'Educación',
      certificationsTitle: 'Certificaciones',
      languagesTitle: 'Idiomas',
      viewCertificate: 'Ver certificado',
      closeCertificate: 'Cerrar certificado',
      degrees: [
        {
          title: 'Ingeniería de Software (8.º semestre)',
          school: 'Institución Universitaria EAM',
          status: '2022 - Actualidad'
        },
        {
          title: 'Tecnología en Software (pendiente grado)',
          school: 'Institución Universitaria EAM',
          status: '2022 - 2025'
        }
      ],
      certs: [
        {
          title: 'Desarrollador Back-End',
          issuer: 'Capacítate para el Empleo — Carlos Slim',
          year: '2023',
          image: 'assets/certificates/cert-backend.png',
          imageAlt: 'Constancia Desarrollador Back-end — Fundación Carlos Slim'
        },
        {
          title: 'Análisis de Datos',
          issuer: 'Talento Tech',
          year: '2025',
          image: 'assets/certificates/cert-analisis-datos.png',
          imageAlt: 'Certificado Análisis de datos Nivel Básico — Talento Tech'
        }
      ],
      languages: [
        { label: 'Español', level: 'Nativo' },
        { label: 'Inglés', level: 'Intermedio (B1)' }
      ]
    },
    contact: {
      titlePrefix: 'Conectemos',
      titleHighlight: 'juntos',
      subtitle: 'Abierta a colaboraciones, prácticas y oportunidades en desarrollo de software.',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      subjectPlaceholder: 'Asunto',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar mensaje',
      location: 'Armenia, Quindío, Colombia'
    },
    footer: {
      description:
        'Estudiante de Ingeniería de Software enfocada en desarrollo full stack, análisis de requerimientos y soluciones tecnológicas eficientes centradas en el usuario.',
      quickLinks: 'Enlaces rápidos',
      aboutMe: 'Sobre mí',
      portfolio: 'Portafolio',
      technologies: 'Tecnologías',
      privacy: 'Política de privacidad',
      social: 'Redes sociales',
      copyright: '© 2026 Alejandra Mejía Patiño.',
      coords: "4°32'N 75°40'W"
    }
  }
};
