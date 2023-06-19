import { IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Page() {
  return (
    <div className="container mx-auto my-4  w-full h-auto p-8 space-y-16">
      {/* Header */}
      <header className="flex justify-between items-center">
        <h4 className="text-base font-medium text-gray-400 d:text-base lg:text-lg">
          / <span className="text-gray-500 font-medium">Contact</span>
        </h4>
      </header>

      <div className="flex items-stretch flex-wrap justify-between space-x-6">
        <div className="flex flex-col items-center justify-center shadow-md w-48 md:w-60 p-6 space-y-16 divide-y divide-gray-400">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-red-500">
                <IoCallOutline className="w-4 h-4 lg:w-6 lg:h-6 text-gray-50 font-bold" />
              </div>
              <h2 className="text-gray-700 text-base lg:text-2xl font-medium">
                Call To Us
              </h2>
            </div>
            <h4 className="text-sm lg:text-base text-gray-600">
              We are available 24/7, 7 days a week.
            </h4>
            <h4 className="text-sm lg:text-base text-gray-600">
              Phone: +8801611112222
            </h4>
          </div>

          <div className="flex flex-col space-y-6 pt-8">
            <div className="flex items-center space-x-6">
              <div className="p-2 rounded-full bg-red-500">
                <IoMailOutline className="w-4 h-4 lg:w-6 lg:h-6 text-gray-50 font-bold" />
              </div>
              <h2 className="text-gray-700 text-base lg:text-2xl font-medium">
                Write To Us
              </h2>
            </div>
            <h4 className="text-sm lg:text-base text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </h4>
            <h4 className="text-sm lg:text-base text-gray-600">
              Emails: customer@exclusive.com
            </h4>

            <h4 className="text-sm lg:text-base text-gray-600">
              Emails: support@exclusive.com
            </h4>
          </div>
        </div>

        <div className="flex-1  p-6 space-y-16 shadow-sm">
          <form className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="block flex-1">
                <span className="block text-sm font-medium text-slate-500">
                  Your Name<span className="text-red-400">*</span>
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
              <label className="block flex-1">
                <span className="block text-sm font-medium text-slate-500">
                  Your Email<span className="text-red-400">*</span>
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>

              <label className="block flex-1">
                <span className="block text-sm font-medium text-slate-500">
                  Your Phone<span className="text-red-400">*</span>
                </span>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                />
              </label>
            </div>

            <textarea
              rows={40}
              name="message"
              placeholder="Your Message"
              className="max-h-72 block w-full p-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
