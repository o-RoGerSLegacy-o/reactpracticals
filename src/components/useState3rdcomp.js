import React, { useState } from "react";

const useState3rdcomp = () => {
  const [before, after] = useState("noob");

  const changeHandler = (before) => {
    after("Intermediate");
  };

  return (
    <div>
      <button onClick={changeHandler}></button>
    </div>
  );
};

export default useState3rdcomp;
