import {
  BookOpen,
  Flame,
  Shield,
  Sword,
  Crown,
  Users,
} from "lucide-react";



const guides = [
  {
    title: "Beginner Guide",
    category: "Starter",
    icon: BookOpen,
    description:
      "Learn the basics of Whiteout Survival, resource management, building priorities, and early progression.",
  },

  {
    title: "Hero Development",
    category: "Heroes",
    icon: Flame,
    description:
      "Learn how to upgrade heroes, manage shards, and build effective hero combinations.",
  },

  {
    title: "Chief Growth",
    category: "Progression",
    icon: Crown,
    description:
      "Understand chief gear, chief charms, research, and ways to increase your power efficiently.",
  },

  {
    title: "Battle Strategy",
    category: "Combat",
    icon: Sword,
    description:
      "Learn rally strategies, troop formations, and combat preparation for alliance battles.",
  },

  {
    title: "Defense Guide",
    category: "Protection",
    icon: Shield,
    description:
      "Improve your city defense, reinforcement timing, and defensive coordination.",
  },

  {
    title: "Alliance Guide",
    category: "Teamwork",
    icon: Users,
    description:
      "Learn alliance rules, event participation, communication, and teamwork standards.",
  },
];



export default function GuidesPage() {


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

          <BookOpen
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

          Alliance Guides

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          Resources, strategies, and knowledge
          to help every AsianUnity member grow.

        </p>


      </section>







      {/* GUIDE CARDS */}

      <section className="
        mx-auto
        mt-14
        grid
        max-w-6xl
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      ">


        {
          guides.map((guide)=>{


            const Icon = guide.icon;


            return (

              <div
                key={guide.title}
                className="
                cursor-pointer
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                p-7
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
                    rounded-2xl
                    bg-cyan-500/10
                    p-4
                  ">


                    <Icon
                      className="text-cyan-400"
                      size={28}
                    />


                  </div>




                  <span className="
                    rounded-full
                    bg-cyan-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-cyan-400
                  ">

                    {guide.category}

                  </span>


                </div>





                <h2 className="
                  mt-6
                  text-xl
                  font-black
                ">

                  {guide.title}

                </h2>




                <p className="
                  mt-3
                  leading-7
                  text-slate-400
                ">

                  {guide.description}

                </p>


              </div>

            );


          })
        }


      </section>







      {/* API READY */}

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

            Guide Database Ready

          </h2>



          <p className="
            mt-4
            leading-7
            text-slate-400
          ">

            Future integration can allow officers
            to create, edit, and publish alliance
            guides directly from an admin panel.

          </p>



        </div>


      </section>



    </main>

  );
}