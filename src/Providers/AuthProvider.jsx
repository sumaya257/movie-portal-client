import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from '../Firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Registration
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth); // Properly log out from Firebase
        } catch (error) {
            console.error('Error during logout:', error.message);
        } finally {
            setLoading(false); // Ensure loading state is updated
        }
    };

    // Update Profile
    const updateUserProfile = async (updatedData) => {
        try {
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, updatedData);
                setUser({ ...auth.currentUser, ...updatedData }); // Update local user state
            }
        } catch (error) {
            console.error('Failed to update user profile:', error.message);
        }
    };

    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    ...currentUser,
                    displayName: currentUser.displayName || '',
                    photoURL: currentUser.photoURL || '',
                });
            } else {
                setUser(null);
            }
            setLoading(false); // Ensure loading is false after user state is set
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut,
        updateUserProfile,
        loading,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
