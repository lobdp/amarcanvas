'use client'

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, Download, Heart, Grid, List, ChevronDown } from "lucide-react";
import { allTemplates, templateCategories } from "@/lib/data";

const sortOptions = ["Most Popular", "Newest", "Most Downloaded", "Most Liked"];

function TemplatesContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const initialQ   = searchParams.get("q")   || "";

  const [query,    setQuery]    = useState(initialQ);
  const [category, setCategory] = useState(templateCategories.includes(initialCat) ? initialCat : "All");
  const [sort,     setSort]     = useState("Most Popular");
  const [view,     setView]     = useState<"grid" | "list">("grid");
  const [liked,    setLiked]    = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    let list = [...allTemplates];
    if (category !== "All") list = list.filter((t) => t.cat === category);
    if (query) list = list.filter((t) => t.title.toLowerCase().includes(query.toLowerCase()));
    if (sort === "Most Downloaded") list.sort((a, b) => parseInt(b.dl) - parseInt(a.dl));
    if (sort === "Most Liked") list.sort((a, b) => parseInt(b.likes) - parseInt(a.likes));
    return list;
  }, [category, query, sort]);

  function toggleLike(id: string) {
    setLiked((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-foreground mb-1">Templates</h1>
        <p className="text-muted-foreground text-[13px]">15,000+ free Bangla templates for personal & commercial use</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 flex items-center bg-card border border-border rounded-xl px-3.5 py-2.5 gap-2 focus-within:border-[#6c5ce7] transition-all">
          <Search size={15} className="text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search templates..." className="flex-1 bg-transparent text-[13px] outline-none text-foreground" />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="appearance-none bg-card border border-border rounded-xl px-4 py-2.5 pr-8 text-[13px] font-medium text-card-foreground outline-none cursor-pointer">
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
          <button onClick={() => setView(view === "grid" ? "list" : "grid")} className="px-3 py-2.5 bg-card border border-border rounded-xl text-muted-foreground hover:border-[#6c5ce7] hover:text-[#6c5ce7] transition-colors">
            {view === "grid" ? <List size={16} /> : <Grid size={16} />}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {templateCategories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 text-[12px] font-semibold rounded-full border transition-all ${category === cat ? "bg-[#6c5ce7] text-white border-[#6c5ce7]" : "bg-card text-muted-foreground border-border hover:border-[#6c5ce7] hover:text-[#6c5ce7]"}`}>{cat}</button>
        ))}
      </div>

      <p className="text-[12px] text-muted-foreground mb-4">{filtered.length} templates found</p>

      {view === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((t) => (
            <Link key={t.id} href={`/templates/${t.id}`} className="rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all group">
              <div className="h-[130px] flex items-center justify-center relative" style={{ background: `linear-gradient(150deg, ${t.bg[0]} 0%, ${t.bg[1]} 100%)` }}>
                <p className="text-white/80 font-black text-base text-center px-3 leading-tight select-none">{t.text}</p>
                <span className="absolute top-1.5 left-1.5 text-[9px] bg-white/20 text-white px-1.5 py-0.5 rounded-full">{t.cat}</span>
                <button onClick={(e) => { e.preventDefault(); toggleLike(t.id); }} className="absolute top-1.5 right-1.5 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={10} className={liked.has(t.id) ? "fill-red-400 text-red-400" : "text-white"} />
                </button>
              </div>
              <div className="px-2 py-1.5">
                <p className="text-[10px] font-semibold text-card-foreground truncate mb-1">{t.title}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Download size={9} />{t.dl}</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Heart size={9} />{t.likes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((t) => (
            <Link key={t.id} href={`/templates/${t.id}`} className="flex items-center gap-4 bg-card rounded-xl p-3 border border-border hover:shadow-md transition-all group">
              <div className="w-20 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(150deg, ${t.bg[0]} 0%, ${t.bg[1]} 100%)` }}>
                <p className="text-white/80 font-black text-xs text-center px-1 leading-tight">{t.text}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-card-foreground group-hover:text-[#6c5ce7] transition-colors truncate">{t.title}</p>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-1.5 py-0.5 rounded font-medium">{t.cat}</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Download size={9} />{t.dl}</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground"><Heart size={9} />{t.likes}</span>
                </div>
              </div>
              <button onClick={(e) => { e.preventDefault(); }} className="px-3 py-1.5 bg-[#6c5ce7] text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">Download</button>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-muted-foreground text-[14px]">No templates found. Try a different search or category.</p>
          <button onClick={() => { setQuery(""); setCategory("All"); }} className="mt-3 px-4 py-2 bg-[#6c5ce7] text-white text-[13px] font-semibold rounded-xl">Clear Filters</button>
        </div>
      )}
    </div>
  );
}

export default function Templates() {
  return (
    <Suspense fallback={<div className="flex justify-center py-20"><p className="text-muted-foreground">Loading templates...</p></div>}>
      <TemplatesContent />
    </Suspense>
  );
}
