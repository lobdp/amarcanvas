'use client'

import { useState } from "react";
import Link from "next/link";
import { Check, X, Zap, Star } from "lucide-react";
import { pricingPlans } from "@/lib/data";

const faqs = [
  { q: "Can I use templates for commercial projects?", a: "Yes! All templates on AmarCanvas — even free ones — come with a commercial use license. You can use them for clients, business materials, and sell your work." },
  { q: "Do I need to credit AmarCanvas?", a: "Free plan templates include a small watermark. Pro and Business plans remove it entirely. No credit attribution required on any paid plan." },
  { q: "Can I cancel my subscription anytime?", a: "Absolutely. You can cancel at any time with no questions asked. Your access continues until the end of your billing period." },
  { q: "Is there a free trial for Pro?", a: "Yes! Pro plan includes a 7-day free trial. No credit card required to start." },
  { q: "What payment methods are accepted?", a: "We accept bKash, Nagad, Rocket, Visa/Mastercard, and PayPal. All payments are secured via SSL encryption." },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-foreground mb-2">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground text-[14px] mb-5">Start free. Upgrade when you need more.</p>

        <div className="inline-flex items-center bg-muted rounded-xl p-1 gap-1">
          <button onClick={() => setBilling("monthly")} className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all ${billing === "monthly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>Monthly</button>
          <button onClick={() => setBilling("yearly")} className={`px-4 py-1.5 rounded-lg text-[13px] font-semibold transition-all flex items-center gap-1.5 ${billing === "yearly" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}>
            Yearly <span className="text-[10px] bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-1.5 py-0.5 rounded-full font-bold">Save 30%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {pricingPlans.map((plan) => {
          const price = billing === "yearly" && plan.price !== "₹0"
            ? `₹${Math.round(parseInt(plan.price.replace("₹", "")) * 0.7)}`
            : plan.price;
          return (
            <div key={plan.name} className={`relative rounded-2xl p-6 flex flex-col ${plan.popular ? "border-2 border-[#6c5ce7] shadow-xl shadow-[#6c5ce7]/10" : "bg-card border border-border"}`} style={plan.popular ? { background: "var(--color-card)" } : {}}>
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#6c5ce7] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1"><Star size={10} className="fill-white" /> Most Popular</span>
                </div>
              )}
              <div className="mb-5">
                <h2 className="text-[16px] font-black text-foreground mb-0.5">{plan.name}</h2>
                <p className="text-[11px] text-muted-foreground">{plan.desc}</p>
              </div>
              <div className="mb-5">
                <span className="text-[36px] font-black text-foreground">{price}</span>
                {plan.price !== "₹0" && <span className="text-[12px] text-muted-foreground ml-1">/{billing === "yearly" ? "mo, billed yearly" : "month"}</span>}
                {plan.price === "₹0" && <span className="text-[12px] text-muted-foreground ml-1">/ forever</span>}
              </div>
              <Link href="/register" className={`w-full py-2.5 rounded-xl text-[13px] font-black text-center mb-5 transition-all block ${plan.popular ? "bg-[#6c5ce7] text-white hover:bg-[#5a4bd1] shadow-md" : "border-2 border-border text-card-foreground hover:border-[#6c5ce7] hover:text-[#6c5ce7]"}`}>{plan.cta}</Link>
              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (<li key={f} className="flex items-start gap-2 text-[12px] text-card-foreground"><Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />{f}</li>))}
                {plan.missing.map((f) => (<li key={f} className="flex items-start gap-2 text-[12px] text-muted-foreground"><X size={14} className="text-muted-foreground mt-0.5 flex-shrink-0" />{f}</li>))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="bg-card rounded-2xl overflow-hidden border border-border mb-14">
        <div className="px-6 py-4 border-b border-border"><h2 className="text-[16px] font-black text-foreground">Full Feature Comparison</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-3 text-[12px] font-bold text-muted-foreground w-1/2">Feature</th>
                {pricingPlans.map((p) => (<th key={p.name} className={`px-4 py-3 text-[12px] font-black text-center ${p.popular ? "text-[#6c5ce7]" : "text-foreground"}`}>{p.name}</th>))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { label: "Templates", values: ["500+", "15,000+", "15,000+"] },
                { label: "HD Downloads", values: [false, true, true] },
                { label: "No Watermark", values: [false, true, true] },
                { label: "Commercial License", values: [false, true, true] },
                { label: "Daily Downloads", values: ["5/day", "Unlimited", "Unlimited"] },
                { label: "AI Images", values: ["10/mo", "100/mo", "Unlimited"] },
                { label: "Team Members", values: ["1", "1", "5"] },
                { label: "Priority Support", values: [false, true, true] },
                { label: "API Access", values: [false, false, true] },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-muted">
                  <td className="px-6 py-3 text-[12px] text-card-foreground font-medium">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      {typeof v === "boolean" ? v ? <Check size={14} className="text-green-500 mx-auto" /> : <X size={14} className="text-muted-foreground mx-auto" /> : <span className="text-[11px] font-semibold text-card-foreground">{v}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-[20px] font-black text-foreground mb-5 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                <span className="text-[13px] font-bold text-foreground">{faq.q}</span>
                <span className={`text-[#6c5ce7] font-black text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && <div className="px-5 pb-4 text-[12px] text-muted-foreground leading-relaxed border-t border-border pt-3">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #5b4de8 0%, #a29bfe 100%)" }}>
        <h2 className="text-xl font-black text-white mb-2">Start Creating for Free Today</h2>
        <p className="text-white/75 text-[13px] mb-5">No credit card required. 500+ free templates waiting for you.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/register" className="px-6 py-2.5 bg-white text-[#6c5ce7] text-[13px] font-black rounded-xl hover:bg-gray-50 transition-colors">Get Started Free</Link>
          <Link href="/templates" className="px-6 py-2.5 bg-white/20 text-white text-[13px] font-black rounded-xl hover:bg-white/30 transition-colors">Browse Templates</Link>
        </div>
      </div>
    </div>
  );
}
