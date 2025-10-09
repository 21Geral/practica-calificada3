import React from "react";

export default function Projects() {
  return (
    <section className="bg-gradient-to-br from-violet-200/50 via-purple-200/40 to-blue-200/40 ">
      <div className="p-8">
        <h2 className="text-4xl font-semibold text-center mt-10">Our Projects</h2>
        <p className="text-center">
          A project is a single or team activity, combining research and design with best <br /> effort. Here are some of our team's projects
        </p>
      </div>
      <div className="w-full flex justify-center items-center ">
        <div className="grid grid-cols-3 w-[50%] h-[70%] p-4 border-white border-2 rounded-2xl gap-4">
          <div className="flex flex-col gap-4">
            <img className="col-span-1 row-span-1" src="5.projects/image1.png" alt="" />
            <img className="col-span-1 row-span-2" src="5.projects/image2.png" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <img className="col-span-1 row-span-2" src="5.projects/image3.png" alt="" />
            <img className="col-span-1 row-span-2" src="5.projects/image4.png" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <img className="col-span-1 row-span-1" src="5.projects/image5.png" alt="" />
            <img className="col-span-1 row-span-1" src=" 5.projects/image6.png" alt="" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-8">
        <button
          className="font-semibold border-violet-300 border-2 rounded-md py-1 px-3 my-10 text-transparent bg-clip-text 
             bg-gradient-to-r from-[#a684e3] via-[#888bea] to-[#698ef2]"
        >
          View More
        </button>
      </div>
    </section>
  );
}
