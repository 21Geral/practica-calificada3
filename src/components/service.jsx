import React from "react";

export default function Service() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-violet-200/50 via-purple-200/40 to-blue-200/40  ">
      <h2 className="text-4xl p-4 font-semibold mt-10">Services</h2>
      <p className="text-center text-gray-500">
        We offer youth with chances for career development in their practice. We also <br /> support a wide range of services to ensure client
        satisfaction
      </p>
      <section className="relative p-20 grid md:flex gap-3">
        <div className="flex flex-col justify-center items-center  max-w-sm bg-white/30 border-2  border-white rounded-3xl shadow-sm ">
          <img className="absolute w-48 left-0 top-0" src="/public/2.services/illustration1.png" alt="" />
          <img className="rounded-t-lg w-48 my-12" src="2.services/icon1.png" alt="" />
          <div className="p-10">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Send Texts Instantly</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 mt-6">
              Financial planning, forecasting and adjusting rapidly with customer demandsand budgets.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 mt-10 text-sm font-medium text-center text-blue-600 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Learn more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  max-w-sm bg-white/30 border-2  border-white rounded-3xl shadow-sm ">
          <img className="rounded-t-lg w-48 my-12" src="2.services/icon2.png" alt="" />
          <div className="p-10">
            <a href="#">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
              "
              >
                Better Organized
              </h5>
            </a>
            <p
              className="mb-3 font-normal text-gray-700 mt-6
            "
            >
              Latest technology and experienced guidance, trained HR specialist to keep updated.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm mt-10 font-medium text-center text-blue-600 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  "
            >
              Learn more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  max-w-sm bg-white/30 border-2  border-white rounded-3xl shadow-sm ">
          <img className="rounded-t-lg w-48 my-12" src="2.services/icon3.png" alt="" />
          <div className="p-10">
            <a href="#">
              <h5
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900 
              "
              >
                Analytical Statistics
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 mt-6">Messages, real-time reminders, memos, and many more will keep your team in sync.</p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 mt-10 text-sm font-medium text-center text-blue-600 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Learn more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
