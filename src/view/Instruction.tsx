// Instruction.js

import React from "react";
import './Instruction&AboutUs.css';

type _Instruction = {
    title: string,
    imageURL?: string,
    imageAlt?: string,
    desc: string[]
}

const _login: string[] = [
    "❶ 請輸入帳號、密碼以便登入。",
    "➋ 如果您忘記密碼，請點選{ 忘記密碼 }。",
    "➌ 如果您尚未註冊，請點選下方藍字{ 註冊 }。",
    "➍ 輸入正確帳號、密碼後，即可按登入{ 提交 }鍵登入。",
    "➎ 若輸入的帳號、密碼錯誤，請重試或者點選忘記密碼。"
]

const _logout: string[] = [
    "❶ 若您以確認使用完畢，請點選是; 若您未使用完畢，請點選否。",
    "➋ 點選{ 是 }系統會自動幫您登出。",
    "➌ 點選{ 否 }，系統會自動跳回剛剛的畫面。"
]

const _text_and_gen: string[] = [
    "❶ 登入後，可以看見右下方對話框。",
    "➋ 使用者於對框中輸入您想生成圖片的文字敘述。",
    "➌ 使用者輸入的文本越詳細越好，例如風格、場景、人物等。",
    "➍ 輸入完描述後請按鍵盤上的{ Enter }，以便系統生成圖片。",
    "➎ 系統成功生成圖片後，會發佈生成完畢的提醒。",
    "➏ 點擊按鈕{ < }和{ > }以便瀏覽圖片。",
    "➐ 點擊右上方按鈕以便放大或縮小圖片。"
]

const _features: string[] = [
    "❶ 主頁中左上方一九宮格按鍵，點選後，即為功能列表。",
    "➋ 以下皆為功能上的介紹，將依次介紹。"
]

const _favroite: string[] = [
    "❶ 當圖片生成後，系統會根據使用者瀏覽過次數最多的圖片中選出數張圖片。",
    "➋ 此功能方便讓使用者知道自己的愛好。"
]

const _pic_download: string[] = [
    "❶ 使用者點選儲存文字後，可以將圖片改名稱。",
    "➋ 改完名稱後，可以選擇將生成好的圖片存放在電腦的任一位置。",
    "➌ 修改名稱及位置後，點選儲存或取消。",
    "➍ 點選{ 儲存 }，系統會將您的圖片存放在您指定的位置。",
    "➎ 點選{ 取消 }，系統會將您所修改的名稱及位置取消，同時取消圖片的儲存。"
]

const _keywords: string[] = [
    "❶ 熱門關鍵字是系統紀錄所有使用者最頻繁且流行的搜尋，並匯集起來的文字。",
    "➋ 常見關鍵字是系統紀錄所有使用者最常用的搜尋文字，符合大眾常使用的關鍵字。"

]

const _pic_share: string[] = [
    "❶ 此功能可以讓使用者將生成好的圖片分享給別人，可以選擇任何一個軟體分享。",
    "➋ 支持分享的軟體包含E-mail、Instagram、Facebook、Line......等。"
]

const _FAQ: string[] = [
    "❶ 此功能是大部分使用者在使用這項軟體時會遇到的困難，因此此項功能清楚描述使用者在遭遇問題時如何解決。",
    "➋ 系統會將大部使用者會遇到的問題羅列在裡面，當使用者面臨使用問題時可以以此為參考，解決問題。"
]

const _about_us: string[] = [
    "❶ 此功能主要是介紹我們做這個軟體的初衷以及開發軟體的過程。",
    "➋ 裡面詳細介紹本軟體、成員的資訊和使用的軟體規範。"
]

const _user_settings: string[] = [
    "❶ 此項功能可以讓使用者進行帳號密碼的設定。",
    "➋ 使用者可以選擇更改密碼或者切換使用者帳號。",
    "➌ 此項功能需建立在使用者已登入的情況下才可使用，未登入者無法使用。"
]

const InstructionData: _Instruction[] = [
    { title: "✈登入或註冊", imageURL: "https://i.imgur.com/f7tef0p.jpg", imageAlt: "登入畫面", desc: _login },
    { title: "✘登出", imageURL: "https://i.imgur.com/GpVW5ef.jpg", imageAlt: "登出畫面", desc: _logout },
    { title: "⎚描述文本並生成圖片", imageURL: "https://i.imgur.com/ZLn93ae.jpg", imageAlt: "輸入文本並生成圖片", desc: _text_and_gen },
    { title: "☼功能介紹", imageURL: "https://i.imgur.com/CNO9tHn.jpg", imageAlt: "輸入文本並生成圖片", desc: _features },
    { title: "💕我的最愛", desc: _favroite },
    { title: "⇩下載圖片", imageURL: "https://i.imgur.com/YYT08ns.jpg", imageAlt: "輸入文本並生成圖片", desc: _pic_download },
    { title: "⚝熱門、常見關鍵字", desc: _keywords },
    { title: "⮳分享圖片", desc: _pic_share },
    { title: "🔮常見問題", desc: _FAQ },
    { title: "⍨關於我們", desc: _about_us },
    { title: "✎使用者設定", desc: _user_settings }
]

export default function Instruction() {
    const InstructionArea = InstructionData.map(data =>
        <section>
            <h3 className="heading">{data.title}</h3>
            <p className="paragraph">
                {(data.imageURL && data.imageAlt) &&
                    <p className="centered-image">
                        <img
                            src={data.imageURL}
                            alt={data.imageAlt}
                            className="fixed-ratio-image rounded-rectangle"
                        />
                        <br />
                    </p>
                }

                {
                    data.desc.map(d =>
                        <>
                            {d}
                            <br />
                        </>
                    )
                }
            </p>
        </section>
    )

    return (
        <div className="instruction-container">
            <h2 className="main heading">Instruction➭</h2>
            <>{InstructionArea}</>
        </div>
    );
}