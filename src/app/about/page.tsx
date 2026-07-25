"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Trophy,
  Swords,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-slate-950">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 sm:text-sm">
            <ShieldCheck size={16} />
            About [ASU] AsianUnity
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Built Together.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Stronger Together.
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            [ASU] AsianUnity is a Whiteout Survival alliance focused on
            teamwork, coordination, and continuous improvement. We believe
            that every member plays an important role in building a stronger
            and more competitive alliance.
          </p>

        </motion.div>


        {/* Mission Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Users className="text-cyan-400" size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Community
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              A place where members cooperate, communicate, and support each
              other both inside and outside battles.
            </p>

          </div>


          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Swords className="text-cyan-400" size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Strategy
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              We focus on planning, coordination, and preparation to perform
              better in alliance events and competitions.
            </p>

          </div>


          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Trophy className="text-cyan-400" size={30} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              Growth
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              We aim to help every survivor improve through knowledge,
              teamwork, and shared experience.
            </p>

          </div>

        </div>


        {/* Portal Section */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10">

          <h2 className="text-2xl font-bold sm:text-3xl">
            About the Alliance Portal
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            The AsianUnity Portal is a dedicated platform designed to improve
            alliance management and communication. Powered by{" "}
            
            <a
              href="https://woscontrol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              woscontrol.com
            </a>
            , the portal provides useful tools for members including
            announcements, event tracking, guides, gift codes, and alliance
            resources.
          </p>

        </div>


        {/* Disclaimer */}
        <p className="mt-10 text-center text-sm text-slate-500">
          [ASU] AsianUnity is an independent Whiteout Survival alliance and is
          not affiliated with Century Games.
        </p>

      </div>

    </main>
  );
}