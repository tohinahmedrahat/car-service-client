import { useState } from "react"
import firebaseConfig from "../FirebaseConfi/FirebaseConfi";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";


initializeApp(firebaseConfig);
const Firebase = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth,googleProvider)
    }
    return{
        user,
        setUser,
        loginWithGoogle,
        error,
        setError
    }
}

export default Firebase;