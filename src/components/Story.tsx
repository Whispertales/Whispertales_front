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
      setStoryId(id); // 将当前故事 ID 设置为所选按钮的 ID
   }

   const testGetImage0 = async () => {
      if (storyId!="" && !demoLoaded && paragraphs.length > 0) {
         setDemoLoaded(true);
         for (let i = 0; i < paragraphs.length; i++) {
            //生成圖片(在那之前要先轉成英文)
            try{
               //生成英文prompt
               GetImagePrompt(paragraphs[i]).then((enPrompt:string)=>{
                  // console.log(`${i} 生成的英文圖片描述為: ${enPrompt}`)
                  GetImageBase64(enPrompt).then((data:string) => {
                     setImages((prevImages) => [...prevImages, `data:image/png;base64,${data}`]);
                  }).catch((e)=>{
                     console.log(`GetImageBase64 error: ${e}`);
                  })
               }).catch((e) => {
                  console.log(`GetImagePrompt error: ${e}`);
               })
            }catch(e){
               console.log(`try GetImagePrompt or GetImageBase64 fail`)
            }
            
         }
      }
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
