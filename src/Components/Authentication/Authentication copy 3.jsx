'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Authentication() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const handleSingOut = () => {
    localStorage.setItem('checkReg', false);
    signOut();
  };

  //! 01. Chequeo los datos que recibo de de Google Auth
  useEffect(() => {
    console.log(session?.user.name);
    console.log(session?.user.email);
    console.log(session?.user.image);
  }, [session]);

  //! 02. Formar valor inicial de Form objeto para la peticion

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    role: '',
    password: '',
    dni: null,
    gender: '',
    birthdate: '',
    phone: '',
    country: '',
    avatar: '',
    avatar: session?.user?.image,
    status: true,
    confirmEmail: true,
    thirdPartyCreated: true,
  });

  //!  03. Captura Rol
  useEffect(() => {
    localStorage.getItem('roleRegister');
  }, [form, session]);

  //! 04. Fumcion Captura de datos de GoogleAuth y seteo de Form
  const getGoogleData = (setForm) => {
    setForm({
      ...form,
      fullName: session?.user?.name,
      email: session?.user?.email,
      role: localStorage.getItem('roleRegister'),
      password: 'ThirdPartyHenry12345!',
      avatar: session?.user?.image,
      status: true,
      confirmEmail: true,
      thirdPartyCreated: true,
    });
  };

  //! 06. Funcion para hacer la Peticion a Google y hacer el Registe y Login
  const registerGoogleUser = async (form) => {
    if (status === 'authenticated' && session.user.name) {
      console.log('form a peticion', form);

      try {
        const responseRegister = await axios.post('/user', form);
        const newUserData = responseRegister.data;
        console.log('Esto es newUserData Register', newUserData);

        //! 09. Datos para hacer Login

        const dataLogin = {
          email: form.email,
          password: form.password,
        };

        console.log(dataLogin);
        const responseLogin = await axios.post('/user/login', dataLogin);
        const user = responseLogin.data;

        console.log('Esto datos del usuario loggeado', user);
        console.log('Muy Bien!');
        console.log(user.userRegistered.accessToken);
        console.log(user.userRegistered.data.fullName);

        localStorage.setItem('token_DealUp', user.userRegistered.accessToken);
        localStorage.setItem('idSession', user.userRegistered.data.id);
        localStorage.setItem('fullName', user.userRegistered.data.fullName);
        localStorage.setItem('avatar', user.userRegistered.data.avatar);
        localStorage.setItem('role', user.userRegistered.data.role);
        localStorage.setItem('savedEmail', c);

        localStorage.setItem(
          'userData',
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

        console.log('Debe estar seteado todo Register');
      } catch (error) {
        console.log(error);
        alert('Email registered, Please Login');
      }
    }
  };

  //! Unir funciones para ejecutar el orden
  const getGoogleDataAndRegister = () => {
    getGoogleData(setForm);
    registerGoogleUser(form);
  };

  useEffect(() => {
    if (status === 'authenticated' && session?.user) getGoogleDataAndRegister();
  }, [status, session]);

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
          <button
            onClick={() => {
              handleSingOut();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
