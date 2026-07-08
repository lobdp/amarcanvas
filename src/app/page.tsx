'use client'

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, Download, Heart, Share2, Eye, Upload, DollarSign, TrendingUp, Grid3x3, Sparkles, BookOpen, Star, Layers, Users, ChevronLeft } from "lucide-react";
import { heroCards, allTemplates, allCategories, blogPosts, aiImages } from "@/lib/data";

const trendingCards = allTemplates.slice(0, 6);

function HeroCard({ card, tall }: { card: typeof heroCards[0]; tall?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden flex flex-col justify-end cursor-pointer group relative ${tall ? "h-[220px]" : "h-[160px]"}`} style={{ background: `linear-gradient(150deg, ${card.bg[0]} 0%, ${card.bg[1]} 100%)` }}>
      <div className="absolute inset-0 flex items-center justify-center opacity-15 text-6xl select-none group-hover:scale-110 transition-transform duration-500">{card.emoji}</div>
      <div className="relative p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-white font-bold text-[13px] leading-tight">{card.label}</p>
        <p className="text-white/60 text-[10px] mt-0.5">{card.sub}</p>
      </div>
    </div>
  );
}

function TemplateCard({ t, fixedWidth }: { t: typeof allTemplates[0]; fixedWidth?: boolean }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link href={`/templates/${t.id}`} className={`block rounded-xl overflow-hidden bg-card dark:bg-white/10 border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group ${fixedWidth ? "flex-shrink-0 w-[172px]" : "w-full"}`}>
      <div className="h-[140px] flex items-center justify-center relative m-1 rounded-lg" style={{ background: `linear-gradient(150deg, ${t.bg[0]} 0%, ${t.bg[1]} 100%)` }}>
        <p className="text-white/80 font-black text-lg text-center px-3 leading-tight select-none">{t.text}</p>
        <span className="absolute top-2 left-2 text-[9px] bg-white/20 text-white px-1.5 py-0.5 rounded-full font-medium">{t.cat}</span>
        <button onClick={(e) => { e.preventDefault(); setLiked(!liked); }} className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={11} className={liked ? "text-red-400 fill-red-400" : "text-white"} />
        </button>
      </div>
      <div className="px-3 pb-3 pt-1">
        <p className="text-[11px] font-semibold text-card-foreground truncate mb-1.5">{t.title}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-muted-foreground"><Download size={10} /><span className="text-[10px]">{t.dl}</span></div>
          <div className="flex gap-1">
            <button onClick={(e) => e.preventDefault()} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted"><Eye size={10} className="text-muted-foreground" /></button>
            <button onClick={(e) => e.preventDefault()} className="w-5 h-5 rounded flex items-center justify-center hover:bg-muted"><Share2 size={10} className="text-muted-foreground" /></button>
          </div>
        </div>
      </div>
    </Link>
  );
}

function SectionHeader({ title, link, to }: { title: string; link: string; to: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-center justify-between mb-4">
      <h2 className="text-[17px] font-bold text-foreground">{title}</h2>
      {to && <Link href={to} className="text-[13px] text-[#6c5ce7] font-medium flex items-center gap-0.5 hover:underline">{link} <ChevronRight size={13} /></Link>}
    </motion.div>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const testimonials = [
    { name: "Rahim Mia", role: "Freelance Designer", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&auto=format", text: "AmarCanvas changed the way I design for my clients. The Bangla templates are just perfect for the local market." },
    { name: "Nusrat Jahan", role: "Small Business Owner", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&auto=format", text: "I was struggling to find good Bangla design resources. AmarCanvas has everything I need from Eid posters to restaurant menus." },
    { name: "Shakib Ahmed", role: "Content Creator", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&auto=format", text: "The AI image generator is a game-changer. I create unique thumbnails and social media posts in minutes. Absolutely love it!" },
    { name: "Fatima Begum", role: "Graphic Designer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&auto=format", text: "I recommend AmarCanvas to all my students. The variety of Bangla typography templates is unmatched anywhere else online." },
    { name: "Tanvir Hasan", role: "Social Media Manager", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&auto=format", text: "We use AmarCanvas for all our client campaigns. The speed and ease of finding the right template saves us hours every week." },
  ];

  return (
    <div>
      <section className="bg-card border-b border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="inline-flex items-center gap-2 bg-[#f0eeff] rounded-full px-4 py-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#6c5ce7] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#6c5ce7]">100% Free Bangla Templates</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-[48px] md:text-[56px] lg:text-[64px] font-black text-foreground leading-[1.05] tracking-tight">Create &amp;</motion.h1>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-[48px] md:text-[56px] lg:text-[64px] font-black leading-[1.05] tracking-tight mb-4" style={{ color: "#6c5ce7" }}>Download Bangla Designs</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-muted-foreground text-[14px] mb-6 max-w-md leading-relaxed">Thousands of premium Bangla templates for your personal &amp; commercial projects. No design skills needed.</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="flex items-center bg-card border-2 border-border rounded-2xl px-4 py-3 gap-3 max-w-[480px] mb-4 focus-within:border-[#6c5ce7] focus-within:ring-4 focus-within:ring-[#6c5ce7]/10 transition-all shadow-sm">
              <Search size={18} className="text-muted-foreground flex-shrink-0" />
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Bangla Templates, Posters, Banners..." className="flex-1 bg-transparent text-[14px] outline-none text-foreground placeholder-muted-foreground" />
              <Link href={`/templates${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ""}`} className="px-5 py-2 bg-[#6c5ce7] text-white text-[12px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors flex-shrink-0 shadow-sm">Search</Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }} className="flex flex-wrap gap-2 mb-6">
              {["Social Media", "Poster", "Flyer", "Birthday", "More"].map((c) => (
                <Link key={c} href={`/templates?cat=${c}`} className="px-3.5 py-1.5 text-[11px] font-semibold rounded-full border border-border bg-card text-muted-foreground hover:border-[#6c5ce7] hover:text-[#6c5ce7] hover:bg-[#f0eeff] transition-all">{c}</Link>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="flex items-stretch divide-x divide-border border border-border rounded-2xl bg-muted/80 w-fit overflow-hidden shadow-sm">
              {[
                { v: "15,000+", l: "Templates", icon: <Grid3x3 size={18} /> },
                { v: "2,000+",  l: "Graphics",  icon: <Sparkles size={18} /> },
                { v: "300K+",   l: "Downloads", icon: <Download size={18} /> },
              ].map((s) => (
                <div key={s.l} className="flex items-center gap-3 px-5 py-3">
                  <div className="text-[#6c5ce7]">{s.icon}</div>
                  <div><p className="font-black text-[14px] text-foreground leading-tight">{s.v}</p><p className="text-[11px] text-muted-foreground leading-tight">{s.l}</p></div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-3">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="col-span-2"><HeroCard card={heroCards[0]} tall /></motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}><HeroCard card={heroCards[1]} tall /></motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}><HeroCard card={heroCards[2]} /></motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.5 }}><HeroCard card={heroCards[3]} /></motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}><HeroCard card={heroCards[4]} /></motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4">
        <SectionHeader title="🔍 Popular Searches" link="See All" to="/templates" />
        <div className="flex flex-wrap gap-2.5">
          {["Facebook Post", "Business Card", "Wedding", "Birthday", "Ramadan", "Pohela Boishakh"].map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.3 }}>
              <Link href={`/templates?q=${encodeURIComponent(s)}`} className="inline-block px-4 py-2.5 bg-card border border-border rounded-xl text-[13px] font-medium text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] hover:border-[#6c5ce7] transition-all shadow-sm">
                {s}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4">
        <SectionHeader title="🕐 Latest Uploaded" link="See All Templates" to="/templates" />
        <div className="hidden sm:grid grid-cols-6 gap-2">{allTemplates.slice(6, 12).map((t, i) => <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}><TemplateCard t={t} /></motion.div>)}</div>
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>{allTemplates.slice(6, 12).map((t) => <TemplateCard key={t.id} t={t} fixedWidth />)}</div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4">
        <SectionHeader title="🔥 Trending This Week" link="See All Templates" to="/templates" />
        <div className="hidden sm:grid grid-cols-6 gap-2">{trendingCards.map((t, i) => <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}><TemplateCard t={t} /></motion.div>)}</div>
        <div className="flex sm:hidden gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>{trendingCards.map((t) => <TemplateCard key={t.id} t={t} fixedWidth />)}</div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4">
        <SectionHeader title="🤖 Feature AI Images" link="See All AI Images" to="/ai-images" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {aiImages.slice(0, 6).map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}>
              <Link href="/ai-images" className="block rounded-xl overflow-hidden bg-card dark:bg-white/10 border border-border shadow-sm hover:shadow-md transition-all group">
                <div className="m-1 rounded-lg overflow-hidden">
                  <img src={img.img} alt={img.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="px-3 pb-3 pt-1">
                  <p className="text-[12px] font-bold text-card-foreground truncate group-hover:text-[#6c5ce7] transition-colors">{img.title}</p>
                  <span className="text-[9px] font-medium text-muted-foreground">{img.cat}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 pb-8">
        <SectionHeader title="Browse by Categories" link="See All Categories" to="/categories" />
        <div className="grid grid-cols-5 sm:grid-cols-9 gap-2.5">
          {allCategories.slice(0, 9).map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.3 }}>
              <Link href="/categories" className="flex flex-col items-center gap-2 py-3 px-2 rounded-xl bg-card dark:bg-white/10 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl" style={{ background: cat.bg }}>{cat.emoji}</div>
                <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-[#6c5ce7] text-center leading-tight">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4 pb-8">
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #5b4de8 0%, #8b7ff5 60%, #b8adff 100%)" }}>
          <div className="flex flex-col lg:flex-row items-center gap-6 px-8 py-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="flex-1 min-w-0">
              <h2 className="text-[28px] font-black text-white leading-tight mb-2">Earn by Sharing<br />Your Designs</h2>
              <p className="text-white/75 text-[13px] mb-5 max-w-[260px] leading-relaxed">Join thousands of creators and earn money by uploading your creative designs to AmarCanvas.</p>
              <Link href="/register" className="inline-block px-5 py-2.5 bg-card text-[#6c5ce7] font-black text-[13px] rounded-xl hover:bg-muted transition-colors shadow-lg">✦ Start as Creator</Link>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              {[
                { icon: <Upload size={18} />, title: "Upload Your Designs", desc: "Share your creative work with the world" },
                { icon: <TrendingUp size={18} />, title: "Get Discovered", desc: "Reach 500K+ active users daily" },
                { icon: <DollarSign size={18} />, title: "Earn Money", desc: "Get paid for every download" },
              ].map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }} className="flex-1 bg-white/15 backdrop-blur rounded-xl p-4 text-center">
                  <div className="w-9 h-9 bg-white/25 rounded-full flex items-center justify-center text-white mx-auto mb-2">{step.icon}</div>
                  <p className="text-white font-bold text-[11px] mb-1">{step.title}</p>
                  <p className="text-white/65 text-[10px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="hidden lg:block flex-shrink-0 w-44 h-36 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1673101609020-4b5e203885bc?w=350&h=280&fit=crop&auto=format" alt="Creator working" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 py-4 pb-8">
        <SectionHeader title="📝 From Our Blog" link="See All Posts" to="/blog" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogPosts.slice(0, 4).map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
              <Link href={`/blog/${post.id}`} className="block bg-card dark:bg-white/10 rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all cursor-pointer group">
                <div className="m-1 rounded-lg overflow-hidden"><img src={post.img} alt={post.title} className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                <div className="px-3 pb-3 pt-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#f0eeff] text-[#6c5ce7]">{post.cat}</span>
                    <span className="text-[10px] text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-[12px] font-bold text-card-foreground leading-snug group-hover:text-[#6c5ce7] transition-colors line-clamp-2">{post.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1400px] mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: <Download size={20} />, title: "500+ Free Downloads", desc: "No credit card required" },
            { icon: <Star size={20} />, title: "Easy to Customize", desc: "All editable templates" },
            { icon: <Layers size={20} />, title: "High Quality", desc: "Professional grade designs" },
            { icon: <Users size={20} />, title: "Regular Updates", desc: "New designs every week" },
          ].map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="bg-card dark:bg-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-[#f0eeff] rounded-xl flex items-center justify-center text-[#6c5ce7] flex-shrink-0">{b.icon}</div>
              <div><p className="text-[12px] font-bold text-card-foreground">{b.title}</p><p className="text-[10px] text-muted-foreground">{b.desc}</p></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="px-4 pb-8">
        <div className="max-w-[1400px] mx-auto rounded-2xl overflow-hidden bg-muted/30 border border-border">
          <div className="px-6 md:px-10 py-10">
            <motion.h2 initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-[22px] font-black text-foreground text-center mb-6">💬 What Creators Say</motion.h2>
            <div className="relative max-w-xl mx-auto">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={testimonialIdx} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.35 }} className="rounded-2xl p-6 md:p-8 text-center">
                  <img src={testimonials[testimonialIdx].avatar} alt={testimonials[testimonialIdx].name} className="w-14 h-14 rounded-full object-cover ring-3 ring-[#6c5ce7]/20 mx-auto mb-3" />
                  <div className="flex justify-center gap-0.5 mb-3 text-yellow-400">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-yellow-400" />)}</div>
                  <p className="text-[14px] text-card-foreground leading-relaxed italic mb-4 max-w-lg mx-auto">&ldquo;{testimonials[testimonialIdx].text}&rdquo;</p>
                  <p className="text-[14px] font-bold text-foreground">{testimonials[testimonialIdx].name}</p>
                  <p className="text-[11px] text-muted-foreground">{testimonials[testimonialIdx].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <button onClick={() => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length)} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 w-9 h-9 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-[#6c5ce7] hover:border-[#6c5ce7] transition-all"><ChevronLeft size={18} /></button>
            <button onClick={() => setTestimonialIdx((testimonialIdx + 1) % testimonials.length)} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 w-9 h-9 rounded-full bg-card border border-border shadow-sm flex items-center justify-center text-muted-foreground hover:text-[#6c5ce7] hover:border-[#6c5ce7] transition-all"><ChevronRight size={18} /></button>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonialIdx(i)} className={`w-2 h-2 rounded-full transition-all ${testimonialIdx === i ? "w-6 bg-[#6c5ce7]" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
              ))}
            </div>
          </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
