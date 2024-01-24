import React, { useCallback } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import Button from './Button';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled }) => {
    const handleClose = useCallback(() => {
        if (disabled) {
          return;
        }
      
        onClose();
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
          return;
        }
    
        onSubmit();
    }, [onSubmit, disabled]);

    if (!isOpen) {
        return null;
    }
    
  return (
    <>
        
    </>
  )
}

export default Modal