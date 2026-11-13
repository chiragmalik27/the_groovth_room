import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";
import CtaBanner from "@/components/home/CtaBanner";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = INSIGHTS.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | The Grovvth Room`,
    description: article.excerpt,
  };
}

export default function InsightDetailPage({ params }: Props) {
  const article = INSIGHTS.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      {/* Top Breadcrumb */}
      <div className="bg-canvas border-b border-line py-3">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 flex items-center justify-between text-xs font-mono text-muted">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 hover:text-charcoal transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>The Reading Room</span>
          </Link>
          <span className="uppercase">{article.category}</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 md:py-24 border-b border-line bg-canvas">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono text-muted">
              <span>{article.category}</span>
              <span>&bull;</span>
              <span>{article.readTime}</span>
              <span>&bull;</span>
              <span>{article.publishedDate}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.15]">
              {article.title}
            </h1>

            <p className="font-sans text-base sm:text-lg text-charcoal/70 italic border-l-2 border-taupe pl-4 py-1">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-8 border-t border-line space-y-6 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed font-light">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-12 border-t border-line flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-charcoal hover:opacity-75"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all essays</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-charcoal font-semibold hover:underline"
            >
              <span>Discuss this topic</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner />
    </div>
  );
}

