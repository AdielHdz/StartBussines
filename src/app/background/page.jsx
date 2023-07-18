import Image from "next/image"
import BackgroundImage from "../../../public/asset/andrea-de-santis-n8ipsZZ5Pww-unsplash.jpg"
const Background = () => {
    return (
        <div className="h-screen w-full bg-red-400  pt-0.5">
            <div className=" absolute z-10 w-full h-full bg-black opacity-10"></div>
            <Image src={BackgroundImage} alt="background" width={0} height={0} 
            className="absolute h-full object-cover"
            />
            <div className="relative z-20
            ">
                  <h5 className=" text-green-600 text-center mt-44">Hola bro</h5>

            </div>
          
        </div>
    )
};

export default Background;