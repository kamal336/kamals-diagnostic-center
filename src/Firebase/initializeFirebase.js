import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

const initialAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initialAuthentication;