import React, { useCallback, useEffect, useState } from 'react'
import useCurrentUser from '@/hooks/useCurrentUser';
import useUser from '@/hooks/useUser';
import useEditModal from '@/hooks/useEditModal';
import toast from 'react-hot-toast';
import axios from 'axios';
import Modal from '../Modal';

import usePostModal from '@/hooks/usePostModal';
import usePosts from '@/hooks/usePosts';

import Avatar from '../Avatar';
import ImgUpload from '../ImgUpload';
import Button from '../Button';


const PostModal = () => {
  
  
  const postModal = usePostModal();
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  

  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [PostImage , setPostImage]=useState('');
  

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      
      const url = '/api/posts';
      
      await axios.post(url, { body,PostImage });
      
      toast.success('Post created');
      
      setPostImage('');
      
      setBody('');
      mutatePosts();
      
      postModal.onClose();
      
    } catch (error) {
      
      toast.error('Image is Not Appropriate');
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts,PostImage,postModal]);
  
  
  const bodyContent = (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
        {currentUser && (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <ImgUpload value={PostImage} disabled={isLoading} onChange={(image) =>  setPostImage(image)} label="Upload image" />
            
            
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
              placeholder="write a post">
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
            
          </div>
        </div>
      ) }
    </div>

  )


  return (
    <Modal
        disabled={isLoading}
        isOpen={postModal.isOpen}
        title="Create a post"
        actionLabel="Post"
        onClose={postModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
    />
  )
}

export default PostModal