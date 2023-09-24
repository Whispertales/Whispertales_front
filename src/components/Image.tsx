import { useState, useEffect } from 'react';
import { GetImageBase64, GetImagePrompt } from '../utils/tools/fetch';

import '../styles/Image.css';
import '../styles/Chatroom.css';

export default function Image({ inputValue, handleSubmit_Chatroom, handleInputChange_Chatroom, ClearButton }: any) {
    //const url = "http://163.13.201.153:7860/"; //http://163.13.201.153:7860/sdapi/v1/txt2img

    const [imageSrc, setImageSrc] = useState<string>("https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1592956978473.jpg");
    const [imageData, setImageData] = useState<string | null>(null);
    const [imagePrompt, setImagePrompt] = useState<string|null>("a Big Hotdog"); //初始imagepompt

    const promptsJson = {
        prompt: inputValue, //使用者輸入的值
        imagePrompt: imagePrompt
    };
    const handleClick = () => { //繳交user prompt值
        GetImagePrompt(promptsJson).then((res)=>{
            //console.log(`res = ${JSON.stringify(res)}`);
            //console.log(res.imagePrompt)
            GetImageBase64(res).then((data) => {
                //console.log(`data = ${data}`)
                setImageSrc(`data:image/png;base64,${data}`);
                setImageData(data)
            }).catch((e) => {
                console.log(`GetImageBase64 fail ${e}`);
            })
        }).catch((e)=>{
            console.log(`GetImagePrompt fail ${e}`);
        })
        //console.log(`inputValue = ${inputValue}`)
    }


    useEffect(() => {
    }, [imageData, imagePrompt]);

    return (
        <div>
            {/* className='inputright' */}
            <form className='chatroom' onSubmit={handleSubmit_Chatroom}>
                <input className='inputr1' style={{ fontSize: `20px` }} type="text" value={inputValue} onChange={handleInputChange_Chatroom} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='button-container'>
                    {/* Clear Button */}
                    <button onClick={ClearButton} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </button>  
                    <button type="submit" onClick={handleClick}>Send</button>
                </div>
            </form>
            <br />
            <img className='imagesize' src={imageSrc} alt="你生成出來的圖片" />
        </div>
    );
}