'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import { Clock, ChevronRight, Twitter, Facebook, Linkedin, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post    = blogPosts.find((p) => p.id === slug) || blogPosts[0];
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <article className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-5">
            <Link href="/" className="hover:text-[#6c5ce7]">Home</Link><ChevronRight size={12} />
            <Link href="/blog" className="hover:text-[#6c5ce7]">Blog</Link><ChevronRight size={12} />
            <span className="text-card-foreground truncate">{post.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-2.5 py-1 rounded-full font-bold">{post.cat}</span>
            {post.tags.map((tag) => (<span key={tag} className="text-[10px] bg-muted text-muted-foreground px-2.5 py-1 rounded-full">#{tag}</span>))}
          </div>

          <h1 className="text-[28px] md:text-[34px] font-black text-foreground leading-tight mb-4">{post.title}</h1>

          <div className="flex items-center gap-3 mb-6">
            <img src={post.authorImg} alt={post.author} className="w-9 h-9 rounded-full object-cover ring-2 ring-[#6c5ce7]/20" />
            <div>
              <p className="text-[13px] font-bold text-foreground">{post.author}</p>
              <p className="text-[11px] text-muted-foreground">{post.date} · <Clock size={10} className="inline" /> {post.readTime} read</p>
            </div>
            <div className="ml-auto flex gap-1.5">
              {[<Facebook size={13} />, <Twitter size={13} />, <Linkedin size={13} />].map((icon, i) => (
                <button key={i} className="w-7 h-7 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-[#6c5ce7] hover:text-white transition-colors">{icon}</button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-8 h-72">
            <img src={post.img.replace("w=600&h=360", "w=900&h=500")} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-[14px] leading-relaxed text-card-foreground">
            <p className="text-[16px] font-semibold text-foreground leading-relaxed">{post.excerpt}</p>
            <p>In Bangladesh&apos;s rapidly growing digital landscape, having eye-catching designs has become essential for businesses, freelancers, and individuals alike. Whether you&apos;re promoting an Eid sale, announcing a new restaurant, or sharing a birthday invitation — the right template can make all the difference.</p>
            <h2 className="text-[18px] font-black text-foreground mt-6 mb-2">Why Bangla Design Matters</h2>
            <p>The Bangla-speaking audience responds most strongly to designs that speak their language — not just linguistically, but culturally. Colors like red and green evoke national pride. Arabic calligraphy mixed with Bengali script creates a unique aesthetic for Eid and religious occasions.</p>
            <p>AmarCanvas was built specifically for this need. Every template in our library is crafted with Bangladeshi visual culture in mind — from font choices to color palettes to layout conventions.</p>
            <h2 className="text-[18px] font-black text-foreground mt-6 mb-2">Key Takeaways</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use high-contrast colors for outdoor banners and print materials</li>
              <li>Incorporate Bengali typography for maximum local impact</li>
              <li>Festival-specific designs (Eid, Pohela Boishakh) see 3× more engagement</li>
              <li>Keep mobile-first in mind — most viewers see content on smartphones</li>
              <li>Free templates from AmarCanvas are fully commercial-use licensed</li>
            </ul>
            <p>Start exploring our template library today and take your Bangla design game to the next level.</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
            {post.tags.map((tag) => (
              <span key={tag} className="text-[11px] bg-muted text-muted-foreground px-3 py-1.5 rounded-full hover:bg-[#f0eeff] hover:text-[#6c5ce7] cursor-pointer transition-colors">#{tag}</span>
            ))}
          </div>
        </article>

        <aside className="lg:w-72 flex-shrink-0 space-y-5">
          <div className="bg-card rounded-2xl p-5 text-center border border-border">
            <img src={post.authorImg} alt={post.author} className="w-16 h-16 rounded-full object-cover ring-4 ring-[#f0eeff] mx-auto mb-3" />
            <h3 className="font-black text-foreground text-[15px]">{post.author}</h3>
            <p className="text-[11px] text-muted-foreground mb-3">Senior Designer · AmarCanvas</p>
            <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">Passionate about Bangla design, typography, and helping creators tell their stories visually.</p>
            <button className="w-full py-2 bg-[#6c5ce7] text-white text-[12px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors">Follow Author</button>
          </div>

          <div className="bg-card rounded-2xl p-5 border border-border">
            <h3 className="font-black text-foreground text-[14px] mb-4">Related Articles</h3>
            <div className="space-y-3">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.id}`} className="flex gap-3 group">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0"><img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-card-foreground leading-tight group-hover:text-[#6c5ce7] transition-colors line-clamp-2">{p.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-1">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)" }}>
            <h3 className="font-black text-white text-[14px] mb-1">Get Design Tips</h3>
            <p className="text-white/75 text-[11px] mb-3">Weekly Bangla design inspiration in your inbox.</p>
            <input placeholder="Your email" className="w-full bg-white/15 border border-white/20 text-white placeholder-white/40 rounded-xl px-3 py-2 text-[12px] outline-none mb-2" />
            <button className="w-full py-2 bg-white text-[#6c5ce7] text-[12px] font-black rounded-xl">Subscribe</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
