import { async } from '@firebase/util';
import React, { useState } from 'react'
import styles from '../styles/login.module.css'

import firebaseApp from "../Callfirebase/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"

const auth = getAuth(firebaseApp);

function Logins() {
  const firestore = getFirestore(firebaseApp)
  const [isRegister, setIsRegister] = useState(false);

  async function RegisterUser(email, password, rol) {
    const infUser = await createUserWithEmailAndPassword(auth, email, password).then((usuariofirebase) => {
      return usuariofirebase;
    });
    console.log(infUser.user.uid);
    const docuRef = doc(firestore, `usuarios/${infUser.user.uid}`);
    setDoc(docuRef, { correo: email })
    // setDoc(docuRef, { correo: email, rol: rol })
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    // const rol = e.target.elements.rol.value;
    console.log('submit', email, password);
    // console.log('submit', email, password, rol);

    if (isRegister) {
      //REGIS
      RegisterUser(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <div className={styles.box}>
      <form onSubmit={submitHandler}>
      <fieldset>
      <legend><b><h1>{isRegister ? "Registrate" : "Inicia sesión"}</h1></b></legend>
    
          <div className={styles.inputBox}>
            <input type="text" name="email" id="email" className={styles.inputUser} required />
            <label for="email" className={styles.labelInput}>Email</label>
          </div>

          <div className={styles.inputBox}>
            <input type="password" name="password" id="password" className={styles.inputUser} required />
            <label for="password" className={styles.labelInput}>Contrasena</label>
          </div>

          <input className={styles.submit}  type="submit"
          value={isRegister ? "Registrar" : "iniciar sesión"}  name="submit" id="submit" />

          <button className={styles.submits} onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'ya tengo una cuenta' : 'Quiero Registrarme'}
      </button>
        </fieldset>
      </form>
    </div>
  )
}

export default Logins