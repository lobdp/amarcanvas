'use client'

import { useState } from "react";
import Link from "next/link";
import { Search, Clock, ChevronRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data";

export default function Blog() {
  const [cat, setCat]     = useState("All");
  const [query, setQuery] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchCat = cat === "All" || p.cat === cat;
    const matchQ   = p.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  const featured = blogPosts[0];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-foreground mb-1">AmarCanvas Blog</h1>
        <p className="text-muted-foreground text-[13px]">Design tips, tutorials, and inspiration for Bangladeshi creators</p>
      </div>

      <Link href={`/blog/${featured.id}`} className="block mb-8 rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all group">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
            <img src={featured.img.replace("w=600&h=360", "w=800&h=500")} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-2 py-0.5 rounded-full font-bold">Featured</span>
              <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{featured.cat}</span>
            </div>
            <h2 className="text-[20px] font-black text-foreground leading-tight mb-2 group-hover:text-[#6c5ce7] transition-colors">{featured.title}</h2>
            <p className="text-muted-foreground text-[13px] leading-relaxed mb-4 line-clamp-2">{featured.excerpt}</p>
            <div className="flex items-center gap-3">
              <img src={featured.authorImg} alt={featured.author} className="w-7 h-7 rounded-full object-cover" />
              <span className="text-[12px] font-semibold text-card-foreground">{featured.author}</span>
              <span className="text-[11px] text-muted-foreground">{featured.date}</span>
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground ml-auto"><Clock size={11} /> {featured.readTime} read</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1 flex items-center bg-card border border-border rounded-xl px-3.5 py-2.5 gap-2 focus-within:border-[#6c5ce7] transition-all">
          <Search size={15} className="text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." className="flex-1 bg-transparent text-[13px] outline-none text-foreground" />
        </div>
        <div className="flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-3 py-2 text-[12px] font-semibold rounded-xl border transition-all ${cat === c ? "bg-[#6c5ce7] text-white border-[#6c5ce7]" : "bg-card text-muted-foreground border-border hover:border-[#6c5ce7] hover:text-[#6c5ce7]"}`}>{c}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all group">
            <div className="h-44 overflow-hidden"><img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-2 py-0.5 rounded-full font-semibold">{post.cat}</span>
                <span className="text-[10px] text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-[14px] font-bold text-foreground leading-snug mb-2 group-hover:text-[#6c5ce7] transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-[12px] text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-border">
                <img src={post.authorImg} alt={post.author} className="w-6 h-6 rounded-full object-cover" />
                <span className="text-[11px] font-semibold text-card-foreground">{post.author}</span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground ml-auto"><Clock size={10} />{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">📝</p>
          <p className="text-muted-foreground">No posts found for your search.</p>
        </div>
      )}
    </div>
  );
}
