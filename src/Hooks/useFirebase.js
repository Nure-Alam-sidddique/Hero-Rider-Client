import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useFirebase=()=>{
    const auth = getAuth();
    const registerUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{

        })
    }
    return{
        registerUser
    }

}
export default useFirebase;