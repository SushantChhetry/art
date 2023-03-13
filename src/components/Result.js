import { useState, useEffect } from "react";

const Result = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      {console.log("paintings")}
      {console.log(props.data ? props.data[0]["image_id"] : "")}
      {props.data
        ? props.data.map((val) => {
            console.log(val["image_id"]);
            console.log(val["title"]);
            const imgSrc = `https://www.artic.edu/iiif/2/${val["image_id"]}/full/843,/0/default.jpg`;
            return (
              <div className="paintings-wrapper">
                <h3>{val["title"]}</h3>
                <img src={imgSrc} alt={val["title"]} className="painting" />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Result;
