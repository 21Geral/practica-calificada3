import React from "react";

export default function Team() {
  return (
    <section className="bg-gradient-to-br from-violet-200/50 via-purple-200/40 to-blue-200/40 ">
      <h2 className="text-center text-4xl font-semibold">Our Team</h2>
      <p className="text-center">
        People from various origins, culteres, and personalities make up our team. <br /> This blend makes it a powerful team.{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  w-full justify-center items-center p-8 ">
        <div className="flex flex-col items-center justify-center">
          <img className="max-h-[360px]" src="6.team/image1.png" alt="" />
          <h3 className="font-semibold text-2xl">John Adams</h3>
          <p>CEO</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="max-h-[360px]" src="6.team/image2.png" alt="" />
          <h3 className="font-semibold text-2xl">Carrey Johnson</h3>
          <p>Senior Developer</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="max-h-[360px]" src="6.team/image3.png" alt="" />
          <h3 className="font-semibold text-2xl">Ray Marie</h3>
          <p>Senior Developer</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="max-h-[360px]" src="6.team/image4.png" alt="" />
          <h3 className="font-semibold text-2xl">Austin Min</h3>
          <p>Designer</p>
        </div>
      </div>
    </section>
  );
}
