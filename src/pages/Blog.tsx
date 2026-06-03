import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import CorporatePageHero from "../components/CorporatePageHero";
import { SectionHeader, ShellSection, SurfaceCard } from "../components/CorporateUI";
import { blogPosts } from "../data/blogPosts";

type FeedbackEntry = {
  id: string;
  name: string;
  message: string;
  rating: number;
  createdAt: string;
};

const storageKey = "dgcc-tech-feedback";

const defaultFeedback: FeedbackEntry[] = [
  {
    id: "sample-1",
    name: "Amina J.",
    message:
      "The team explained everything clearly and kept the process simple from start to finish.",
    rating: 5,
    createdAt: "Just now",
  },
  {
    id: "sample-2",
    name: "Samuel T.",
    message:
      "Fast support, good communication, and a professional finish on the project.",
    rating: 4,
    createdAt: "Earlier today",
  },
];

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= value;

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-all duration-200 ${
              filled
                ? "border-[#facc15] bg-[#facc15] text-black shadow-[0_10px_24px_rgba(250,204,21,0.18)]"
                : "border-[#e5e7eb] bg-white text-[#cbd5e1] hover:border-[#2a308e] hover:text-[#2a308e]"
            }`}
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [feedbackList, setFeedbackList] = useState<FeedbackEntry[]>(defaultFeedback);
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);

    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as FeedbackEntry[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setFeedbackList(parsed);
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(feedbackList));
  }, [feedbackList]);

  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const newsPosts = blogPosts.filter((post) => post.category === "News");
  const announcementPosts = blogPosts.filter(
    (post) => post.category === "Announcement",
  );
  const testimonialPosts = blogPosts.filter(
    (post) => post.category === "Testimonial",
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage || rating < 1) {
      return;
    }

    const newEntry: FeedbackEntry = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: trimmedName,
      message: trimmedMessage,
      rating,
      createdAt: "Just now",
    };

    setFeedbackList((current) => [newEntry, ...current]);
    setName("");
    setMessage("");
    setRating(5);
    setSuccess(true);
    window.setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <>
      <CorporatePageHero
        badge="DGCC TECH NEWSROOM"
        title="News, announcements, and client testimonials."
        subtitle="A focused blog layout for company updates, useful announcements, and real feedback from clients and learners."
        image={featuredPost.image}
        cta={{ label: "Contact DGCC TECH", href: "/contact" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <SurfaceCard className="h-full p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              News
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">
              Operational updates and service changes
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">
              Keep visitors informed with timely updates that matter to students,
              businesses, and active clients.
            </p>
          </SurfaceCard>
          <SurfaceCard className="h-full p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              Announcements
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">
              Enrollment windows and new offers
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">
              Use the blog to announce new products, class openings, and important
              changes in a clean, easy-to-scan format.
            </p>
          </SurfaceCard>
          <SurfaceCard className="h-full p-6 sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              Testimonials
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">
              Real feedback from real people
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#6b7280]">
              Share short client stories and ratings that help new visitors trust
              the brand faster.
            </p>
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured update"
            title="The latest newsroom story at a glance."
            body="The blog now feels like a focused editorial board centered on only the content types the site needs most."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <SurfaceCard className="overflow-hidden">
              <div className="relative h-72 overflow-hidden bg-[#f6f7fb] sm:h-96">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                  <span>{featuredPost.category}</span>
                  <span className="text-[#d1d5db]">-</span>
                  <span>{featuredPost.date}</span>
                  <span className="text-[#d1d5db]">-</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  {featuredPost.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#6b7280]">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
                  >
                    Read full story
                  </Link>
                  <Link
                    to="#feedback"
                    className="inline-flex items-center justify-center rounded-md border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:border-[#2a308e] hover:text-[#2a308e]"
                  >
                    Leave feedback
                  </Link>
                </div>
              </div>
            </SurfaceCard>

            <div className="space-y-4">
              {[...newsPosts, ...announcementPosts, ...testimonialPosts]
                .filter((post) => post.slug !== featuredPost.slug)
                .slice(0, 3)
                .map((post) => (
                  <SurfaceCard key={post.slug} className="overflow-hidden">
                    <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                      <div className="h-full min-h-[140px] overflow-hidden bg-[#f6f7fb]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-5 sm:p-5 sm:pl-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                          {post.category}
                        </p>
                        <h3 className="mt-3 text-lg font-semibold tracking-tight text-black">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                          <span>{post.date}</span>
                          <span>-</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </SurfaceCard>
                ))}
            </div>
          </div>
        </div>
      </ShellSection>

      <ShellSection className="pt-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="News desk"
            title="Latest news and announcement cards."
            body="This section keeps the freshest company updates at the top of the page in a clean newsroom grid."
            align="split"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[...newsPosts, ...announcementPosts].map((post) => (
              <SurfaceCard key={post.slug} className="flex h-full flex-col overflow-hidden">
                <div className="relative h-52 overflow-hidden bg-[#f6f7fb]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                      {post.category}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                      {post.readTime}
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-black">
                    {post.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#6b7280]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#e5e7eb] pt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                    <span>{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-[#2a308e] transition hover:text-black"
                    >
                      Read article
                    </Link>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </ShellSection>

      <ShellSection className="pt-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Testimonials"
            title="Client stories and ratings."
            body="This section highlights the human side of the site with short feedback posts that show how the service feels in practice."
            align="split"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonialPosts.map((post) => (
              <SurfaceCard key={post.slug} className="overflow-hidden">
                <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
                  <div className="min-h-[220px] overflow-hidden bg-[#f6f7fb]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                      {post.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-black">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                      <span>{post.date}</span>
                      <span>-</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 inline-flex items-center text-sm font-semibold text-[#2a308e] transition hover:text-black"
                    >
                      Read testimonial
                    </Link>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]" id="feedback">
          <div>
            <SectionHeader
              eyebrow="Feedback"
              title="Leave a review and rate your experience."
              body="Visitors can share a quick testimonial, rate the experience, and help future clients understand what working with DGCC TECH feels like."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <SurfaceCard className="p-5">
                <p className="text-3xl font-semibold tracking-tight text-black">
                  {feedbackList.length}
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">Total feedback entries</p>
              </SurfaceCard>
              <SurfaceCard className="p-5">
                <p className="text-3xl font-semibold tracking-tight text-black">
                  {(
                    feedbackList.reduce((sum, item) => sum + item.rating, 0) /
                    Math.max(feedbackList.length, 1)
                  ).toFixed(1)}
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">Average rating</p>
              </SurfaceCard>
              <SurfaceCard className="p-5">
                <p className="text-3xl font-semibold tracking-tight text-black">5</p>
                <p className="mt-2 text-sm text-[#6b7280]">Maximum rating</p>
              </SurfaceCard>
            </div>
          </div>

          <div className="space-y-6">
            <SurfaceCard className="p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-black">
                      Your name
                    </span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#2a308e]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-black">
                      Rating
                    </span>
                    <StarRating value={rating} onChange={setRating} />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-black">
                    Your feedback
                  </span>
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={5}
                    placeholder="Tell us what you think..."
                    className="w-full resize-none rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-[#9ca3af] focus:border-[#2a308e]"
                  />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
                  >
                    Submit feedback
                  </button>
                  <p className="text-sm text-[#6b7280]">
                    Your rating helps future visitors decide faster.
                  </p>
                </div>

                {success ? (
                  <p className="rounded-xl border border-[#dbeafe] bg-[#eff6ff] px-4 py-3 text-sm font-medium text-[#1d4ed8]">
                    Thanks, your feedback has been posted.
                  </p>
                ) : null}
              </form>
            </SurfaceCard>

            <SurfaceCard className="p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#e5e7eb] pb-4">
                <div>
                  <p className="text-sm font-semibold tracking-tight text-black">
                    Feedback chats
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#6b7280]">
                    Scroll to view more entries
                  </p>
                </div>
                <span className="rounded-full border border-[#e5e7eb] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
                  Live feed
                </span>
              </div>

              <div className="max-h-[520px] space-y-4 overflow-y-auto pr-2">
                {feedbackList.map((entry) => (
                  <div key={entry.id} className="rounded-2xl border border-[#e5e7eb] bg-white p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-black">
                          {entry.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                          {entry.createdAt}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <span
                            key={`${entry.id}-${index}`}
                            className={index < entry.rating ? "text-[#facc15]" : "text-[#e5e7eb]"}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#6b7280]">
                      {entry.message}
                    </p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </ShellSection>
    </>
  );
}
