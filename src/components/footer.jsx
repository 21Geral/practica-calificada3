import React from "react";

export default function Footer() {
  return (
    <>
      <section className="w-full flex flex-col gap-5 justify-center items-center bg-gradient-to-br from-[#eaebfb] via-[#ebeafc] to-[#eae0f0]   ">
        <h2
          className="text-4xl p-8 font-bold text-transparent bg-clip-text 
             bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2]"
        >
          Exclusively by ThemeWagon
        </h2>
        <p className="text-center text-gray-500">
          Klean is an elegant HTML5 template an a perfect starting point for your next <br /> SaaS oriented site, carefully curated by ThemeWagon
        </p>
        <button className="text-white font-semibold px-4 py-2 rounded-2xl m-8 bg-gradient-to-br from-[#aa84e2] via-[#7d8bec] to-[#638ff4]">
          Dowloand Free
        </button>
      </section>
      <footer className=" relative bg-gradient-to-br from-violet-200/50 via-purple-200/40 to-blue-200/40">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-4">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-700 ">About</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Prices
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-700">Resources</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-700">Team</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="">
                    <a href="#" className="hover:underline">
                      Developer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Designer
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-700">Blog</h2>
                <ul className="text-gray-500  font-medium">
                  <li className="">
                    <a href="#" className="hover:underline">
                      CEO
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Article
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Tech
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 className="mb-6 text-lg font-semibold text-gray-700">Follow us</h3>
                <ul className="flex  items-center p-1 gap-3">
                  <li className="p-1 shadow-md  rounded-full border-1 border-violet-400">
                    <svg
                      className="w-4 h-4 text-violet-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="p-1 shadow-md  rounded-full border-1 border-violet-400">
                    <svg
                      className="w-4 h-4 text-violet-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                  <li className="p-1 shadow-md  rounded-full border-1 border-violet-400">
                    <svg
                      className="w-4 h-4 text-violet-400 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </li>
                  <li className="p-1 shadow-md  rounded-full border-1 border-violet-400">
                    <svg
                      className="w-4 h-4 text-violet-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="my-6 text-lg font-semibold text-gray-700">Subscribe to our newsletter</h3>
                <div className="bg-gray-100 flex justify-between p-1 w-full px-2 rounded-2xl shadow-md">
                  <input className="w-full" placeholder="✉️ Email" type="text" />
                  <button className="h-7 w-7 text-center rounded-full border-1 border-violet-400">{">"} </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 sm:text-center ">
              All rights Reserved © <span className="font-semibold"> Your Company, 2021</span>
            </p>
            <span className="text-sm text-gray-500 sm:text-center ">
              Made with ❤️ by <span className="text-sm font-semibold text-gray-500 sm:text-center ">Themewagon</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
