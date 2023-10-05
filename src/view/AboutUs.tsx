import React from "react";


type About = {
    name: string,
    imageURL: string,
    desc: string
}

const AboutUsData: About[] = [
    { name: "🌿黑暗大魔王(通靈魔法師)", imageURL: "https://img.onl/H6WEDe", desc: "我是Coco，興趣是吸貓，吸貓是我最愛的事情，賺錢給他買75一個的罐罐是我的生活目標。<br/>目前單身。看到設計師設計出的作品，作為網頁工程師的我只感到頭痛。" },
    { name: "🍀文佳(嘎嘎)", imageURL: "https://img.onl/mOjkNU", desc: "我叫文佳，負責前端一小部分的製作，喜換做的事情是瘋狂嚕貓貓" },
    { name: "🍁吳宥萱", imageURL: "https://img.onl/1N2PQ", desc: "在專案中負責製作後端的「我的最愛」的一小部分功能" },
    { name: "🍂李睿芸", imageURL: "https://img.onl/GVBnZ", desc: "在專案中負責設計網頁樣式及製作前端的使用者設定" },
    { name: "🍃土豆絲", imageURL: "https://img.onl/qRzBVT", desc: "負責前端的網頁流程介紹 說明怎麼使用這個網站" },
    { name: "🍃陳祈瑄", imageURL: "https://img.onl/dVzp9I", desc: "負責製作前端的常見問題網頁" }
]

export default function AboutUs() {
    const dataArea = AboutUsData.map(data =>
        <div>
            <b><h3>{data.name}</h3></b>
            <img src={data.imageURL} alt="圖示" className="ima" />
            <p dangerouslySetInnerHTML={{ __html: data.desc }} />
        </div>
    )

    return (
        <div className="backgroundAboutUs">
            <h1>關於我們</h1>
            <a href="#member" className="linkcolor" >開發成員介紹</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="#reason" className="linkcolor">開發原因</a>
            <h2 id="member">開發成員介紹</h2>
            <>{dataArea}</>
            <h2 id="reason">開發原因</h2>
            <h4>一開始，考慮到市場需求，同時也希望看看我們能夠做出什麼樣的作品，我們希望讓使用者能夠以更簡單的方式，只需透過文字對話就能夠操作AI進行繪圖，使這一項功能變得更加普及和易於使用。此外，也希望讓我們的網站能夠比較準確地生成符合用戶需求的圖像，提供更好的搜索體驗，同時也迎合了當前AI生成圖像工具的流行趨勢，利用現代AI技術生成高品質的圖像，這些圖像可以用於其他專案、報告或創作中，為用戶提供方便且質量更高的資源。因此，我們決定製作"由AI機器人溝同配合生成讀者想要的圖片"這樣的網站。</h4>
        </div>
    );
}