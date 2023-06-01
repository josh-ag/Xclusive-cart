export default function Page() {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-base font-medium text-gray-400 d:text-base lg:text-lg">
          Home / <span className="text-gray-500">Cart</span>
        </h4>
      </header>
    </div>
  );
}
