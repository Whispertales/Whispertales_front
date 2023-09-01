import { useState, useEffect } from 'react';
import { GetImageBase64, GetImagePrompt } from '../utils/tools/fetch';


export default function Image({ inputValue, handleSubmit_Chatroom, handleInputChange_Chatroom }: any) {
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
            <form onSubmit={handleSubmit_Chatroom}>
                <input style={{ fontSize: `20px` }} type="text" value={inputValue} onChange={handleInputChange_Chatroom} />
                <button type="submit" onClick={handleClick}>Send</button>
            </form>
            <br />
            <img src={imageSrc} alt="你生成出來的圖片" />
        </div>
    );
}