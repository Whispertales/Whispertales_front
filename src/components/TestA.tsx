import { useState } from "react";
import { apis } from "../utils/tools/api";

const url = `http://163.13.201.153:9880?refer_wav_path=./audio/audio_1.wav&prompt_text=我是可麗玩家，碰碰炸彈&prompt_language=zh&text=先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。&text_language=zh`
const getAudio = async() =>{
   const res = await fetch(url,{
      method: 'GET',
      headers:{},
   }).then(audio =>{
      console.log(`應該可以 get 成功`);
      return "okk";
   }).catch(err=>{
      console.error(`幹不行，失敗了${err}`);
   })
}


export default function TestA(){
   const [num, setNum] = useState<number>(1);
   const Button_handleClick = async() =>{
      console.log(`num = ${num}`);
      setNum(num+1);
      const val = await getAudio();
      console.log(`val = ${val}`);
   }

   return(
      <div>
         <button onClick={Button_handleClick}>點我一下，感謝你，功德加100</button>
      </div>
   );
}