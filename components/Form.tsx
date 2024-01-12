import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import usePosts from '@/hooks/usePosts';
import usePost from '@/hooks/usePost';

import Avatar from './Avatar';
import Button from './Button';

import ImgUpload from './ImgUpload';


interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}
  
const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [PostImage , setPostImage]=useState('');
  
 
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      
      const url = isComment ? `/api/comments?postId=${postId}` : '/api/posts';
      
      await axios.post(url, { body});
      
      toast.success('Post created');
      
      setBody('');
      mutatePosts();
      mutatePost();
      
    } catch (error) {
      
      toast.error('Image is Not Appropriate');
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, isComment, postId, mutatePost]);

  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
        {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            
            
            <textarea
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              className="
                disabled:opacity-80
                peer
                resize-none 
                mt-3 
                p-3
                w-full 
                rounded-md
                bg-neutral-800 
                ring-0 
                outline-none 
                text-[15px] 
                placeholder-neutral-500 
                text-white
              "
              placeholder={placeholder}>
            </textarea>
            
            <hr 
              className="
                opacity-0 
                peer-focus:opacity-100 
                h-[1px] 
                w-full 
                border-neutral-800 
                transition"
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button disabled={isLoading || !body} onClick={onSubmit} label="comment" />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-2">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
          👋 Welcome to <span className='text-customBlue'>Post It!</span> 🚀
          </h1>
          <p className="text-white text-1xl mb-7 ">Discover the power of concise expression! PostIt is your go-to destination for sharing thoughts, connecting with friends, and engaging with a vibrant community! </p>

          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  )
}

export default Form