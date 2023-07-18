const LandingPage = () => (
  <div
    className="bg-cover bg-center"
    style={{ backgroundImage: "url('pexels-ketut-subiyanto-4559592.jpg')" }}
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
        <div className="card-container flex justify-around mb-10">
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
        <button className="btn bg-primary hover:bg-secondary hover:text-black text-white font-bold py-3 px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Login
        </button>
        <button className="btn bg-secondary hover:bg-primary hover:text-black text-white font-bold py-3 px-6 rounded-lg m-2 text-lg transition-all duration-200">
          Registro
        </button>
      </div>
    </div>
  </div>
);

export default LandingPage;
