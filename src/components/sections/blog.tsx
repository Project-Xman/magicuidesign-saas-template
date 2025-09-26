import BlogCard from "@/components/blog-card";
import Section from "@/components/section";
import { SpinningText } from "@/components/ui/spinning-text";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogSection() {
  const allPosts = await getBlogPosts();

  const articles = await Promise.all(
    allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  );

  return (
    <Section 
      titleComponent={
        <SpinningText duration={1.5} trigger="inView">
          Blog
        </SpinningText>
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
