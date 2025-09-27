import { Metadata } from "next";
import Section from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | FinWage Resources",
  description: "Stay updated with the latest insights on financial wellness, earned wage access, and payroll innovations.",
};

// Mock blog posts - in a real app, these would come from a CMS or database
const blogPosts = [
  {
    title: "The Future of Financial Wellness in the Workplace",
    excerpt: "Explore how earned wage access is revolutionizing employee benefits and reducing financial stress.",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Financial Wellness",
    slug: "future-of-financial-wellness"
  },
  {
    title: "Implementing EWA: A Complete Guide for HR Leaders",
    excerpt: "Step-by-step guide to implementing earned wage access in your organization.",
    author: "Michael Chen",
    date: "2025-01-10",
    readTime: "8 min read",
    category: "HR & Payroll",
    slug: "implementing-ewa-guide"
  },
  {
    title: "Reducing Employee Turnover with Financial Benefits",
    excerpt: "How financial wellness programs can significantly impact employee retention rates.",
    author: "Emily Rodriguez",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Employee Retention",
    slug: "reducing-turnover-financial-benefits"
  },
  {
    title: "The ROI of Employee Financial Wellness Programs",
    excerpt: "Quantifying the business impact of investing in employee financial health.",
    author: "David Park",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Business Impact",
    slug: "roi-financial-wellness-programs"
  }
];

const categories = ["All", "Financial Wellness", "HR & Payroll", "Employee Retention", "Business Impact"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Section
        title="FinWage Blog"
        subtitle="Insights and Innovation"
        description="Stay updated with the latest trends in financial wellness, earned wage access, and employee benefits."
      >
        {/* Categories */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  Featured
                </span>
                <span>{blogPosts[0].category}</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                {blogPosts[0].title}
              </CardTitle>
              <CardDescription className="text-base mb-6">
                {blogPosts[0].excerpt}
              </CardDescription>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Button asChild>
                <Link href={`/resources/blog/${blogPosts[0].slug}`} className="flex items-center gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/3 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-8">
              <div className="text-6xl text-primary/30">📊</div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {post.excerpt}
                </CardDescription>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/resources/blog/${post.slug}`}>
                    Read Article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on financial wellness and earned wage access.
          </p>
          <Button asChild>
            <Link href="/contact">Subscribe to Newsletter</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}