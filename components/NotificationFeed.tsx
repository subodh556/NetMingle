import useNotifications from "@/hooks/useNotifications";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect } from "react";
import Avatar from "./Avatar";
import { useRouter } from "next/router";

const NotificationsFeed = () => {
  const router=useRouter();
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { data: fetchedNotifications = [] } = useNotifications(currentUser?.id);
  const regex=/^\w+/;
  const rege = /(?<=^\w+)\s+(.*)/;
  useEffect(() => {
    mutateCurrentUser();
  }, [mutateCurrentUser]);
  
  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    )
  }
  
  return ( 
    
    <div className="flex flex-col ">
      {fetchedNotifications.map((notification: Record<string, any>) => (
        
        <div key={notification.id} className="flex flex-row items-center p-4 gap-3  border-neutral-800">
          <div key={notification.notuid} className="flex flex-row gap-2 items-center ">
                <Avatar userId={notification.notuid} />
                  
                  <p className=" text-cyan-200  items-center cursor-pointer " onClick={()=>{router.push(`/users/${notification.notuid}`)}}>@{notification.body.match(regex)[0]}</p>
                  <p className="text-white">
             {notification.body.replace(regex, "")}
         
          </p>
                
                
          </div>
          
        </div>
        
        ))}
    </div>
   );
}
 
export default NotificationsFeed;