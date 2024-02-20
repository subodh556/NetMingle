import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationFeed";

import { NextPageContext } from "next";
import { getSession } from "next-auth/react";


const Notifications = () => {
  return ( 
    <>
      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
   );
}
 
export default Notifications;