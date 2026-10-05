import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { POSTS } from "@/lib/posts";

export function generateStaticParams() {
    return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = POSTS.find((p) => p.slug === slug);
    if (!post) return {};
    return { title: `${post.title} · Piyush`, description: post.hook };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = POSTS.find((p) => p.slug === slug);
    if (!post) notFound();
    return (
        <article className="w-full text-left space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link href="/writing" className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> all writing
            </Link>
            <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{post.title}</h1>
                <p className="text-[13px] font-mono text-neutral-500">{post.date} · {post.minutes} min read</p>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-neutral-300 [&_strong]:text-white [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-blue-300 [&_code]:bg-blue-500/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded">
                {post.body}
            </div>
            <div className="space-y-3 pt-4 border-t border-white/5">
                <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">keep reading</p>
                {POSTS.filter((p) => p.slug !== post.slug).map((p) => (
                    <Link key={p.slug} href={`/writing/${p.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 px-4 py-3 hover:border-blue-500/40 transition-colors">
                        <span className="text-[15px] text-neutral-300 group-hover:text-white transition-colors">{p.title}</span>
                        <span className="text-[12px] font-mono text-neutral-600 shrink-0">{p.minutes} min</span>
                    </Link>
                ))}
            </div>
        </article>
    );
}
