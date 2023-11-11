import { useEffect, useState } from 'react';

import {  GetStoryData, getdemopic, getdvoices } from '../utils/tools/fetch';
import { books, booksShow } from '../utils/tools/books';

import "../styles/Story.css";

export default function Story() {
   const [storyId, setStoryId] = useState("");
   const [showStory, setShowStory] = useState("");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [paragraphs, setParagraphs] = useState([]);
   const [images, setImages] = useState<string[]>([]);
   const [voices, setVoices] = useState<string[]>([]);
   const [demoLoaded, setDemoLoaded] = useState(false);
   const [buttonIds] = useState<books[]>(booksShow);
   const [currentBookIndex, setCurrentBookIndex] = useState(0);

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

   // console.log(`buttonIds.length = ${buttonIds.length}`);
   // const handleNextClick = () => {
   //    if (currentIndex < buttonIds.length - 1) {
   //       setCurrentIndex(currentIndex + 1);
   //    }
   // };
   // const handlePrevClick = () => {
   //    if (currentIndex > 0) {
   //       setCurrentIndex(currentIndex - 1);
   //    }
   // };

   // function handle_ID_ButtonClick(id: string) {
   //    setStoryId(id);
   //    setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成
   // }

   function goToBook(index: number) {
      if (index >= 0 && index < buttonIds.length) {
         setStoryId(buttonIds[index].storyId);
         setCurrentBookIndex(index);
         setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成
      }
   }


   const handleLeftClick = () => {
      if (currentBookIndex > 0) {
         setCurrentBookIndex(currentBookIndex - 1);
      }
   };

   const handleRightClick = () => {
      if (currentBookIndex < buttonIds.length - 1) {
         setCurrentBookIndex(currentBookIndex + 1);
      }
   };

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
      for (let i = 0; i < paragraphs.length; i += 1) {
         try {
            const urlpic = await getdemopic(storyId, i + 1);
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
      for (let i = 0; i < paragraphs.length; i = i + 1) {
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

   // const showStoryLine = (currentIndex: any) => {
   //    if (currentIndex > 0) {
   //       return (
   //          <>
   //             <span>{paragraphs[currentIndex - 1]}</span>
   //             <br />
   //             <span>{paragraphs[currentIndex]}</span>
   //          </>
   //       );
   //    } else {
   //       return (
   //          <>
   //             <span>{paragraphs[currentIndex]}</span>
   //          </>
   //       );
   //    }
   // }

   // const showpic = (currentIndex: any) => {
   //    if (currentIndex > 0) {
   //       return (
   //          <>
   //             <img src={images[currentIndex]} alt={`這是第${currentIndex}張圖片`} />
   //             <br />
   //             <span>{paragraphs[currentIndex]}</span>
   //             <audio src={voices[currentIndex]} autoPlay={false} controls></audio>
   //             <div className="right-area">
   //                <div className="right-left">
   //                   <div className="image-container">
   //                      <img
   //                         src={images[currentIndex - 1]}
   //                         alt={`第 ${currentIndex - 1} 张图片`}
   //                      />
   //                   </div>
   //                   <div className='text-container'>
   //                      <span>{paragraphs[currentIndex - 1]}</span>
   //                   </div>
   //                   <div className="audio-container">
   //                      <audio src={voices[currentIndex - 1]} autoPlay={false} controls></audio>
   //                   </div>
   //                </div>


   //                <div className="right-right">
   //                   <div className="image-container">
   //                      <img
   //                         src={images[currentIndex]}
   //                         alt={`第 ${currentIndex} 张图片`}
   //                      />
   //                   </div>
   //                   <div className='text-container'>
   //                      <span>{paragraphs[currentIndex]}</span>
   //                   </div>
   //                   <div className="audio-container">
   //                      <audio src={voices[currentIndex]} autoPlay={false} controls></audio>
   //                   </div>
   //                </div>
   //             </div>
   //          </>
   //       );
   //    } else {
   //       return (
   //          <>
   //             <img src={images[currentIndex]} alt={`第 ${currentIndex + 1} 張圖片`} />
   //          </>
   //       );
   //    }
   // }

   // const showvoice = (currentIndex: any) => {
   //    if (currentIndex > 0) {
   //       return (
   //          <>
   //             <audio src={voices[currentIndex - 1]} autoPlay={false} controls></audio>
   //             <audio src={voices[currentIndex]} autoPlay={false} controls></audio>
   //          </>
   //       );
   //    } else {
   //       return (
   //          <>
   //             <audio src={voices[currentIndex]} autoPlay controls></audio>
   //          </>
   //       );
   //    }
   // }


   const demoShowpic = () => {
      let aa = [];

      for (let i = 0; i < paragraphs.length; i++) {
         aa.push(
            <div key={i} className='container'>
               <img src={images[i]} alt={`這是第${i}張圖片`} style={{ width: '1000px' }} />
               <br />
               <div style={{ fontSize: '20px', fontFamily: 'Microsoft JhengHei' }}>{paragraphs[i]}</div>
               <br />
               <audio src={voices[i]} autoPlay={false} controls></audio>
            </div>
         );
      }

      return aa;
   }



   // useEffect(() => {
   //    // testGetImage0();
   //    demobooks3();
   //    demovoices3();
   // }, [paragraphs]);

   // useEffect(() => {
   //    getStoryData();
   //    demobooks3();
   //    demovoices3();
   //    setDemoLoaded(false);
   // }, [storyId])

   useEffect(() => {
      // Clear images and voices state
      setImages([]);
      setVoices([]);

      // Load new images and voices data
      demobooks3();
      demovoices3();
   }, [paragraphs]);

   useEffect(() => {
      // Clear images and voices state
      setImages([]);
      setVoices([]);

      // Load new story data and images/voices data
      getStoryData();
      demobooks3();
      demovoices3();
      setDemoLoaded(false);
   }, [storyId]);


   return (
      <div>
         <div className="container">
            <div className="left-area">
               {/* <div className="button-area">
                  {buttonIds.map((val, index) => (
                     <button
                        key={val.storyId}
                        onClick={() => handle_ID_ButtonClick(val.storyId)}
                        disabled={currentBookIndex === index}
                     >
                        {val.storyName}
                     </button>
                  ))}
               </div> */}
               <div className="arrow-container-left">
                  <button onClick={() => goToBook(currentBookIndex - 1)}>上一本故事</button>
                  {/* <button onClick={() => goToBook(currentBookIndex + 1)}> ^ↀᴥↀ^  下一頁</button> */}
               </div>
               <div className="arrow-container-right">
                  <button onClick={() => goToBook(currentBookIndex + 1)}>下一本故事</button>
               </div>
            </div>
            <div className="right-area">
               <div>{demoShowpic()}</div>
            </div>
         </div>
      </div>
   );



}
