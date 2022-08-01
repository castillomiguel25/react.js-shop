import React, { Component } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from "../Callfirebase/firebase";



export default class Login extends Component{
    
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        let provider = new firebaseApp.auth.GoogleAuthProvider();

        firebaseApp.auth().signInWithPopup(provider).then(result => {
            console.log(result)
        })
    }
render(){
    return(
        <button onClick={this.login}> ingresar</button>
    )
}

}

