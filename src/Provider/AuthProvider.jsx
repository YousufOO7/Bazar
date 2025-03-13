import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase_config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // create a new user register
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

     // update user profile
     const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

     // signIn user
     const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

     // Google login
     const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logOut a user
    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current User", currentUser);
            if(currentUser){
                const userInfo = {
                    email: currentUser?.email
                }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signIn,
        Logout,
        updateUserProfile,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;