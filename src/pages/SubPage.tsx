import { useParams } from "react-router-dom";
import PageShell from "./PageShell";

function titleFromSlug(slug: string | undefined) {
  if (!slug) return "Details";
  return slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export default function SubPage() {
  const { slug } = useParams();
  const title = titleFromSlug(slug);

  return (
    <PageShell
      title={title}
      subtitle={`Explore our ${title.toLowerCase()} offering and learn how DGCC TECH can help.`}
    />
  );
}
