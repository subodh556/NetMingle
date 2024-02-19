import Button from '@/components/Button';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import React from 'react'


const Porm = () => {
    const loginModal=useLoginModal();
    const registerModal=useRegisterModal();

    
        return(
            <div className="py-2 ">
              <h1 className="text-white text-2xl text-center mb-4 font-bold">
              👋 Welcome to <span className='text-customBlue'>Post It!</span> 🚀
              </h1>
              <p className="text-white text-1xl mb-7 mx-6">Discover the power of concise expression! PostIt is your go-to destination for sharing thoughts, connecting with friends, and engaging with a vibrant community! </p>
    
              <div className="flex flex-row items-center justify-center gap-4">
                  <Button label="Login" onClick={loginModal.onOpen} />
                  <Button label="Register" onClick={registerModal.onOpen} secondary />
              </div>
            </div>
        )
    
    
}

export default Porm