import Link from "next/link";

export const SideNavScreen = () => {
  return (
    <div className="max-w-sm  p-4 space-y-8">
      <div className=" flex flex-col space-y-1">
        <h2 className="text-gray-800 text-base font-medium mb-2">
          Manage My Account
        </h2>
        <Link
          href="/account"
          className="text-sm  lg:text-base text-gray-600 hover:text-red-500"
        >
          My Profile
        </Link>
        <Link
          href="/account/addressbook"
          className="text-sm  lg:text-base text-gray-600 hover:text-red-500"
        >
          Address Book
        </Link>
        <Link
          href="/account/paymentoptions"
          className="text-sm lg:text-base text-gray-600 hover:text-red-500"
        >
          My Payment Options
        </Link>
      </div>

      <div className=" flex flex-col space-y-1">
        <h2 className="text-gray-800 text-base font-medium mb-2">My Order</h2>
        <Link
          href="/account/returns"
          className="text-sm lg:text-base text-gray-600 hover:text-red-500"
        >
          My Returns
        </Link>
        <Link
          href="/account/cancellation"
          className="text-sm lg:text-base text-gray-600 hover:text-red-500"
        >
          My Cancellation
        </Link>
      </div>

      <div className=" flex flex-col space-y-1">
        <h2 className="text-gray-800 text-base font-medium mb-2">
          My Wishlist
        </h2>
      </div>
    </div>
  );
};
