import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './styles.module.scss';
import styles from './styles.module.scss';
import {X} from 'lucide-react'

interface ModalProps {
  buttonLabel: string;
  children: ReactNode;
  fill: 'filled' | 'blank',
}

const Modal: React.FC<ModalProps> = ({ buttonLabel, children, fill }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonStyle = `${styles.button} ${styles[fill]}`;

  const closeModal = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => document.removeEventListener('mousedown', closeModal);
  }, []);

  return (
    <>
      <div className={buttonStyle} onClick={() => setIsOpen(true)}>{buttonLabel}</div>
      {isOpen ? (
        <div className={styles['modal-backdrop']}>
          <div className={styles['modal-content']} ref={modalRef}>
            <button className={styles['close-button']} onClick={() => setIsOpen(false)}><X color='var(--text-modal)'/></button>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;