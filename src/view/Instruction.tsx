// Instruction.js

import React from "react";
import './Instruction&AboutUs.css';

export default function Instruction(){
    return(
        <div className="instruction-container">
            <h2 className="main heading">Instruction➭</h2>

            <section>
                <h3 className="heading"> ✈登入或註冊</h3>
                <p className="paragraph">
                <p className="centered-image">
                    <img
                    src="https://i.imgur.com/f7tef0p.jpg"
                    alt="登入畫面"
                    className="fixed-ratio-image rounded-rectangle"
                    />
                    <br />
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 請輸入帳號、密碼以便登入。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 如果您忘記密碼，請點選<button onClick={()=>console.log('clicked')}>忘記密碼</button>。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➌ 如果您尚未註冊，請點選下方藍字<button onClick={()=>console.log('clicked')}>註冊</button>。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➍ 輸入正確帳號、密碼後，即可按登入(提交)鍵登入。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➎ 若輸入的帳號、密碼錯誤，請重試或者點選忘記密碼。
                </p>
            </section>


            <section>
                <h3 className="heading"> ✘登出</h3>
                <p className="paragraph">
                <p className="centered-image">
                    <img
                    src="https://i.imgur.com/GpVW5ef.jpg"
                    alt="登出畫面"
                    className="fixed-ratio-image rounded-rectangle"
                    />
                    <br />
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 若您以確認使用完畢，請點選是; 若您未使用完畢，請點選否。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 點選<button onClick={()=>console.log('clicked')}>是</button>，系統會自動幫您登出。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➌ 點選<button onClick={()=>console.log('clicked')}>否</button>，系統會自動跳回剛剛的畫面。
                </p>
            </section>


            <section>
                <h3 className="heading"> ⎚描述文本並生成圖片</h3>
                <p className="paragraph">
                <p className="centered-image">
                    <img
                    src="https://i.imgur.com/ZLn93ae.jpg"
                    alt="輸入文本並生成圖片"
                    className="fixed-ratio-image rounded-rectangle"
                    />
                    <br />
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 登入後，可以看見右下方對話框。 
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 使用者於對框中輸入您想生成圖片的文字敘述。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➌ 使用者輸入的文本越詳細越好，例如風格、場景、人物等。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➍ 輸入完描述後請按鍵盤上的<button onClick={()=>console.log('clicked')}>Enter</button> ，以便系統生成圖片。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➎ 系統成功生成圖片後，會發佈生成完畢的提醒。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➏ 點擊按鈕<button onClick={()=>console.log('clicked')}>{'<'}</button>和<button onClick={()=>console.log('clicked')}>{'>'}</button> 以便瀏覽圖片
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➐ 點擊右上方按鈕以便放大或縮小圖片。
                </p>
            </section>


            <section>
                <h3 className="heading"> ☼功能介紹</h3>
                <p className="paragraph">
                <p className="centered-image">
                    <img
                    src="https://i.imgur.com/CNO9tHn.jpg"
                    alt="輸入文本並生成圖片"
                    className="fixed-ratio-image rounded-rectangle"
                    />
                    <br />
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 主頁中左上方一九宮格按鍵，點選後，即為功能列表。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 以下皆為功能上的介紹，將依次介紹。
                </p>
            </section>


            <section>
                <h3 className="heading"> 💕我的最愛</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 當圖片生成後，系統會根據使用者瀏覽過次數最多的圖片中選出數張圖片。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 此功能方便讓使用者知道自己的愛好。
                </p>
            </section>


            <section>
                <h3 className="heading"> ⇩下載圖片</h3>
                <p className="paragraph">
                <p className="centered-image">
                    <img
                    src="https://i.imgur.com/YYT08ns.jpg"
                    alt="輸入文本並生成圖片"
                    className="fixed-ratio-image rounded-rectangle"
                    />
                    <br />   
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 使用者點選儲存文字後，可以將圖片改名稱。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 改完名稱後，可以選擇將生成好的圖片存放在電腦的任一位置。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➌ 修改名稱及位置後，點選儲存或取消。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➍ 點選<button onClick={()=>console.log('clicked')}>儲存</button>，系統會將您的圖片存放在您指定的位置。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➎ 點選<button onClick={()=>console.log('clicked')}>取消</button>，系統會將您所修改的名稱及位置取消，同時取消圖片的儲存。
                </p>
            </section>


            <section>
                <h3 className="heading">⚝熱門、常見關鍵字</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 熱門關鍵字是系統紀錄所有使用者最頻繁且流行的搜尋，並匯集起來的文字。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 常見關鍵字是系統紀錄所有使用者最常用的搜尋文字，符合大眾常使用的關
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;鍵字。
                </p>
            </section>


            <section>
                <h3 className="heading">⮳分享圖片</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 此功能可以讓使用者將生成好的圖片分享給別人，可以選擇任何一個軟體分
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;享。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 支持分享的軟體包含E-mail、Instagram、Facebook、Line......等。
                </p>
            </section>


            <section>
                <h3 className="heading"> 🔮常見問題</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 此功能是大部分使用者在使用這項軟體時會遇到的困難，因此此項功能清楚
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;描述使用者在遭遇問題時如何解決。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 系統會將大部使用者會遇到的問題羅列在裡面，當使用者面臨使用問題時可
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以以此為參考，解決問題。
                </p>
            </section>


            <section>
                <h3 className="heading"> ⍨關於我們</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 此功能主要是介紹我們做這個軟體的初衷以及開發軟體的過程。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 裡面詳細介紹本軟體、成員的資訊和使用的軟體規範。
                </p>
            </section>


            <section>
                <h3 className="heading"> ✎使用者設定</h3>
                <p className="paragraph">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❶ 此項功能可以讓使用者進行帳號密碼的設定。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➋ 使用者可以選擇更改密碼或者切換使用者帳號。
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➌ 此項功能需建立在使用者已登入的情況下才可使用，未登入者無法使用。
                </p>
            </section>
        </div>
    );
}