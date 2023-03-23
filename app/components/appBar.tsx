import Link from "next/link";

export const AppbarComponent = () => {
  return (
    <div className="full-width bg-slate-100 border-0 border-b border-slate-300">
      <div className="container flex justify-center items-center mx-auto h-20">
        {/* Logo section */}
        <h2 className="flex-1 font-normal text-2xl text-center">XClusive</h2>

        {/* Navigation section  */}
        <div className="flex-1 flex space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}></Link>
        </div>

        {/* Search section  */}
        <div className="flex-1">Search section</div>
      </div>
    </div>
  );
};
