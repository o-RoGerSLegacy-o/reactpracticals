import React, { useMemo } from "react";
import { useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  const heavyfun = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return console.log(num);
  };

  const numresult = useMemo(() => {
    heavyfun(1);
  }, []);

  return (
    <div>
      <h2>{numresult}</h2>
      <h1>{count}</h1>
      <button type="" onClick={handler}>
        click me
      </button>
    </div>
  );
};

export default Memo;
