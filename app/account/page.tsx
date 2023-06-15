export default function Page() {
  return (
    <div className="basis-full lg:basis-3/4 w-full shadow-sm p-6">
      <h2 className="text-red-500 text-base font-medium mb-2">
        Edit Your Profile
      </h2>

      <form className="flex flex-col space-y-4">
        <div className="flex items-center space-x-6">
          <label className="block flex-1">
            <span className="block text-base font-medium text-slate-500">
              First Name
            </span>
            <input
              name="firstname"
              className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block flex-1">
            <span className="block text-base font-medium text-slate-500">
              Last Name
            </span>
            <input
              name="lastname"
              className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>

        <div className="flex items-center space-x-6">
          <label className="block flex-1">
            <span className="block text-base font-medium text-slate-500">
              Email
            </span>
            <input
              name="email"
              className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
          <label className="block flex-1">
            <span className="block text-base font-medium text-slate-500">
              Address
            </span>
            <input
              name="address"
              className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>
        </div>

        <label className="block flex-1">
          <span className="block text-base font-medium text-slate-500">
            Password Change
          </span>
          <input
            placeholder="Current password"
            name="password"
            className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label className="block flex-1">
          <input
            placeholder="New password"
            name="newpassword"
            className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <label className="block flex-1">
          <input
            placeholder="Confirm password"
            name="confirm"
            className="mt-1 block w-full p-3 bg-gray-100 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <div className="self-end flex items-center space-x-4">
          <button className="self-starttext-gray-700 flex items-center justify-center text-base font-medium">
            Cancel
          </button>
          <button className="self-start py-1 px-5  md:w-auto lg:w-48 h-14 flex items-center justify-center text-base font-medium text-gray-50 bg-red-500 rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
