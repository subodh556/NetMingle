import { useRouter } from 'next/router'
import React from 'react'

import Image from 'next/image';

const SidebarLogo = () => {
  const router=useRouter();
  return (
    <div  onClick={() => router.push('/')}
      className="rounded-full h-30 w-30 p-4 flex items-center justify-center   cursor-pointer transition">
            <Image src={'/images/post.png'} width={300} height={300} alt=""/>
    </div>
  )
}

export default SidebarLogo