import { useEffect, useState } from 'react';

import { GetImage64Code } from '../utils/tools/fetch';
import { GetStoryData } from "../utils/tools/fetch";

export default function Story() {
   const [id, setId] = useState("653bc86d78626d0711bcd994");
   const [showStory, setShowStory] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [paragraphs, setParagraphs] = useState([]);
   const [images, setImages] = useState<string[]>([]);


   const getStoryData = async () => {
      let storyData = await GetStoryData(id)
      setShowStory(storyData)
      setParagraphs(storyData.split('\n\n'))
   }

   const handleNextClick = () => {
      if (currentIndex < paragraphs.length - 1) {
         setCurrentIndex(currentIndex + 1);
      }
   };
   const handlePrevClick = () => {
      if (currentIndex > 0) {
         setCurrentIndex(currentIndex - 1);
      }
   };

   useEffect(()=>{
      if(paragraphs.length > 0){
         paragraphs.map(paragraph=>{GetImage64Code(id, paragraph)})
      }
   })

   // useEffect(() => {
   //    if (paragraphs.length > 0) {
   //       const promises = paragraphs.map(paragraph => GetImage64Code(id, paragraph));
   //       Promise.all(promises)
   //          .then(values => {
   //             const newImages = values.map(value => `${value}`);
   //             setImages(prevImages => prevImages.concat(newImages));
   //          })
   //          .catch(e => console.log('Error:', e));
   //    }
   // }, [paragraphs]);

   useEffect(() => {
      getStoryData()
   }, [])

   return (
      <div>
         {/* <p>{showStory != "" ? showStory : null }</p> */}
         <div>
            <img src={images[currentIndex]} alt="你生成出來的圖片" />
            <br />
            <span>{paragraphs[currentIndex]}</span>
            <br />
            <button onClick={handlePrevClick}>上一頁</button>
            <button onClick={handleNextClick}>下一頁</button>
         </div>
         <br />
      </div>
   );
}
