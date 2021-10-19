import initialAuthentication from "../Firebase/initializeFirebase"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initialAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');

const  nameHandler = e =>{
    setName(e.target.value)
    console.log(e.target.value);
}

const emailHandler = e =>{
    setEmail(e.target.value)
}

const passwordHandler = e =>{
    setPassword(e.target.value)
}

// create new user and login
const handleSubmit = e =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        setUser(user);
        setUserName();
    }).catch(error=>{
        setError(error.message)
    })
    loginUser();
    
}

const setUserName = ()=>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

   //   login user 
    const loginUser = () =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            setUser(user)
        })
    }

    // google login 
    const googleSignIn = () =>{
       return signInWithPopup(auth,googleProvider)
      
    }
    
      // stay user/find user 
      useEffect(()=>{
        onAuthStateChanged(auth,(user=>{
            if(user){
                console.log('successfully added',user);
                setUser(user)
            }

        })
        )
    },[])
    
    // logout 
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            console.log('successfully logout');
            setUser({})
        }).catch(error=>{
            setError(error.message)
        })
    }

    return {
        user,
        error,
        nameHandler,
        emailHandler,
        passwordHandler,
        handleSubmit,
        logOut,
        googleSignIn
    }
}

export default useFirebase;