export type StatItem = {
  label: string;
  value: string;
};

export type ProcessStep = {
  title: string;
  detail: string;
};

export type ArticleSection = {
  title: string;
  paragraphs: string[];
};

type BaseShowcaseItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  hero: string;
  image: string;
  stats: StatItem[];
  features: string[];
  process: ProcessStep[];
  articleSections: ArticleSection[];
};

export type ServiceItem = BaseShowcaseItem & {
  kind: "service";
};

export type CourseItem = BaseShowcaseItem & {
  kind: "course";
  price: string;
  duration: string;
  audience: string;
};

export type ShowcaseItem = ServiceItem | CourseItem;

export const whatsappNumber = "2348000000000";
export const whatsappSecondaryNumber = "2348000000001";
export const officeMapLink = "https://maps.app.goo.gl/QuVX9osRQNQREQkn7";
export const officeAddress = "Lagos, Nigeria";

export function getCourseWhatsAppLink(courseName: string) {
  const message = `Hello, I want to enroll for ${courseName}.\n\nI would like more information about the requirements and how to start.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const brandStats: StatItem[] = [
  { value: "150+", label: "Client projects and support requests delivered" },
  { value: "500+", label: "Learners and candidates guided through training" },
  { value: "8", label: "Core technology and business support service lines" },
  { value: "Mon - Sat", label: "Operational support window for active clients" },
];

export const serviceItems: ServiceItem[] = [
  {
    kind: "service",
    slug: "website-design",
    title: "Website Design",
    eyebrow: "Digital Presence",
    summary:
      "Corporate websites, landing pages, and business platforms designed to make DGCC TECH clients look credible, clear, and modern online.",
    hero:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Delivery Window", value: "2 - 6 Weeks" },
      { label: "Responsive Layouts", value: "100%" },
      { label: "Post-Launch Support", value: "Available" },
    ],
    features: [
      "Company websites, service pages, campaign pages, and light business platforms",
      "Structured copy flow, mobile responsiveness, and trust-first page hierarchy",
      "Launch support, revisions, and practical guidance for content updates",
    ],
    process: [
      { title: "Project discovery", detail: "We define business goals, content needs, audience expectations, and required pages." },
      { title: "Design and build", detail: "Layouts, content structure, and development move together so the site stays clean and practical." },
      { title: "Review and launch", detail: "Testing, refinement, and handover are completed before the site goes live." },
    ],
    articleSections: [
      {
        title: "What this service covers",
        paragraphs: [
          "DGCC TECH designs business websites that help a company look serious from the first visit. The focus is not only visual appearance, but also how clearly the pages explain the business, direct enquiries, and support trust.",
          "This service works well for small businesses, growing brands, training providers, and organizations that need a clean online presence with solid user experience.",
        ],
      },
      {
        title: "Why clients request it",
        paragraphs: [
          "Many businesses already have a name, a service, and a market, but their website does not reflect that clearly. A stronger website helps them present their offer better, answer common questions faster, and create a more professional first impression.",
          "DGCC TECH keeps the build practical, which means the final product is easier to maintain and better aligned with real business use.",
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "graphic-design",
    title: "Graphic Design",
    eyebrow: "Visual Communication",
    summary:
      "Graphic design support for businesses, schools, campaigns, and product marketing with work that feels clean, intentional, and print-ready.",
    hero:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Asset Types", value: "Multi-Format" },
      { label: "Print Support", value: "Ready" },
      { label: "Turnaround", value: "Fast" },
    ],
    features: [
      "Flyers, brochures, social media graphics, banners, and branded materials",
      "Readable layouts with better spacing, hierarchy, and message control",
      "Files prepared for both digital distribution and print production",
    ],
    process: [
      { title: "Brief and objective", detail: "We identify the audience, offer, and message the design must carry." },
      { title: "Visual direction", detail: "Concepts are shaped into structured layouts that fit the business need." },
      { title: "Delivery", detail: "Final files are exported in the formats needed for print, web, or campaign use." },
    ],
    articleSections: [
      {
        title: "Design that supports business outcomes",
        paragraphs: [
          "Graphic design is often the first thing people notice before they read a single sentence. That makes it a business tool, not just decoration.",
          "DGCC TECH approaches design with a production mindset, so the output looks professional while still being usable in real campaigns, presentations, and printed materials.",
        ],
      },
      {
        title: "How the work stays useful",
        paragraphs: [
          "The service is built around clarity, speed, and consistency. Clients receive design work that helps them communicate offers, events, products, and brand messages with less confusion.",
          "That means stronger layouts, cleaner typography, and fewer files that look good in isolation but fail in practical use.",
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "computer-services",
    title: "Computer Services",
    eyebrow: "Technical Support",
    summary:
      "Practical computer support for diagnostics, upgrades, maintenance, and performance recovery across personal and office systems.",
    hero:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Diagnostics", value: "Same Day" },
      { label: "Device Coverage", value: "Laptop + Desktop" },
      { label: "Maintenance", value: "Available" },
    ],
    features: [
      "System cleanup, software installation, upgrades, and fault checks",
      "Advice on component replacements, performance issues, and maintenance routines",
      "Support for students, staff teams, and growing businesses",
    ],
    process: [
      { title: "Issue review", detail: "We inspect the device or explain the likely fault path based on the symptoms." },
      { title: "Service action", detail: "Repair, cleanup, software work, or hardware recommendations are carried out carefully." },
      { title: "Testing and return", detail: "The system is checked before handover and next-step guidance is shared." },
    ],
    articleSections: [
      {
        title: "Dependable support for everyday systems",
        paragraphs: [
          "Many computer issues are not dramatic failures. They are slow systems, inconsistent software, storage issues, installation needs, and devices that no longer support productive work.",
          "DGCC TECH treats these problems seriously because the cost of downtime is real for students, staff teams, and business owners.",
        ],
      },
      {
        title: "When this service is a good fit",
        paragraphs: [
          "This service is ideal when a device needs maintenance, a fault needs diagnosis, or a user simply needs guidance before making an expensive replacement decision.",
          "The goal is to keep the support process clear, honest, and useful rather than overly technical.",
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "printing",
    title: "Printing & Photocopy",
    eyebrow: "Business Production",
    summary:
      "Reliable print, photocopy, binding, and finishing support for schools, offices, events, and branded business communication.",
    hero:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Output Quality", value: "Sharp" },
      { label: "Rush Jobs", value: "Available" },
      { label: "Finishing", value: "Handled" },
    ],
    features: [
      "Document printing, photocopying, lamination, and binding",
      "Support for business documents, school work, proposals, and event materials",
      "Pre-production checks to reduce avoidable print mistakes",
    ],
    process: [
      { title: "File check", detail: "We review content, size, layout, and output expectations before production begins." },
      { title: "Production", detail: "Printing and finishing are handled with attention to clarity and presentation quality." },
      { title: "Delivery or pickup", detail: "Completed materials are prepared for handover on the agreed timeline." },
    ],
    articleSections: [
      {
        title: "Production support for real deadlines",
        paragraphs: [
          "Print work often sits close to a deadline, whether it is for school, a meeting, a campaign, or an event. That makes reliability and clarity important.",
          "DGCC TECH supports these requests with a practical process that balances speed with quality control.",
        ],
      },
      {
        title: "More than basic printing",
        paragraphs: [
          "Clients often need help understanding format choices, layout adjustments, or finishing options before they print. That guidance is part of the service.",
          "It helps reduce waste, improve presentation quality, and ensure the final result matches the intended use.",
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "cybersecurity",
    title: "Cybersecurity Support",
    eyebrow: "Digital Protection",
    summary:
      "Practical cybersecurity guidance, awareness support, and safer digital workflow recommendations for teams and individuals.",
    hero:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Risk Reviews", value: "Available" },
      { label: "Awareness Support", value: "Practical" },
      { label: "Recommendations", value: "Actionable" },
    ],
    features: [
      "Basic security reviews for devices, passwords, and user habits",
      "Awareness sessions and safer workflow recommendations",
      "Support tailored to practical operating realities for local businesses and learners",
    ],
    process: [
      { title: "Current-state review", detail: "We assess tools, habits, and obvious risk points affecting daily operations." },
      { title: "Priority improvements", detail: "The most important fixes and safer practices are identified first." },
      { title: "Ongoing guidance", detail: "Clients receive practical next steps they can actually maintain." },
    ],
    articleSections: [
      {
        title: "Security guidance that people can use",
        paragraphs: [
          "Security advice is only useful when people understand it well enough to keep using it. DGCC TECH therefore focuses on practical recommendations instead of abstract fear-based messaging.",
          "The aim is to help users and teams improve passwords, device hygiene, account safety, and awareness in ways they can sustain.",
        ],
      },
      {
        title: "Why this matters for everyday work",
        paragraphs: [
          "A single weak password, poor device control, or unsafe login habit can create business and personal risk. Small improvements can prevent costly issues.",
          "That is why cybersecurity support is framed as a business reliability service, not only a technical specialty.",
        ],
      },
    ],
  },
  {
    kind: "service",
    slug: "online-registrations",
    title: "Online Registration Support",
    eyebrow: "Application Services",
    summary:
      "Guided support for admissions, recruitment, exams, and form-based digital applications where accuracy and follow-through matter.",
    hero:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Form Accuracy", value: "High" },
      { label: "Application Types", value: "Multi-Type" },
      { label: "Guided Support", value: "Available" },
    ],
    features: [
      "JAMB, WAEC, recruitment forms, portal updates, and digital application workflows",
      "Document review and correction support before submission",
      "Guidance that reduces avoidable form errors and missed details",
    ],
    process: [
      { title: "Requirements check", detail: "Needed documents and application steps are confirmed before work begins." },
      { title: "Submission support", detail: "Forms are completed carefully and cross-checked for obvious issues." },
      { title: "Follow-up", detail: "Important receipts, deadlines, and next actions are communicated clearly." },
    ],
    articleSections: [
      {
        title: "Accuracy is the real product",
        paragraphs: [
          "Online registrations are often stressful because a small mistake can delay or damage an important application. DGCC TECH treats that risk seriously.",
          "The service is built to provide calm, careful support for people who need help navigating online forms and digital processes.",
        ],
      },
      {
        title: "Who benefits most",
        paragraphs: [
          "This service is valuable for students, job applicants, and anyone handling form-based submissions that have deadlines or strict requirements.",
          "It removes guesswork and helps users move through the process with more confidence.",
        ],
      },
    ],
  },
];

export const trainingItems: CourseItem[] = [
  {
    kind: "course",
    slug: "computer-basics",
    title: "Computer Basics",
    eyebrow: "Foundation Course",
    summary:
      "A beginner-friendly course covering essential computer use, typing flow, internet basics, files, and everyday digital confidence.",
    hero:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    price: "₦15,000",
    duration: "4 Weeks",
    audience: "Beginners, students, and first-time computer users",
    stats: [
      { label: "Duration", value: "4 Weeks" },
      { label: "Price", value: "₦15,000" },
      { label: "Mode", value: "Hands-On" },
    ],
    features: [
      "Computer startup, file handling, typing practice, and internet navigation",
      "Email basics, document editing, and safe everyday digital habits",
      "Guided sessions designed for learners who want practical confidence",
    ],
    process: [
      { title: "Orientation", detail: "The learner's current experience level and goals are assessed before classes begin." },
      { title: "Practical classes", detail: "Sessions focus on repeated hands-on use instead of theory-heavy instruction." },
      { title: "Confidence check", detail: "Learners finish with enough comfort to work independently on a computer." },
    ],
    articleSections: [
      {
        title: "Why this course matters",
        paragraphs: [
          "Computer confidence is now a basic requirement for school, work, and many application processes. This course helps learners build that foundation without feeling overwhelmed.",
          "DGCC TECH teaches the basics in a practical way so students can immediately use what they learn in everyday life.",
        ],
      },
      {
        title: "What learners take away",
        paragraphs: [
          "By the end of the course, learners should feel more comfortable navigating a system, creating simple documents, using the internet productively, and handling everyday digital tasks.",
          "That confidence becomes the base for more advanced training later.",
        ],
      },
    ],
  },
  {
    kind: "course",
    slug: "graphic-design",
    title: "Graphic Design",
    eyebrow: "Creative Course",
    summary:
      "A practical design course focused on layout, typography, social graphics, flyers, and client-ready creative output.",
    hero:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    price: "₦25,000",
    duration: "6 Weeks",
    audience: "Beginners and aspiring freelance or in-house designers",
    stats: [
      { label: "Duration", value: "6 Weeks" },
      { label: "Price", value: "₦25,000" },
      { label: "Outcome", value: "Portfolio Pieces" },
    ],
    features: [
      "Design principles, typography, hierarchy, and composition",
      "Flyers, social media graphics, and branded visual materials",
      "Real exercises that help learners think like working designers",
    ],
    process: [
      { title: "Foundations", detail: "Students learn visual hierarchy, spacing, and layout decision-making." },
      { title: "Project work", detail: "Design tasks move from guided practice into more independent output." },
      { title: "Portfolio preparation", detail: "Final projects are refined into work learners can present confidently." },
    ],
    articleSections: [
      {
        title: "A course built around practical output",
        paragraphs: [
          "Graphic design students often need more than software familiarity. They need guidance on what makes a layout feel professional, readable, and useful.",
          "This course therefore teaches both execution and judgment, which helps learners produce stronger work for clients and employers.",
        ],
      },
      {
        title: "Where this training can lead",
        paragraphs: [
          "The course is helpful for people preparing for freelance work, social media content creation, small business branding, or future specialization in visual communication.",
          "It gives learners a more solid starting point than template-only practice.",
        ],
      },
    ],
  },
  {
    kind: "course",
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Technical Course",
    summary:
      "A modern web development course covering page structure, responsive styling, front-end workflow, and how real websites come together.",
    hero:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    price: "₦50,000",
    duration: "8 Weeks",
    audience: "Beginners ready to move into coding and front-end delivery",
    stats: [
      { label: "Duration", value: "8 Weeks" },
      { label: "Price", value: "₦50,000" },
      { label: "Projects", value: "Real Build Tasks" },
    ],
    features: [
      "HTML, CSS, responsive layouts, and modern front-end workflow",
      "Component thinking, interface structure, and practical build habits",
      "Project-based learning that leads toward deployable work",
    ],
    process: [
      { title: "Foundations", detail: "Students begin with structure, semantics, and responsive design basics." },
      { title: "Development workflow", detail: "The course introduces practical coding habits and interface assembly." },
      { title: "Project delivery", detail: "Learners complete guided build work that reflects real web tasks." },
    ],
    articleSections: [
      {
        title: "Training for real build confidence",
        paragraphs: [
          "Web development can feel intimidating when learners meet too much abstraction too early. DGCC TECH keeps the route practical and grounded in actual page-building work.",
          "The aim is to help students understand how websites are structured, styled, and shipped in a professional environment.",
        ],
      },
      {
        title: "Who should take it",
        paragraphs: [
          "This course suits students, career switchers, and curious beginners who want a serious entry point into front-end development.",
          "It also works for people who want to understand how websites are built before moving into deeper specialization.",
        ],
      },
    ],
  },
  {
    kind: "course",
    slug: "video-editing",
    title: "Video Editing",
    eyebrow: "Media Course",
    summary:
      "A practical video editing course for content creators, business owners, and media learners who want cleaner visual storytelling.",
    hero:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    price: "₦30,000",
    duration: "5 Weeks",
    audience: "Content creators, media beginners, and brand teams",
    stats: [
      { label: "Duration", value: "5 Weeks" },
      { label: "Price", value: "₦30,000" },
      { label: "Focus", value: "Practical Editing" },
    ],
    features: [
      "Editing workflow, cutting, transitions, audio cleanup, and export basics",
      "Content structure for promos, social media, and simple business storytelling",
      "Guidance on how to make videos clearer, tighter, and more professional",
    ],
    process: [
      { title: "Editing basics", detail: "Students learn the workflow, tool layout, and core editing decisions." },
      { title: "Applied projects", detail: "Practice clips are turned into usable short-form and business content." },
      { title: "Finishing", detail: "Learners export and polish content for common publishing channels." },
    ],
    articleSections: [
      {
        title: "Designed for practical media use",
        paragraphs: [
          "Good editing is often about clarity, pacing, and message control. This course helps learners build those instincts instead of only learning buttons and menus.",
          "The training is especially useful for people who need to produce cleaner content for business, school, or brand communication.",
        ],
      },
      {
        title: "What makes the course useful",
        paragraphs: [
          "Students leave with a better understanding of how to shape raw clips into something watchable, professional, and easier for an audience to follow.",
          "That makes the course relevant for creators, internal teams, and media beginners alike.",
        ],
      },
    ],
  },
];

export const galleryImages = [
  {
    title: "Client Consultation Session",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    size: "large",
  },
  {
    title: "Training Lab Session",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    size: "tall",
  },
  {
    title: "Web Project Workflow",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    size: "wide",
  },
  {
    title: "Design Review Table",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    size: "medium",
  },
  {
    title: "Device Support Desk",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    size: "medium",
  },
  {
    title: "Printing and Finishing",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    size: "tall",
  },
];

export const faqs = [
  {
    question: "Do you support both individuals and businesses?",
    answer:
      "Yes. DGCC TECH works with students, working professionals, teams, schools, and growing businesses across training, support, and digital delivery.",
  },
  {
    question: "Can I enroll in a course through WhatsApp?",
    answer:
      "Yes. Every course card and training detail page includes a direct WhatsApp enrollment action with a pre-filled enquiry message.",
  },
  {
    question: "Do your service pages have more detail than the overview cards?",
    answer:
      "Yes. Every service and course has its own dedicated detail page with article-style sections, features, and process information so visitors can understand the offer clearly.",
  },
  {
    question: "Can DGCC TECH combine multiple services for one project?",
    answer:
      "Yes. Many clients need design, printing, digital support, and training guidance together, and the service flow can be combined around that need.",
  },
];
