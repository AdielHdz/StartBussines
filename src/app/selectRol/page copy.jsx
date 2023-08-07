'use client';
import OptionEntrepreneur from '../../Components/SelectWay/OptionEntrepreneur';
import OptionInvestor from '../../Components/SelectWay/OptionInvestor';
import { useState, useEffect } from 'react';
import logo from '../../../public/asset/DealUp.png';
import Image from 'next/image';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SelectWay = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  //! Inicio del Object-State que va a enviar la informacion a la bdd
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

  //! UseEffect para ir directamente a Google Auth solo una vez
  useEffect(() => {
    const checkReg = localStorage.getItem('checkReg');

    if (!checkReg) {
      signIn();
      localStorage.setItem('checkReg', true);
    }
  }, []);

  //! Control de la llegada de datos del Google Login
  useEffect(() => {
    if (session) {
      console.log(session?.user); //!Check User
      console.log(session?.user?.name);
      console.log(session?.user?.email);
      console.log(session?.user?.image);
    }
  }, []);

  // !Captura Rol
  useEffect(() => {
    localStorage.getItem('roleRegister');
  }, [form]);

  //! Captura de datos de GoogleAuth y seteo de Form
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

  //! Captura data para Login
  const dataLogin = {
    email: form.email,
    password: form.password,
  };

  //!Llenar Form con los datos capturados de google
  useEffect(() => {
    getGoogleData(setForm);
  }, [session]);

  const handleEntrepreneur = () => {
    setEntrepreneur(true);
    setInvestor(false);
    localStorage.setItem('roleRegister', 'entrepreneur');
  };
  const handleInvestor = () => {
    setInvestor(true);
    setEntrepreneur(false);
    localStorage.setItem('roleRegister', 'investor');
  };

  //!Cuando cambia el form ejecuto la funcion para registrarme revisar si se puede mejorar
  useEffect(() => {
    registerGoogleUser(form, dataLogin);
  }, [form]);

  //!Funcion Registro
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
    <div className='w-screen h-screen p-20 '>
      <div className='flex justify-center  w-100'>
        <Image className='flex justify-center  w-80' src={logo} width={100} />
      </div>
      <div className>
        <div className='flex flex-col justify-center items-center mb-10 w-full'>
          <h1 className='text-orangeMedium '>Welcome!</h1>
          <label htmlFor='fullName' className='text-orangeMedium  '>
            Please choose a role to continue
          </label>
        </div>
        <div className='flex justify-center items-center gap-3 rounded-xl py-2'>
          <OptionEntrepreneur
            selected={enIsActive}
            handleEntrepreneur={handleEntrepreneur}
          />
          <OptionInvestor
            selected={inIsActive}
            handleInvestor={handleInvestor}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectWay;
