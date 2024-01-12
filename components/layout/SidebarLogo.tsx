import { useRouter } from 'next/router'
import React from 'react'

import Image from 'next/image';

const SidebarLogo = () => {
  const router=useRouter();
  return (
    <div>
      <div className="relative rounded-full h-20 w-20 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
      <Image src={'/images/pii.png'} width={500} height={30} alt=""/>
</div>
      <div  onClick={() => router.push('/')}
      className="relative hidden lg:flex items-row gap-4  p-4 rounded-full 
      cursor-pointer items-center ">
            <Image src={'/images/piii.png'} width={300} height={30} alt=""/>
      </div>
    </div>
    
    
    
  )
}

export default SidebarLogo