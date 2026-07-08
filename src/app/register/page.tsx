'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, Check } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const [step, setStep]           = useState(1);
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [role, setRole]           = useState<"user" | "creator">("user");
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const strength = password.length > 0
    ? password.length < 6 ? "weak" : password.length < 10 ? "medium" : "strong"
    : "";

  function handleStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) { setError("Please fill in all fields."); return; }
    setError(""); setStep(2);
  }

  function handleStep2(e: React.FormEvent) {
    e.preventDefault();
    if (!password || password.length < 6) { setError("Password must be at least 6 characters."); return; }
    setError(""); setLoading(true);
    setTimeout(() => { setLoading(false); router.push("/"); }, 1500);
  }

  return (
    <div className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4 py-12 bg-muted/30">
      <div className="w-full max-w-sm">
        <div className="text-center mb-7">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#6c5ce7] rounded-xl flex items-center justify-center text-white font-black text-base shadow">অ</div>
            <span className="font-black text-foreground text-xl">AmarCanvas</span>
          </Link>
          <h1 className="text-[22px] font-black text-foreground mb-1">Create your account</h1>
          <p className="text-muted-foreground text-[13px]">Join 500K+ creators — it&apos;s free</p>
        </div>

        <div className="flex items-center gap-2 mb-5 justify-center">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all ${step > s ? "bg-green-500 text-white" : step === s ? "bg-[#6c5ce7] text-white" : "bg-muted text-muted-foreground"}`}>
                {step > s ? <Check size={12} /> : s}
              </div>
              {s < 2 && <div className={`h-px w-10 transition-all ${step > 1 ? "bg-[#6c5ce7]" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          {step === 1 ? (
            <>
              <div className="space-y-2 mb-5">
                <button className="w-full flex items-center justify-center gap-2.5 py-2.5 border border-border rounded-xl text-[13px] font-semibold text-card-foreground hover:bg-muted transition-colors">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" /> Sign up with Google
                </button>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[11px] text-muted-foreground">or with email</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <form onSubmit={handleStep1} className="space-y-3">
                {error && <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 text-red-600 text-[12px] px-3 py-2 rounded-xl">{error}</div>}
                <div>
                  <label className="text-[12px] font-bold text-card-foreground mb-1 block">Full Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full border border-border rounded-xl px-3.5 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-card-foreground mb-1 block">Email address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border border-border rounded-xl px-3.5 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-card-foreground mb-2 block">I want to</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { v: "user" as const, label: "Download Templates", emoji: "📥" },
                      { v: "creator" as const, label: "Upload & Earn", emoji: "🎨" },
                    ].map((opt) => (
                      <button key={opt.v} type="button" onClick={() => setRole(opt.v)} className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 text-center transition-all ${role === opt.v ? "border-[#6c5ce7] bg-[#f0eeff]" : "border-border hover:border-[#6c5ce7]"}`}>
                        <span className="text-xl">{opt.emoji}</span>
                        <span className={`text-[10px] font-bold ${role === opt.v ? "text-[#6c5ce7]" : "text-muted-foreground"}`}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full py-2.5 bg-[#6c5ce7] text-white text-[13px] font-black rounded-xl hover:bg-[#5a4bd1] transition-colors mt-1">Continue →</button>
              </form>
            </>
          ) : (
            <form onSubmit={handleStep2} className="space-y-3">
              {error && <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 text-red-600 text-[12px] px-3 py-2 rounded-xl">{error}</div>}
              <div className="bg-[#f0eeff] rounded-xl p-3 flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-[#6c5ce7] rounded-full flex items-center justify-center text-white font-black text-xs">{name[0]?.toUpperCase()}</div>
                <div>
                  <p className="text-[12px] font-bold text-gray-900">{name}</p>
                  <p className="text-[10px] text-gray-500">{email}</p>
                </div>
                <button type="button" onClick={() => setStep(1)} className="ml-auto text-[10px] text-[#6c5ce7] font-bold">Edit</button>
              </div>
              <div>
                <label className="text-[12px] font-bold text-card-foreground mb-1 block">Create Password</label>
                <div className="relative">
                  <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" className="w-full border border-border rounded-xl px-3.5 py-2.5 pr-10 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPass ? <EyeOff size={15} /> : <Eye size={15} />}</button>
                </div>
                {strength && (
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 h-1 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${strength === "weak" ? "w-1/3 bg-red-400" : strength === "medium" ? "w-2/3 bg-yellow-400" : "w-full bg-green-400"}`} />
                    </div>
                    <span className={`text-[10px] font-semibold ${strength === "weak" ? "text-red-400" : strength === "medium" ? "text-yellow-500" : "text-green-500"}`}>{strength}</span>
                  </div>
                )}
              </div>
              <p className="text-[10px] text-muted-foreground">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-[#6c5ce7] hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-[#6c5ce7] hover:underline">Privacy Policy</a>.
              </p>
              <button type="submit" disabled={loading} className="w-full py-2.5 bg-[#6c5ce7] text-white text-[13px] font-black rounded-xl hover:bg-[#5a4bd1] transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                {loading && <Loader2 size={14} className="animate-spin" />}
                {loading ? "Creating account..." : "Create Free Account"}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-[12px] text-muted-foreground mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#6c5ce7] font-bold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
