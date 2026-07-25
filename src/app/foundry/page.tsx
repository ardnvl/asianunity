import {
  Swords,
  Users,
  Target,
  Shield,
} from "lucide-react";


const legions = [
  {
    name: "Legion 1",
    matchup: "Matchup 1",
    commander: "Coming Soon",
    status: "Preparing",
  },

  {
    name: "Legion 2",
    matchup: "Matchup 2",
    commander: "Coming Soon",
    status: "Preparing",
  },
];


const features = [
  {
    icon: Users,
    title: "Member Assignment",
    description:
      "Assign alliance members to each Foundry matchup.",
  },

  {
    icon: Target,
    title: "Battle Planning",
    description:
      "Prepare strategies and coordinate players before battle.",
  },

  {
    icon: Shield,
    title: "Team Organization",
    description:
      "Keep Legion 1 and Legion 2 information organized.",
  },
];



export default function FoundryPage() {


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

          <Swords
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

          Foundry Battle Planner

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          Organize Legion matchups and prepare your alliance
          for Foundry Battle.

        </p>


      </section>





      {/* LEGION MATCHUPS */}

      <section className="
        mx-auto
        mt-14
        max-w-6xl
      ">


        <h2 className="
          text-3xl
          font-black
        ">

          Foundry Matchups

        </h2>



        <div className="
          mt-6
          grid
          gap-6
          md:grid-cols-2
        ">


          {
            legions.map((legion)=>(


              <div
                key={legion.name}
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
                  gap-3
                ">


                  <Swords
                    className="text-cyan-400"
                    size={28}
                  />


                  <h3 className="
                    text-2xl
                    font-bold
                  ">

                    {legion.name}

                  </h3>


                </div>




                <div className="
                  mt-6
                  space-y-4
                ">


                  <div className="
                    flex
                    justify-between
                    border-b
                    border-slate-800
                    pb-3
                  ">

                    <span className="text-slate-400">
                      Matchup
                    </span>

                    <span className="font-semibold">
                      {legion.matchup}
                    </span>

                  </div>



                  <div className="
                    flex
                    justify-between
                    border-b
                    border-slate-800
                    pb-3
                  ">

                    <span className="text-slate-400">
                      Commander
                    </span>

                    <span className="
                      font-semibold
                      text-cyan-400
                    ">
                      {legion.commander}
                    </span>

                  </div>



                  <div className="
                    flex
                    justify-between
                  ">

                    <span className="text-slate-400">
                      Status
                    </span>

                    <span className="font-semibold">
                      {legion.status}
                    </span>

                  </div>


                </div>


              </div>


            ))
          }


        </div>


      </section>






      {/* PLANNER FEATURES */}

      <section className="
        mx-auto
        mt-16
        max-w-6xl
      ">


        <div className="
          grid
          gap-6
          md:grid-cols-3
        ">


          {
            features.map((item)=>{


              const Icon = item.icon;


              return (

                <div
                  key={item.title}
                  className="
                  cursor-pointer
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900/60
                  p-7
                  transition
                  hover:border-cyan-500
                  "
                >


                  <Icon
                    className="text-cyan-400"
                    size={32}
                  />



                  <h3 className="
                    mt-5
                    text-xl
                    font-bold
                  ">

                    {item.title}

                  </h3>



                  <p className="
                    mt-3
                    leading-7
                    text-slate-400
                  ">

                    {item.description}

                  </p>


                </div>

              );


            })
          }


        </div>


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

            Foundry API Ready

          </h2>



          <p className="
            mt-4
            leading-7
            text-slate-400
          ">

            Future integration can allow R5/R4
            to assign commanders, manage matchups,
            and save Foundry battle information.

          </p>



        </div>


      </section>



    </main>

  );
}