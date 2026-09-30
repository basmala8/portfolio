export type Lang = 'en' | 'ar'

export type Dict = {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    services: string
    contact: string
  }

  hero: {
    label: string
    name: string
    role: string
    desc: string
    viewWork: string
    connect: string
  }

  about: {
    title: string
    body: string
    education: string
    educationLabel: string
    tags: string[]
  }

  skills: {
    title: string
    subtitle: string
    items: { name: string; desc: string }[]
  }

  projects: {
    title: string
    subtitle: string
    live: string
    code: string
    items: { index: string; name: string; desc: string }[]
  }

  services: {
    title: string
    subtitle: string
    items: { name: string; desc: string }[]
  }

  contact: {
    title: string
    subtitle: string
    name: string
    email: string
    message: string
    send: string
    sending: string
    success: string
    error: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }

  footer: {
    role: string
    tagline: string
    rights: string
  }
}

export const dictionaries: Record<Lang, Dict> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
    },

    hero: {
      label: 'Portfolio',
      name: 'Basmala Mohamed',
      role: 'Front-End Developer',
      desc: 'Crafting modern, elegant, and user-focused web experiences.',
      viewWork: 'View My Work',
      connect: "Let's Connect",
    },

    about: {
      title: 'A Little About Me',
      body: "I'm a Computer Science student and Front-End Developer passionate about creating modern, responsive, and visually engaging websites. I enjoy turning ideas into clean interfaces that balance aesthetics with usability.",
      education: 'Egyptian E-Learning University (EELU) — 4th Year',
      educationLabel: 'Education',
      tags: [
        'Egyptian E-Learning University (EELU) — 4th Year',
        'Computer Science',
        'Front-End Developer',
      ],
    },

    skills: {
      title: 'Tools I Work With',
      subtitle: 'A refined toolkit for building thoughtful, elegant interfaces.',
      items: [
        { name: 'HTML5', desc: 'Semantic, accessible structure' },
        { name: 'CSS3', desc: 'Refined layouts & animation' },
        { name: 'JavaScript', desc: 'Interactive, dynamic logic' },
        { name: 'Bootstrap', desc: 'Rapid responsive systems' },
        { name: 'Tailwind CSS', desc: 'Utility-first responsive styling' },
        { name: 'React', desc: 'Component-driven interfaces' },
        { name: 'Git', desc: 'Version control & history' },
        { name: 'GitHub', desc: 'Collaboration & deployment' },
      ],
    },

    projects: {
      title: 'Selected Works',
      subtitle: 'A curated selection of interfaces designed with intention.',
      live: 'Live Preview',
      code: 'View Code',
      items: [
        {
          index: '01',
          name: 'LUXEORA',
          desc: 'A luxury e-commerce experience designed for jewelry and artisanal accessories.',
        },
        {
          index: '02',
          name: "L'Aura Ceramics",
          desc: 'A one-page e-commerce experience for ceramics, home décor, and artistic decor pieces.',
        },
      ],
    },

    services: {
      title: 'What I Can Create',
      subtitle: 'From first impression to final interaction, crafted with care.',
      items: [
        {
          name: 'Responsive Websites',
          desc: 'Fluid layouts that feel effortless on every screen.',
        },
        {
          name: 'Landing Pages',
          desc: 'High-impact pages crafted to convert and captivate.',
        },
        {
          name: 'E-commerce Interfaces',
          desc: 'Elegant storefronts that make shopping a pleasure.',
        },
        {
          name: 'Modern React Websites',
          desc: 'Fast, component-driven builds with clean architecture.',
        },
        {
          name: 'UI Implementation',
          desc: 'Pixel-precise translation of designs into living interfaces.',
        },
      ],
    },

    contact: {
      title: "Let's Create Something Beautiful Together",
      subtitle: 'Have a project in mind? I would love to hear from you.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending…',
      success: 'Thank you! Your message has been sent.',
      error: 'Something went wrong. Please try again or email me directly.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
    },

    footer: {
      role: 'Front-End Developer',
      tagline: 'Crafting modern, elegant, and user-focused web experiences.',
      rights: 'All rights reserved.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      projects: 'الأعمال',
      services: 'الخدمات',
      contact: 'تواصل',
    },

    hero: {
      label: 'أعمالي',
      name: 'بسملة محمد',
      role: 'مطوّرة واجهات أمامية',
      desc: 'تصميم تجارب ويب عصرية وأنيقة تركّز على المستخدم.',
      viewWork: 'تصفّح أعمالي',
      connect: 'لنتواصل',
    },

    about: {
      title: 'نبذة صغيرة عني',
      body: 'أنا طالبة علوم حاسوب ومطوّرة واجهات أمامية، شغوفة بإنشاء مواقع عصرية ومتجاوبة وجذّابة بصريًا. أستمتع بتحويل الأفكار إلى واجهات أنيقة توازن بين الجمال وسهولة الاستخدام.',
      education: 'الجامعة المصرية للتعلم الإلكتروني الأهلية (EELU) — السنة الرابعة',
      educationLabel: 'التعليم',
      tags: [
        'الجامعة المصرية للتعلم الإلكتروني الأهلية (EELU) — السنة الرابعة',
        'علوم الحاسوب',
        'مطوّرة واجهات أمامية',
      ],
    },

    skills: {
      title: 'الأدوات التي أعمل بها',
      subtitle: 'مجموعة أدوات مُنتقاة لبناء واجهات أنيقة ومدروسة.',
      items: [
        { name: 'HTML5', desc: 'بنية دلالية وسهلة الوصول' },
        { name: 'CSS3', desc: 'تخطيطات وحركات أنيقة' },
        { name: 'JavaScript', desc: 'منطق تفاعلي وديناميكي' },
        { name: 'Bootstrap', desc: 'أنظمة متجاوبة سريعة' },
        { name: 'Tailwind CSS', desc: 'تنسيق متجاوب باستخدام الأدوات المساعدة' },
        { name: 'React', desc: 'واجهات قائمة على المكوّنات' },
        { name: 'Git', desc: 'إدارة الإصدارات والتاريخ' },
        { name: 'GitHub', desc: 'التعاون والنشر' },
      ],
    },

    projects: {
      title: 'أعمال مختارة',
      subtitle: 'مجموعة مُنتقاة من الواجهات المصمّمة بعناية.',
      live: 'معاينة مباشرة',
      code: 'عرض الكود',
      items: [
        {
          index: '٠١',
          name: 'LUXEORA',
          desc: 'تجربة تسوّق فاخرة مصمّمة للمجوهرات والإكسسوارات الحرفية.',
        },
        {
          index: '٠٢',
          name: "L'Aura Ceramics",
          desc: 'تجربة متجر من صفحة واحدة للسيراميك وديكور المنزل والقطع الفنية.',
        },
      ],
    },

    services: {
      title: 'ما يمكنني إنشاؤه',
      subtitle: 'من الانطباع الأول إلى آخر تفاعل، مصنوع بعناية.',
      items: [
        {
          name: 'مواقع متجاوبة',
          desc: 'تخطيطات مرنة تبدو سلسة على كل شاشة.',
        },
        {
          name: 'صفحات هبوط',
          desc: 'صفحات مؤثّرة مصمّمة لتجذب وتُحوّل.',
        },
        {
          name: 'واجهات متاجر إلكترونية',
          desc: 'متاجر أنيقة تجعل التسوّق متعة.',
        },
        {
          name: 'مواقع React عصرية',
          desc: 'بناء سريع قائم على المكوّنات ببنية نظيفة.',
        },
        {
          name: 'تنفيذ واجهات المستخدم',
          desc: 'تحويل دقيق للتصاميم إلى واجهات حيّة.',
        },
      ],
    },

    contact: {
      title: 'لنصنع شيئًا جميلًا معًا',
      subtitle: 'لديك فكرة مشروع؟ يسعدني أن أسمع منك.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      success: 'شكرًا لك! تم إرسال رسالتك.',
      error: 'حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة.',
      emailLabel: 'البريد الإلكتروني',
      linkedinLabel: 'لينكدإن',
      githubLabel: 'جيت هَب',
    },

    footer: {
      role: 'مطوّرة واجهات أمامية',
      tagline: 'تصميم تجارب ويب عصرية وأنيقة تركّز على المستخدم.',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
}