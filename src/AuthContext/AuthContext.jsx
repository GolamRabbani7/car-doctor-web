import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const ContextProvider = createContext(null)
const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)




    const RegisterUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
      const unSubscribe=  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('CrrentUser', currentUser)
            setLoading(false);
        });
        return ()=>{
            return unSubscribe();
        }
    }, [])






    const authInfo = {
        RegisterUser,
        LoinUser,
        LogOutUser,
        user,

        loading
    }

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthContext;