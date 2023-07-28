'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Authentication() {
  const { data: session } = useSession();

  //? Inicio del Estado-Tipo Object que va a enviar la informacion a la bdd
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    rol: '',
    password: '',
    gender: '',
    birthday: '',
    phone: '',
    country: '',
    avatar: '',
    dniPasaport: '',
    status: true,
    thirdPartyCreated: true,
  });

  //? Control de la llegada de datos del Google Login
  useEffect(() => {
    if (session) {
      console.log(session?.user); //!Check User
      console.log(session?.user?.name);
      console.log(session?.user?.email);
      console.log(session?.user?.image);
    }
  }, []);

  const getGoogleData = (setForm) => {
    setForm({
      ...form,
      fullName: session?.user?.name,
      email: session?.user?.email,
      rol: '',
      password: process.env.PASSWORDTHIRDPARTY,
      gender: '',
      birthday: '',
      phone: '',
      country: '',
      avatar: session?.user?.image,
      dniPasaport: '',
      status: true,
      thirdPartyCreated: true,
    });
  };

  const dataLogin = {
    email: form.email,
    password: form.password,
  };

  useEffect(() => {
    getGoogleData(setForm);
  }, [session]);

  useEffect(() => {
    console.log('Esto es el form', form);
  }, [form]);

  const registerGoogleUser = async (form, data) => {
    if (session?.user) {
      console.log('form registerGoogle', form);
      try {
        const responseRegister = (
          await axios.post('http://localhost:3001/user', form)
        ).data;

        console.log(responseRegister);
      } catch (error) {}
    }
  };

  return (
    <div>
      <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
        <p className='mx-4 mb-0 text-center  dark:text-neutral-200'>Or</p>
      </div>
      <p className='mx-4 mt-[-17px] text-center dark:text-neutral-200'>
        Continue with
      </p>

      <div className=' flex  w-full mt-8'>
        <div className='w-full flex justify-end pr-2 items-center'>
          <button
            onClick={() => {
              signIn();
            }}
            className='  flex  items-center justify-center rounded bg-white p-1 text-center text-xs font-medium uppercase leading-normal text-red-500 shadow-sm transition duration-150 ease-in-out hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-white active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md'
          >
            <FcGoogle className='inline-block text-3xl' />
          </button>
        </div>
        <div className='w-full flex justify-start pl-2 items-center'>
          <button className=' flex  items-center justify-center rounded bg-white p-1 text-center text-xs font-medium uppercase leading-normal text-blue-500 shadow-sm transition duration-150 ease-in-out hover:bg-white hover:shadow-md focus:bg-white focus:shadow-md focus:outline-none focus:ring-0 active:bg-white active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md'>
            <BsFacebook className='inline-block text-3xl' />
          </button>
        </div>
      </div>
    </div>
  );
}
