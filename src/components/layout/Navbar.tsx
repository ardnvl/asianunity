"use client";

import Link from "next/link";
import { Menu, X, Snowflake } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/announcements", label: "Announcements" },
  { href: "/members", label: "Members" },
  { href: "/foundry", label: "Foundry" },
  { href: "/codes", label: "Gift Codes" },
  { href: "/events", label: "Events" },
  { href: "/guides", label: "Guides" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="
      sticky top-0 z-50 
      border-b border-slate-800 
      bg-slate-950/80 
      backdrop-blur
    ">

      <div className="
        mx-auto flex h-16 max-w-7xl 
        items-center justify-between px-6
      ">

        {/* LOGO */}

        <Link
          href="/"
          className="
          flex items-center gap-3
          cursor-pointer
          "
        >

        <div className="
  rounded-xl 
  bg-cyan-500 
  p-2
">
  <Snowflake
    className="text-white"
    size={20}
  />
</div>

          <div>
            <h1 className="
              font-black text-xl
            ">
              [ASU]
            </h1>

            <p className="
              text-xs text-slate-400
            ">
              AsianUnity
            </p>
          </div>


        </Link>



        {/* DESKTOP MENU */}

        <nav className="
          hidden 
          gap-2 
          lg:flex
        ">

          {links.map((link)=>{

            const active =
              pathname === link.href;


            return (

              <Link
                key={link.href}
                href={link.href}

                className={`
                cursor-pointer
                rounded-lg
                px-3
                py-2
                transition

                ${
                  active
                  ?
                  "bg-cyan-500/10 text-cyan-400"
                  :
                  "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                }

                `}
              >

                {link.label}

              </Link>

            );

          })}

        </nav>



        {/* MOBILE BUTTON */}

        <button
          onClick={()=>setOpen(!open)}
          className="
          cursor-pointer
          rounded-lg
          p-2
          hover:bg-slate-900
          lg:hidden
          "
        >

          {
            open 
            ?
            <X/>
            :
            <Menu/>
          }

        </button>


      </div>



      {/* MOBILE MENU */}

      {
        open && (

          <div className="
          border-t
          border-slate-800
          bg-slate-950
          p-4
          lg:hidden
          ">


            <nav className="
            flex
            flex-col
            gap-2
            ">


            {
              links.map((link)=>(
                
                <Link
                  key={link.href}
                  href={link.href}

                  onClick={()=>setOpen(false)}

                  className="
                  cursor-pointer
                  rounded-lg
                  px-4
                  py-3
                  text-slate-300
                  transition

                  hover:bg-slate-900
                  hover:text-cyan-400
                  "

                >

                  {link.label}

                </Link>

              ))
            }


            </nav>


          </div>

        )
      }



    </header>
  );
}