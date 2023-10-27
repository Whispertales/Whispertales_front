import { useState, useEffect, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';

import { GetImageBase64, GetImagePrompt, PostStory } from '../utils/tools/fetch';

export default function Generate(){
   const [storyInfo, setStoryInfo] = useState("");
   const navigate = useNavigate();

   const handleChange = (e:any) =>{
      setStoryInfo(e.target.value)
      //console.log(storyInfo)
   }  
   const handleSubmit = (e:any) =>{
      e.preventDefault();

      navigate('/generate/story', { state: { storyInfo: storyInfo } });
      PostStory(playload)
   }

   let playload = {
      storyInfo: storyInfo
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center', paddingTop: '20vh' }}>
               <h1>WisperTale</h1>
               <input type="text" placeholder="Enter your text" onChange={handleChange} />
            </div>
            <button type='submit'> 繳交</button>
         </form>
      </>
   );
}