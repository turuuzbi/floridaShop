export function ProductCard() {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
      {/* image area */}
      <div className="relative aspect-[3/4] bg-black/40">
        <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm tracking-wide">
          product image
        </div>

        {/* hover glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* content */}
      <div className="p-5">
        <div className="font-serif text-lg tracking-wide text-white/90">
          product name
        </div>
        <div className="mt-1 text-sm text-zinc-400">price</div>

        {/* tag */}
        <div className="mt-3 inline-block rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
          tag (new / bestseller)
        </div>
      </div>

      {/* subtle outer glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-pink-500/20 to-rose-500/20 blur-xl" />
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}
