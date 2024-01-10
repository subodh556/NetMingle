import Form from "@/components/Form";
import Header from "@/components/Header";

import PostFeed from "@/components/posts/PostFeed";
import useCurrentUser from "@/hooks/useCurrentUser";



export default function Home() {
  const currentUser=useCurrentUser();
  return (
    <>
      <Header label="Home"/>
        
      <Form placeholder="Write a post"/>
      <div className="text-customBlue text-xl font-bold p-4 px-6"> New Posts </div>
      <PostFeed/>
    </>
  )
}
