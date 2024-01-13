import Form from "@/components/Form";
import Header from "@/components/Header";

import PostFeed from "@/components/posts/PostFeed";
import useCurrentUser from "@/hooks/useCurrentUser";
import Porm from "../components/Porm";



export default function Home() {
  const currentUser=useCurrentUser();
  return (
    <>
      <Header label="Home"/>
      
      <Porm />
      <div className="text-customBlue text-xl font-bold p-4 px-6"> Recent Posts </div>
      <PostFeed/>
    </>
  )
}
