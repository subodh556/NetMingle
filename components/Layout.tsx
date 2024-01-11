import React from 'react'
import Sidebar from './layout/Sidebar';
import FollowBar from './layout/FollowBar';
interface LayoutProps{
    children:React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-black'>
        <div className="container h-full mx-auto xl:px-30 max-w-8xl ">
        <div className="grid grid-cols-4 h-full">
          <div className='relative'>
            <div className='absolute'>
              <Sidebar/>
            </div>
          </div>
          
          
          <div className="col-span-3 lg:col-span-2 border-x-[1px] bg-neutral-900 rounded-xl mt-4 border-neutral-900 ">
            {children}
          </div>
          
              <FollowBar/>
            
        </div>
          
        </div>
        
    </div>
    
  )
}

export default Layout