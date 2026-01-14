export default function Features() {
  return (
    <section className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="h-[420px] bg-purple-300 rounded-3xl" />
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold">why choose our bouquets</h2>
        <ul className="space-y-4 text-gray-700">
          <li>carefully selected materials</li>
          <li>customizable arrangements</li>
          <li>handmade with attention to detail</li>
          <li>perfect for gifts and occasions</li>
        </ul>
      </div>
    </section>
  );
}
