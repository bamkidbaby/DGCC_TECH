export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "news-office-hours-and-response-updates",
    title: "News: updated office hours and faster response support",
    category: "News",
    excerpt:
      "DGCC TECH has improved support timing so enquiries, service requests, and training questions can be handled more consistently.",
    readTime: "2 min read",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "The support window has been adjusted so messages can be handled with more consistency across the week.",
          "That gives visitors a better idea of when they can expect a reply, especially when they are asking about services, registrations, or training.",
        ],
      },
      {
        heading: "Why it helps",
        paragraphs: [
          "Clear response expectations reduce uncertainty, and that matters for both business clients and students looking for fast answers.",
          "This kind of update belongs in the blog because it makes the site feel active, current, and responsive.",
        ],
      },
    ],
  },
  {
    slug: "announcement-summer-training-enrollment",
    title: "Announcement: summer training enrollment is now open",
    category: "Announcement",
    excerpt:
      "Students can now register for certificate and diploma programs across website design, graphics, desktop publishing, and more.",
    readTime: "3 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "Programs available",
        paragraphs: [
          "The current enrollment window covers practical programs across office productivity, publishing, graphics, web, and laptop engineering.",
          "That gives the training side of the website more movement, with announcements that can be updated as schedules and availability change.",
        ],
      },
      {
        heading: "How visitors can respond",
        paragraphs: [
          "The announcement points users toward contact and direct enquiries, making it easier for them to move from reading to action.",
          "It also creates a useful news section that future posts can build on when new sessions are introduced.",
        ],
      },
    ],
  },
  {
    slug: "client-testimonial-a-smarter-way-to-work",
    title: "Client testimonial: a smarter way to handle training and support",
    category: "Testimonial",
    excerpt:
      "A recent client shared how DGCC TECH made the process easier to understand, easier to follow, and more useful for day-to-day business needs.",
    readTime: "3 min read",
    date: "June 2026",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "What the client noticed",
        paragraphs: [
          "The first thing mentioned in the testimonial was clarity. The client said the team did not rush the conversation and instead explained the process in a way that was easy to follow.",
          "That mattered because the work involved several parts, including planning, communication, and making sure the final result matched what was actually needed.",
        ],
      },
      {
        heading: "Why the feedback matters",
        paragraphs: [
          "Testimonials help new visitors understand what working with DGCC TECH feels like. They turn a service description into something more concrete and trustworthy.",
          "For this reason, we will continue to feature short client stories that show the practical value of the work, not just the finished result.",
        ],
      },
    ],
  },
  {
    slug: "news-client-support-follow-up-process",
    title: "News: a new follow-up process for active clients",
    category: "News",
    excerpt:
      "Active clients will now receive clearer follow-up messages so requests, changes, and delivery steps stay on track.",
    readTime: "3 min read",
    date: "May 2026",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "What the update improves",
        paragraphs: [
          "The follow-up process is intended to make it easier for active clients to know what happens next after a discussion or service request.",
          "That reduces friction and makes the support experience feel more organized from start to finish.",
        ],
      },
      {
        heading: "Why this matters for the newsroom",
        paragraphs: [
          "This is the kind of practical news item that helps the blog stay relevant to real customers and ongoing work.",
          "It also adds a more operational voice to the news section so the blog covers more than just opinions and promotions.",
        ],
      },
    ],
  },
  {
    slug: "announcement-new-course-inquiry-shortcuts",
    title: "Announcement: new course enquiry shortcuts are live",
    category: "Announcement",
    excerpt:
      "Visitors can now move from training posts to enquiries with fewer steps and clearer calls to action.",
    readTime: "2 min read",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "The training sections now make it easier to move from reading about a course to asking a question or contacting the team.",
          "That supports quicker decision-making and gives the page a clearer business focus.",
        ],
      },
      {
        heading: "Why it is worth sharing",
        paragraphs: [
          "Announcements like this tell people that the site is being actively maintained and improved.",
          "They also help create a rhythm for future updates whenever the training desk changes or improves the user flow.",
        ],
      },
    ],
  },
  {
    slug: "testimonial-fast-help-for-a-device-repair",
    title: "Testimonial: fast help for a device repair issue",
    category: "Testimonial",
    excerpt:
      "A support client praised the quick diagnosis, the clear explanation, and the practical repair advice that helped them move forward.",
    readTime: "3 min read",
    date: "April 2026",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
    sections: [
      {
        heading: "The repair experience",
        paragraphs: [
          "The client described the repair process as fast and easy to understand, which is exactly the kind of practical outcome the business wants to highlight.",
          "A good testimonial does more than praise the result. It helps future visitors picture the support journey before they reach out.",
        ],
      },
      {
        heading: "Why this story matters",
        paragraphs: [
          "Repair services are often judged by reliability and communication, not only by the technical fix itself.",
          "Publishing stories like this helps the blog become a trustworthy feed of real customer experiences.",
        ],
      },
    ],
  },
];
