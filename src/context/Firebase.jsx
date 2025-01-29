import React,{createContext, useContext, useState,useEffect} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { getDatabase,set, ref, get } from "firebase/database";
import { stateList } from "../utills/Api";

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
    const [districts, setDistricts] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Replace with your API URL
          const response = await fetch("https://github.com/sab99r/Indian-States-And-Districts/blob/master/states-and-districts.json");
          const data = await response.json();
          
          setStates(data.states);
          console.log("states: ",states)
          setDistricts(data.districts);
          setBlocks(data.blocks);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);

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
        console.log("login status",loginStatus);
        try {
          // Extract email from the registration form
          const { email, studentClass } = values;
      
          // Step 1: Fetch all registration data from Firebase
          const allRegistrationsRef = ref(database, `registrations/${studentClass}`);
          const allRegistrationsSnapshot = await get(allRegistrationsRef);
      
          let isEmailTaken = false;
          // let isLoginEmail = true;
          
            
          if (allRegistrationsSnapshot.exists()) {
            const allClassesData = allRegistrationsSnapshot.val();
      
            // Step 2: Loop through each class and filter out the emails
            for (let classKey in allClassesData) {
              const classData = allClassesData[classKey];
              
              // Step 3: Check each student in the class for the email
              for (let studentKey in classData) {
                const student = classData[studentKey];
                
                // If email matches, set isEmailTaken to true

                if (student.email === email)
                  {
                    isEmailTaken = true;
                    break; // Break the loop if email is found
                  }
                  if (email !== loginStatus.email) {
                    console.error('Email must match the login email for registration.');
                    alert('The email must match your login email to register.');
                    return; // Don't proceed with registration
                  }
              }
      
              if (isEmailTaken) break; // Stop checking other classes once we find the email
            }
          }

          // Step 4: If email is already taken, stop the registration
          if (isEmailTaken) {
            console.error('Email is already registered!');
            alert('This email is already registered!');
            return; // Don't proceed with registration
          }
      
          // Step 5: Proceed with the registration if email is not taken
          const userId = Date.now().toString(); // Unique ID for the user
          const classRef = ref(database, `registrations/${studentClass}`); // Firebase path for the specific class
      
          // Create a new registration object for the student
          const newRegistration = {
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
            studentClass: values.studentClass,
            email: values.email,
            id: userId
          };
      
          // Fetch existing data for the class, if it exists
          const classSnapshot = await get(classRef);
          const classData = classSnapshot.exists() ? classSnapshot.val() : {};
      
          // Add the new registration under the correct class
          classData[studentClass] = classData[studentClass] || []; // Ensure array exists for classRoll
          classData[studentClass].push(newRegistration);
      
          // Step 6: Save the updated data back to Firebase
          await set(classRef, classData);
      
          console.log('User registered successfully!');
          alert('Registration successful!');
        } catch (error) {
          console.error('Error registering user: ', error);
        }
      };

    return(
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,putData,signInUserWithEmailAndPassword,
            loginStatus,onAuthStateChange,handleLogout,
            handleNewRegistration,states
            }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}