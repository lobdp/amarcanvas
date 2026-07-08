'use client'

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Download, Heart, Share2, Eye, ArrowLeft, CheckCircle, Star, Layers, Smartphone, Printer, ChevronRight } from "lucide-react";
import { allTemplates } from "@/lib/data";

export default function TemplateDetail() {
  const { id } = useParams<{ id: string }>();
  const template = allTemplates.find((t) => t.id === id) || allTemplates[0];
  const related = allTemplates.filter((t) => t.id !== template.id && t.cat === template.cat).slice(0, 4);
  const [liked, setLiked] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [activeSize, setActiveSize] = useState("Instagram Post (1080×1080)");

  const sizes = ["Instagram Post (1080×1080)", "Facebook Post (1200×630)", "Story (1080×1920)", "A4 Print (2480×3508)"];

  function handleDownload() {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-6">
        <Link href="/" className="hover:text-[#6c5ce7]">Home</Link><ChevronRight size={12} />
        <Link href="/templates" className="hover:text-[#6c5ce7]">Templates</Link><ChevronRight size={12} />
        <span className="text-card-foreground font-medium truncate">{template.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden flex items-center justify-center mb-4" style={{ background: `linear-gradient(150deg, ${template.bg[0]} 0%, ${template.bg[1]} 100%)`, minHeight: 360 }}>
            <div className="text-center py-16 px-8">
              <p className="text-white font-black text-5xl leading-tight">{template.text}</p>
              <p className="text-white/50 text-sm mt-3">{template.title}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {template.tags.map((tag) => (<span key={tag} className="text-[11px] bg-muted text-muted-foreground px-2.5 py-1 rounded-full">#{tag}</span>))}
          </div>
        </div>

        <div className="lg:w-80 flex-shrink-0 space-y-4">
          <div className="bg-card rounded-2xl p-5 border border-border">
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-[10px] bg-[#f0eeff] text-[#6c5ce7] px-2 py-0.5 rounded-full font-semibold">{template.cat}</span>
                <h1 className="text-[18px] font-black text-foreground mt-1.5 leading-tight">{template.title}</h1>
              </div>
              <button onClick={() => setLiked(!liked)} className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${liked ? "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900" : "border-border hover:border-red-200"}`}>
                <Heart size={16} className={liked ? "fill-red-500 text-red-500" : "text-muted-foreground"} />
              </button>
            </div>
            <div className="flex items-center gap-4 text-[12px] text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Download size={12} />{template.dl} downloads</span>
              <span className="flex items-center gap-1"><Heart size={12} />{template.likes} likes</span>
              <span className="flex items-center gap-1"><Star size={12} />4.8</span>
            </div>
            <p className="text-[12px] font-bold text-card-foreground mb-2">Select Size</p>
            <div className="space-y-2 mb-4">
              {sizes.map((size) => (
                <button key={size} onClick={() => setActiveSize(size)} className={`w-full text-left px-3 py-2 rounded-xl text-[12px] border transition-all ${activeSize === size ? "border-[#6c5ce7] bg-[#f0eeff] text-[#6c5ce7] font-semibold" : "border-border text-muted-foreground hover:border-[#6c5ce7]"}`}>{size}</button>
              ))}
            </div>
            <button onClick={handleDownload} className={`w-full py-3 rounded-xl font-black text-[14px] transition-all flex items-center justify-center gap-2 ${downloaded ? "bg-green-500 text-white" : "bg-[#6c5ce7] text-white hover:bg-[#5a4bd1]"}`}>
              {downloaded ? <><CheckCircle size={16} /> Downloaded!</> : <><Download size={16} /> Free Download</>}
            </button>
            <button className="w-full mt-2 py-2.5 rounded-xl border border-border text-muted-foreground text-[13px] font-semibold hover:border-[#6c5ce7] hover:text-[#6c5ce7] transition-colors flex items-center justify-center gap-2">
              <Share2 size={14} /> Share
            </button>
          </div>

          <div className="bg-card rounded-2xl p-5 border border-border">
            <h3 className="text-[13px] font-bold text-foreground mb-3">Template Info</h3>
            <div className="space-y-2">
              {[
                { label: "Format", value: "PNG, SVG, PDF" },
                { label: "License", value: "Free Commercial Use" },
                { label: "Category", value: template.cat },
                { label: "Resolution", value: "300 DPI (Print Ready)" },
                { label: "Editable", value: "Yes (Canva, Figma)" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-[12px]">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="text-card-foreground font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f0eeff] rounded-2xl p-4">
            <h3 className="text-[12px] font-bold text-[#6c5ce7] mb-2">✦ What&apos;s included</h3>
            <ul className="space-y-1.5">
              {["Fully editable design", "Multiple size variants", "Free commercial license", "Print-ready quality", "Bangla font support"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[11px] text-[#5a4bd1]"><CheckCircle size={12} /> {f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-[17px] font-bold text-foreground mb-4">Related Templates</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((t) => (
              <Link key={t.id} href={`/templates/${t.id}`} className="rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md transition-all group">
                <div className="h-28 flex items-center justify-center" style={{ background: `linear-gradient(150deg, ${t.bg[0]} 0%, ${t.bg[1]} 100%)` }}>
                  <p className="text-white/80 font-black text-sm text-center px-3">{t.text}</p>
                </div>
                <div className="px-2.5 py-2">
                  <p className="text-[11px] font-semibold text-card-foreground truncate group-hover:text-[#6c5ce7] transition-colors">{t.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
