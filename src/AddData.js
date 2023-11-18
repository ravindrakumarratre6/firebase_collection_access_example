import React, { useState } from "react";
import { useFirebase } from "./FirebaseProvider";
import { collection, addDoc } from "firebase/firestore";

const AddData = () => {
  const { db } = useFirebase();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addDataToCollection = async () => {
    const usersCollection = collection(db, "users");

    try {
      await addDoc(usersCollection, {
        name,
        age,
        email,
      });
      console.log("Document successfully added!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h2>Add Data Component</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button onClick={()=>addDataToCollection()}>Add Data to Collection</button>
    </div>
  );
};

export default AddData;
