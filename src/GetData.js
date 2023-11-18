import React, { useState, useEffect } from "react";
import { useFirebase } from "./FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";

const GetData = () => {
  const { db } = useFirebase();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection);

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
console.log("data",data)
      setUserData(data);
    };

    fetchData();
  }, [db]);
console.log("users",userData)
  return (
    <div>
      <h2>Get Data Component</h2>
      <h3>User Data:</h3>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.email} 
            <img src={user.img} alt="img"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
