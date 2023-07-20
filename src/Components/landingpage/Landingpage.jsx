import "../../../src/app/globals.css";
import InversionistaCard from "./Cards/InversionistaCard";
import EmprendedorCard from "./Cards/EmprendedorCard";
import Button from "./Cards/Button/Button";

const BACKGROUND_IMAGE_URL =
  "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWgelHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";

const TEXT = {
  title: "DEAL UP!",
  description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
    nam animi dolore tempore ab aspernatur consectetur provident. Facere
    laudantium modi minima ratione quae, sed id. Iusto assumenda dolorem
    magni veniam? Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Reiciendis, vitae quasi vel ut exercitationem sit inventore
    laudantium ducimus voluptatem nulla quis repudiandae porro officiis
    dolores, sed dolorem tenetur at? Illum.
  `,
};

const LandingPage = () => (
  <div
    className="h-screen w-screen bg-center"
    style={{
      backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
    }}
  >
    <div className=" flex items-center justify-center">
      <div className="container mx-4 md:mx-8 my-20 flex items-center justify-center">
        <h1 className="text-xl md:text-6xl text-center text-black mb-10">
          {TEXT.title}
        </h1>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center text-white px-4 md:px-8 py-20 m-5">
      <div className="container mb-10">
        <p className="text-sm text-black leading-relaxed text-center mx-4">
          {TEXT.description}
        </p>
      </div>
      <EmprendedorCard />
      <InversionistaCard />
    </div>

    <div className="bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4">
      <Button text="LOGIN" href="/logIn" className="p-1 text-sm" />
      <Button text="SIGN IN" href="/register" className="p-1 text-sm" />
    </div>
  </div>
);

export default LandingPage;
