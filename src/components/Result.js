import { useState, useEffect } from "react";

const Result = ({ data }) => {
  const [paintings, setPaintings] = useState(data);

  const [imgId, setImgId] = useState("");

  //map thrpugh the data, extract the img id and put it in the src, extract the title, return them for rendering

  const imgUrl = `https://www.artic.edu/iiif/2/${imgId}/full/843,/0/default.jpg`;

  return (
    <div>
      {}
      <div className="img-warpper">
        <img
          src="https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
          alt="tests"
        />
        <img
          src="https://www.artic.edu/iiif/2/e966799b-97ee-1cc6-bd2f-a94b4b8bb8f9/full/843,/0/default.jpg"
          alt="tests"
        />
      </div>
    </div>
  );
};

export default Result;
