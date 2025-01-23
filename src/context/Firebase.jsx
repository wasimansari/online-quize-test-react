import React,{createContext, useContext, useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getDatabase,set, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC5lfHfPbSh3bTkqzQyPW2vdM2098Nj2bk",
    authDomain: "online-quiz-react-2070f.firebaseapp.com",
    projectId: "online-quiz-react-2070f",
    storageBucket: "online-quiz-react-2070f.firebasestorage.app",
    messagingSenderId: "1048241431625",
    appId: "1:1048241431625:web:9919a05c10850dc45d0b98",
    databaseURL:"https://online-quiz-react-2070f-default-rtdb.firebaseio.com"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const FirebaseContext = createContext(null);
const database = getDatabase(firebaseApp);
export const useFirebase = ()=> useContext(FirebaseContext);

export { database, ref, set, get };

export const FirebaseProvider = (props)=>{
    const [loginStatus, setLoginStatus] = useState(null);
    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password);
    }

    const signInUserWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password);
    }
    
    const onAuthStateChange=()=>{
        return onAuthStateChanged(firebaseAuth,user=>{
            if(user){
                console.log("You are logged in",user)
                setLoginStatus(user);
            }else{
                console.log("You are not logged in",user)
                setLoginStatus(null);
            }
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChange();
        return () => unsubscribe();
      }, []);

    const putData=(key,data)=>{
        set(ref(database,key),data)
    }

    const handleLogout = async () => {
        try {
          await signOut(firebaseAuth);
          setLoginStatus(null);
          console.log("Logged out successfully");
        } catch (error) {
          console.error("Error logging out:", error);
        }
      };

      const handleNewRegistration = async (values) => {
        try {
          const userId = Date.now().toString();
          await set(ref(database, 'registrationDetails/' + userId), {
            firstName: values.firstName,
            lastName: values.lastName,
            motherName: values.motherName,
            fatherName: values.fatherName,
            address: values.address,
            gender: values.gender,
            state: values.state,
            city: values.city,
            dob: values.dob,
            pincode: values.pincode,
            classRoll: values.classRoll,
            email: values.email,
          });
      
          console.log('User registered successfully!');
        } catch (error) {
          console.error('Error registering user: ', error);
        }
      };

    return(
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,putData,signInUserWithEmailAndPassword,
            loginStatus,onAuthStateChange,handleLogout,
            handleNewRegistration
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}