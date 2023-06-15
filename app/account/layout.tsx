import { SideNavScreen } from "./SideNav";

export default function LeafLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-base font-medium text-gray-400 d:text-base lg:text-lg">
          Home / <span className="text-gray-500">My Account</span>
        </h4>
        <h4 className="text-base font-medium text-gray-700 d:text-base lg:text-lg">
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
