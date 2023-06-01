export default function Page() {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-base font-medium text-gray-600 d:text-base lg:text-lg">
          wishlist (4)
        </h4>
        <button className="flex items-center justify-center w-auto px-6 py-2 border border-gray-500 text-center text-gray-600 text-sm font-medium md:text-base lg:text-md">
          Move All To Bag
        </button>
      </header>
    </div>
  );
}
