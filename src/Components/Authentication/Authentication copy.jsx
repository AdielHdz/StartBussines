'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Authentication() {
  const router = useRouter();

  const { data: session } = useSession();

  //? Inicio del Object-State que va a enviar la informacion a la bdd
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

  // !Captura Rol
  useEffect(() => {
    localStorage.getItem('roleRegister');
  }, [form]);

  //? Control de la llegada de datos del Google Login
  useEffect(() => {
    if (session) {
      console.log(session?.user); //!Check User
      console.log(session?.user?.name);
      console.log(session?.user?.email);
      console.log(session?.user?.image);
    }
  }, []);

  //? Captura de datos de GoogleAuth y seteo de Form
  const getGoogleData = (setForm) => {
    setForm({
      ...form,
      fullName: session?.user?.name,
      email: session?.user?.email,
      role: '',
      password: 'ThirdPartyHenry12345!',
      avatar: session?.user?.image,
      status: true,
      confirmEmail: true,
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

  useEffect(() => {
    console.log('Esto es el DataLogin', dataLogin);
    registerGoogleUser(form, dataLogin);
  }, [form]);

  const registerGoogleUser = async (form, dataLogin) => {
    if (session?.user && localStorage.getItem('roleRegister')) {
      console.log('form registerGoogle', form);

      (form.role = localStorage.getItem('roleRegister')),
        console.log('FormWithRole', form);
      try {
        const responseRegister = await axios.post('/user', form);
        const newUserData = responseRegister.data;
        // console.log('Esto es newUserData Register', newUserData);

        const responseLogin = await axios.post('/user/login', dataLogin);
        const loginUserData = responseLogin.data;
        console.log('Esto es loginUserData Register', loginUserData);

        localStorage.setItem(
          'token_DealUp',
          loginUserData.userRegistered.accessToken
        );
        localStorage.setItem('idSession', loginUserData.userRegistered.data.id);
        localStorage.setItem(
          'fullName',
          loginUserData.userRegistered.data.fullName
        );
        localStorage.setItem(
          'avatar',
          loginUserData.userRegistered.data.avatar
        );
        localStorage.setItem('role', loginUserData.userRegistered.data.role);
        localStorage.setItem(
          'savedEmail',
          loginUserData.userRegistered.data.email
        );

        localStorage.setItem(
          'userData',
          JSON.stringify({
            fullName: loginUserData.userRegistered.data.fullName,
            email: loginUserData.userRegistered.data.email,
            role: loginUserData.userRegistered.data.role,
            address: loginUserData.userRegistered.data.address,
            password: loginUserData.userRegistered.data.password,
            gender: loginUserData.userRegistered.data.gender,
            birthdate: loginUserData.userRegistered.data.birthdate,
            phone: loginUserData.userRegistered.data.phone,
            country: loginUserData.userRegistered.data.country,
            avatar: loginUserData.userRegistered.data.avatar,
            status: loginUserData.userRegistered.data.status,
            thirdPartyCreated:
              loginUserData.userRegistered.data.thirdPartyCreated,
          })
        );

        console.log('Debe estar seteado todo Register');

        // console.log(responseRegister);
      } catch (error) {
        // console.error('Register User Error:', error);

        // console.log('DataLogin para logear', dataLogin);
        try {
          const responseLogin = await axios.post('/user/login', dataLogin);
          const loginUserData = responseLogin.data;
          console.log('Esto es loginUserData Register', loginUserData);

          localStorage.setItem(
            'token_DealUp',
            loginUserData.userRegistered.accessToken
          );
          localStorage.setItem(
            'idSession',
            loginUserData.userRegistered.data.id
          );
          localStorage.setItem(
            'fullName',
            loginUserData.userRegistered.data.fullName
          );
          localStorage.setItem(
            'avatar',
            loginUserData.userRegistered.data.avatar
          );
          localStorage.setItem('role', loginUserData.userRegistered.data.role);
          localStorage.setItem(
            'savedEmail',
            loginUserData.userRegistered.data.email
          );

          localStorage.setItem(
            'userData',
            JSON.stringify({
              fullName: loginUserData.userRegistered.data.fullName,
              email: loginUserData.userRegistered.data.email,
              role: loginUserData.userRegistered.data.role,
              address: loginUserData.userRegistered.data.address,
              password: loginUserData.userRegistered.data.password,
              gender: loginUserData.userRegistered.data.gender,
              birthdate: loginUserData.userRegistered.data.birthdate,
              phone: loginUserData.userRegistered.data.phone,
              country: loginUserData.userRegistered.data.country,
              avatar: loginUserData.userRegistered.data.avatar,
              status: loginUserData.userRegistered.data.status,
              thirdPartyCreated:
                loginUserData.userRegistered.data.thirdPartyCreated,
            })
          );

          console.log('Debe estar seteado todo error Register Login');
        } catch (error) {
          // console.error('Login User Error:', error);
        }
      }
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
          <FcGoogle
            className='inline-block text-3xl'
            onClick={() => {
              signIn();
            }}
          />
        </div>
        <div className=' flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8'>
          <BsFacebook className='inline-block text-blue-600 text-3xl' />
        </div>
      </div>
    </div>
  );
}
