import React from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss'

const LoginModal: React.FC = () => {
    return (
      <Modal buttonLabel="ENTRAR" fill='filled'>
      <div className={styles.title}>Registrar-se</div>
      <div className={styles.inputContainer}>
        <div className={styles.inputName}>Usuário</div>
        <input className={styles.input}></input>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputName}>Senha</div>
        <input className={styles.input} type='password'></input>
      </div>
      <button className={styles.button}>ENTRAR</button>
    </Modal>
    );
};

export default LoginModal;