import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'




const SidebarTweetButton = () => {
  
  const loginModal=useLoginModal();
  const {data:currentuser} = useCurrentUser();
  const router= useRouter();
  const onClick = useCallback(() => {
      if(currentuser){
        router.push('/')
      }else{
        return loginModal.onOpen();
      }
      
      
      
  }, [loginModal,currentuser,router]);
 
  return (
    <div onClick={onClick}>
        <div className=" mt-6 lg:hidden  rounded-full h-15 w-15 p-3 flex items-center justify-center text-white bg-customBlue hover:bg-opacity-80 transition cursor-pointer">
        New
        </div>
        <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-customBlue hover:bg-opacity-90 cursor-pointer transition ">
        <p className="= hidden lg:block text-center font-semibold text-white text-[20px]">
          New Post
        </p>
        
        
        </div>

    </div>

  )
}

export default SidebarTweetButton