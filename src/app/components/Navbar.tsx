'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ChevronDown, ArrowRight, Menu, X, TrendingUp, Image, Sparkles, ArrowLeft, User, Heart, LogOut, Sun, Moon } from "lucide-react";
import { templatesMenu, categoriesMenu, aiImagesMenu } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between" ref={ref}>
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white font-black text-sm shadow-sm">অ</div>
          <span className="font-black text-foreground text-[15px] tracking-tight">AmarCanvas</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <div className="relative" onMouseEnter={() => setOpen("templates")} onMouseLeave={() => setOpen(null)}>
            <button
              className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${open === "templates" ? "bg-[#f0eeff] text-[#6c5ce7]" : "text-muted-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7]"}`}
            >
              Templates <ChevronDown size={13} className={`transition-transform ${open === "templates" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute top-full left-0 w-full h-2" />
            {open === "templates" && (
              <div className="absolute top-full left-0 mt-2 w-[480px] bg-card rounded-2xl shadow-xl border border-border p-4 grid grid-cols-3 gap-4 z-50">
                {templatesMenu.map((group) => (
                  <div key={group.heading}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{group.heading}</p>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link href={`/templates?cat=${encodeURIComponent(item.label)}`} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[12px] text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors group">
                            <span className="text-muted-foreground group-hover:text-[#6c5ce7]">{item.icon}</span>
                            {item.label}
                            {item.badge && <span className="ml-auto text-[9px] bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full font-bold">{item.badge}</span>}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="col-span-3 mt-1 pt-3 border-t border-border flex items-center justify-between">
                  <p className="text-[11px] text-muted-foreground">15,000+ free templates available</p>
                  <Link href="/templates" className="text-[11px] text-[#6c5ce7] font-semibold flex items-center gap-1">Browse all <ArrowRight size={11} /></Link>
                </div>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setOpen("categories")} onMouseLeave={() => setOpen(null)}>
            <button
              className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${open === "categories" ? "bg-[#f0eeff] text-[#6c5ce7]" : "text-muted-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7]"}`}
            >
              Categories <ChevronDown size={13} className={`transition-transform ${open === "categories" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute top-full left-0 w-full h-2" />
            {open === "categories" && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-card rounded-2xl shadow-xl border border-border p-3 z-50">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-2">All Categories</p>
                <ul className="space-y-0.5">
                  {categoriesMenu.map((cat) => (
                    <li key={cat.label}>
                      <Link href="/categories" className="flex items-center gap-2.5 px-2 py-2 rounded-xl text-[12px] text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors group">
                        <span className="w-6 h-6 bg-muted rounded-lg flex items-center justify-center text-muted-foreground group-hover:bg-[#6c5ce7] group-hover:text-white transition-colors">{cat.icon}</span>
                        <span className="flex-1 font-medium text-card-foreground group-hover:text-[#6c5ce7]">{cat.label}</span>
                        <span className="text-[10px] text-muted-foreground group-hover:text-[#6c5ce7]">{cat.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setOpen("ai")} onMouseLeave={() => setOpen(null)}>
            <button
              className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${open === "ai" ? "bg-[#f0eeff] text-[#6c5ce7]" : "text-muted-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7]"}`}
            >
              AI Images <span className="text-[8px] bg-[#6c5ce7] text-white px-1 py-0.5 rounded font-bold">NEW</span><ChevronDown size={13} className={`transition-transform ${open === "ai" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute top-full left-0 w-full h-2" />
            {open === "ai" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-card rounded-2xl shadow-xl border border-border p-3 z-50">
                <ul className="space-y-0.5">
                  {aiImagesMenu.map((item) => (
                    <li key={item.label}>
                      <Link href="/ai-images" className="flex items-center justify-between px-2 py-1.5 rounded-lg text-[12px] text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors">
                        {item.label}
                        {item.badge && <span className="text-[9px] bg-purple-100 text-[#6c5ce7] px-1.5 py-0.5 rounded-full font-bold">{item.badge}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/blog" className="px-3 py-2 text-[13px] font-medium text-muted-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] rounded-lg transition-colors">Blog</Link>
          <Link href="/pricing" className="px-3 py-2 text-[13px] font-medium text-muted-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] rounded-lg transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-1.5">
          <button onClick={toggle} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#f0eeff] text-muted-foreground hover:text-[#6c5ce7] transition-colors">
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button onClick={() => setSearchOpen(true)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#f0eeff] text-muted-foreground hover:text-[#6c5ce7]"><Search size={16} /></button>
          <div className="relative hidden sm:block" onMouseEnter={() => setUserMenuOpen(true)} onMouseLeave={() => setUserMenuOpen(false)}>
            <button className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#6c5ce7]/30 hover:ring-[#6c5ce7] transition-all">
              <img src="https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=40&h=40&fit=crop&auto=format" alt="User" className="w-full h-full object-cover" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-2" />
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-card rounded-2xl shadow-xl border border-border py-2 z-50">
                <Link href="/profile" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors">
                  <User size={15} /> Profile
                </Link>
                <Link href="/favorites" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors">
                  <Heart size={15} /> Favorite
                </Link>
                <div className="border-t border-border my-1" />
                <button className="flex items-center gap-2.5 w-full px-4 py-2.5 text-[13px] text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
                  <LogOut size={15} /> Logout
                </button>
              </div>
            )}
          </div>
          <Link href="/signin" className="ml-1 px-4 py-1.5 bg-[#6c5ce7] text-white text-[13px] font-semibold rounded-lg hover:bg-[#5a4bd1] transition-colors shadow-sm">Sign In</Link>
          <button className="md:hidden w-8 h-8 flex items-center justify-center text-muted-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-card/95 backdrop-blur-md">
          <div className="flex items-center gap-3 px-4 h-16 border-b border-border">
            <button onClick={() => { setSearchOpen(false); setQuery(""); }} className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground -ml-1">
              <ArrowLeft size={18} />
            </button>
            <div className="flex-1 flex items-center gap-3">
              <Search size={18} className="text-muted-foreground" />
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search templates, posters, banners..." className="flex-1 bg-transparent text-[16px] outline-none text-foreground placeholder-muted-foreground" />
            </div>
            {query && (
              <button onClick={() => setQuery("")} className="text-[13px] text-muted-foreground hover:text-foreground font-medium">Clear</button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto w-full px-4 py-6">
              {!query ? (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Popular searches</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Eid Poster", "Birthday Card", "Food Menu", "Fashion Flyer", "Wedding Invitation", "Business Card", "Instagram Story", "YouTube Thumbnail"].map((s) => (
                      <button key={s} onClick={() => setQuery(s)} className="px-4 py-2 bg-muted hover:bg-muted text-card-foreground text-[13px] font-medium rounded-xl border border-border transition-colors">{s}</button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { icon: <TrendingUp size={16} />, label: "Trending", desc: "Most popular templates" },
                      { icon: <Image size={16} />, label: "New Arrivals", desc: "Latest added designs" },
                      { icon: <Sparkles size={16} />, label: "AI Generated", desc: "AI-powered images" },
                    ].map((s) => (
                      <Link key={s.label} href="/templates" onClick={() => setSearchOpen(false)} className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-muted transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-card flex items-center justify-center text-[#6c5ce7]">{s.icon}</div>
                        <div><p className="text-[13px] font-bold text-foreground">{s.label}</p><p className="text-[11px] text-muted-foreground">{s.desc}</p></div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search size={40} className="mx-auto text-muted mb-3" />
                  <p className="text-muted-foreground text-[14px]">Showing results for &quot;{query}&quot;</p>
                  <Link href={`/templates?q=${encodeURIComponent(query)}`} onClick={() => setSearchOpen(false)} className="inline-block mt-4 px-5 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors">View all results</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {mobileOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setMobileOpen(false)} />}

      <div className={`fixed top-0 right-0 h-full w-72 bg-card z-50 shadow-2xl md:hidden transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-4 h-14 border-b border-border">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-7 h-7 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white font-black text-xs shadow-sm">অ</div>
            <span className="font-black text-foreground text-[14px]">AmarCanvas</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:bg-muted rounded-full"><X size={18} /></button>
        </div>
        <div className="px-4 py-4 space-y-1 overflow-y-auto h-[calc(100%-56px)]">
          {[
            { to: "/templates", label: "Templates" },
            { to: "/categories", label: "Categories" },
            { to: "/ai-images", label: "AI Images", badge: "NEW" },
            { to: "/blog", label: "Blog" },
            { to: "/pricing", label: "Pricing" },
            { to: "/profile", label: "Profile" },
            { to: "/favorites", label: "Favorites" },
          ].map((item) => (
            <Link key={item.to} href={item.to} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-3 py-3 rounded-xl text-[14px] font-medium text-card-foreground hover:bg-[#f0eeff] hover:text-[#6c5ce7] transition-colors">
              {item.label}
              {item.badge && <span className="text-[9px] bg-[#6c5ce7] text-white px-1.5 py-0.5 rounded font-bold">{item.badge}</span>}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
            <Link href="/signin" onClick={() => setMobileOpen(false)} className="w-full py-2.5 text-center bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl">Sign In</Link>
            <Link href="/register" onClick={() => setMobileOpen(false)} className="w-full py-2.5 text-center border border-[#6c5ce7] text-[#6c5ce7] text-[13px] font-bold rounded-xl">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
