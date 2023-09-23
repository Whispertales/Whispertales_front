import React from "react";

export default function AboutUs() {
    return (
        <div className="backgroundAboutUs">

            <h1>關於我們</h1>
            <a href="#member" className="linkcolor" >開發成員介紹</a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="#reason" className="linkcolor">開發原因</a>
            <h2 id="member">開發成員介紹</h2>
            <div>
                <b><h3>🌿黑暗大魔王(通靈魔法師)</h3></b>
                <img src ="https://img.onl/H6WEDe" alt="圖示" className="ima"/>
                <p>我是Coco，興趣是吸貓，吸貓是我最愛的事情，賺錢給他買75一個的罐罐是我的生活目標。<br></br>
                目前單身。看到設計師設計出的作品，作為網頁工程師的我只感到頭痛。</p>
            </div>
            <div >
                <b><h3>🍀文佳(嘎嘎)</h3></b>
                <img src ="https://img.onl/mOjkNU" alt="圖示" className="ima"/>
                <p>我叫文佳，負責前端一小部分的製作，喜換做的事情是瘋狂嚕貓貓 </p>
            </div>
            <div>
                <b><h3>🍁吳宥萱</h3></b>
                <img src ="https://img.onl/1N2PQ" alt="圖示" className="ima"/>
                <p>在專案中負責製作後端的「我的最愛」的一小部分功能</p>
            </div>
            <div>
                <b><h3>🍂李睿芸</h3></b>
                
                <img src ="https://img.onl/GVBnZ" alt="圖示" className="ima" />
                <br/>
                <p>在專案中負責設計網頁樣式及製作前端的使用者設定</p>
            </div>
            <div>
                <b><h3>🍃土豆絲</h3></b>
                <img src ="https://img.onl/qRzBVT" alt="圖示" className="ima" />
                <br/>
                <p> 負責前端的網頁流程介紹 說明怎麼使用這個網站</p>
            </div>
            <div>
                <b><h3>🍃陳祈瑄</h3></b>
                <img src ="https://img.onl/dVzp9I" alt="圖示" className="ima" />
                <br/>
                <p> 負責製作前端的常見問題網頁</p>
            </div>
            
            <h2 id="reason">開發原因</h2>
            <h4>一開始，考慮到市場需求，同時也希望看看我們能夠做出什麼樣的作品，我們希望讓使用者能夠以更簡單的方式，只需透過文字對話就能夠操作AI進行繪圖，使這一項功能變得更加普及和易於使用。此外，也希望讓我們的網站能夠比較準確地生成符合用戶需求的圖像，提供更好的搜索體驗，同時也迎合了當前AI生成圖像工具的流行趨勢，利用現代AI技術生成高品質的圖像，這些圖像可以用於其他專案、報告或創作中，為用戶提供方便且質量更高的資源。因此，我們決定製作"由AI機器人溝同配合生成讀者想要的圖片"這樣的網站。</h4>

       
        </div>
    );
}