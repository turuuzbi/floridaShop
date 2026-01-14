export default function Hero() {
  return (
    <section className="relative bg-purple-200 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">handcrafted plushie bouquets</h1>
          <p className="text-lg text-gray-700">
            each arrangement is designed to express emotion, warmth, and care
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full">
            browse catalog
          </button>
        </div>
        <div className="w-full h-[420px] bg-purple-300 rounded-3xl" />
      </div>
    </section>
  );
}
