import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Generate.css';

export default function Generate() {
   const [storyInfo, setStoryInfo] = useState("");
   const navigate = useNavigate();

   const handleChange = (e: any) => {
      setStoryInfo(e.target.value)
      //console.log(storyInfo)
   }
   const handleSubmit = (e: any) => {
      e.preventDefault();

      navigate('/generate/story', { state: { storyInfo: storyInfo } });
   }

   let playload = {
      storyInfo: storyInfo
   }

   return (
      <>
         <div className="background-image">
            <div className="overlay">
               <div className="top-bar">
                  <button className="button">
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        {
                           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                              <path d="M0 2.85714C0 1.27919 1.27919 0 2.85714 0H8.57143C10.1494 0 11.4286 1.27919 11.4286 2.85714V8.57143C11.4286 10.1494 10.1494 11.4286 8.57143 11.4286H2.85714C1.27919 11.4286 0 10.1494 0 8.57143V2.85714Z" fill="#5A6E79" />
                              <path d="M14.2857 2.85714C14.2857 1.27919 15.5649 0 17.1429 0H22.8571C24.4351 0 25.7143 1.27919 25.7143 2.85714V8.57143C25.7143 10.1494 24.4351 11.4286 22.8571 11.4286H17.1429C15.5649 11.4286 14.2857 10.1494 14.2857 8.57143V2.85714Z" fill="#5A6E79" />
                              <path d="M28.5714 2.85714C28.5714 1.27919 29.8506 0 31.4286 0H37.1429C38.7208 0 40 1.27919 40 2.85714V8.57143C40 10.1494 38.7208 11.4286 37.1429 11.4286H31.4286C29.8506 11.4286 28.5714 10.1494 28.5714 8.57143V2.85714Z" fill="#5A6E79" />
                              <path d="M0 17.1429C0 15.5649 1.27919 14.2857 2.85714 14.2857H8.57143C10.1494 14.2857 11.4286 15.5649 11.4286 17.1429V22.8571C11.4286 24.4351 10.1494 25.7143 8.57143 25.7143H2.85714C1.27919 25.7143 0 24.4351 0 22.8571V17.1429Z" fill="#5A6E79" />
                              <path d="M14.2857 17.1429C14.2857 15.5649 15.5649 14.2857 17.1429 14.2857H22.8571C24.4351 14.2857 25.7143 15.5649 25.7143 17.1429V22.8571C25.7143 24.4351 24.4351 25.7143 22.8571 25.7143H17.1429C15.5649 25.7143 14.2857 24.4351 14.2857 22.8571V17.1429Z" fill="#5A6E79" />
                              <path d="M28.5714 17.1429C28.5714 15.5649 29.8506 14.2857 31.4286 14.2857H37.1429C38.7208 14.2857 40 15.5649 40 17.1429V22.8571C40 24.4351 38.7208 25.7143 37.1429 25.7143H31.4286C29.8506 25.7143 28.5714 24.4351 28.5714 22.8571V17.1429Z" fill="#5A6E79" />
                              <path d="M0 31.4286C0 29.8506 1.27919 28.5714 2.85714 28.5714H8.57143C10.1494 28.5714 11.4286 29.8506 11.4286 31.4286V37.1429C11.4286 38.7208 10.1494 40 8.57143 40H2.85714C1.27919 40 0 38.7208 0 37.1429V31.4286Z" fill="#5A6E79" />
                              <path d="M14.2857 31.4286C14.2857 29.8506 15.5649 28.5714 17.1429 28.5714H22.8571C24.4351 28.5714 25.7143 29.8506 25.7143 31.4286V37.1429C25.7143 38.7208 24.4351 40 22.8571 40H17.1429C15.5649 40 14.2857 38.7208 14.2857 37.1429V31.4286Z" fill="#5A6E79" />
                              <path d="M28.5714 31.4286C28.5714 29.8506 29.8506 28.5714 31.4286 28.5714H37.1429C38.7208 28.5714 40 29.8506 40 31.4286V37.1429C40 38.7208 38.7208 40 37.1429 40H31.4286C29.8506 40 28.5714 38.7208 28.5714 37.1429V31.4286Z" fill="#5A6E79" />
                           </svg>
                        }
                     </svg>
                  </button>
                  <div className="icon"></div> { }
                  <div className="text">WisperTales    細語故事</div> { }
                  <div className="login-button">登入</div>
                  <div className="register-button">註冊</div>


               </div>
               <form onSubmit={handleSubmit} className='Generate_from'>
                  <div style={{ textAlign: 'center', paddingTop: '20vh', position: 'relative' }}>
                     <div className="icon-search" style={{ position: 'absolute', left: '10px', top: '185px', transform: 'translateY(-50%)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path fillRule="evenodd" clipRule="evenodd" d="M10.2686 20.5372C4.59741 20.5372 0 15.9398 0 10.2686C0 4.59741 4.59741 0 10.2686 0C15.9398 0 20.5372 4.59741 20.5372 10.2686C20.5372 12.6416 19.7323 14.8266 18.3806 16.5655L23.0924 21.2773C23.5936 21.7786 23.5936 22.5913 23.0924 23.0926C22.5911 23.5938 21.7784 23.5938 21.2771 23.0926L16.5653 18.3807C14.8265 19.7324 12.6415 20.5372 10.2686 20.5372ZM10.2686 17.9701C14.522 17.9701 17.9701 14.522 17.9701 10.2686C17.9701 6.01521 14.522 2.56715 10.2686 2.56715C6.01521 2.56715 2.56715 6.01521 2.56715 10.2686C2.56715 14.522 6.01521 17.9701 10.2686 17.9701Z" fill="#5A6E79" />
                        </svg>
                     </div>

                     <input type="text" placeholder="今天想聽什麼故事呢..." onChange={handleChange} className='input-text'/>

                     <button type='submit'className='button-submit'> 生成</button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}