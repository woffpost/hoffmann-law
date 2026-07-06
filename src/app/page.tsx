"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Scale,
  MoveRight,
  Menu,
  X,
} from "lucide-react";

const practiceAreas = [
  { number: "01", title: "Corporate Law", description: "Business formation, M&A, contracts, and corporate governance." },
  { number: "02", title: "Employment Law", description: "Wrongful termination, discrimination, and labour disputes." },
  { number: "03", title: "Real Estate", description: "Property transactions, disputes, and due diligence." },
  { number: "04", title: "Family Law", description: "Divorce, custody, adoption, and family mediation." },
  { number: "05", title: "Criminal Defense", description: "Vigorous defence in criminal proceedings at all levels." },
  { number: "06", title: "Immigration", description: "Visas, residency, citizenship, and deportation defence." },
];

const results = [
  { stat: "€48M", label: "Recovered for clients in 2025" },
  { stat: "96%", label: "Success rate in corporate disputes" },
  { stat: "1,200+", label: "Cases successfully closed" },
  { stat: "25yr", label: "In practice across Germany" },
];

const team = [
  {
    name: "Dr. Klaus Hoffmann",
    role: "Senior Partner",
    focus: "Corporate & M&A",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Dr. Laura Müller",
    role: "Partner",
    focus: "Family & Employment",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
  },
  {
    name: "Andreas Schneider",
    role: "Associate",
    focus: "Criminal Defense",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
  },
];

