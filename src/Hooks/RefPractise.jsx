import React, { useRef, useState, useEffect } from "react";

const RefPractise = () => {
  const [count, setCount] = useState(0);
  const cmpunk = useRef(0);

  useEffect(() => {
    cmpunk.current = cmpunk.current + 1;
  }, []);

  return (
    <div>
      <h1>the render count : {cmpunk.current}</h1>
      <input value={count} onChange={(e) => setCount(e.target.value)} />
    </div>
  );
};

export default RefPractise;
