import { apis } from "./api";

export async function GenStory():Promise<any>{
    let playload = {
        
    }
}

// //拿到英文的 生成圖片的prompt
// export async function GetImagePrompt(userPrompt: string): Promise<any> {
//     let playload: object = {
//         prompt: userPrompt
//     }
//     try {
//         const response = await fetch(apis.GetImagePrompt, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(playload)
//         });
//         const enPrompt = await response.json();
//         return enPrompt.imagePrompt;
//     } catch (e) {
//         console.log(`fetch GetImagePrompt fail: ${e}`)
//     }
// }


// //拿資料庫的故事(透過輸入唯一辨識)
// export async function GetStoryData(_id: string): Promise<any> {
//     const queryParams = new URLSearchParams();
//     queryParams.append("id", _id);
//     const url = `${apis.GetStoryFdb}?${queryParams.toString()}`;
//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         const data = await response.json();
//         return data.storyTale;
//     } catch (e) {
//         console.log(`GetStory try fail ${e}`)
//     }
// }