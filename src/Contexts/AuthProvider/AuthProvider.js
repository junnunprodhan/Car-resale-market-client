import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/firebase.config';


export const AuthContext =createContext();
const auth =getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true)


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
      }

      const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
      }

      const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }

      const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }

      const logout = () => {
        setLoading(true)
        return signOut(auth)
      }

      useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,currentUser=>{
          
          setUser(currentUser)
          setLoading(false)
        })

        return ()=>{
          return unsubscribe()
        }
      },[])




      const authInfo = {
        signInWithGoogle,
        signin,
        createUser,
        logout,
        loading,
        user,
        signInWithGithub
      }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;