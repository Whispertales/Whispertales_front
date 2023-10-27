import { useLocation } from "react-router";
import { useEffect, useState } from 'react';

import { GetStoryData } from "../utils/tools/fetch";


export default function Story(){
   const [showStory, setShowStory] = useState("");

   const getStoryData = async()=>{
      let id = "653bc86d78626d0711bcd994"
      let storyData = await GetStoryData(id)
      setShowStory(storyData)
      console.log(`storyData= ${JSON.stringify(storyData)}`);    
   }

   useEffect(() => {
      getStoryData()
   }, [showStory])

   return (
      <div>
         <p>{showStory != "" ? showStory : null }</p>
         <br />
      </div>
   );
}