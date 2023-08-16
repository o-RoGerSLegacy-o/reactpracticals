import React, { useState, useEffect } from "react";

const UseEffectPractise = () => {
  const [data, setData] = useState([]);
  const fetchSomething = async () => {
    const response = await fetch("");
    const dataGathered = response.data;
    const jsonData = dataGathered.json();
    console.log(jsonData);
    setData(jsonData);
  };

  useEffect(() => {
    fetchSomething();
  }, []);

  return (
    <div>
      {data?.map((data1) => {
        <li>data.oneUser</li>;
      })}
    </div>
  );
};

export default UseEffectPractise;

//practise the concept of useState useEffect and fetch the API
