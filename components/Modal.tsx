'use client';

import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();

      // Schedule state change asynchronously to avoid React warning
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, []);

  function onHide() {
    setIsVisible(false); // trigger fade-out
    setTimeout(() => {
      modalRef.current?.close();
      router.back();
    }, 300); // match transition duration
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className={`
        fixed inset-0 m-auto max-w-[1300px] flex flex-col gap-5 p-4 rounded-md
        shadow-teal-700 shadow-md border border-teal-600
        transform transition-all duration-300
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>

      {children}
    </dialog>,
    document.getElementById('modal-root-content')!
  );
};

export default Modal;
