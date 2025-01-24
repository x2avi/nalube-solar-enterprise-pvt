"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/WhatsApp-Image-2022-09-07-at-08.54.52-e1662536918139.png",
    quote: "Nalube Enterprise showed us how to get started, what to do, and how to do it.",
  },
  {
    image: "/images/OIP (4).jpg",
    quote:
      "We had no idea how to get started, but Nalube Enterprise showed us the way. And we were able to create something amazing."
  },

  {
    image: "/images/orc-5899-504_xl.jpg",
    quote:
      "The team at Nalube Enterprise is amazing. They helped us create a stunning store that we are proud of.",
  },
];

const EnergyStorage = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-gradient-to-br from-[#9be2b3] to-[#2a3b5c] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
        Energy Storage Solutions<br />
        </div>

        <p className="mt-4 text-lg font-normal  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 max-w-lg text-center mx-auto">
        Setting up solar batteries to store excess energy generated during the day for use at night or during power outages
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyStorage;
