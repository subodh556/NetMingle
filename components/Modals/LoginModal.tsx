import useLoginModal from '@/hooks/useLoginModal';
import React, { useCallback, useState } from 'react'
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

const LoginModal = () => {
  const loginModal = useLoginModal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const registerModal=useRegisterModal();
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      loginModal.onClose();

    } catch (error) {
      console.log(error);
    } 
    finally {
        setIsLoading(false);
    }
  }, [loginModal]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onOpen();
    loginModal.onClose();
  }, [loginModal, registerModal, isLoading]);

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>First time using Twitter?
        <span 
          onClick={onToggle} 
          className=" text-white  cursor-pointer hover:underline"
          > Create an account
          </span>
      </p>
    </div>
  )

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}  
      />
      <Input 
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading} 
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
      
    />
  )
}

export default LoginModal