import {
  Crown,
  Shield,
  Sword,
  Users,
} from "lucide-react";



const members = [
  {
    name: "Commander",
    role: "R5",
    power: "Coming Soon",
    status: "Leader",
  },

  {
    name: "Officer",
    role: "R4",
    power: "Coming Soon",
    status: "Officer",
  },

  {
    name: "Member",
    role: "R3",
    power: "Coming Soon",
    status: "Active",
  },

  {
    name: "Recruit",
    role: "R1",
    power: "Coming Soon",
    status: "New Member",
  },
];




const roleIcon = {
  R5: Crown,
  R4: Shield,
  R3: Sword,
  R1: Users,
};




export default function MembersPage() {


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


        <span className="
          inline-flex
          rounded-full
          border
          border-cyan-500/30
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-cyan-400
        ">

          Alliance Database

        </span>



        <h1 className="
          mt-6
          text-4xl
          font-black
          sm:text-5xl
        ">

          Alliance Members

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          View leadership, ranks, activity,
          and member information.

        </p>


      </section>





      {/* MEMBER CARDS */}

      <section className="
        mx-auto
        mt-12
        grid
        max-w-6xl
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      ">


      {
        members.map((member)=>{


          const Icon =
            roleIcon[
              member.role as keyof typeof roleIcon
            ];


          return (

            <div
              key={member.name}
              className="
              cursor-pointer
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              p-6
              transition
              hover:-translate-y-2
              hover:border-cyan-500
              "
            >



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




              <h2 className="
                mt-5
                text-xl
                font-bold
              ">

                {member.name}

              </h2>




              <div className="
                mt-4
                space-y-2
                text-sm
              ">


                <p className="
                  text-slate-400
                ">

                  Rank:
                  <span className="
                    ml-2
                    font-semibold
                    text-white
                  ">
                    {member.role}
                  </span>

                </p>



                <p className="
                  text-slate-400
                ">

                  Power:
                  <span className="
                    ml-2
                    font-semibold
                    text-white
                  ">
                    {member.power}
                  </span>

                </p>



                <p className="
                  text-slate-400
                ">

                  Status:
                  <span className="
                    ml-2
                    font-semibold
                    text-cyan-400
                  ">
                    {member.status}
                  </span>

                </p>


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
          border-slate-800
          bg-slate-900/60
          p-8
        ">


          <h2 className="
            text-2xl
            font-black
          ">

            Future API Connection

          </h2>



          <p className="
            mt-4
            leading-7
            text-slate-400
          ">

            This page is prepared for automatic member
            syncing. Later we can connect:

          </p>



          <ul className="
            mt-5
            space-y-2
            text-slate-300
          ">

            <li>
              • Whiteout Survival player data
            </li>

            <li>
              • Discord roles
            </li>

            <li>
              • Alliance rank database
            </li>

            <li>
              • Player power tracking
            </li>

          </ul>


        </div>


      </section>




    </main>

  );
}