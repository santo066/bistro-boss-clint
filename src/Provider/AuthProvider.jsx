import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useaxiospublic from "../Hooks/Useaxiospublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const axiospublic = useaxiospublic()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)


    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = () => {
        setloading(true)
        return signOut(auth)
    }
    const updateuserprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleprovider = new GoogleAuthProvider()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            if (currentuser) {
                //get token and store clint
                const userinfo = { email: currentuser.email }
                axiospublic.post('/jwt', userinfo)
                    .then(res => {
                        console.log('token ',res.data.token )
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })

            } else {
                //do somthing
                localStorage.removeItem('access-token');
            }
            setloading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const googlesignin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

    const authinfo = {
        user,
        loading,
        createUser,
        signin,
        signout,
        updateuserprofile,
        googlesignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    )
}