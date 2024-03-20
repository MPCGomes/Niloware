import React from 'react';
import Modal from '../Modal';
import styles from './styles.module.scss'

const RegisterModal: React.FC = () => {
    return (
        <Modal buttonLabel="REGISTRAR-SE" fill='blank'>
          <div className={styles.title}>Registrar-se</div>
          <div className={styles.inputContainer}>
            <div className={styles.inputName}>Usuário</div>
            <input className={styles.input}></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputName}>Aniversário</div>
            <input type='date' className={styles.input}></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputName}>Email</div>
            <input className={styles.input}></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputName}>Senha</div>
            <input className={styles.input} type='password'></input>
          </div>
          <button className={styles.button}>ENVIAR</button>
        </Modal>
    );
};

export default RegisterModal;