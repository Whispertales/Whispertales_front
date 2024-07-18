// import { useEffect, useState } from 'react';

// import { books, Allbooks, booksShow } from '../utils/tools/books';

// import "../styles/Story.css";

// export default function Story() {
//    const [storyId, setStoryId] = useState("");
//    const [showStory, setShowStory] = useState("");
//    const [currentIndex, setCurrentIndex] = useState(0);
//    const [paragraphs, setParagraphs] = useState([]);
//    const [images, setImages] = useState<string[]>([]);
//    const [voices, setVoices] = useState<string[]>([]);
//    const [demoLoaded, setDemoLoaded] = useState(false);
//    const [buttonIds, setButtonIds] = useState<books[]>();
//    const [currentBookIndex, setCurrentBookIndex] = useState(0);

//    // Allbooks().then((booksFDB: books[] | null) => {
//    //    booksFDB ? setButtonIds(booksFDB) : setButtonIds([]);
//    // });



//    function goToBook(index: number) {
//       if (buttonIds && index >= 0 && index < buttonIds.length) {
//          setStoryId(buttonIds[index].storyId);
//          setCurrentBookIndex(index);
//          setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成
//       }else{
//          console.log(`buttonIds == null []`);
//       }
//    }


//    // const handleLeftClick = () => {
//    //    if (currentBookIndex > 0) {
//    //       setCurrentBookIndex(currentBookIndex - 1);
//    //    }
//    // };

//    // const handleRightClick = () => {
//    //    if (buttonIds && currentBookIndex < buttonIds.length - 1) {
//    //       setCurrentBookIndex(currentBookIndex + 1);
//    //    }else{
//    //       console.log(`buttonIds == null []`);
//    //    }
//    // };

//    // 正式使用，調用gpt生成圖片
//    // const testGetImage0 = async () => {
//    //    if (demoLoaded || paragraphs.length === 0) return; // 如果 demoLoaded 为 false 或 paragraphs 数组为空，则不执行任何操作

//    //    setDemoLoaded(false); // 禁用所有其他按钮，直到新资源加载完成

//    //    for (let i = 0; i < paragraphs.length; i++) {
//    //       try {
//    //          const enPrompt = await GetImagePrompt(paragraphs[i]);
//    //          console.log(`${i + 1}個故事英文prompt 為 ${enPrompt}`)
//    //          const data = await GetImageBase64(enPrompt);
//    //          setImages((prevImages) => [...prevImages, `data:image/png;base64,${data}`]);
//    //       } catch (e) {
//    //          console.log(`get image error: ${e}`);
//    //       }
//    //    }

//    //    setDemoLoaded(true); // 启用所有按钮并标记资源已加载完毕
//    // };


//    const demobooks3 = async () => {
//       if (demoLoaded || paragraphs.length === 0) return;
//       let loadedImages: string[] = [];
//       for (let i = 0; i < paragraphs.length; i += 1) {
//          try {
//             const urlpic = await getdemopic(storyId, i + 1);
//             loadedImages.push(urlpic);
//          } catch (error) {
//             console.error(error);
//          }
//       }
//       setImages(prevImages => [...prevImages, ...loadedImages]);
//    };

//    const demovoices3 = async () => {
//       if (demoLoaded || paragraphs.length === 0) return;
//       let loadedVoices: string[] = [];
//       for (let i = 0; i < paragraphs.length; i = i + 1) {
//          try {
//             //<audio src="path/to/audio.mp3" controls></audio>
//             const urlpic = await getdvoices(storyId, i + 1);
//             loadedVoices.push(`${urlpic}`);
//          } catch (error) {
//             console.error(error);
//          }
//       }
//       setVoices(prevImages => [...prevImages, ...loadedVoices]);
//    };


//    const demoShowpic = () => {
//       let aa = [];
//       for (let i = 0; i < paragraphs.length; i++) {
//          try{
//             aa.push(
//                <div key={i} className='little-container'>
//                   <img src={images[i]} alt={`這是第${i}張圖片`} style={{ maxWidth: '1020px', color: 'black' }} />
//                   <br />
//                   <div style={{ fontSize: '20px', fontFamily: 'Microsoft JhengHei', color:'black'}}>{paragraphs[i]}</div>
//                   <br />
//                   <audio src={voices[i]} autoPlay={false} controls></audio>
//                </div>
//             );
//          }catch{

//          }
         
//       }
//       return aa;
//    }

//    useEffect(() => {
   
//       const getAllBooksFDB = async () => {
//          try {
//             const booksFDB = await Allbooks();
//             setButtonIds(booksFDB || []);
//             // console.log(`ButtonIds = ${JSON.stringify(buttonIds)}`);
//          } catch (error) {
//             console.error(`Error in Story component: ${error}`);
//          }
//       };
//       getAllBooksFDB();
//    }, [paragraphs, buttonIds]);

//    useEffect(() => {
//       // Clear images and voices state
//       setImages([]);
//       setVoices([]);

//       // Load new story data and images/voices data
//       getStoryData();
//       demobooks3();
//       demovoices3();
//       setDemoLoaded(false);
//    }, [storyId]);

//    const show = () =>{
//       buttonIds?.forEach(val=>{
//          console.log(`storyId: ${val.storyId}, storyName: ${val.storyName}`);
//       })
//       return JSON.stringify(buttonIds);
//    }

//    return (
//       <div className="background">
//          {/* {show()} */}
//          <div className="container">
//             <div>
//                <div className="arrow-container-left">
//                   <button onClick={() => goToBook(currentBookIndex - 1)} className="leftbutton-style">  上一本故事  </button>
//                   {/* <button onClick={() => goToBook(currentBookIndex + 1)}> ^ↀᴥↀ^  下一頁</button> */}
//                </div>
//                <div className="arrow-container-right">
//                   <button onClick={() => goToBook(currentBookIndex + 1)} className="rightbutton-style">下一本故事</button>
//                </div>
//             </div>
//             <div>
//                <div>{demoShowpic()}</div>
//             </div>
//          </div>
//       </div>
//    );



// }
