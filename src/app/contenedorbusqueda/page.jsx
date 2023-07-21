import React from 'react';

const ContenedorBusquedaCard = () => (

  <main className="flex min-h-screen w-full items-center justify-center p-4 sm:m-2">

    <article className="group relative flex h-[16rem] sm:h-auto md:h-[24rem] w-full md:w-[50rem] rounded-2xl bg-[#3a4448]">

      <div className="relative inset-0 w-full overflow-hidden rounded-2xl">
        <div style={{backgroundImage: "url('https://unsplash.it/id/1/640/425')"}} className="absolute h-full w-full bg-cover bg-center">
          <div className="h-full w-full bg-[#455055]/80"></div>
        </div>

        <section className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 text-white">
          <header className="space-0 z-10">
            <div className="text-lg sm:text-xl md:text-3xl font-medium">Smokin Out The Window</div>
            <div className="font-medium">by Bruno Mars, Anderson .Paak, Silk Sonic</div>
            <div className="text-xs sm:text-sm">
              nice to meet you!
              <a href="#" className="text-[#96bacc] transition-all hover:text-yellow-400">Ryafuka</a>
            </div>
          </header>

          <div className="flex space-x-1 opacity-100">
            <span className="flex items-center space-x-1">
              <svg className="h-3 w-3 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <div className="font-medium">2800</div>
            </span>

            <span className="flex items-center space-x-1">
              <svg className="h-3 w-3 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.38 18.38a1.5 1.5 0 00-2.12-2.12l-1.88-1.88a1.5 1.5 0 00-2.12 0l-1.88 1.88a1.5 1.5 0 102.12 2.12l.88-.88v3.38a1.5 1.5 0 103 0v-3.38l.88.88a1.5 1.5 0 002.12-2.12z"></path>
              </svg>
              <div className="font-medium">85%</div>
            </span>

            <span className="flex items-center space-x-1">
              <svg className="h-3 w-3 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <div className="font-medium">138</div>
            </span>
          </div>
        </section>
      </div>
    </article>
  </main>
)

export default ContenedorBusquedaCard;
