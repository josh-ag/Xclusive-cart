import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col mt-4 justify-center items-center">
      <h2 className="w-full h-full text-4xl text-center">
        Whoops!
        <br />
        404 Not Found!
      </h2>
      <p className="text-lg mt-2">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="p-4 w-52 bg-red-500 text-gray-100">
        Back to home
      </Link>
    </div>
  );
}
