import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext=createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);


// Create User
const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

// signIn with email password
const SignIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

// SignIn with google
const provider=new GoogleAuthProvider();
const GoogleSignIn=()=>{
    return signInWithPopup(auth,provider)

}

// Logout user
const  SignOut=()=>{
    setLoading(true);
    return signOut(auth);
}

// update user profile
const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser, {

    displayName: name, photoURL: photo

});
}

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log(currentUser);
        if(currentUser){
            axios.post('https://surtal-music-server.vercel.app/jwt', {email: currentUser.email})
            .then(data =>{
                // console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }

        setLoading(false);
    })
    return()=>{
        return unSubscribe();
    }

},[])
    const authInfo={
        user,
        loading,
        createUser,
        SignIn,
        SignOut,
        GoogleSignIn,
        updateUserProfile


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>   
       
    );
};

export default AuthProvider;