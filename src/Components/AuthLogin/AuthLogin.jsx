'use client';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthLogin() {
  const router = useRouter();

  const [registerFailed, setRegisterFailed] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reg = localStorage.getItem('registerFailed');
      setRegisterFailed(reg);

      if (reg === 'true') {
        signOut();
        localStorage.setItem('registerFailed', 'false');
      }
    }
  }, []);

  const handleSingOut = () => {
    signOut();
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
          <FcGoogle className='inline-block text-3xl' onClick={() => {}} />
        </div>
        <div className=' flex items-center m-0 justify-center w-10  hover:shadow-cards transition duration-300 cursor-pointer rounded-lg  h-10  mt-8'>
          <BsFacebook className='inline-block text-blue-600 text-3xl' />
          <button onClick={handleSingOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
}
