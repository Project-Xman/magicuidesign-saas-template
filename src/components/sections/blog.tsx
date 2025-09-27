import BlogCard from "@/components/blog-card";
import Section from "@/components/section";
import { SpinningText } from "@/components/ui/spinning-text";
import { getBlogPosts } from "@/lib/blog";
import GradientText from "../GradientText";
import { motion } from "framer-motion";

export default async function BlogSection() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  );

  return (
    <Section 
      titleComponent={
        <span className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Blogs
        </span>
      }
      subtitle="Latest Articles"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((data, idx) => (
          <BlogCard key={data.slug} data={data} priority={idx <= 1} />
        ))}
      </div>
    </Section>
  );
}
