import React, { useEffect, useState } from 'react';
import Image from './Image';


export default function SD_Container({ promptInput }:any) {
    const [steps, setSteps] = useState<number>(1);
    const hadleStepsChange = (event:any)=>{
        setSteps(event.target.value);
        //alert(`你輸入的東西為:  ${event.target.value}`)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Prompt 值：${promptInput}，數量：${steps}`);
    }
    return (
        <div>
            {/*
            這一段的form 未來會被即時聊天室取代，目前先留著並上傳(8/20)}
            <form onSubmit={handleSubmit}>
                <label>請輸入你的 prompt 值：</label>
                <input type="text" name='prompt' value={promptInput} onChange={handlePromptChange} />
                <br />
                <label>請輸入你要生成的圖片數量：</label>
                <input type="text" name='steps' value={steps} onChange={hadleStepsChange} />
                <button type="submit">查看</button>
            </form>
            <br />
            */}
        </div>
    );
}