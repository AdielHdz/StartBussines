"use client";

import React from "react";
import DefaultRating from "../../Components/Rating/Rating";

const ContenedorBusquedaCard = () => (
  <main className="flex flex-col min-h-screen w-full items-center justify-center p-4 sm:m-2">
    <div className=" left-0 top-0 m-4 text-xl text-black">2 results</div>
    <article className="group relative flex h-[16rem] sm:h-auto md:h-[24rem] w-full md:w-[50rem] rounded-2xl bg-[#3a4448]">
      <div className="relative inset-0 w-full overflow-hidden rounded-2xl">
        <div
          style={{ backgroundImage: "url('https://unsplash.it/id/1/640/425')" }}
          className="absolute h-full w-full bg-cover bg-center"
        >
          <div className="h-full w-full bg-[#455055]/80"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-center text-xl text-white mt-4">
          <DefaultRating />
        </div>

        <section className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 text-white">
          <header className="space-0 z-10 text-center">
            <div className="text-2xl sm:text-6xl md:text-4xl font-bold my-4 border-b border-white">
              {" "}
              MACHINE IA{" "}
            </div>

            <div className="text-sl sm:text-sm">
              <p>Total amount: $50,000</p>
              <p>Min Investment: $1,500</p>
              <p>Max investment: $5,000</p>
            </div>
          </header>
        </section>
      </div>
    </article>
  </main>
);

export default ContenedorBusquedaCard;
