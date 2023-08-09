'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthLogin() {
  const router = useRouter();

  const { data: session, status: statusGoogle } = useSession() || {}; // Inicializa con un objeto vacío si useSession() es undefined

  const [registerFailed, setRegisterFailed] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reg = localStorage.getItem('registerFailed');
      setRegisterFailed(reg);

      if (registerFailed === 'true') {
        signOut();
        localStorage.setItem('registerFailed', 'false');
      }
    }
  }, []);

  const handleSingOut = () => {
    signOut();
  };

  //! 01. Capturar los datos
  useEffect(() => {
    console.log(session?.user.name);
    console.log(session?.user.email);
    console.log(session?.user.image);
  }, [session]);

  //! 02. Plantilla para formar el objeto de la peticion
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });

  //! 03. Funcion Captura de datos Google Auth seteo DataLogin
  const getGoogleDataLogin = () => {
    setDataLogin({
      email: session?.user?.email,
      password: 'ThirdPartyHenry12345!',
    });
  };

  //!04. Capturar los datos de Google y Ejecutar la funcion de arriba
  useEffect(() => {
    getGoogleDataLogin();
    console.log(dataLogin);
    console.log(statusGoogle);
  }, [session]);

  //!05. Funcion para hacer la peticion al Back y hacer el login

  const loginGoogleUser = async (dataloggin) => {
    if (statusGoogle === 'authenticated' && session?.user?.email) {
      console.log('dataLogin a peticion', dataloggin);

      try {
        const responseLogin = await axios.post('/user/login', dataloggin);
        const newLoginData = responseLogin.data;
        console.log('Esto datos del usuario loggeado', newLoginData);
        console.log(newLoginData.userRegistered.accessToken);
        console.log(newLoginData.userRegistered.data.fullName);

        localStorage.setItem('token_DealUp', user.userRegistered.accessToken);
      } catch (error) {
        //! Setear error mostrar msje email not registered
        console.log(error.response.data);
        setErrorOccurred(true);

        alert('Email not registered, Please Register');
      }
    }

    useEffect(() => {
      if (errorOccurred) {
        router.push('/logIn');
      }
    }, [errorOccurred]);

    useEffect(() => {
      if (
        statusGoogle === 'authenticated' &&
        typeof session?.user?.email === 'string'
      ) {
        console.log(statusGoogle);
        console.log(session?.user?.name);
        loginGoogleUser(dataLogin);
      }
    }, [dataLogin]);
  };

  return (
    <div className='flex flex-col gap-3 mt-3'>
      <div>
        <div className=' flex items-center gap-2  justify-between '>
          <div className='w-full  h-0 border border-black '></div>
          <p className='  text-center m-0 text-blacks text-xs font-medium h-full inline-block'>
            Or
          </p>
          <div className='w-full  h-0 border border-black '></div>
        </div>
        <p className='w-full text-center m-0 text-blacks text-xs font-medium h-full inline-block'>
          continue with
        </p>
      </div>

      <div className='flex w-full gap-2 items-center justify-center'>
        <div className=' flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg h-10  mt-8'>
          <FcGoogle
            className='inline-block text-3xl'
            onClick={() => {
              signIn();
            }}
          />
        </div>
        <div className=' flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8'>
          <BsFacebook className='inline-block text-blue-600 text-3xl' />
          <button onClick={handleSingOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
