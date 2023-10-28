import { useEffect, useState } from 'react';

import { GetImageBase64, GetStoryData, GetImagePrompt } from '../utils/tools/fetch';


export default function Story() {
   const [storyId, setStoryId] = useState("");
   const [showStory, setShowStory] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [paragraphs, setParagraphs] = useState([]);
   const [images, setImages] = useState<string[]>([]);
   const [demoLoaded, setDemoLoaded] = useState(false);
   const [buttonIds] = useState<string[]>(["653d3ed6199db80b4f00b508", "653d3de2c3541979c6a2a777", "653d365e3b4860480fba145c"]);

   const getStoryData = async () => {
      let storyData = await GetStoryData(storyId)
      setShowStory(storyData)
      try {
         setParagraphs(storyData.split('\n\n')) //有時候生成回來的故事不會有 \n\n 的部分，所以需要注意一下
      } catch (e) {
         {
            console.log(`story gener form error , maybe the id error`);
         }
      }
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

   function handle_ID_ButtonClick(id: string) {
      setStoryId(id);
      setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成
   }

   const testGetImage0 = async () => {
      if (demoLoaded || paragraphs.length === 0) return; // 如果 demoLoaded 为 false 或 paragraphs 数组为空，则不执行任何操作

      setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成

      for (let i = 0; i < paragraphs.length; i++) {
         try {
            const enPrompt = await GetImagePrompt(paragraphs[i]);
            const data = await GetImageBase64(enPrompt);
            setImages((prevImages) => [...prevImages, `data:image/png;base64,${data}`]);
         } catch (e) {
            console.log(`get image error: ${e}`);
         }
      }

      setDemoLoaded(true); // 启用所有按钮并标记资源已加载完毕
   };



   useEffect(() => {
      testGetImage0();
   }, [paragraphs]);

   useEffect(() => {
      getStoryData()
      setDemoLoaded(false);
   }, [storyId])

   return (
      <div>
         <p>storyId = {storyId}</p>
         {/** 重複狂按按鈕他會當爛 */}
         <div>
            {buttonIds.map((id) => (
               <button key={id} onClick={() => handle_ID_ButtonClick(id)}>
                  Button {id}
               </button>
            ))}
         </div>

         <div>
            <br />
            <img src={images[currentIndex]} alt={`第 ${currentIndex + 1} 張圖片`} />
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
