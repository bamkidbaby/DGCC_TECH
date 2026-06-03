import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import CorporatePageHero from "../components/CorporatePageHero";
import { CTASection, SectionHeader, ShellSection, SurfaceCard } from "../components/CorporateUI";
import { blogPosts } from "../data/blogPosts";

export default function BlogArticle() {
  const { slug } = useParams();

  const article = useMemo(
    () => blogPosts.find((post) => post.slug === slug) ?? blogPosts[0],
    [slug],
  );

  const relatedPosts = blogPosts.filter((post) => post.slug !== article.slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  return (
    <>
      <CorporatePageHero
        badge={article.category}
        title={article.title}
        subtitle={article.excerpt}
        image={article.image}
        cta={{ label: "Back to blog", href: "/blog" }}
        secondaryCta={{ label: "Contact DGCC TECH", href: "/contact" }}
      />

      <ShellSection className="pt-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <SurfaceCard className="p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              Category
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-black">
              {article.category}
            </p>
          </SurfaceCard>
          <SurfaceCard className="p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              Published
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-black">
              {article.date}
            </p>
          </SurfaceCard>
          <SurfaceCard className="p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
              Read time
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-black">
              {article.readTime}
            </p>
          </SurfaceCard>
        </div>
      </ShellSection>

      <ShellSection>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <SurfaceCard className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
            </SurfaceCard>

            <SurfaceCard className="p-6 sm:p-8">
              <SectionHeader
                eyebrow="Article"
                title="A closer look at this update."
                body="Each blog article has its own page so visitors can read the full story, see supporting imagery, and understand why the update matters."
              />

              <div className="mt-8 space-y-8">
                {article.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-semibold tracking-tight text-black">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-[#6b7280]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>

          <div className="space-y-6">
            <SurfaceCard className="p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                Article summary
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                {article.excerpt}
              </p>
              <div className="mt-6 grid gap-3">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-md bg-[#2a308e] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#facc15] hover:text-black"
                >
                  Back to blog
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-[#e5e7eb] px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:border-[#2a308e] hover:text-[#2a308e]"
                >
                  Contact DGCC TECH
                </Link>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-6 sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                Visual notes
              </p>
              <div className="mt-4 grid gap-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group grid grid-cols-[96px_1fr] gap-4 rounded-2xl border border-[#e5e7eb] p-3 transition hover:border-[#2a308e] hover:bg-[#f8faff]"
                  >
                    <div className="h-20 overflow-hidden rounded-xl bg-[#f6f7fb]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                        {post.category}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold leading-6 text-black">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>
      </ShellSection>

      <ShellSection className="pt-0">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Related stories"
            title="More articles from the DGCC TECH newsroom."
            body="These links keep each article page connected to the wider blog feed and give visitors more to read."
            align="split"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((post) => (
              <SurfaceCard key={post.slug} className="overflow-hidden">
                <div className="h-48 overflow-hidden bg-[#f6f7fb]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a308e]">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-black">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-[#2a308e] transition hover:text-black"
                  >
                    Read article
                  </Link>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </ShellSection>

      <CTASection
        title="Have a story, update, or testimonial you want featured?"
        body="Use the contact page to send news, product updates, or feedback that may be worth sharing on the blog."
        primary={{ label: "Contact DGCC TECH", href: "/contact" }}
        secondary={{ label: "Back to blog", href: "/blog" }}
      />
    </>
  );
}
