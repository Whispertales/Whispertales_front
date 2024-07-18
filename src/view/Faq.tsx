import React from "react";

export default function Faq() {
    const css4 = `
    .my-element4 {
        min-height: 30px;
        display: flex;
        flex-direction: column;
        text-align:center;
        background-image: linear-gradient(to right, #1c1c1c, #9D9D9D); 
        width : 100vw;
        height : 120vw;
        color: #fff;
    }`
    //大標
    const css = `
    .btn {
        display: inline-block;
        position: relative;
        z-index: 1;
        min-width: 200px;
        background: #DAB1D5;
        border: 5px solid #984B4B;
        border-radius: 4px;
        color: #6C3365;
        font-size:  2.7rem;
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        overflow: hidden;
        transition: 0.5s;
        padding: 10px 20px;
    }
    .btn span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: #C7C7E2;     
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }
    .btn:hover,
    .btn:focus {
        color: #484891;
    }
    .btn:hover span {
        transform: translateY(0) scale(2);
    }
    .btn span:nth-child(1) {
        --n: 1;
    }
    .btn span:nth-child(2) {
        --n: 2;
    }
    .btn span:nth-child(3) {
        --n: 3;
    }
    .btn span:nth-child(4) {
        --n: 4;
    }`
    //解決方法
    const btn1 = `
    .btn1 {
        position: relative;
        min-width: 160px;
        background: transparent;
        border: none;
        border-radius: 50px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 20px;
    }
    .btn1 span {
        color: #FFFFFF;
        mix-blend-mode: difference;
    }
    .btn1:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 52px;
        height: 100%;
        border-radius: 50px;
        background: #D1E9E9;
        transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .btn1:hover:before {
      background: #B8B8DC;
      width: 100%;
    }`
    //標題
    const css2 = `
    .my-element2 {
        list-style-type: '➣ ';
        font-weight:bold;
        box-shadow : 0 10px 10px -5px;
        font-size: 18px;
        height : 35px;
    }`

    return (
        <div className="my-element4">
            <style>{css4}</style>
            <a href="javascript: void(0)" className="btn">
                常見問題
                <span></span><span></span><span></span><span></span>
            </a>
            <style>{css}</style>
            <br></br>
            <details>
                <summary className="my-element2">生成圖片品質不佳</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 如果生成的圖片不滿足您的需求，
                    您可以試著調整生成參數，例如分辨率、樣式、或顏色選項。通常，增加分辨率、降低噪音等調整可以提高品質</span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">圖片生成速度太慢</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 若生成圖片花費太長時間，您可以考慮簡化圖片的複雜性，或者升級您的硬件以提高生成速度。此外，使用更輕量級的生成模型也可能有所幫助
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">無法控制生成的內容</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法：提供更多的參數或選項，讓使用者指定生成圖片的內容，或提供適當的過濾器和調整工具
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">生成的圖片侵犯了版權或隱私</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 實施版權檢查和過濾器，確保生成的圖片不侵犯任何權利
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">生成的圖片與預期不符</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法：當生成結果不如預期時，您可以嘗試不同的輸入參數，調整生成模型的超參數，或者試驗不同的風格或樣式
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">無法保存或下載生成的圖片</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 提供保存和下載選項，確保使用者可以輕鬆地存儲生成的圖片
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">網站運行緩慢或崩潰</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 優化伺服器性能，增加伺服器資源，或使用負載均衡器以處理大量請求
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">無法導出高解析度圖片</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 增加解析度選項，讓使用者可以生成高品質的圖片
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">不支援移動設備</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 優化網站以在移動設備上適當顯示，或開發移動應用程序
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">生成的圖片有明顯的瑕疵或畸變</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 修復生成模型的問題，例如去除生成圖片中的噪音或異常
                </span>
                    <style>{btn1}</style>
                </button></details>
            <br></br>
            <details>
                <summary className="my-element2">無法生成特定主題或風格的圖片</summary>
                <style>{css2}</style>
                <button className="btn1"><span>解決方法 : 確保選擇的生成模型與您的需求相符，並在輸入中提供相關的提示和細節，以引導模型生成所需主題或風格的圖片
                </span>
                    <style>{btn1}</style>
                </button></details>
        </div >
    );
}
