import ReactDOMServer from 'react-dom/server';
import React, { useState } from 'react';

function convertTextToHTML(text: string) {
    const paragraphs = text.split('\n\n'); // 將文本分割為段落
    const paragraphsHTML = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    const phara0 = ReactDOMServer.renderToString(paragraphsHTML[0]);
    console.log(`phara0 = ${phara0}`);  

    return paragraphsHTML;
}

// 在React組件中使用轉換函數
export default function ShowStory({text}:any) {
    // console.log(`text = ${text}`);
    /*const paragraphsHTML = convertTextToHTML(text);

    return (
        <div>
            <div>
                {paragraphsHTML}

            </div>
        </div>      
    );
    */
    const paragraphs = text.split('\n\n'); // 將文本分割為段落
    const [currentPage, setCurrentPage] = useState(0);

    const goToNextPage = () => {
        if (currentPage < paragraphs.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <div>
            <div>
                <p>{paragraphs[currentPage]}</p>
            </div>
            <button onClick={goToPreviousPage}>上一頁</button>
            <button onClick={goToNextPage}>下一頁</button>
        </div>
    );
}