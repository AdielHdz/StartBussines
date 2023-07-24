'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import validation from './validations/validations';
import Background from 'public/asset/login.jpg';
import Authentication from '../../Components/Authentication/Authentication';
import CustomButton from '../../Components/customButton/CustomButton';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import NavigationButtons from '../../Components/NavigationButtons/NavigationButtons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function LogIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setErrors] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const [tokenSession, setTokenSession] = useLocalStorage('token_DealUp', '');
  const [idSession, setIdSession] = useLocalStorage('idSession', '');
  const [userNameSession, setUserNameSession] = useLocalStorage('fullName', '');
  const [avatarSession, setAvatarSession] = useLocalStorage('avatar', ['']);
  const [rolSession, setRolSession] = useLocalStorage('rol', '');
  const [savedEmail, setSavedEmail] = useLocalStorage('savedEmail', '');
  const [userSession, setUserSession] = useLocalStorage('userData', {
    fullName: '',
    email: '',
    rol: '',
    address: '',
    password: '',
    gender: '',
    birthdate: '',
    phone: '',
    country: '',
    avatar: '',
    status: '',
    thirdPartyCreated: null,
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };

  useEffect(() => {
    setUserSession({
      fullName: '',
      email: '',
      rol: '',
      address: '',
      password: '',
      gender: '',
      birthdate: '',
      phone: '',
      country: '',
      avatar: '',
      status: '',
      thirdPartyCreated: null,
    });
  }, []);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(form);

    axios
      .post('http://localhost:3001/user/login', form)
      .then((response) => {
        // console.log(response.data.userRegistered.data); // Muestra la respuesta en la consola
        // console.log(response.data.userRegistered.accessToken);

        setTokenSession(response.data.userRegistered.accessToken);
        setIdSession(response.data.userRegistered.data.id);
        setUserNameSession(response.data.userRegistered.data.fullName);
        setAvatarSession(response.data.userRegistered.data.avatar);
        setRolSession(response.data.userRegistered.data.rol);
        setSavedEmail(response.data.userRegistered.data.email);
        setUserSession({
          fullName: response.data.userRegistered.data.fullName,
          email: response.data.userRegistered.data.email,
          rol: response.data.userRegistered.data.rol,
          address: response.data.userRegistered.data.address,
          password: response.data.userRegistered.data.password,
          gender: response.data.userRegistered.data.gender,
          birthdate: response.data.userRegistered.data.birthdate,
          phone: response.data.userRegistered.data.phone,
          country: response.data.userRegistered.data.country,
          avatar: response.data.userRegistered.data.avatar,
          status: response.data.userRegistered.data.status,
          thirdPartyCreated:
            response.data.userRegistered.data.thirdPartyCreated,
        });

        router.push('/home');
      })
      .catch((error) => {
        console.log('Error:', error.response.data);
      });
  };

  return (
    <div className='h-screen w-full flex items-center justify-center text-white '>
      <div className=' absolute z-10 w-full h-full bg-black opacity-30'></div>
      <Image
        src={Background}
        alt='background'
        width={0}
        height={0}
        className='absolute top-0 h-full w-full object-cover'
      />
      <div
        className='relative z-20
            '
      >
        <div className=' p-5 mt-10 mb-10  '>
          <NavigationButtons currentPage='/logIn' />
          <form>
            <div className='flex flex-col mt-9'>
              <label htmlFor='email' className='text-white '>
                Email
              </label>
              <input
                type='email'
                name='email'
                placeholder='Type here...'
                onChange={handleChange}
                className={`bg-black bg-opacity-30 p-2 border ${
                  error.email ? 'border-red-500' : 'border-white'
                } mt-3  text-white w-full`}
              />
              {error.email && <p className='text-red-500'>{error.email}</p>}
            </div>

            <div className='flex flex-col mt-3'>
              <label htmlFor='password' className='text-white'>
                Password
              </label>
              <div className='relative'>
                <input
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Type here...'
                  onChange={handleChange}
                  className='bg-black bg-opacity-30 p-2 border border-white  text-white w-full'
                />
                <button
                  type='button'
                  onClick={handlePassword}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white'
                >
                  {showPassword ? (
                    <AiFillEye className='w-6 h-6' />
                  ) : (
                    <AiFillEyeInvisible className='w-6 h-6' />
                  )}
                </button>
              </div>
            </div>

            <CustomButton text='Login' color='blue' onClick={handleClick} />

            <Authentication />
          </form>
        </div>
      </div>
    </div>
  );
}
