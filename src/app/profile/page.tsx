'use client'

import { useState } from "react";
import Link from "next/link";
import { Camera, Lock, Trash2, AlertTriangle, Eye, EyeOff, Check, X, ArrowLeft } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [saved, setSaved] = useState(false);
  const [passSaved, setPassSaved] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [avatar, setAvatar] = useState("https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=120&h=120&fit=crop&auto=format");

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handlePassChange(e: React.FormEvent) {
    e.preventDefault();
    if (newPass !== confirmPass) return;
    setPassSaved(true);
    setCurrentPass(""); setNewPass(""); setConfirmPass("");
    setTimeout(() => setPassSaved(false), 2000);
  }

  function handleDelete() {
    setShowDelete(false);
  }

  function handleAvatarUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setAvatar(URL.createObjectURL(file));
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-muted text-muted-foreground"><ArrowLeft size={18} /></Link>
        <h1 className="text-2xl font-black text-foreground">My Profile</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-[15px] font-bold text-foreground mb-5">Personal Information</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-[#6c5ce7]/20">
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                  <label className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera size={22} className="text-white" />
                    <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                  </label>
                </div>
                <span className="text-[11px] text-muted-foreground">Click to upload photo</span>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <label className="text-[12px] font-bold text-card-foreground mb-1 block">Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-card-foreground mb-1 block">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-border rounded-xl px-4 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                </div>
                <button onClick={handleSave} className="px-6 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors shadow-sm flex items-center gap-2">
                  {saved ? <><Check size={15} /> Saved</> : "Save Changes"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-[15px] font-bold text-foreground mb-5 flex items-center gap-2"><Lock size={16} /> Change Password</h2>
            <form onSubmit={handlePassChange} className="space-y-4 max-w-md">
              <div>
                <label className="text-[12px] font-bold text-card-foreground mb-1 block">Current Password</label>
                <input type="password" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)} placeholder="Enter current password" className="w-full border border-border rounded-xl px-4 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
              </div>
              <div className="relative">
                <label className="text-[12px] font-bold text-card-foreground mb-1 block">New Password</label>
                <input type={showPass ? "text" : "password"} value={newPass} onChange={(e) => setNewPass(e.target.value)} placeholder="Enter new password" className="w-full border border-border rounded-xl px-4 py-2.5 pr-10 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-[38px] text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <div>
                <label className="text-[12px] font-bold text-card-foreground mb-1 block">Confirm New Password</label>
                <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="Confirm new password" className="w-full border border-border rounded-xl px-4 py-2.5 text-[13px] outline-none bg-transparent text-foreground focus:border-[#6c5ce7] focus:ring-2 focus:ring-[#6c5ce7]/10 transition-all" />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="px-6 py-2.5 bg-[#6c5ce7] text-white text-[13px] font-bold rounded-xl hover:bg-[#5a4bd1] transition-colors shadow-sm flex items-center gap-2">
                  {passSaved ? <><Check size={15} /> Updated</> : "Update Password"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h2 className="text-[15px] font-bold text-foreground mb-4">Account Overview</h2>
            <div className="space-y-3">
              {[
                { label: "Member Since", value: "Jan 2026" },
                { label: "Downloads", value: "47" },
                { label: "Favorites", value: "12" },
                { label: "Plan", value: "Free" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-1.5">
                  <span className="text-[12px] text-muted-foreground">{item.label}</span>
                  <span className="text-[12px] font-bold text-card-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-sm border border-red-200 dark:border-red-900">
            <h2 className="text-[15px] font-bold text-red-600 mb-3 flex items-center gap-2"><Trash2 size={16} /> Delete Account</h2>
            <p className="text-[12px] text-muted-foreground mb-4 leading-relaxed">Permanently delete your account and all associated data. This action cannot be undone.</p>
            <button onClick={() => setShowDelete(true)} className="w-full py-2.5 bg-red-50 dark:bg-red-950 text-red-600 text-[13px] font-bold rounded-xl hover:bg-red-100 dark:hover:bg-red-900 transition-colors border border-red-200 dark:border-red-900">Delete My Account</button>
          </div>
        </div>
      </div>

      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/40" onClick={() => setShowDelete(false)} />
          <div className="relative bg-card rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-950 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle size={24} className="text-red-500" />
            </div>
            <h3 className="text-[17px] font-black text-foreground text-center mb-2">Delete Account?</h3>
            <p className="text-[13px] text-muted-foreground text-center mb-5 leading-relaxed">This will permanently delete your account, favorites, and downloads. This cannot be undone.</p>
            <div className="flex gap-2">
              <button onClick={() => setShowDelete(false)} className="flex-1 py-2.5 border border-border text-card-foreground text-[13px] font-bold rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-1.5"><X size={15} /> Cancel</button>
              <button onClick={handleDelete} className="flex-1 py-2.5 bg-red-600 text-white text-[13px] font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5"><Trash2 size={15} /> Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
