import React from "react";

export default function Feature() {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#f3edff] via-purple-[#f6eeff] to-[#ebf0fe] ">
      <h2 className="text-4xl font-semibold text-center p-4 mt-6"> Features</h2>
      <p className="text-center p-4">
        We provide a number of excellent features that will undoubtedly improve the <br /> user experience. We also provide a better support system{" "}
      </p>
      <div className=" lg:w-[50%] p-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-center text-gray-500">
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon1.png" alt="" />
            <h3 className="font-semibold  text-center">Encrypted Mail</h3>
            <p className="text-[12px] text-center">
              A process of encrypting email <br /> communications
            </p>
          </div>
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon2.png" alt="" />
            <h3 className="font-semibold  text-center">Display Sharing</h3>
            <p className="text-[12px] text-center">
              With other participants, you may
              <br /> share your screen
            </p>
          </div>
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon3.png" alt="" />
            <h3 className="font-semibold  text-center">Private Notebook</h3>
            <p className="text-[12px] text-center">
              Private Notebook is an application <br /> that is protected
            </p>
          </div>
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon4.png" alt="" />
            <h3 className="font-semibold  text-center">App App Assistance</h3>
            <p className="text-[12px] text-center">
              App Assistant is a quickly <br /> and effectively ran the sistem{" "}
            </p>
          </div>
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon5.png" alt="" />
            <h3 className="font-semibold  text-center">Multiple Printing </h3>
            <p className="text-[12px] text-center">
              Our canvas prints are crafted on <br /> top-notch canvas
            </p>
          </div>
          <div className="flex flex-col  items-center p-4">
            <img className="w-24" src="/public/4.features/icon6.png" alt="" />
            <h3 className="font-semibold  text-center">Free Sketch</h3>
            <p className="text-[12px] text-center">
              Our canvas prints are crafted on <br />
              top-notch canvas{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
