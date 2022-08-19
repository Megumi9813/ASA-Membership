import { createContext, useEffect, useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

export const UserContext = createContext({})

export const useUserContext = () => {
    return useContext(UserContext)
}

export const UserContectProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (res) => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    const registerUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
          .then(() =>
            updateProfile(auth.currentUser, {
              displayName: name,
            })
          )
        //   .then((res) => console.log(res))
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
    };

    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            // .then((res) => console.log(res))
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    };

    const logoutUser = () => {
        signOut(auth);
    };

    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const contextValue = {
        user,
        loading,
        error,
        signInUser,
        registerUser,
        logoutUser,
        forgotPassword,
    };

    return (
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    );
}