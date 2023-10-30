import { useEffect, useState } from 'react';

import { GetImageBase64, GetStoryData, GetImagePrompt, getdemopic, getdvoices } from '../utils/tools/fetch';
import { books, booksShow } from '../utils/tools/books';


export default function Story() {
   const [storyId, setStoryId] = useState("");
   const [showStory, setShowStory] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [paragraphs, setParagraphs] = useState([]);
   const [images, setImages] = useState<string[]>([]);
   const [voices, setVoices] = useState<string[]>([]);
   const [demoLoaded, setDemoLoaded] = useState(false);
   const [buttonIds] = useState<books[]>(booksShow);

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

   // 正式使用，調用gpt生成圖片
   // const testGetImage0 = async () => {
   //    if (demoLoaded || paragraphs.length === 0) return; // 如果 demoLoaded 为 false 或 paragraphs 数组为空，则不执行任何操作

   //    setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成

   //    for (let i = 0; i < paragraphs.length; i++) {
   //       try {
   //          const enPrompt = await GetImagePrompt(paragraphs[i]);
   //          console.log(`${i + 1}個故事英文prompt 為 ${enPrompt}`)
   //          const data = await GetImageBase64(enPrompt);
   //          setImages((prevImages) => [...prevImages, `data:image/png;base64,${data}`]);
   //       } catch (e) {
   //          console.log(`get image error: ${e}`);
   //       }
   //    }

   //    setDemoLoaded(true); // 启用所有按钮并标记资源已加载完毕
   // };


   const demobooks3 = async () => {
      if (demoLoaded || paragraphs.length === 0) return;
      let loadedImages: string[] = [];
      for (let i = 0; i < paragraphs.length; i++) {
         try {
            const urlpic = await getdemopic(storyId, i+1);
            loadedImages.push(urlpic);
         } catch (error) {
            console.error(error);
         }
      }
      setImages(prevImages => [...prevImages, ...loadedImages]);
   };

   const demovoices3 = async () => {
      if (demoLoaded || paragraphs.length === 0) return;
      let loadedVoices: string[] = [];
      for (let i = 0; i < paragraphs.length; i++) {
         try {
            //<audio src="path/to/audio.mp3" controls></audio>

            const urlpic = await getdvoices(storyId, i + 1);
            loadedVoices.push(`${urlpic}`);
         } catch (error) {
            console.error(error);
         }
      }
      setVoices(prevImages => [...prevImages, ...loadedVoices]);
   };


   useEffect(() => {
      // testGetImage0();
      demobooks3();
      demovoices3();
   }, [paragraphs]);

   useEffect(() => {
      getStoryData()
      setDemoLoaded(false);
   }, [storyId])

   return (
      <div>
         {/** 重複狂按按鈕他會當爛 */}
         <div>
            {buttonIds.map((val) => (
               <button key={val.storyId} onClick={() => handle_ID_ButtonClick(val.storyId)}> {val.storyName} </button>
            ))}
         </div>

         <div>
            <br />
            <img src={images[currentIndex]} alt={`第 ${currentIndex + 1} 張圖片`} />
            <br />
            {images[currentIndex]}
            <br />
            <span>{paragraphs[currentIndex]}</span>
            <br />
            <button onClick={handlePrevClick}>上一頁</button>
            <button onClick={handleNextClick}>下一頁</button>
         </div>
         <br />
         <div>
            <audio src={voices[currentIndex]} autoPlay controls></audio>
         </div>
         <br />
      </div>
   );
}
