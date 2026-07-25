"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Crown,
  ShieldCheck,
  Users,
  Swords,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid min-h-[90vh] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm">
              <ShieldCheck size={16} />
              Whiteout Survival Alliance
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:mt-8 lg:text-7xl">
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                [ASU] AsianUnity
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              A competitive and community-driven alliance built on teamwork,
              strategy, and mutual growth. Join fellow survivors as we conquer
              every challenge together.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/recruitment"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-400 sm:w-auto"
              >
                <Crown size={18} />
                Contact Our R5
              </Link>

             <Link
  href="/recruitment"
  className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 px-6 py-4 transition hover:border-cyan-500 hover:bg-slate-900 sm:w-auto"
>
  Join Us
  <ArrowRight size={18} />
</Link>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur sm:p-8">

              <h2 className="text-xl font-bold sm:text-2xl">
                Alliance Overview
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-cyan-400" size={20} />
                    <span>State</span>
                  </div>

                  <span className="font-bold">
                   4478
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-3">
                    <Swords className="text-cyan-400" size={20} />
                    <span>Alliance Focus</span>
                  </div>

                  <span className="font-bold">
                    Competitive
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-cyan-400" size={20} />
                    <span>Recruitment</span>
                  </div>

                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 sm:text-sm">
                    OPEN
                  </span>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">

                  <div className="text-sm text-slate-400">
                    Primary Language
                  </div>

                  <div className="mt-2 break-words font-semibold">
                    English / Filipino / Indonesian
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}