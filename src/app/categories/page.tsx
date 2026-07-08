'use client'

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { allCategories } from "@/lib/data";

export default function Categories() {
  const [query, setQuery] = useState("");
  const filtered = allCategories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-foreground mb-1">Browse Categories</h1>
          <p className="text-muted-foreground text-[13px]">{allCategories.length} categories · 15,000+ templates</p>
        </div>
        <div className="flex items-center bg-card border border-border rounded-xl px-3.5 py-2.5 gap-2 w-full sm:w-64 focus-within:border-[#6c5ce7] transition-all">
          <Search size={15} className="text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search categories..." className="flex-1 bg-transparent text-[13px] outline-none text-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filtered.map((cat) => (
          <Link key={cat.name} href={`/templates?cat=${encodeURIComponent(cat.name)}`} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" style={{ background: cat.bg }}>{cat.emoji}</div>
            <div className="text-center">
              <p className="text-[12px] font-bold text-card-foreground group-hover:text-[#6c5ce7] transition-colors leading-tight">{cat.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{cat.count}</p>
            </div>
            <span className="px-2.5 py-0.5 text-[9px] font-bold rounded-full text-white" style={{ background: cat.color }}>Browse →</span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-muted-foreground text-[14px]">No categories found for &quot;{query}&quot;</p>
        </div>
      )}

      <div className="mt-10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6" style={{ background: "linear-gradient(135deg, #5b4de8 0%, #a29bfe 100%)" }}>
        <div className="flex-1">
          <h2 className="text-xl font-black text-white mb-1">Can&apos;t find what you need?</h2>
          <p className="text-white/75 text-[13px]">Request a custom template and our designers will create it for you.</p>
        </div>
        <Link href="/register" className="px-5 py-2.5 bg-white text-[#6c5ce7] font-black text-[13px] rounded-xl hover:bg-gray-50 transition-colors flex-shrink-0">Request Template</Link>
      </div>
    </div>
  );
}
