import { createContext, useState } from "react";
import {createUserWithEmailAndPassword,  } from "firebase/auth";
import { auth } from "../firebase.js";

const FirebaseContext = createContext();


export const FirebaseContextProvider = ({children})=>{

    const [authToken,setAuthToken]= useState(null)
    const [user,setUser]= useState(null)

     const register= async(email,password)=>{
        try{
            const result = await createUserWithEmailAndPassword(auth,email,password)
            console.log('Giriş Başarılı:',result)
           

        }catch(error){
            console.log('Giriş Başarısız:',error)
        }
     }









    return(
        <FirebaseContext.Provider value={{authToken,user,register}}>
            {children}
        </FirebaseContext.Provider>
    )
}


export default FirebaseContext;