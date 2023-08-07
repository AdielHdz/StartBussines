'use client';
import OptionEntrepreneur from '../../Components/SelectWay/OptionEntrepreneur';
import OptionInvestor from '../../Components/SelectWay/OptionInvestor';
import { useState, useEffect } from 'react';
import logo from '../../../public/asset/DealUp.png';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SelectRol = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const [enIsActive, setEntrepreneur] = useState(false);
  const [inIsActive, setInvestor] = useState(false);

  console.log('useSession', status);

  //! UseEffect para ir directamente a Google Auth solo una vez

  let checkReg = null;

  useEffect(() => {
    const storedCheckReg = localStorage.getItem('checkReg');
    console.log('checkReg init', storedCheckReg);

    console.log(session);
    console.log(storedCheckReg);
    console.log(typeof storedCheckReg);

    if (
      (storedCheckReg === 'false' || storedCheckReg === null) &&
      status === 'unauthenticated'
    ) {
      signIn();
      localStorage.setItem('checkReg', 'true');
    }

    if (storedCheckReg === 'true' && status === 'unauthenticated') {
      console.log('hola');
      alert('Something is wrong, try again');
      localStorage.setItem('checkReg', 'false');
      router.push('/logIn');
    }
  }, [status]);

  const handleSingOut = () => {
    localStorage.setItem('checkReg', false);
    signOut();
  };

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
  return (
    <div className='w-screen h-screen p-20 '>
      <div className='flex justify-center  w-100'>
        <Image className='flex justify-center  w-80' src={logo} width={100} />
      </div>
      <div className='my-custom-class'>
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
      <button
        onClick={() => {
          handleSingOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SelectRol;
