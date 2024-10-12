import Upload from "../upload/Upload";
import "./newPrompt.css";
import { IKImage } from "imagekitio-react";
import { useEffect, useRef, useState } from "react";

const NewPrompt = () => {

  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{}
  })

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/*ADD A NEW CHAT*/}
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        <Upload setImg={setImg}/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask Anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
