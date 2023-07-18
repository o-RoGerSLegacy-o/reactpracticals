import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nums, setNums] = useState(0);
  const [num, setNum] = useState(0);
  useEffect(() => {
    alert(`she is poking me `);
    console.log("she is poking me in console tooo");
  }, [nums]);
  useEffect(() => {
    alert(`she poked me in second half toooo `);
    console.log("she is poking me in console tooo in second half ");
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >{`clicked ${nums} times`}</button>

      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >{`clicked ${num} times`}</button>
    </>
  );
}

export default App;
