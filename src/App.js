import Memo from "./Hooks/Memo";
// import RefPractise from "./Hooks/RefPractise";

/* import { useState } from "react";
import "./App.css";
import Hello1stcompo from "./components/Hello1stcompo";
import Props2ndComp from "./components/Props2ndComp";
 */
function App() {
  /* const [before, after] = useState("noob");

  const changeHandler = () => {
    after("Intermediate");
  }; */
  return (
    <div>
      {/*  <p>hii</p>
      <Hello1stcompo />
      <Props2ndComp occupation="developer" hobby="coding" />
      <p>{before}</p>
      <button onClick={changeHandler}>click me</button> */}

      {/* <RefPractise />
       */}
      <Memo />
    </div>
  );
}

export default App;