const testimonials = [
  {
    quote: "Their corporate advice during our Series B was invaluable. They identified risks our previous counsel missed entirely.",
    name: "Heinrich B.",
    role: "CEO, FinTech startup",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    quote: "Dr. Müller handled my divorce with discretion and clarity. I always knew where I stood. That peace of mind was priceless.",
    name: "Claudia W.",
    role: "Private client",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    quote: "We resolved a complex employment dispute in six weeks. Fast, transparent, and effective. We use no other firm now.",
    name: "Marco D.",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];

export default function LawyerDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultDone, setConsultDone] = useState(false);
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cArea, setCArea] = useState("Corporate Law");
  const [cDesc, setCDesc] = useState("");

  function openConsult() { setConsultDone(false); setConsultOpen(true); }
  function submitConsult() { setConsultDone(true); }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Scale className="w-5 h-5 text-gray-900" />
            <span className="font-bold text-gray-900 tracking-tight">HOFFMANN <span className="font-light">& PARTNERS</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500 tracking-widest uppercase">
            <a href="#practice" className="hover:text-gray-900 transition-colors">Practice</a>
            <a href="#team" className="hover:text-gray-900 transition-colors">Team</a>
            <a href="#clients" className="hover:text-gray-900 transition-colors">Clients</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-xs text-gray-400">+49 89 987 654 32</span>
            <Button onClick={openConsult} className="bg-gray-900 hover:bg-gray-800 text-white text-xs px-5 h-8 tracking-wide uppercase hidden md:inline-flex">
              Consult Us
            </Button>
            <button className="md:hidden p-1 text-gray-900" onClick={() => setMobileOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-900">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="font-bold text-white tracking-tight">HOFFMANN & PARTNERS</span>
            <button onClick={() => setMobileOpen(false)} className="text-white"><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6 gap-0">
            {["Practice", "Team", "Clients", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold text-white py-4 border-b border-white/10 hover:text-gray-300 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <Button onClick={() => { setMobileOpen(false); openConsult(); }} className="w-full bg-white text-gray-900 font-bold h-12">Book Free Consultation</Button>
          </div>
        </div>
      )}

      {/* Hero — typography-first, no cards */}
      <section className="pt-24 min-h-screen grid lg:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-20 bg-white">
          <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-10">
            Established 1999 · Munich, Germany
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.0] tracking-tighter mb-8">
            Law that
            <br />
            protects
            <br />
            <span className="italic font-light text-gray-400">what matters.</span>
          </h1>
          <p className="text-gray-500 leading-relaxed max-w-md mb-10 text-base">
            Twenty-five years of rigorous legal counsel across Germany and the EU.
            We represent individuals, families, and businesses with the same absolute dedication.
          </p>
          <div className="flex items-center gap-4">
            <Button onClick={openConsult} size="lg" className="bg-gray-900 hover:bg-gray-800 text-white h-12 px-8 text-sm tracking-wide">
              Request Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="#practice" className="text-sm text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
              View practice areas <MoveRight className="w-4 h-4" />
            </a>
          </div>
          {/* Results strip */}
          <div className="grid grid-cols-2 gap-6 mt-16 pt-10 border-t border-gray-100">
            {results.map((r, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900 tracking-tight">{r.stat}</div>
                <div className="text-xs text-gray-400 mt-1 leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: full-height image */}
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=90"
            alt="Hoffmann & Partners"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/20" />
          {/* Overlay quote */}
          <div className="absolute bottom-12 left-8 right-8 bg-white/95 backdrop-blur-sm p-6">
            <p className="text-gray-700 text-sm italic leading-relaxed mb-3">
              "We don't just advise you on the law. We help you understand what it means for your life, your business, and your future."
            </p>
            <p className="text-xs font-semibold text-gray-900">Dr. Klaus Hoffmann · Senior Partner</p>
          </div>
        </div>
      </section>

      {/* Practice Areas — horizontal list, not cards */}
      <section id="practice" className="bg-gray-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-3">What We Do</p>
              <h2 className="text-4xl font-bold text-white leading-tight">Areas of Practice</h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Deep expertise across six core areas — each backed by decades of courtroom and advisory experience.
            </p>
          </div>
          <div className="divide-y divide-gray-800">
            {practiceAreas.map((area, i) => (
              <div
                key={i}
                className="group flex items-center gap-8 py-6 cursor-pointer hover:pl-4 transition-all duration-300"
              >
                <span className="text-xs text-gray-600 font-mono w-6 shrink-0">{area.number}</span>
                <h3 className="text-xl font-semibold text-white w-48 shrink-0 group-hover:text-gray-200">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 hidden md:block">{area.description}</p>
                <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — alternating layout */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">The Attorneys</p>
            <h2 className="text-4xl font-bold text-gray-900">Your legal team</h2>
          </div>
          <div className="space-y-0">
            {team.map((member, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 border-t border-gray-100 ${i % 2 === 1 ? "direction-rtl" : ""}`}
              >
                <div className={`relative h-72 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className={`flex flex-col justify-center p-10 lg:p-16 bg-gray-50 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">{member.role}</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">Specialising in <strong className="text-gray-900">{member.focus}</strong></p>
                  <button onClick={openConsult} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-4 transition-all">
                    Schedule a meeting <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — large quotes */}
      <section id="clients" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-3">Client Voices</p>
            <h2 className="text-4xl font-bold text-gray-900">What our clients say</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 lg:p-10">
                <p className="text-2xl font-light text-gray-700 leading-snug mb-8 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden grayscale">
                    <Image src={t.img} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — stark, typographic */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-6">Ready to Begin</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
            Let us handle
            <br />
            the complexity.
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Book a free 30-minute consultation with one of our senior attorneys. Confidential. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={openConsult} size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold h-12 px-8 text-sm">
              Book Free Consultation
            </Button>
            <Button size="lg" className="bg-gray-700 hover:bg-gray-600 text-white h-12 px-8 text-sm">
              <Phone className="mr-2 w-4 h-4" />
              +49 89 987 654 32
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-4 h-4 text-gray-900" />
              <span className="font-bold text-gray-900 text-sm tracking-tight">HOFFMANN & PARTNERS</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A full-service law firm trusted by individuals and businesses across Germany since 1999.
            </p>
          </div>
          {[
            { icon: <MapPin className="w-4 h-4" />, title: "Address", lines: ["Theatinerstraße 7", "80333 Munich, Germany"] },
            { icon: <Clock className="w-4 h-4" />, title: "Hours", lines: ["Mon–Fri: 9:00 – 18:00", "Emergency: 24 / 7"] },
            { icon: <Mail className="w-4 h-4" />, title: "Contact", lines: ["+49 89 987 654 32", "contact@hoffmann-law.de"] },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center gap-2 mb-2 text-gray-900">
                {item.icon}
                <span className="font-semibold text-sm">{item.title}</span>
              </div>
              {item.lines.map((line, j) => (
                <p key={j} className="text-gray-400 text-sm">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-600 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <span>© 2026 Hoffmann & Partners Rechtsanwälte. All rights reserved.</span>
          <span>Demo site — <a href="/" className="text-gray-400 hover:text-white transition-colors">built by Vladimir Rusacov</a></span>
        </div>
      </footer>

      {consultOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
            {consultDone ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request received</h3>
                <p className="text-gray-500 text-sm mb-6">A senior attorney will contact you within one business day to schedule your free 30-minute consultation.</p>
                <Button onClick={() => setConsultOpen(false)} className="w-full bg-gray-900 text-white h-11">Close</Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Request Consultation</h3>
                  <button onClick={() => setConsultOpen(false)} className="text-gray-400 hover:text-gray-900"><X className="w-5 h-5" /></button>
                </div>
                <p className="text-sm text-gray-500 mb-5">Free · 30 minutes · Confidential · No obligation</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-gray-400">Name</label>
                      <input value={cName} onChange={e => setCName(e.target.value)} placeholder="Full name" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none text-gray-900 placeholder-gray-300" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-gray-400">Phone</label>
                      <input value={cPhone} onChange={e => setCPhone(e.target.value)} placeholder="+49 ..." className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none text-gray-900 placeholder-gray-300" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-gray-400">Email</label>
                    <input type="email" value={cEmail} onChange={e => setCEmail(e.target.value)} placeholder="your@email.com" className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none text-gray-900 placeholder-gray-300" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-gray-400">Area of law</label>
                    <select value={cArea} onChange={e => setCArea(e.target.value)} className="w-full h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none text-gray-900">
                      {practiceAreas.map(a => <option key={a.title}>{a.title}</option>)}
                      <option>Other / Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5 text-gray-400">Brief description</label>
                    <textarea value={cDesc} onChange={e => setCDesc(e.target.value)} rows={3} placeholder="Briefly describe your situation..." className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none resize-none text-gray-900 placeholder-gray-300" />
                  </div>
                  <Button onClick={submitConsult} disabled={!cName || !cEmail} className="w-full bg-gray-900 text-white h-11 disabled:opacity-40">
                    Submit Request
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
