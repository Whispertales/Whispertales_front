import { useEffect, useState } from 'react';

import { GetImageBase64, GetImage64Code } from '../utils/tools/fetch';
import { GetStoryData } from "../utils/tools/fetch";

export default function Story() {
   const [id, setId] = useState("653bfe7c9e5ec270480c9bff");
   const [showStory, setShowStory] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [paragraphs, setParagraphs] = useState([]);
   const [images, setImages] = useState<string[]>([]);
   const [demo, setDemo] = useState("");
   const [demoLoaded, setDemoLoaded] = useState(false);

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

   const testGetImage0 = async () => {
      if (!demoLoaded && paragraphs.length > 0) {
         setDemoLoaded(true);
         for (let i = 0; i < paragraphs.length; i++) { // 迭代所有段落
            GetImageBase64(paragraphs[i]).then((data) => {
               setImages((prevImages) => [...prevImages, `data:image/png;base64,${data}`]);
            });
         }
      }
   };



   useEffect(() => {
      testGetImage0();
   }, [paragraphs]);

   useEffect(() => {
      getStoryData()
      setDemoLoaded(false);
   }, [])

   return (
      <div>
         <div>
            {/* <img src={demo} alt="測試圖片" /> */}
            <img src={images[currentIndex]} alt={`第 ${currentIndex + 1} 張圖片`} />
            {/* <img src={images[0]} alt={`第 ${1} 張圖片`} /> */}
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
