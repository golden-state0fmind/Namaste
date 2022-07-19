import { signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import {
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from '../firebase';
//creating context
const AuthContext = createContext();
//export provider and context
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = (props) => {
    //setting state for our user
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //onMount::checking for user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        });
        return () => unsubscribe();
    }, []);
    //create new user
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //signin user
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    //logout user
    const logout = async () => {
        setUser(null)
        await signOut(auth)
    };
    return (
        <AuthContext.Provider value={{ user, signup, signin, logout }} >
            { loading ? null : props.children}
        </AuthContext.Provider>
    );
};