import Upload from "../upload/Upload";
import "./newPrompt.css";
import { IKImage } from "imagekitio-react";
import { useEffect, useRef, useState } from "react";
import model from "../../lib/gemini";
import Markdown from "react-markdown";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [img,setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{},
    aiData:{},
  })

  const chat = model.startChat({
    history: [
      {
        role:"user",
        parts: [{ text:"Hi! i have dogs at home." }],
      },
      {
        role:"model",
        parts: [{ text:"Hi! Nice to meet you." }]
      },
    ],
    generationConfig: {
      // maxOutputTokens: 100,
    },
  });

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [ question, answer, img.dbData]);

  const add = async (text) =>{
    setQuestion(text)
    const result = await chat.sendMessageStream(
      Object.entries(img.aiData).length ? [img.aiData, text] : [text]
    );
    let accumulatedtext="";
    for await(const chunk of result.stream){
      const chunkText=chunk.text();
      console.log(chunkText);
      accumulatedtext+=chunkText;
      setAnswer(accumulatedtext)
    }
    setImg({isLoading:false,
      error:"",
      dbData:{},
      aiData:{},})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    add(text, false);
  };

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
      {question && <div className="message user">{question}</div>}
      {answer && 
        <div className="message ">
          <Markdown>{answer}</Markdown>
        </div>}
      <div className="endChat" ref={endRef}></div>
      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg}/>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Ask Anything..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
