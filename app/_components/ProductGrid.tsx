import ProductCard from "./ProductCard";

const mockProducts = [1, 2, 3, 4];

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mockProducts.map((id) => (
        <ProductCard key={id} />
      ))}
    </div>
  );
}
