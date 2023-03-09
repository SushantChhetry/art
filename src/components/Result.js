import React from "react";

const Result = (prop) => {
  const getImage = (value) => {
    for (let i = 0; i < value.length; i++) {
      console.log(value[i].image_id);
    }
  };
  return <div>Result</div>;
};

export default Result;
