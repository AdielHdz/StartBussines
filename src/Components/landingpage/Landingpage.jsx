import Link from "next/link";

const LandingPage = () => (
  <div
    className="h-screen w-screen bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      backgroundSize: "cover",
    }}
  >
    <div className="h-screen flex items-center justify-center">
      <div className="container mx-8 my-20">
        <h1 className="text-white text-center text-6xl mb-10">Logo</h1>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center h-screen text-white px-8 py-20">
      <div className="container mb-10">
        <p className="text-lg text-white leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nam animi dolore tempore ab aspernatur consectetur provident. Facere
          laudantium modi minima ratione quae, sed id. Iusto assumenda dolorem
          magni veniam?
        </p>
      </div>

      <div className="container mb-10">
        <h2 className="text-2xl text-white mb-4">Emprendedores satisfechos</h2>
        <div className="card-container flex items-center justify-around mb-10">
          <div className="card p-4 rounded shadow-lg">Testimonio 1</div>
          <div className="card p-4 rounded shadow-lg">Testimonio 2</div>
          <div className="card p-4 rounded shadow-lg">Testimonio 3</div>
        </div>
      </div>

      <div className="container mb-10">
        <h2 className="text-2xl text-white mb-4">Inversionistas satisfechos</h2>
        <div className="card-container flex justify-around mb-10">
          <div className="card p-4 rounded shadow-lg">Testimonio 1</div>
          <div className="card p-4 rounded shadow-lg">Testimonio 2</div>
          <div className="card p-4 rounded shadow-lg">Testimonio 3</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4">
        <a className="btn bg-primary hover:bg-secondary hover:text-black text-white font-bold py-3 px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Login
        </a>

        <a className="btn bg-secondary hover:bg-primary hover:text-black text-white font-bold py-3 px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Registro
        </a>
      </div>
    </div>
  </div>
);

export default LandingPage;
