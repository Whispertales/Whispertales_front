import { useState, useEffect } from "react";

import { GetStory } from "../utils/tools/fetch";
import Image from './Image';

import "../styles/Image.css";
import "../styles/DropdownForm.css";

export default function DropdownForm(props:any) {
   const [eduStage, setEduStage] = useState("國小");
   const [eduClass, setEduClass] = useState("數學1");
   const [val, setVal] = useState({
      eduStageInfo: "國小",
      eduClassInfo: "數學1",
   });
   const [story, SetStory] = useState("");

   const handle_EduStage_Change = (event: any) => {
      setEduStage(event.target.value);
   }
   const handle_EduClass_Change = (event: any) => {
      setEduClass(event.target.value);
   }

   const sendDataToParent = () => {
      const data = story;
      props.onData(data);
   };

   const handleSubmit = (event: any) => {
      event.preventDefault();
      props.genImage();
      setVal({
         eduStageInfo: eduStage,
         eduClassInfo: eduClass,
      });
      //console.log(`JSON.stringify(val) = ${JSON.stringify(val) }`)
      GetStory(val).then((storyData) => {
         console.log(`GetStory storyData = ${JSON.stringify(storyData.tailStory)}`)
         SetStory(storyData.tailStory);
      }).catch((e) => {
         SetStory("");
         console.log(`GetStory nono fail, Error: ${e}`)
      })
   }


   useEffect(() => {
      if(story!=" "){
         sendDataToParent();
      }
   }, [story])

   return (
      <div>
         <p>請選擇你要的課程</p>
         <form onSubmit={handleSubmit}>
            <select value={eduStage} onChange={handle_EduStage_Change}>
               <option value="國小">國小</option>
               <option value="國中">國中</option>
               <option value="高中">高中</option>
            </select>
            <br />
            <select value={eduClass} onChange={handle_EduClass_Change}>
               <option value="數學1">數學1</option>
               <option value="數學2">數學2</option>
               <option value="數學3">數學3</option>
            </select>
            <br />
            <button type="submit" onClick={sendDataToParent}>提交</button>
         </form>
         {/* <div>
            <p>{story != "" ? story : "沒有生成成功"}</p>
         </div>
         <div>
            <button onClick={sendDataToParent}>Send Data to Parent</button>
         </div>         */}
      </div>
   );
}
