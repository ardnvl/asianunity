import {
  Gift,
  CalendarDays,
  Users,
  ShieldCheck,
  Swords,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Gift Codes",
    desc: "Instantly access the newest Whiteout Survival gift codes with one click.",
  },
  {
    icon: Users,
    title: "Alliance Members",
    desc: "Browse member information, ranks, activity, and leadership.",
  },
  {
    icon: Swords,
    title: "Foundry Planner",
    desc: "Prepare battle formations, assign legions, and coordinate strategies.",
  },
  {
    icon: CalendarDays,
    title: "Event Schedule",
    desc: "Keep track of Bear Hunt, Foundry Battle, Canyon Clash, and more.",
  },
  {
    icon: Bell,
    title: "Announcements",
    desc: "Receive the latest alliance news and important notices.",
  },
  {
    icon: ShieldCheck,
    title: "Alliance Guides",
    desc: "Helpful resources, tips, and guides for every alliance member.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 sm:text-sm">
            Alliance Portal
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            One place for alliance communication, planning,
            resources, and Whiteout Survival utilities.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-slate-900 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)] sm:p-7 lg:p-8"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-3 transition group-hover:bg-cyan-500/20 sm:p-4">
                  <Icon
                    className="text-cyan-400"
                    size={30}
                  />
                </div>

                <h3 className="text-xl font-bold sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}