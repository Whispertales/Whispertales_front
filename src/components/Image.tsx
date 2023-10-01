import { useState, useEffect } from 'react';
import { GetImageBase64, GetImagePrompt } from '../utils/tools/fetch';
import DropdownForm from './DropdownForm';
import ShowStory from './ShowStory';

import '../styles/Image.css';
import '../styles/Chatroom.css';
import './style.css';

let aa:string=`在古老的數學王國，1是一位普通的國民，他一直夢想著改變這個世界。某天，1有了一種奇特的力量，那就是加法力量。他用這個力量可以把王國中的各種數字相加，吸引了大家的關注。\n\n1感受到這力量的強大，但也發現它有些單調。於是，他決定去探求更深入的數學知識。在深山中，1發現了另一種神秘力量，那就是乘法。他學會了用這種力量，將數字相乘，這引起了數學王國的轟動。\n\n但是，王國中的壞蛋，減法和除法，卻嫉妒着1的名氣。它們用各種困難阻撓1。於是，1又在難題中學習了減法和除法的知識，並且成功地將兩個壞蛋化解了。\n\n最後，1發現他要掌控所有的數學知識，必須通過一個難題，那就是排列組合。1想了很久，終於找到了答案。他成功地通過了試煉，成為了一位全能的數學大師，引領著數學王國不斷前進。`;

export default function Image({ inputValue, handleSubmit_Chatroom, handleInputChange_Chatroom, ClearButton }: any) {
    //const url = "http://163.13.201.153:7860/"; //http://163.13.201.153:7860/sdapi/v1/txt2img

    //https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1592956978473.jpg
    //https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1633523164068.jpg
    const [imageSrc, setImageSrc] = useState<string>("https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1633523164068.jpg");
    const [imageData, setImageData] = useState<string | null>(null);
    const [imagePrompt, setImagePrompt] = useState<string|null>("a Big Hotdog"); //初始imagepompt
    const [dataFromChild, setDataFromChild] = useState('');

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

    const handleChildData = (data: any) => {
        console.log(`ChildData = ${data}`)
        setDataFromChild(data);
    };

    
    useEffect(() => {
    }, [imageData, imagePrompt, dataFromChild]);

    return (
        <div>
            <div>
                <DropdownForm onData={handleChildData} genImage={handleClick}></DropdownForm> 
            </div>
            {/* className='inputright' */}
            <form className='imageZone' onSubmit={handleSubmit_Chatroom}>
                <div className='image-container'>
                    <img src={imageSrc} alt="你生成出來的圖片" />
                    {/* <p>Data from child: {dataFromChild}</p> */}
                    {/* <ShowStory text={dataFromChild}></ShowStory> */}
                    <ShowStory text={aa}></ShowStory>
                </div>
                <div className='button-container'>
                    <input placeholder="有問題請問ai助手" style={{ fontSize: `20px` }} type="text" value={inputValue} onChange={handleInputChange_Chatroom} />
                    {/* Clear Button */}
                    <button onClick={ClearButton} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                    </button>  
                    <button type="submit">Send</button>
                </div>
            </form>
            <br />
            
        </div>
    );
}