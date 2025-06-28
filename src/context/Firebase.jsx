import React,{createContext, useContext, useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getDatabase,set, ref, get } from "firebase/database";
import { stateList } from "../utills/Api";
import { faListSquares } from "@fortawesome/free-solid-svg-icons/faListSquares";

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
  console.log(stateList)
    const [loginStatus, setLoginStatus] = useState(null);
    const [states, setStates] = useState([]);
    const [isHomeClick, setIsHomeClick] = useState(false);
    const [blocks, setBlocks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSuccess,setIsSuccess]=useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
      console.log("Updated isHomeClick state:", isHomeClick);
    }, [isHomeClick]);

    const handleCancel = () => {
      setIsHomeClick((prev) => !prev);
      console.log("🔄 handleCancel triggered, new isHomeClick:", isHomeClick);
    };

    const signupUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(firebaseAuth,email,password);
    }

    const signInUserWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(firebaseAuth,email,password);
    }

    const sendPasswordResetEmail=(firebaseAuth,email)=>{
        return sendPasswordResetEmail(firebaseAuth,email);
    }

    const forgotPassword = async (email) => {
      if (!email) {
        return "Please enter your email.";
      }
      try {
        await sendPasswordResetEmail(auth, email);
        return "Password reset email sent! Check your inbox.";
      } catch (error) {
        return error.message;
      }
    };

    const changePassword = async (newPassword) => {
      if (auth.currentUser) {
        try {
          await updatePassword(auth.currentUser, newPassword);
          return "Password updated successfully!";
        } catch (error) {
          return error.message;
        }
      } else {
        return "User not logged in!";
      }
    };
    
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
        console.log("login status", loginStatus);
        try {
          const { email, studentClass } = values;
          const allRegistrationsRef = ref(database, `registrations/${studentClass}`);
          const allRegistrationsSnapshot = await get(allRegistrationsRef);
          let isEmailTaken;
          if(loginStatus.email===email){
            isEmailTaken = false;
          }else{
            isEmailTaken = true;
            alert('The email must match your login email to register.');
            return;
          }
          if (allRegistrationsSnapshot.exists()) {
            const allClassesData = allRegistrationsSnapshot.val();
            for (let classKey in allClassesData) {
              const classData = allClassesData[classKey];
              for (let studentKey in classData) {
                const student = classData[studentKey];
                if (student.email === email) {
                  isEmailTaken = true;
                  break;
                }
                if (email !== loginStatus.email) {
                  console.error('Email must match the login email for registration.');
                  alert('The email must match your login email to register.');
                  return;
                }
              }
      
              if (isEmailTaken) break;
            }
          }
      
          if (isEmailTaken) {
            console.error('Email is already registered!');
            alert('This email is already registered!');
            return;
          }
      
          const userId = Date.now().toString();
          const classRef = ref(database, `registrations/${studentClass}`);
          const newRegistration = {
            firstName: values.firstName,
            lastName: values.lastName,
            motherName: values.motherName,
            fatherName: values.fatherName,
            address: values.address,
            gender: values.gender,
            state: values.state,
            district: values.district,
            block: values.block,
            dob: values.dob,
            pincode: values.pincode,
            studentClass: values.studentClass,
            email: values.email,
            id: userId
          };
      
          const classSnapshot = await get(classRef);
          const classData = classSnapshot.exists() ? classSnapshot.val() : {};
          classData[studentClass] = classData[studentClass] || [];
          classData[studentClass].push(newRegistration);
          await set(classRef, classData);
          console.log('User registered successfully!');
          alert('Registration successful!');
          setIsSuccess(true);
        } catch (error) {
          console.error('Error registering user: ', error);
        }
      };
    return(
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,putData,signInUserWithEmailAndPassword,
            loginStatus,onAuthStateChange,handleLogout,
            handleNewRegistration,states,isSuccess,isHomeClick,setIsHomeClick,handleCancel
            ,user, setUser, forgotPassword, changePassword
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}