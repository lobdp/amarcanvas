'use client'

import { useState } from "react";
import Link from "next/link";
import { Heart, ArrowLeft, Trash2 } from "lucide-react";
import { aiImages } from "@/lib/data";

const initialFavorites = aiImages.slice(0, 6);

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites);

  function removeFavorite(id: string) {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground"><ArrowLeft size={18} /></Link>
          <div>
            <h1 className="text-2xl font-black text-foreground">My Favorites</h1>
            <p className="text-[13px] text-muted-foreground">{favorites.length} saved items</p>
          </div>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-24">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={28} className="text-muted-foreground" />
          </div>
          <h2 className="text-[17px] font-bold text-foreground mb-1">No favorites yet</h2>
          <p className="text-[13px] text-muted-foreground mb-5">Start saving your favorite templates and images</p>
          <Link href="/ai-images" className="inline-block px-5 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors">Browse Images</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favorites.map((item) => (
            <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-border">
              <div className="relative h-36 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <button onClick={() => removeFavorite(item.id)} className="absolute top-2 right-2 w-7 h-7 bg-background/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-muted">
                  <Trash2 size={12} className="text-red-500" />
                </button>
                <div className="absolute top-2 left-2">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-background/90 backdrop-blur text-card-foreground">{item.cat}</span>
                </div>
              </div>
              <div className="p-2.5">
                <p className="text-[12px] font-bold text-card-foreground truncate">{item.title}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground">{item.cat}</span>
                  <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-[#6c5ce7] transition-colors">
                    <Heart size={11} className="fill-red-400 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
