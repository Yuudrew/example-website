"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Music, Wind, Calendar, ChevronRight, Info, Send } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export default function Home() {
  const sendInquiry = useMutation(api.inquiries.sendInquiry);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendInquiry(formState);
      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send inquiry:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#c5a059] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass-void">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full border border-[#c5a059]/50 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#c5a059]" />
          </div>
          <span className="text-xl font-bold tracking-widest uppercase">ZenPan</span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-mono text-[10px] tracking-[0.3em] uppercase opacity-60">
          <a href="#about" className="hover:text-[#c5a059] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#c5a059] transition-colors">Philosophy</a>
          <a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact</a>
        </div>
        <button className="px-6 py-2 border border-white/10 rounded-sm font-mono text-[10px] tracking-widest uppercase hover:bg-white/5 transition-colors">
          Reserve
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-handpan.png"
            alt="Zen Handpan Dojo"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div {...fadeIn} transition={{ duration: 0.8 }}>
            <div className="mono-label mb-4 underline decoration-[#c5a059]/30 underline-offset-8">Experience Silence</div>
            <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tighter mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              THE <br />RESONANCE
            </h1>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="slab p-8 md:p-12 mb-4"
          >
            <p className="text-lg md:text-xl text-white/70 leading-relaxed italic font-light mb-8">
              "In the vibration of the handpan, we find the stillness of the mountain. A journey into the frequency of being."
            </p>
            <div className="flex items-center gap-6">
              <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold transition-all hover:scale-105">
                JOIN A SESSION <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="font-mono text-[10px] tracking-widest opacity-40">TOKYO • KYOTO • HAKONE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: What is a Handpan Section */}
      <section id="about" className="relative py-32 px-8 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c5a059]/5 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeIn} className="relative aspect-square">
            <div className="absolute inset-0 border border-[#c5a059]/20 -rotate-3 scale-95" />
            <div className="absolute inset-0 slab flex items-center justify-center p-12">
              <Info className="absolute top-8 left-8 w-6 h-6 text-[#c5a059]/40" />
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full border border-white/10 mx-auto mb-8 flex items-center justify-center group-hover:border-[#c5a059]/40 transition-colors">
                  <div className="w-24 h-24 rounded-full border border-[#c5a059]/20 animate-pulse" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Vibrational Architecture</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs mx-auto">
                  A melodic percussion instrument crafted from nitrided steel, tuned to precise mathematical frequencies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="mono-label mb-6 text-[#c5a059]">01 / Origins</div>
            <h2 className="text-5xl font-bold mb-8 tracking-tighter">WHAT IS A <span className="text-white/40 italic">HANDPAN?</span></h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed font-light">
              <p>
                The handpan is a contemporary musical instrument born from the fusion of Caribbean steelpan and Indian ghatam. It is played with the hands, releasing a hauntingly beautiful, multidimensional sound that resonates deep within the body.
              </p>
              <p>
                Unlike traditional percussion, the handpan is a melodic void—a vessel where the space between notes is as important as the notes themselves. It is used worldwide for meditation, somatic healing, and architectural acoustic sessions.
              </p>
            </div>
            <div className="mt-12 flex gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-white tracking-widest">432Hz</span>
                <span className="mono-label text-[8px]">Standard frequency</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-white tracking-widest">PURE</span>
                <span className="mono-label text-[8px]">Spectral density</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Tectonic Blocks */}
      <section id="experience" className="relative py-32 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: Music, title: "Pure Tuning", desc: "432Hz sessions designed for somatic nervous system alignment." },
              { icon: Wind, title: "Breath Work", desc: "Rhythmic synchronization between movement and metal." },
              { icon: Compass, title: "Traditional Zen", desc: "Held in authentic dōjōs for deep architectural immersion." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="slab p-12 aspect-square flex flex-col justify-between group hover:border-[#c5a059]/20 transition-colors"
              >
                <div className="mono-label text-[#c5a059]/40 group-hover:text-[#c5a059]">P.0{i + 1}</div>
                <div>
                  <feature.icon className="w-8 h-8 mb-6 text-[#c5a059]/60" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Interlude */}
      <section className="py-24 border-y border-white/5 bg-stone-dark flex justify-center text-center px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] tracking-[0.5em] uppercase text-[#c5a059] mb-8">Structural Harmony</p>
          <h2 className="text-3xl md:text-4xl text-white/80 font-light leading-snug">
            Each note is a slab of silence, carved out of the noise of the modern world.
          </h2>
        </div>
      </section>

      {/* NEW: Inquiry Form & Schedule */}
      <section id="contact" className="py-32 bg-[#050505] px-8">
        <div className="max-w-5xl mx-auto slab grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/5">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter uppercase">Inquire <br />Within</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mono-label block mb-2 opacity-40">Your Name</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#c5a059]/40 transition-colors"
                  placeholder="Andrew Medina"
                />
              </div>
              <div>
                <label className="mono-label block mb-2 opacity-40">Email Address</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#c5a059]/40 transition-colors"
                  placeholder="andrew@example.com"
                />
              </div>
              <div>
                <label className="mono-label block mb-2 opacity-40">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#c5a059]/40 transition-colors resize-none"
                  placeholder="I'm interested in private sessions..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-4 font-bold flex items-center justify-center gap-3 hover:bg-[#c5a059] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : isSuccess ? "MESSAGE SENT" : "SEND INQUIRY"}
                {!isSubmitting && !isSuccess && <Send className="w-4 h-4" />}
                {isSuccess && <div className="w-2 h-2 rounded-full bg-green-500" />}
              </button>
            </form>
          </div>

          <div className="p-12 md:p-16 bg-white/5 flex flex-col justify-between">
            <div>
              <Calendar className="w-12 h-12 mb-8 text-[#c5a059]/40" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">Schedule</h3>
              <p className="text-sm text-white/40 mb-12">Our winter resonance classes in Hakone are now open for registration.</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-4">
                  <span className="opacity-40 uppercase">Kyoto Dojo</span>
                  <span className="text-[#c5a059]">FEB 12-15</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono border-b border-white/5 pb-4">
                  <span className="opacity-40 uppercase">Hakone Retreat</span>
                  <span className="text-[#c5a059]">FEB 24-28</span>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center md:text-left">
              <p className="mono-label mb-2">Next Cohort</p>
              <p className="text-lg text-white/60 italic">"The Space Between"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5 text-center px-8">
        <div className="mono-label mb-4">ZENPAN RESONANCE STUDIO</div>
        <p className="text-[10px] text-white/20 tracking-widest uppercase">© 2026 ZENPAN JAPAN • ESTABLISHED IN SILENCE</p>
      </footer>
    </div>
  );
}
