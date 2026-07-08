import type { ReactNode } from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#13132b] text-white mt-2">
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#6c5ce7] rounded-lg flex items-center justify-center text-white font-black text-sm">অ</div>
                <span className="font-black text-white text-[15px]">AmarCanvas</span>
              </Link>
              <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                Bangladesh&apos;s largest free Bangla design template platform for personal and commercial use.
              </p>
              <div className="flex gap-1.5">
                {([<Facebook size={12} />, <Twitter size={12} />, <Instagram size={12} />, <Youtube size={12} />, <Linkedin size={12} />] as ReactNode[]).map((icon, i) => (
                  <button key={i} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6c5ce7] transition-colors">{icon}</button>
                ))}
              </div>
            </div>
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <h4 className="text-[12px] font-bold text-white mb-3">{col}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}><a href="#" className="text-[11px] text-gray-400 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:w-60 flex-shrink-0 rounded-2xl p-5 flex flex-col justify-between min-h-[200px]" style={{ background: "linear-gradient(145deg, #6c5ce7 0%, #a29bfe 100%)" }}>
            <div>
              <p className="text-2xl mb-2">🎨</p>
              <h3 className="text-white font-black text-[16px] leading-tight mb-1.5">Join as Creator</h3>
              <p className="text-white/75 text-[11px] leading-relaxed mb-4">Upload your designs and earn money. Join our growing community of Bangladeshi creators.</p>
              <ul className="space-y-1.5 mb-5">
                {["Free to join", "Earn per download", "Reach 500K+ users"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/90 text-[11px]">
                    <span className="w-4 h-4 bg-white/25 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/register" className="w-full py-2.5 bg-white text-[#6c5ce7] text-[12px] font-black rounded-xl hover:bg-gray-50 transition-colors shadow-md text-center block">Register Now →</Link>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">© 2026 AmarCanvas. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
