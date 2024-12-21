import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import { createPortal } from 'react-dom';

const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
      {isOpen && (
        <>
        <div className=' m-auto relative z-50 min-h-[200px] max-w-[80%] p-4 bg-white'>
          <div className='flex justify-end'>
            <AiOutlineClose onClick={onClose} className='text-2xl self-end'/>
          </div>
          {children}
        </div>
        <div onClick={onClose} className='backdrop-blur z-40 h-screen w-screen absolute top-0'/>
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal
