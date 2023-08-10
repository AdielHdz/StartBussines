'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AuthLogin() {
  const router = useRouter();

  const handleSingOut = () => {
    signOut();
  };

  const { data: session, status: statusGoogle } = useSession() || {};

  //! 06. Se setea el estado error para capturar un error
  const [errorOc, setErrorOc] = useState(false);

  //! 01. Chequeo los datos que recibo de de Google Auth
  useEffect(() => {
    console.log(session?.user.name);
    console.log(session?.user.email);
  }, [session]);

  //! 02. Fomar el objeto inicial

  const [dataloggin, setDataLoggin] = useState({
    email: '',
    password: '',
  });

  //! 03. Funcion que setea y con los datos de Captura
  const getGoogleDataLogin = () => {
    setDataLoggin({
      ...dataloggin,
      email: session?.user?.email,
      password: 'ThirdPartyHenry12345!',
    });
  };

  //!03.1 Ejecuta la funcion

  useEffect(() => {
    getGoogleDataLogin();
  }, [session]);

  //! 04. Funcion para hacer la peticion del login

  const loginGoogle = async (dataL) => {
    if (statusGoogle === 'authenticated' && session?.user?.name) {
      console.log('dataloggin a peticion', dataL);

      try {
        const responseLogin2 = await axios.post('/user/login', dataL);
        const newLogin = responseLogin2.data;

        console.log('Esto datos del usuario loggeado', newLogin);
        console.log('Muy Bien!');
        console.log(newLogin.userRegistered.accessToken);
        console.log(newLogin.userRegistered.data.fullName);

        localStorage.setItem(
          'token_DealUp',
          newLogin.userRegistered.accessToken
        );
        localStorage.setItem('idSession', newLogin.userRegistered.data.id);
        localStorage.setItem('fullName', newLogin.userRegistered.data.fullName);
        localStorage.setItem('avatar', newLogin.userRegistered.data.avatar);
        localStorage.setItem('role', newLogin.userRegistered.data.role);
        localStorage.setItem('savedEmail', newLogin.userRegistered.data.email);

        localStorage.setItem(
          'userData',
          JSON.stringify({
            fullName: newLogin.userRegistered.data.fullName,
            email: newLogin.userRegistered.data.email,
            role: newLogin.userRegistered.data.role,
            address: newLogin.userRegistered.data.address,
            password: newLogin.userRegistered.data.password,
            gender: newLogin.userRegistered.data.gender,
            birthdate: newLogin.userRegistered.data.birthdate,
            phone: newLogin.userRegistered.data.phone,
            country: newLogin.userRegistered.data.country,
            avatar: newLogin.userRegistered.data.avatar,
            status: newLogin.userRegistered.data.status,
            thirdPartyCreated: newLogin.userRegistered.data.thirdPartyCreated,
          })
        );

        console.log('Debe estar seteado todo Register');

        router.push('/home');
      } catch (error) {
        console.log(error.response.data);
        setErrorOc(true);
        alert('Email is not register, please register');
      }
    }
  };

  //! 07. Si existe error enviar a Register

  useEffect(() => {
    if (errorOc) {
      router.push('/register');
    }
  }, [errorOc]);

  //! 05. Se ejecuta la funcion de peticion de Login

  useEffect(() => {
    if (
      statusGoogle === 'authenticated' &&
      typeof session?.user?.name === 'string'
    ) {
      console.log(statusGoogle);
      console.log(session?.user?.email);
      loginGoogle(dataloggin);
    }
  }, [dataloggin]);

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
