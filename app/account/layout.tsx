import { SideNavScreen } from "./SideNav";

export default function LeafLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mb-4  w-full h-auto p-8 space-y-4">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-xs md:text-sm font-medium text-gray-400">
          Home / <span className="text-gray-500">My Account</span>
        </h4>
        <h4 className="text-sm md:text-base font-medium text-gray-700 lg:text-lg">
          Welcome Back <span className="text-red-500">John!</span>
        </h4>
      </header>

      <div className="flex space-x-4 items-stretch justify-between">
        <SideNavScreen />
        {children}
      </div>
    </div>
  );
}
