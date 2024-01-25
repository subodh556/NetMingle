import Button from '@/components/Button';
import useCurrentUser from '@/hooks/useCurrentUser'
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import React from 'react'


const Porm = () => {
    const currentUser=useCurrentUser();
    const loginModal=useLoginModal();
    const registerModal=useRegisterModal();

    if(currentUser){
        return null;
    }else{
        return(
            
        )
    }
    
}

export default Porm