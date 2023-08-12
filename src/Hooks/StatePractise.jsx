import React, { useState } from "react";

const StatePractise = () => {
  const [counttext, setCountText] = useState("roger");
  const [count, setCount] = useState(0);
  const [countss, setCountss] = useState(0);
  const handlerText = (e) => {
    const val = e.target.value;
    setCountText(val);
  };

  const handlerCount = () => {
    setCount(count + 1);
  };
  const handlerCountClicked = () => {
    setCountss(count + 1);
  };

  return (
    <div>
      <h1>{counttext}</h1>
      <input type="text" onChange={handlerText} value={counttext} />

      <h1> the count is : {count}</h1>
      <input type="text" onMouseOver={handlerCount} value={count} />

      <h1> the count is : {countss}</h1>
      <input onClick={handlerCountClicked} value={countss} />
    </div>
  );
};

export default StatePractise;
