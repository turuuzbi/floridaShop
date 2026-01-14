export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="h-56 bg-purple-300" />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">bouquet name</h3>
        <p className="text-sm text-gray-500">short description</p>
        <div className="flex items-center justify-between">
          <span className="font-medium">₮ price</span>
          <button className="text-sm underline">view</button>
        </div>
      </div>
    </div>
  );
}
