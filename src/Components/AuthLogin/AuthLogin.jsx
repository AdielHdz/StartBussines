"use client";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Authentication() {
  //Desactivar boton google
  const [isGoogleButtonEnabled, setGoogleButtonEnabled] = useState(true);
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

  const {
    data: session,
    status: statusGoogle,
    update: UpdateSession,
  } = useSession() || {}; // Inicializa con un objeto vacío si useSession() es undefined

  console.log({ session, statusGoogle, UpdateSession });
  const isGoogleActive = "isGoogleActive";

  const handleSignOut = () => {
    signOut({
      callbackUrl: "/register", // Redirige a esta URL después del cierre de sesión
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
        email: session.user.email,
        password: "ThirdPartyHenry12345!",
      };
      const userLoginHandler = async () => {
        await axios
          .post("user/login", userData)
          .then((response) => {
            const user = response.data;
            console.log(user);

            localStorage.setItem(
              "token_DealUp",
              user.userRegistered.accessToken
            );
            localStorage.setItem("idSession", user.userRegistered.data.id);
            localStorage.setItem("fullName", user.userRegistered.data.fullName);
            localStorage.setItem("avatar", user.userRegistered.data.avatar);
            localStorage.setItem("role", user.userRegistered.data.role);
            localStorage.setItem("savedEmail", user.userRegistered.data.email);

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
                thirdPartyCreated: user.userRegistered.data.thirdPartyCreated,
              })
            );
            localStorage.setItem(isGoogleActive, false);

            router.push("/home");
          })
          .catch((error) => {
            console.log(error);
            if (
              error.response.data.error === "User not found, please register"
            ) {
              localStorage.setItem(isGoogleActive, false);
              alert("User not found, please register");
              handleSignOut();
            } else {
              consol.log(error);
            }
          });
      };

      userLoginHandler();
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
              localStorage.setItem("userFetch", "pending");
              localStorage.setItem(isGoogleActive, true);
              console.log(signIn());
            }}
          />
        </div>
      </div>
    </div>
  );
}
