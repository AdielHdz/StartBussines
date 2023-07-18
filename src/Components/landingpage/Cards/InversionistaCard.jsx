import "../../../app/globals.css";
import { FaUser } from 'react-icons/fa'; // import the user icon

const InversionistaCard = () => (
  <div className="container mb-10">
    <h2 className="text-2xl md:text-4xl text-center font-bold text-white mb-4">
      Inversionistas satisfechos
    </h2>

    <figure className="flex flex-col md:flex-row bg-slate-100 rounded-xl p-4 md:p-8 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-white">
            “Tailwinds CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="flex items-center justify-center mb-2">
            <FaUser className="mr-2"/> 
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          </div>
          <div className="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
);

export default InversionistaCard;
