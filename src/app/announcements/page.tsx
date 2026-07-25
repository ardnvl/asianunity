import {
  Bell,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";


const announcements = [
  {
    title: "Welcome to AsianUnity",
    date: "Coming Soon",
    content:
      "Welcome to our official alliance portal. All important updates, events, and announcements will appear here.",
  },

  {
    title: "Alliance Events",
    date: "Coming Soon",
    content:
      "Stay updated with Bear Hunt, Foundry Battle, Canyon Clash, and other alliance activities.",
  },

  {
    title: "Recruitment Open",
    date: "Active",
    content:
      "AsianUnity is currently looking for active and dedicated survivors.",
  },
];



export default function AnnouncementsPage() {


  return (

    <main className="
      min-h-screen
      bg-slate-950
      px-6
      py-20
      text-white
    ">


      {/* HEADER */}

      <div className="
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

          <Bell
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

          Alliance Announcements

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          Official updates and important information from
          the AsianUnity leadership.

        </p>


      </div>





      {/* ANNOUNCEMENT LIST */}

      <section className="
        mx-auto
        mt-12
        max-w-5xl
        space-y-6
      ">


        {
          announcements.map((item)=>(


            <article
              key={item.title}
              className="
              cursor-pointer
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              p-7
              transition
              hover:-translate-y-1
              hover:border-cyan-500
              "
            >


              <div className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              ">


                <h2 className="
                  text-2xl
                  font-bold
                ">

                  {item.title}

                </h2>



                <span className="
                  rounded-full
                  bg-cyan-500/10
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-400
                ">

                  {item.date}

                </span>


              </div>



              <p className="
                mt-5
                leading-7
                text-slate-400
              ">

                {item.content}

              </p>



            </article>


          ))
        }


      </section>





      {/* API READY BOX */}

      <section className="
        mx-auto
        mt-14
        max-w-5xl
      ">


        <div className="
          rounded-3xl
          border
          border-cyan-500/20
          bg-cyan-500/5
          p-6
        ">


          <div className="
            flex
            items-center
            gap-3
          ">

            <ShieldCheck
              className="text-cyan-400"
              size={24}
            />


            <h3 className="
              font-bold
            ">

              API Integration Ready

            </h3>

          </div>



          <p className="
            mt-3
            text-sm
            leading-6
            text-slate-400
          ">

            Later this section can automatically display
            announcements from your Discord bot,
            WOSControl API, or alliance database.

          </p>


        </div>


      </section>



    </main>

  );
}