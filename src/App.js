
import './App.css';

import React from "react";
import { FirebaseProvider } from "./FirebaseProvider";
import AddData from "./AddData";
import GetData from "./GetData";

const App = () => {
  return (
    <FirebaseProvider>
      <div>
        <AddData />
        <GetData />
      </div>
    </FirebaseProvider>
  );
};

export default App;
