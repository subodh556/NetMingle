import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
import { useRouter } from 'next/router';
import React, { useCallback} from 'react'
import { IconType } from 'react-icons';
import { BsDot } from 'react-icons/bs';
import Avatar from '../Avatar';

interface SidebarItemProps {
    label: string;
    icon: IconType;
    href?: string;
    onClick?: () => void;
    auth?:boolean
    alert?:boolean
}
const SidebarItem:React.FC<SidebarItemProps> = ({
    label, icon:Icon , href,onClick,auth,alert
}) => {
    const loginModal=useLoginModal();
    const {data:currentuser} = useCurrentUser();
  const router = useRouter();
  const handlClick=useCallback(()=>{
    if(onClick){
        return onClick();
    }
    if(auth && !currentuser){
        loginModal.onOpen();
    }
    
    else if(href){
        router.push(href);
    }
    
  },[router,onClick,href,currentuser,auth,loginModal]);

  return (
    <div onClick={handlClick} className="flex flex-row items-center">
         <div className="relative rounded-full h-20 w-20 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
         {(currentuser && label==="Profile") ?
            <><Avatar userId={currentuser.id} isSmall />
            
        </>:<><Icon size={29} color="white" />
            
            </>}
            {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
        </div>
        <div className="relative hidden lg:flex items-row gap-5 w-80 p-1 py-3 rounded-lg hover:bg-slate-300 
        hover:bg-opacity-10 cursor-pointer items-center">
            {(currentuser && label==="Profile") ?
            <><Avatar userId={currentuser.id} isSmall/>
            <p className="hidden lg:block text-white text-xl">
                {currentuser.name}
            </p>
        </>:<><Icon size={29} color="white" />
            <p className="hidden lg:block text-white text-xl">
                {label}
            </p>
            </>}
            
            
            {alert ? <BsDot className="text-sky-500 absolute -top-4 left-0" size={70} /> : null}
        </div>
    </div>  
  );
}

export default SidebarItem