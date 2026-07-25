import {
  CalendarDays,
  Swords,
  Trophy,
  Clock,
  ShieldCheck,
} from "lucide-react";



const events = [
  {
    title: "Bear Hunt",
    type: "Alliance Event",
    schedule: "Coming Soon",
    description:
      "Coordinate rallies, damage rankings, and member participation.",
    icon: Trophy,
  },

  {
    title: "Foundry Battle",
    type: "Battle Event",
    schedule: "Coming Soon",
    description:
      "Prepare Legion 1 and Legion 2 matchups before battle.",
    icon: Swords,
  },

  {
    title: "Canyon Clash",
    type: "Competitive Event",
    schedule: "Coming Soon",
    description:
      "Organize teams and battle strategies for victory.",
    icon: ShieldCheck,
  },

  {
    title: "Crazy Joe",
    type: "Alliance Activity",
    schedule: "Coming Soon",
    description:
      "Coordinate defenses and maximize alliance rewards.",
    icon: Clock,
  },
];



export default function EventsPage() {


  return (

    <main className="
      min-h-screen
      bg-slate-950
      px-6
      py-20
      text-white
    ">


      {/* HEADER */}

      <section className="
        mx-auto
        max-w-5xl
        text-center
      ">


        <div className="
          mx-auto
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
        ">

          <CalendarDays
            className="text-cyan-400"
            size={32}
          />

        </div>



        <h1 className="
          mt-6
          text-4xl
          font-black
          sm:text-5xl
        ">

          Alliance Events

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          Track important Whiteout Survival events
          and alliance activities.

        </p>


      </section>







      {/* EVENTS */}

      <section className="
        mx-auto
        mt-14
        grid
        max-w-6xl
        gap-6
        md:grid-cols-2
      ">


        {
          events.map((event)=>{


            const Icon = event.icon;


            return (

              <div
                key={event.title}
                className="
                cursor-pointer
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                p-8
                transition
                hover:-translate-y-2
                hover:border-cyan-500
                "
              >


                <div className="
                  flex
                  items-center
                  justify-between
                ">


                  <div className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                  ">


                    <Icon
                      className="text-cyan-400"
                      size={28}
                    />


                  </div>



                  <span className="
                    rounded-full
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-cyan-400
                  ">

                    {event.type}

                  </span>


                </div>





                <h2 className="
                  mt-6
                  text-2xl
                  font-black
                ">

                  {event.title}

                </h2>




                <p className="
                  mt-3
                  leading-7
                  text-slate-400
                ">

                  {event.description}

                </p>





                <div className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-slate-300
                ">

                  <CalendarDays
                    size={18}
                    className="text-cyan-400"
                  />

                  {event.schedule}

                </div>



              </div>

            );


          })
        }


      </section>







      {/* API SECTION */}

      <section className="
        mx-auto
        mt-16
        max-w-6xl
      ">


        <div className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-8
        ">


          <h2 className="
            text-2xl
            font-black
          ">

            Event Calendar API Ready

          </h2>



          <p className="
            mt-4
            leading-7
            text-slate-400
          ">

            Future updates can automatically sync
            alliance schedules, event timers,
            reminders, and participation tracking.

          </p>



        </div>


      </section>



    </main>

  );
}