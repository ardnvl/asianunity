import { Shield, Users, Trophy } from "lucide-react";

export default function AllianceManifesto() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 sm:py-24 lg:py-28">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
            [ASU] AsianUnity
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Forged in Unity.
            <br />

            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Driven by Victory.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mt-8 lg:leading-9">
            AsianUnity is more than an alliance—it is a community built on
            trust, discipline, and teamwork. Every member contributes to our
            strength, every battle shapes our future, and every victory is
            shared by all.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 lg:mt-20">

          {/* UNITY */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-900/80 sm:p-7 lg:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 sm:h-16 sm:w-16">
              <Shield
                className="text-cyan-400"
                size={28}
              />
            </div>

            <h3 className="mt-5 text-xl font-bold sm:text-2xl">
              Unity
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
              We stand together through every challenge, supporting one another
              as a single alliance.
            </p>

          </div>

          {/* COMMUNITY */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-900/80 sm:p-7 lg:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 sm:h-16 sm:w-16">
              <Users
                className="text-cyan-400"
                size={28}
              />
            </div>

            <h3 className="mt-5 text-xl font-bold sm:text-2xl">
              Community
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
              Respect, teamwork, and communication are the foundation of our
              success.
            </p>

          </div>

          {/* VICTORY */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-900/80 sm:p-7 lg:p-8">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 sm:h-16 sm:w-16">
              <Trophy
                className="text-cyan-400"
                size={28}
              />
            </div>

            <h3 className="mt-5 text-xl font-bold sm:text-2xl">
              Victory
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base">
              Through preparation, determination, and teamwork, we strive to
              achieve victory in every battle we face.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}