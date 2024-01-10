import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { FaFeather } from 'react-icons/fa';


const SidebarTweetButton = () => {
  const loginModal=useLoginModal();
  const router= useRouter();

  const onClick = useCallback(() => {
      
      return loginModal.onOpen();
  }, [loginModal]);
 
  return (
    <div onClick={onClick}>
        <div className=" mt-6 lg:hidden  rounded-full h-15 w-15 p-3 flex items-center justify-center text-white bg-customBlue hover:bg-opacity-80 transition cursor-pointer">
        New
        </div>
        <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-customBlue hover:bg-opacity-90 cursor-pointer transition ">
        <p className="= hidden lg:block text-center font-semibold text-white text-[20px]">
          New
        </p>
        </div>
    </div>
  )
}

export default SidebarTweetButton