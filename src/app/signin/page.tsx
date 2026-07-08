'use client'

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields."); return; }
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
          <h1 className="text-[22px] font-black text-foreground mb-1">Welcome back</h1>
          <p className="text-muted-foreground text-[13px]">Sign in to your account</p>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <div className="space-y-2 mb-5">
            <button className="w-full flex items-center justify-center gap-2.5 py-2.5 border border-border rounded-xl text-[13px] font-semibold text-card-foreground hover:bg-muted transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" /> Continue with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2.5 py-2.5 border border-border rounded-xl text-[13px] font-semibold text-card-foreground hover:bg-muted transition-colors">
              <div className="w-4 h-4 bg-[#1877f2] rounded flex items-center justify-center text-white text-[9px] font-black">f</div> Continue with Facebook
            </button>
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] text-muted-foreground font-medium">or sign in with email</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {error && <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 text-red-600 text-[12px] px-3 py-2 rounded-xl">{error}</div>}
            <div>
              <label className="text-[12px] font-bold text-card-foreground mb-1 block">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border border-border rounded-xl px-3.5 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-[12px] font-bold text-card-foreground">Password</label>
                <a href="#" className="text-[11px] text-[#6c5ce7] hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full border border-border rounded-xl px-3.5 py-2.5 pr-10 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full py-2.5 bg-[#6c5ce7] text-white text-[13px] font-black rounded-xl hover:bg-[#5a4bd1] transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mt-1">
              {loading && <Loader2 size={14} className="animate-spin" />}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-[12px] text-muted-foreground mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-[#6c5ce7] font-bold hover:underline">Create one free</Link>
        </p>
      </div>
    </div>
  );
}
