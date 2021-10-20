import initialAuthentication from "../Firebase/initializeFirebase"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initialAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{

    // set state 
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState('');
    const [toggle,setToggle] = useState(false);

// set toggle 
const toggleHandler = (e) =>{
    setToggle(e.target.checked)
}

// input field 
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

// form submit for create new user and login
const handleSubmit = e =>{
    e.preventDefault();
    e.target.reset();

    // error handle
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
        setError("Minimum eight characters, uppercase letter, lowercase letter, number and special character")
        return;
    }
      
    // conditional render 

    if(toggle){
        createNewUser(email,password)
    }else{
        loginUser(email,password)
    }
}
 
// new user 
const createNewUser = () =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        setUser(user);
        window.location.reload();
        setUserName();
        
    }).catch(error=>{
        setError(error.message)
    })
}

// set user name 
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
    const loginUser = (email,password) =>{
        
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            
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
        googleSignIn,
        toggle,
        toggleHandler,

    }
}

export default useFirebase;