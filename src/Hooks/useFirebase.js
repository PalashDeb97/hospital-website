import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuth from '../Firebase/firebasre.initialize';

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogIn, setIsLogIn] = useState(false)


    const toggleLogIn = (e) => {
        setIsLogIn(e.target.checked)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        isLogIn ? logIn(email, password) : signIn(email, password);

    };

    const logIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    const signIn = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setError('')
    })
    .catch((error) => {
        setError(error.message)
    })
    }






    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
             })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('may name is khan', user);
                setUser(user)
            }
        })
    },[])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange
    }
}

export default useFirebase;