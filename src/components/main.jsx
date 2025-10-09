export default function Main() {
  return (
    <main className="h-[93%] w-full ">
      <section className="w-full h-full bg-gradient-to-br from-rose-200/20 via-purple-200/20 to-blue-200/40  ">
        <div className="flex w-full ">
          <div className=" pt-5 w-[80%] flex justify-end items-center ">
            <div className="flex flex-col gap-8">
              <div className="flex w-full flex-col gap-3 text-center lg:text-start ">
                <h1
                  className="text-5xl font-bold text-transparent bg-clip-text 
             bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2]"
                >
                  Bootstrap 5 theme
                </h1>
                <h2 className="text-gray-700 font-semibold text-4xl">
                  crafted by <span className="font-bold">ThemeWagon</span>
                </h2>
                <p className="text-gray-500 text-lg">
                  ThemeWagon offer an wide array of category-oriented <br /> Free and premium Bootstrap HTML Templates and Themes
                </p>
              </div>
              <div>
                <button className=" shadow-violet-300 shadow-xl bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2] text-white text-sm py-2 px-4 rounded-lg">
                  Check Demo
                </button>
              </div>
            </div>
          </div>
          <img className="w-full hidden lg:flex" src="1.home/illustration1.png" alt="" />
        </div>
        <div className="flex mt-8 items-center w-full justify-center items center">
          <div className="grid grid-cols-2 lg:flex justify-around items-center gap-10 md:py-4 md:border-y border-gray-800/20 ">
            <img className="h-[28px] md:h-[37px]  " src="1.home/google.png" alt="" />
            <img className="h-[24px] md:h-[28px]" src="1.home/netflix.png" alt="" />
            <img className="h-[24px] md:h-[32px]" src="1.home/microsoft.png" alt="" />
            <img className="h-[24px] md:h-[39px]" src="1.home/mailbuster.png" alt="" />
            <img className="h-[32px] md:h-[48px] " src="1.home/themewagon.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
