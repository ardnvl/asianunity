import Link from "next/link";
import {
  Crown,
  MessageCircle,
  ShieldCheck,
  Users,
  Swords,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function RecruitmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            Recruitment
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Join{" "}
            <span className="text-cyan-400">
              [ASU] AsianUnity
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            AsianUnity is an active Whiteout Survival alliance focused on
            teamwork, strategy, and long-term growth. We welcome dedicated
            players looking for a supportive and competitive community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="https://discord.com/users/751775238836060260"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <MessageCircle size={20} />
              Contact Our R5
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-xl border border-slate-700 px-7 py-4 text-slate-200 transition hover:border-cyan-500"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3">

        {/* Left */}

        <div className="space-y-8 lg:col-span-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-cyan-400" />

              <h2 className="text-3xl font-bold">
                Recruitment Status
              </h2>

            </div>

            <div className="mt-8 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-400">
              OPEN FOR RECRUITMENT
            </div>

            <p className="mt-6 text-slate-400">
              We are currently accepting active players who enjoy alliance
              events, teamwork, and helping fellow members grow.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="flex items-center gap-3">

              <Users className="text-cyan-400" />

              <h2 className="text-3xl font-bold">
                Recruitment Requirements
              </h2>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Daily Activity
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Participate in Alliance Events
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Foundry Battle Participation
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Respect All Members
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Team-Oriented Mindset
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                Willing to Learn and Improve
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-8">

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">

            <div className="flex items-center gap-3">

              <Crown className="text-yellow-400" />

              <h3 className="text-2xl font-bold">
                Alliance Overview
              </h3>

            </div>

            <div className="mt-8 space-y-6">

              <div className="flex justify-between">
                <span className="text-slate-400">Alliance</span>
                <span>[ASU] AsianUnity</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">State</span>
                <span>4478</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Language</span>
                <span>English / Filipino / Indonesia</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Recruitment</span>
                <span className="text-emerald-400">OPEN</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Focus</span>
                <span>Competitive</span>
              </div>

            </div>

          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

            <div className="flex items-center gap-3">

              <Activity className="text-cyan-400" />

              <h3 className="text-2xl font-bold">
                Contact Recruitment
              </h3>

            </div>

            <p className="mt-6 text-slate-400">
              Interested in joining AsianUnity?
              Reach out directly to our R5 on Discord.
            </p>

            <Link
              href="https://discord.com/users/751775238836060260"
              target="_blank"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <MessageCircle size={20} />
              Contact Our R5
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}