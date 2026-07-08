'use client'

import { useState } from "react";
import { Search, Download, Heart, Eye, Sparkles, ChevronDown } from "lucide-react";
import { aiImages, aiCategories } from "@/lib/data";

export default function AIImages() {
  const [query, setQuery]       = useState("");
  const [cat, setCat]           = useState("All");
  const [liked, setLiked]       = useState<Set<string>>(new Set());
  const [preview, setPreview]   = useState<typeof aiImages[0] | null>(null);

  const filtered = aiImages.filter((img) => {
    const matchCat = cat === "All" || img.cat === cat;
    const matchQ   = img.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  function toggleLike(id: string) {
    setLiked((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#f0eeff] text-[#6c5ce7] px-3 py-1 rounded-full text-[11px] font-bold mb-3">
          <Sparkles size={12} /> AI Powered · New Images Daily
        </div>
        <h1 className="text-3xl font-black text-foreground mb-2">AI Generated Images</h1>
        <p className="text-muted-foreground text-[14px] max-w-md mx-auto">Browse thousands of stunning AI-generated images. Free to download for personal & commercial use.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 flex items-center bg-card border border-border rounded-xl px-3.5 py-2.5 gap-2 focus-within:border-[#6c5ce7] transition-all">
          <Search size={15} className="text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search images..." className="flex-1 bg-transparent text-[13px] outline-none text-foreground" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {aiCategories.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-1.5 text-[12px] font-semibold rounded-full border transition-all ${cat === c ? "bg-[#6c5ce7] text-white border-[#6c5ce7]" : "bg-card text-muted-foreground border-border hover:border-[#6c5ce7] hover:text-[#6c5ce7]"}`}>{c}</button>
        ))}
      </div>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {filtered.map((img) => (
          <div key={img.id} className="break-inside-avoid rounded-xl overflow-hidden bg-card shadow-sm border border-border group cursor-pointer relative" onClick={() => setPreview(img)}>
            <img src={img.img} alt={img.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-between p-3 opacity-0 group-hover:opacity-100">
              <div>
                <p className="text-white font-bold text-[11px]">{img.title}</p>
                <span className="text-[9px] bg-white/20 text-white px-1.5 py-0.5 rounded-full">{img.cat}</span>
              </div>
              <div className="flex gap-1.5">
                <button onClick={(e) => { e.stopPropagation(); toggleLike(img.id); }} className="w-7 h-7 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Heart size={13} className={liked.has(img.id) ? "fill-red-400 text-red-400" : "text-white"} />
                </button>
                <button onClick={(e) => e.stopPropagation()} className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <Download size={13} className="text-[#6c5ce7]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <div className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>
            <img src={preview.img.replace("w=400&h=300", "w=800&h=600")} alt={preview.title} className="w-full object-cover max-h-72" />
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-black text-foreground text-[16px]">{preview.title}</h3>
                  <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-2 py-0.5 rounded-full font-semibold">{preview.cat}</span>
                </div>
                <button onClick={() => setPreview(null)} className="text-muted-foreground hover:text-foreground text-xl font-bold">×</button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl flex items-center justify-center gap-2"><Download size={14} /> Download Free</button>
                <button onClick={() => toggleLike(preview.id)} className="w-10 h-10 border border-border rounded-xl flex items-center justify-center"><Heart size={16} className={liked.has(preview.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"} /></button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)" }}>
        <Sparkles size={32} className="text-[#a29bfe] mx-auto mb-3" />
        <h2 className="text-xl font-black text-white mb-2">Generate Your Own AI Image</h2>
        <p className="text-white/60 text-[13px] mb-5 max-w-sm mx-auto">Describe what you want and our AI will create a unique image just for you.</p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input placeholder="A beautiful sunset over the Padma River..." className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-2.5 text-[13px] outline-none focus:border-[#a29bfe] transition-colors" />
          <button className="px-4 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors flex-shrink-0">Generate</button>
        </div>
      </div>
    </div>
  );
}
