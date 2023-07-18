import Link from "next/link";
import "../../../src/app/globals.css";
import { FaUserCircle } from "react-icons/fa";

const LandingPage = () => (
  <div
    className="h-screen w-screen bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
    }}
  >
    <div className=" flex items-center justify-center">
      <div className="container mx-4 md:mx-8 my-20 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-center text-black mb-10">
          Logo
        </h1>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center  text-white px-4 md:px-8 py-20">
      <div className="container mb-10">
        <p className="text-lg text-black leading-relaxed text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nam animi dolore tempore ab aspernatur consectetur provident. Facere
          laudantium modi minima ratione quae, sed id. Iusto assumenda dolorem
          magni veniam?
        </p>
      </div>
      <div className="container mb-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-white  mb-4">
          Emprendedores satisfechos
        </h2>
        <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="container pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">
                “Tailwinds CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <div className="container mb-10">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-4">
          Inversionistas satisfechos
        </h2>

        <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium text-white">
                “Tailwinds CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>

    <div className="bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4">
      <Link href="/logIn">
        <button className="btn bg-secondary hover:bg-primary hover:text-black text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Login
        </button>
      </Link>
      <Link href="/register">
        <button className="btn bg-secondary hover:bg-primary hover:text-black text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Registro
        </button>
      </Link>
    </div>
  </div>
);

export default LandingPage;
