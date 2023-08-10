"use client";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { handlerStatus } from "../../Redux/UserRealSlice/UserRealSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading/Loading";
export default function Authentication() {
  //Desactivar boton google
  const [isGoogleButtonEnabled, setGoogleButtonEnabled] = useState(false);
  useEffect(() => {
    const handleRoleSelected = () => {
      const roleRegister = localStorage.getItem("roleRegister");
      setGoogleButtonEnabled(
        roleRegister === "investor" || roleRegister === "entrepreneur"
      );
    };

    window.addEventListener("roleSelected", handleRoleSelected);

    return () => {
      window.removeEventListener("roleSelected", handleRoleSelected);
    };
  }, []);

  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data: session,
    status: statusGoogle,
    update: UpdateSession,
  } = useSession() || {}; // Inicializa con un objeto vacío si useSession() es undefined

  console.log({ session, statusGoogle, UpdateSession });
  const isGoogleActive = "isGoogleActive";

  const handleSignOut = () => {
    signOut({
      callbackUrl: "/logIn", // Redirige a esta URL después del cierre de sesión
      redirect: true, // Evita la redirección automática (puedes hacerlo manualmente)
    });
  };

  useEffect(() => {
    const isRegisterActive = JSON.parse(localStorage.getItem(isGoogleActive));
    if (
      isRegisterActive &&
      statusGoogle === "authenticated" &&
      session.user.name
    ) {
      const userData = {
        fullName: session.user.name,
        email: session.user.email,
        role: localStorage.getItem("roleRegister"),
        password: "ThirdPartyHenry12345!",
        avatar: session.user.image,
        status: true,
        confirmEmail: true,
        thirdPartyCreated: true,
      };
      const createUser = async () => {
        await axios
          .post("/user", userData)
          .then((response) => {
            console.log(response.data);
            axios
              .post("user/login", {
                email: userData.email,
                password: userData.password,
              })
              .then((response) => {
                const user = response.data;
                console.log(user);

                localStorage.setItem(
                  "token_DealUp",
                  user.userRegistered.accessToken
                );
                localStorage.setItem("idSession", user.userRegistered.data.id);
                localStorage.setItem(
                  "fullName",
                  user.userRegistered.data.fullName
                );
                localStorage.setItem("avatar", user.userRegistered.data.avatar);
                localStorage.setItem("role", user.userRegistered.data.role);
                localStorage.setItem(
                  "savedEmail",
                  user.userRegistered.data.email
                );

                localStorage.setItem(
                  "userData",
                  JSON.stringify({
                    fullName: user.userRegistered.data.fullName,
                    email: user.userRegistered.data.email,
                    role: user.userRegistered.data.role,
                    address: user.userRegistered.data.address,
                    password: user.userRegistered.data.password,
                    gender: user.userRegistered.data.gender,
                    birthdate: user.userRegistered.data.birthdate,
                    phone: user.userRegistered.data.phone,
                    country: user.userRegistered.data.country,
                    avatar: user.userRegistered.data.avatar,
                    status: user.userRegistered.data.status,
                    thirdPartyCreated:
                      user.userRegistered.data.thirdPartyCreated,
                  })
                );
                localStorage.setItem(isGoogleActive, false);
                localStorage.setItem("userFetch", "succes");
                dispatch(handlerStatus("success"));
                alert("Register successfull");
                router.push("/home");
              });
          })
          .catch((error) => {
            if (error.response.data.error === "Email already registered") {
              localStorage.setItem(isGoogleActive, false);
              localStorage.setItem("userFetch", "failure");
              dispatch(handlerStatus("failure"));
              alert("Email already registered! Please login");
              handleSignOut();
            } else {
              consol.log(error);
            }
          });
      };

      createUser();
    }
  }, [session?.user?.name]);

  return (
    <div className="flex flex-col gap-3 mt-3">
      <div>
        <div className=" flex items-center gap-2  justify-between ">
          <div className="w-full  h-0 border border-black "></div>
          <p className="  text-center m-0 text-blacks text-xs font-medium h-full inline-block">
            Or
          </p>
          <div className="w-full  h-0 border border-black "></div>
        </div>
        <p className="w-full text-center m-0 text-blacks text-xs font-medium h-full inline-block">
          continue with
        </p>
      </div>

      <div className="flex w-full gap-2 items-center justify-center">
        <div
          className={`flex items-center m-0 justify-center w-10 hover:shadow-cards transition duration-300 cursor-pointer rounded-lg h-10 mt-8 ${
            isGoogleButtonEnabled ? "" : "opacity-50 pointer-events-none"
          }`}
        >
          <FcGoogle
            className="inline-block text-3xl"
            onClick={() => {
              dispatch(handlerStatus("pending"));
              localStorage.setItem("userFetch", "pending");
              localStorage.setItem(isGoogleActive, true);
              console.log(signIn());
            }}
          />
        </div>
        <div className=" flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8">
          <BsFacebook className="inline-block text-blue-600 text-3xl" />
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
