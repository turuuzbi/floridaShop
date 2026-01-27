"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cinzel_Decorative, Inter } from "next/font/google";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({ subsets: ["latin"] });

const FloridaWebsite = () => {
  const { push } = useRouter();
  const flowers = [
    // left side (big anchor)
    {
      src: "flower (1).png",
      className:
        "left-[-80px] top-24 w-[320px] md:w-[420px] rotate-[-6deg] opacity-95 z-0",
    },
    {
      src: "flower (2).png",
      className:
        "left-8 bottom-[-90px] w-[320px] md:w-[520px] rotate-[10deg] opacity-95 z-0",
    },

    // top accents
    {
      src: "flower (3).png",
      className:
        "top-[-30px] left-1/2 -translate-x-1/2 w-[200px] md:w-[260px] opacity-80 z-0",
    },
    {
      src: "flower (9).png",
      className:
        "top-[-40px] left-[-30px] w-[200px] md:w-[280px] rotate-[4deg] opacity-80 z-0",
    },

    // right side (big + mid layers)
    {
      src: "flower (5).png",
      className:
        "right-[-120px] top-28 w-[340px] md:w-[520px] rotate-[4deg] opacity-95 z-0",
    },
    {
      src: "flower (4).png",
      className:
        "right-4 top-[-20px] w-[220px] md:w-[320px] rotate-[10deg] opacity-85 z-0 blur-[0.3px]",
    },

    // bottom right cluster
    {
      src: "flower (7).png",
      className:
        "bottom-[-80px] right-24 w-[280px] md:w-[420px] rotate-[-10deg] opacity-95 z-0",
    },
    {
      src: "flower (8).png",
      className:
        "bottom-[-110px] right-[-110px] w-[320px] md:w-[520px] opacity-95 z-0",
    },

    // center bottom (foreground feel)
    {
      src: "flower (6).png",
      className:
        "bottom-[-120px] left-1/2 -translate-x-1/2 w-[280px] md:w-[460px] opacity-90 z-10",
    },
  ];

  return (
    <div className={`min-h-screen bg-[#edddec] ${inter.className}`}>
      <section className="relative overflow-hidden">
        <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
          {/* flowers */}
          {flowers.map((f, i) => (
            <img
              key={i}
              src={f.src}
              alt=""
              className={`pointer-events-none select-none absolute ${f.className}`}
            />
          ))}

          {/* vignette overlays (makes text readable) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.35),rgba(0,0,0,0.9))] z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 z-10" />

          {/* hero content */}
          <div className="relative z-20 mx-auto px-6 text-center max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              premium bouquets - same-day delivery
            </div>

            <h1
              className={`${cinzel.className} mt-6 text-4xl md:text-6xl leading-[1.05] tracking-[0.08em] text-white`}
            >
              florida bouquet shop
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              Curated arrangements with an elegant, modern finis. <br></br>
              Gifting, events, or just because.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <SignedOut>
                <SignUpButton>
                  <Button className="text-white rounded-full font-medium text-sm sm:text-base h-11 cursor-pointer  hover:bg-white/10">
                    Get started
                  </Button>
                </SignUpButton>
              </SignedOut>
              <Button
                variant="outline"
                className="h-11 px-6 rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10 cursor-pointer"
                onClick={() => push("/products")}
              >
                View collection
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 text-xs text-white/50">
              <span>quality guaranteed</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>secure checkout</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>local artists</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FloridaWebsite;
