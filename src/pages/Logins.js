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
    setDoc(docuRef, { correo: email, rol: rol })
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    console.log('submit', email, password, rol);

    if (isRegister) {
      //REGIS
      RegisterUser(email, password, rol);
    } else {
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <h1>{isRegister ? "Registrate" : "Inicia sesión"}</h1>

        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.label}>
            <span>Email:</span>
            <input type='email'
              name='email'
              className={styles.input}
              required
              placeholder='Email'
              id="email"
            />
          </label>
          <label className={styles.label}>
            <span>contrasena:</span>
            <input type='password'
              name='password'
              className={styles.input}
              required
              id="password"
              placeholder='Ingrese su contrasena'
            />
          </label>

          <label className={styles.label}>
            <span>Rol:</span>
            <select id="rol"  className={styles.input}>
              <option value='admin'>Administrador</option>
              <option value='user'>Usuario</option>
            </select>
          </label>

          <input
           className={styles.primarybuttons}
            type="submit"
            value={isRegister ? "Registrar" : "iniciar sesión"}
            
          />
        </form>

        <button className={styles.primarybutton} onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'ya tengo una cuenta' : 'Quiero Registrarme'}
        </button>
      </div>
    </div>
  )
}

export default Logins