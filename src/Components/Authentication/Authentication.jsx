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
          <FcGoogle className='inline-block text-3xl' />
        </div>
        <div className=' flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8'>
          <BsFacebook className='inline-block text-blue-600 text-3xl' />
        </div>
      </div>
    </div>
  );
}
