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

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const whatsappNumber = "2347082523166";
export const whatsappSecondaryNumber = "2347045371328";
export const officeMapLink = "https://maps.app.goo.gl/QuVX9osRQNQREQkn7";
export const officeAddress =
  "3 Akinguroye Street, Toluwalase Estate, ASB Oke, Aro 111105, Ogun State.";

export function getCourseWhatsAppLink(courseName: string) {
  const message = `Hello, I want to enroll for ${courseName}.\n\nI would like more information about the requirements and how to start.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trainingPolicies = [
  "Registration Form: ₦2,000",
  "Handout & Resources for 2/3 Month Courses: ₦4,000",
  "Handout & Resources for 4/6 Month Courses: ₦6,000",
  "70% of the tuition fee must be paid before commencement of training.",
  "Students who complete their desired course will undergo Industrial Training (IT) at a given place.",
];

export const teamMembers: TeamMember[] = [
  {
    name: "Technology Operations Lead",
    role: "Service Delivery",
    bio: "Oversees technical support, device servicing, and client-facing digital delivery so projects move with more structure and fewer avoidable delays.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Training Coordinator",
    role: "Learning Programs",
    bio: "Supports course planning, learner guidance, and training operations across certificate, diploma, and practical skill-building programs.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Design and Media Specialist",
    role: "Creative Services",
    bio: "Handles visual communication, publishing support, and branded design work that helps DGCC TECH clients present themselves more clearly.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Client Support Officer",
    role: "Customer Experience",
    bio: "Guides enquiries, registrations, and service follow-through so clients and students always have a clearer next step.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
  },
];

export const brandStats: StatItem[] = [
  { value: "150+", label: "Client projects and support requests delivered" },
  { value: "500+", label: "Learners and candidates guided through training" },
  { value: "8", label: "Core technology and business support service lines" },
  {
    value: "Mon - Sat",
    label: "Operational support window for active clients",
  },
];

export const serviceItems: ServiceItem[] = [
  {
    kind: "service",
    slug: "website-design",
    title: "Website Design",
    eyebrow: "Digital Presence",
    summary:
      "Corporate websites, landing pages, and business platforms designed to make DGCC TECH clients look credible, clear, and modern online.",
    hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "Project discovery",
        detail:
          "We define business goals, content needs, audience expectations, and required pages.",
      },
      {
        title: "Design and build",
        detail:
          "Layouts, content structure, and development move together so the site stays clean and practical.",
      },
      {
        title: "Review and launch",
        detail:
          "Testing, refinement, and handover are completed before the site goes live.",
      },
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
    hero: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "Brief and objective",
        detail:
          "We identify the audience, offer, and message the design must carry.",
      },
      {
        title: "Visual direction",
        detail:
          "Concepts are shaped into structured layouts that fit the business need.",
      },
      {
        title: "Delivery",
        detail:
          "Final files are exported in the formats needed for print, web, or campaign use.",
      },
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
    hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "Issue review",
        detail:
          "We inspect the device or explain the likely fault path based on the symptoms.",
      },
      {
        title: "Service action",
        detail:
          "Repair, cleanup, software work, or hardware recommendations are carried out carefully.",
      },
      {
        title: "Testing and return",
        detail:
          "The system is checked before handover and next-step guidance is shared.",
      },
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
    hero: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "File check",
        detail:
          "We review content, size, layout, and output expectations before production begins.",
      },
      {
        title: "Production",
        detail:
          "Printing and finishing are handled with attention to clarity and presentation quality.",
      },
      {
        title: "Delivery or pickup",
        detail:
          "Completed materials are prepared for handover on the agreed timeline.",
      },
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
    hero: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "Current-state review",
        detail:
          "We assess tools, habits, and obvious risk points affecting daily operations.",
      },
      {
        title: "Priority improvements",
        detail:
          "The most important fixes and safer practices are identified first.",
      },
      {
        title: "Ongoing guidance",
        detail:
          "Clients receive practical next steps they can actually maintain.",
      },
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
    hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
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
      {
        title: "Requirements check",
        detail:
          "Needed documents and application steps are confirmed before work begins.",
      },
      {
        title: "Submission support",
        detail:
          "Forms are completed carefully and cross-checked for obvious issues.",
      },
      {
        title: "Follow-up",
        detail:
          "Important receipts, deadlines, and next actions are communicated clearly.",
      },
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

function buildCourse({
  slug,
  title,
  summary,
  duration,
  price,
  audience,
  hero,
  image,
  content,
  outcome,
}: {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  price: string;
  audience: string;
  hero: string;
  image: string;
  content: string[];
  outcome: string;
}): CourseItem {
  return {
    kind: "course",
    slug,
    title,
    eyebrow: "Professional Training",
    summary,
    hero,
    image,
    price,
    duration,
    audience,
    stats: [
      { label: "Duration", value: duration },
      { label: "Tuition", value: price },
      { label: "Outcome", value: outcome },
    ],
    features: content,
    process: [
      {
        title: "Registration and screening",
        detail:
          "Learners complete registration, confirm their course choice, and receive guidance on the tools or background expected before classes begin.",
      },
      {
        title: "Hands-on class delivery",
        detail:
          "Training is delivered through practical sessions that focus on repetition, applied exercises, and real task familiarity instead of theory alone.",
      },
      {
        title: "Completion and progression",
        detail:
          "After the course, learners receive completion guidance and are prepared for the Industrial Training stage connected to their chosen program.",
      },
    ],
    articleSections: [
      {
        title: "Course overview",
        paragraphs: [
          summary,
          `This ${duration.toLowerCase()} program is structured to give learners practical confidence in ${title.toLowerCase()} with a clear tuition of ${price}.`,
        ],
      },
      {
        title: "Course content",
        paragraphs: [
          `The program covers ${content.join(", ")}.`,
          "Training is delivered with a practical, workplace-oriented approach so students can apply what they learn in real tasks, client work, or further technical development.",
        ],
      },
    ],
  };
}

export const trainingItems: CourseItem[] = [
  buildCourse({
    slug: "certificate-word-processing",
    title: "Certificate in Word Processing",
    summary:
      "A foundational office productivity course for learners who want confidence with typing, computer use, Microsoft Office basics, and internet work.",
    duration: "2 Months",
    price: "₦35,000",
    audience:
      "Beginners, students, office support staff, and first-time computer users",
    hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Typing Skills (Mavis Beacon)",
      "Microsoft Word",
      "Microsoft Excel",
      "Internet Training",
    ],
    outcome: "Office Readiness",
  }),
  buildCourse({
    slug: "computer-based-test",
    title: "Computer Based Test",
    summary:
      "A practical preparation program for candidates who need confidence with CBT environments, speed, accuracy, and test-day computer use.",
    duration: "Flexible Schedule",
    price: "Contact for Pricing",
    audience:
      "Exam candidates, admission applicants, and learners preparing for computer-based assessments",
    hero: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to CBT Environment",
      "Basic Computer Navigation",
      "Typing and Speed Practice",
      "Mock Test Sessions",
      "Internet-Based Test Familiarity",
      "Confidence Building for Exam Day",
    ],
    outcome: "CBT Readiness",
  }),
  buildCourse({
    slug: "certificate-desktop-publishing",
    title: "Certificate in Desktop Publishing",
    summary:
      "A practical desktop publishing track for learners who want strong office skills, presentation basics, and device-connected production knowledge.",
    duration: "3 Months",
    price: "₦35,000",
    audience:
      "Beginners, office assistants, school administrators, and publishing support learners",
    hero: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Typing Skills (Mavis Beacon)",
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Internet Training",
      "Hardware Connection & Its Uses",
      "Scanning, Printing & a lot more",
    ],
    outcome: "Publishing Support Skills",
  }),
  buildCourse({
    slug: "certificate-graphics-designing",
    title: "Certificate in Graphics Designing",
    summary:
      "A graphics fundamentals course covering design tools, presentation work, and production support for print-oriented visual tasks.",
    duration: "3 Months",
    price: "₦35,000",
    audience:
      "Beginners, aspiring designers, and learners preparing for print and graphics support work",
    hero: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Microsoft PowerPoint",
      "Corel Draw",
      "Internet Training",
      "Hardware Connection & Its Uses",
      "Scanning, Printing & a lot more",
    ],
    outcome: "Graphics Foundation",
  }),
  buildCourse({
    slug: "certificate-accounting-applications",
    title: "Certificate in Accounting Applications",
    summary:
      "A business application course that combines core computer skills with spreadsheet, database, and office tools useful for accounting workflows.",
    duration: "4 Months",
    price: "₦45,000",
    audience:
      "Students, office administrators, clerks, and entry-level accounting support learners",
    hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Typing Skills (Mavis Beacon)",
      "Microsoft Word",
      "Microsoft Excel & Advance Excel",
      "Microsoft Access",
      "Internet Training",
      "Scanning",
      "Printing",
    ],
    outcome: "Accounting Workflow Readiness",
  }),
  buildCourse({
    slug: "diploma-website-designing",
    title: "Diploma in Website Designing",
    summary:
      "A diploma program focused on planning, designing, and launching practical business websites using web tools, graphics, and WordPress workflows.",
    duration: "3 Months",
    price: "₦55,000",
    audience:
      "Aspiring web designers, freelancers, and business-minded learners entering digital services",
    hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Internet & Website",
      "Cpanel",
      "Webgraphics",
      "Introduction to Wordpress",
      "Designing of Unique Blogs & Websites",
      "Project & Launching",
    ],
    outcome: "Website Design Delivery",
  }),
  buildCourse({
    slug: "diploma-desktop-publishing",
    title: "Diploma in Desktop Publishing",
    summary:
      "An extended publishing diploma that combines office productivity, presentation, graphics, internet use, and print-support operations.",
    duration: "6 Months",
    price: "₦65,000",
    audience:
      "Learners seeking broader office, publishing, and print production competence",
    hero: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Typing Skills (Mavis Beacon)",
      "Microsoft Word",
      "Microsoft Excel & Advance Excel",
      "Microsoft PowerPoint",
      "Corel Draw",
      "Internet Training",
      "Hardware Connection & Its Uses",
      "Scanning, Printing & a lot more",
    ],
    outcome: "Advanced Publishing Readiness",
  }),
  buildCourse({
    slug: "diploma-graphics-designing",
    title: "Diploma in Graphics Designing",
    summary:
      "A longer graphics diploma for learners who want stronger visual production skills across Corel Draw, Photoshop, presentation work, and design support tasks.",
    duration: "6 Months",
    price: "₦65,000",
    audience:
      "Aspiring professional designers, print operators, and creative service providers",
    hero: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Typing Skills (Mavis Beacon)",
      "Microsoft Word",
      "Microsoft PowerPoint & 3D Animation",
      "Corel Draw",
      "Adobe Photoshop",
      "Internet Training",
      "Hardware Connection & Its Uses",
      "Scanning, Printing & a lot more",
    ],
    outcome: "Design Production Skills",
  }),
  buildCourse({
    slug: "computer-engineering-laptop",
    title: "Computer Engineering (Laptop)",
    summary:
      "A hands-on technical diploma for learners who want practical experience with laptop systems, operating systems, hardware, software setup, and repair troubleshooting.",
    duration: "6 Months",
    price: "₦65,000",
    audience:
      "Technicians in training, support staff, and learners interested in repair and maintenance work",
    hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Computer (General Computing)",
      "Computer Operation",
      "Introduction to Operating System",
      "Identification of Components",
      "Installation & Configuration of Hardware",
      "Installation & Configuration of Software",
      "Hardware Repair",
      "Software Repair",
      "Problems & Solution",
      "Power Supply, Motherboard, Disk Drive, etc",
    ],
    outcome: "Laptop Repair Readiness",
  }),
  buildCourse({
    slug: "diploma-website-development",
    title: "Diploma in Website Development",
    summary:
      "A development-focused diploma covering front-end and modern web application foundations, including JavaScript, Node, React, databases, and Web3 concepts.",
    duration: "4 Months",
    price: "₦70,000",
    audience:
      "Aspiring developers, technical beginners, and learners moving into software delivery",
    hero: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Introduction to Internet & Web Development",
      "HTML, CSS",
      "Javascript, Node",
      "React, PostgreSQL",
      "Web3 and Dapps",
      "Projects & Launching",
    ],
    outcome: "Web Development Foundations",
  }),
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
