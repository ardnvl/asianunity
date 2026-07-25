import {
  Gift,
  Copy,
  ExternalLink,
} from "lucide-react";



const giftCodes = [
  {
    code: "COMINGSOON",
    status: "Waiting for API",
    reward:
      "Rewards will appear here",
  },

 

];



export default function CodesPage() {


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

          <Gift
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

          Whiteout Survival Gift Codes

        </h1>



        <p className="
          mt-4
          text-slate-400
        ">

          Latest available gift codes and rewards
          for AsianUnity members.

        </p>


      </section>






      {/* CODE LIST */}

      <section className="
        mx-auto
        mt-14
        max-w-5xl
        space-y-6
      ">


        {
          giftCodes.map((item)=>(


            <div
              key={item.code}
              className="
              cursor-pointer
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              p-7
              transition
              hover:border-cyan-500
              "
            >


              <div className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              ">



                <div>


                  <h2 className="
                    text-2xl
                    font-black
                    tracking-wider
                  ">

                    {item.code}

                  </h2>



                  <p className="
                    mt-2
                    text-slate-400
                  ">

                    {item.reward}

                  </p>


                </div>





                <button
                  className="
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  px-5
                  py-3
                  font-semibold
                  text-slate-950
                  transition
                  hover:bg-cyan-400
                  "
                >

                  <Copy size={18}/>

                  Copy

                </button>



              </div>





              <div className="
                mt-5
                inline-flex
                rounded-full
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-cyan-400
              ">

                {item.status}

              </div>


            </div>


          ))
        }


      </section>







      {/* REDEEM LINK */}

      <section className="
        mx-auto
        mt-12
        max-w-5xl
      ">


        <a
          href="https://wos-giftcode.centurygame.com/"
          target="_blank"
          className="
          flex
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          px-6
          py-4
          text-slate-300
          transition
          hover:border-cyan-500
          hover:text-cyan-400
          "
        >

          Redeem Gift Codes

          <ExternalLink size={18}/>

        </a>


      </section>







      {/* API READY */}

      <section className="
        mx-auto
        mt-16
        max-w-5xl
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

            Gift Code API Integration

          </h2>



          <p className="
            mt-4
            leading-7
            text-slate-400
          ">

            Future updates can automatically fetch
            active Whiteout Survival codes, expiration
            dates, and rewards.

          </p>


        </div>


      </section>


    </main>

  );
}