import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const gitAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    };

    const signInWithGithub = () => {
        return signInWithPopup(auth, gitAuthProvider);
    };

    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
        })
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log("logged in user inside auth state observer", loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = { user, loading, createUser, signIn, logOut, signInWithGoogle, signInWithGithub, updateUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;