"use client";

import React from "react";
import DefaultRating from "../../Components/Rating/Rating";

const ContenedorBusquedaCard = () => (
  <main className="flex flex-col space-y-4 min-h-screen w-full items-center justify-center p-4 sm:m-2 lg:m-4">
    <div className=" flex items-start m-4 text-xl text-black lg:text-2xl">2 results</div>
    <article className="group relative flex h-[16rem] sm:h-auto md:h-[24rem] lg:h-[32rem] w-full md:w-[50rem] lg:w-[60rem] rounded-2xl bg-[#3a4448]">
      <div className="relative inset-0 w-full overflow-hidden rounded-2xl">
        <div
          style={{ backgroundImage: "url('https://unsplash.it/id/1/640/425')" }}
          className="absolute h-full w-full bg-cover bg-center"
        >
          <div className="h-full w-full bg-[#455055]/80"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-center text-xl text-white lg:text-2xl mt-4">
          <DefaultRating />
        </div>

        <section className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white">
          <header className="space-0 z-10 text-center">
            <div className="text-2xl sm:text-6xl md:text-4xl lg:text-7xl font-bold my-4 border-b border-white">
              {" "}
              MACHINE IA{" "}
            </div>

            <div className="text-sl sm:text-sm lg:text-lg">
              <p>Total amount: $50,000</p>
              <p>Min Investment: $1,500</p>
              <p>Max investment: $5,000</p>
            </div>
          </header>
        </section>
      </div>
    </article>
    <article className="group relative flex h-[16rem] sm:h-auto md:h-[24rem] lg:h-[32rem] w-full md:w-[50rem] lg:w-[60rem] rounded-2xl bg-[#3a4448]">
      <div className="relative inset-0 w-full overflow-hidden rounded-2xl">
        <div
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80')" }}
          className="absolute h-full w-full bg-cover bg-center"
        >
          <div className="h-full w-full bg-[#455055]/80"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-center text-xl text-white lg:text-2xl mt-4">
          <DefaultRating />
        </div>

        <section className="absolute inset-0 flex flex-col justify-center p-4 sm:p-8 lg:p-12 text-white">
          <header className="space-0 z-10 text-center">
            <div className="text-2xl sm:text-6xl md:text-4xl lg:text-7xl font-bold my-4 border-b border-white">
              {" "}
              ROBOT{" "}
            </div>

            <div className="text-sl sm:text-sm lg:text-lg">
              <p>Total amount: $60,000</p>
              <p>Min Investment: $2,000</p>
              <p>Max investment: $7,000</p>
            </div>
          </header>
        </section>
      </div>
    </article>
  </main>
);

export default ContenedorBusquedaCard;
