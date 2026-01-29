import React from "react";
import { ProductGrid } from "../_components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 relative overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_20%_30%,rgba(236,72,153,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pt-20 pb-30">
        {/* header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide uppercase">
            our collection
          </h1>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            plush flower bouquets crafted for gifting, moments, and just
            because.
          </p>
        </div>

        {/* products placeholder */}
        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <div className="flex flex-col items-center justify-center text-center gap-4">
              <ProductGrid />
            </div>
          </div>

          {/* subtle glow */}
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-indigo-500/10 via-pink-500/10 to-rose-500/10 blur-2xl -z-10" />
        </div>
      </section>
    </main>
  );
}
