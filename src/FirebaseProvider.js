import React, { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-9ZZ4vR7jeXtVNiCHj1wTk-jgdcfE4co",
  authDomain: "fir-project-b8dca.firebaseapp.com",
  databaseURL: "https://fir-project-b8dca-default-rtdb.firebaseio.com",
  projectId: "fir-project-b8dca",
  storageBucket: "fir-project-b8dca.appspot.com",
  messagingSenderId: "280182638738",
  appId: "1:280182638738:web:efb0d0d56419b599fcbe4b",
  measurementId: "G-D25HV375D9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const value = {
    app,
    auth,
    db,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
};
