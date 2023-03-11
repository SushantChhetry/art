import { useState } from "react";

const Result = ({ data }) => {
  const [paintings, setPaintings] = useState(data);
  const getImage = (value) => {
    for (let i = 0; i < value.length; i++) {
      console.log(value[i].image_id);
    }
  };
  return <div>{console.log(data)}</div>;
};

export default Result;
