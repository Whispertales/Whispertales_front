function convertTextToHTML(text: string) {
    const paragraphs = text.split('\n\n'); // 將文本分割為段落
    const paragraphsHTML = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
    return paragraphsHTML;
}

// 在React組件中使用轉換函數
export default function ShowStory({text}:any) {
    console.log(`text = ${text}`);
    const paragraphsHTML = convertTextToHTML(text);

    return (
        <div>
            {paragraphsHTML}
        </div>
    );
}