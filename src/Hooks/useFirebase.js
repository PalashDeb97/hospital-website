import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();



    // Handle Name
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    // Handle Email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle Password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle Register
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password);

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
                setUserName();
            })
            .catch((error) => {
                setError(error.message);
            })

    };

    // Display Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
        .then(() => {})
    };

    // Handle Login
    const handleLogIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
    };





    // google login
    const logInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    };



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },[])


    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => {})
            .finally(() => setIsLoading(false));
    }


    
    return {
        user,
        isLoading,
        error,
        name,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleLogIn,
        logInWithGoogle,
        logOut
    }
}

export default useFirebase;