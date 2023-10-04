import { useState, useEffect } from 'react';

//import '../styles/Image.css';
//import '../styles/Chatroom.css';
//import '../components/style.css';
import '../com/style.css';

let text: string = `艾米在奶奶家的閣樓找到一把古老的鑰匙。奶奶說：“這會帶你去一個神奇的地方。\n\n艾米決定探索，她跟著小光點進入森林。\n\n小兔子說：“你找到鑰匙了！我可以帶你去森林的秘密地方。”\n\n艾米用鑰匙打開了門，裡面充滿了彩色的霓虹光。\n\n小兔子說：“這是森林的舞會，每年只舉行一次！”\n\n動物們都很友善，艾米很快就學會了森林舞步。\n\n小兔子說：“快，我們得走了，舞會結束，森林的門即將關閉。”\n\n艾米感謝小兔子帶她參加這麼特別的舞會，然後她回到了家中。\n\n艾米知道，這片神奇的森林和她的奇妙冒險會是她永遠的秘密。\n\n艾米把鑰匙放回奶奶的閣樓，旁邊有一本古老的日記。`;

export default function Image({ inputValue, handleSubmit_Chatroom, handleInputChange_Chatroom, ClearButton }: any) {
    //const url = "http://163.13.201.153:7860/"; //http://163.13.201.153:7860/sdapi/v1/txt2img

    //https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1633523164068.jpg
    const [imageSrc, setImageSrc] = useState<string>("http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01066-3084981302.png");

    const [currentIndex, setCurrentIndex] = useState(0);

    let imageDemo = [`http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01066-3084981302.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01424-2844723527.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01432-2401107374.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01487-1375819370.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01493-2122330869.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01502-1601180149.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01516-174787147.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01525-3471337416.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01536-3516332593.png`,
        `http://163.13.201.153:7860/file=/output/txt2img/2023-10-02/01549-1244017560.png`
    ]

    const paragraphs = text.split('\n\n'); // 將文本分割為段落


    const handleNextClick = () => {
        if (currentIndex < imageDemo.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div  >
            {/* className='inputright' */}
            <form onSubmit={handleSubmit_Chatroom}>
                <div className='imageleft '>
                    <img className='image' src={imageDemo[currentIndex]} alt={`Slider image ${currentIndex + 1}`} />
                    <br/>
                    <span className='pcolor'>{paragraphs[currentIndex]}</span>
                    <br />
                    <button className='leftbutton' onClick={handlePrevClick}>上一頁</button>
                    <button className='rightbutton' onClick={handleNextClick}>下一頁</button>
                    {/* <ShowStory text={text} imageDemo={imageDemo}></ShowStory> */}
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