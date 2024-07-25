import { storyInterface } from "../../components/StartStory";
import { apis } from './api'; // 假設這是你的 API 配置文件的路徑

// 定義 GenStory 函數，它接收 RoleForm 對象並返回 Promise
export async function GenStory(RoleForm: Object): Promise<any> {
    let playload = {
        roleform: RoleForm
    }
    try {
        // 發送 POST 請求到 LLMGenStory API
        const response = await fetch(apis.LLMGenStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playload)
        });

        // 檢查 response 是否成功
        if (response.ok) {  // Response 對象具有 `ok` 屬性
            const responseData = await response.json(); // 解析 JSON 數據
            console.log('成功提交數據:', responseData);
            return 0;
        } else {
            // 錯誤處理
            console.error('提交失敗:', response.statusText);
            return null; // 返回 null 以表示提交失敗
        }
    } catch (error) {
        // 捕獲並處理異常
        console.error('提交時出錯:', error);
        return 1; // 返回 null 以表示捕獲到異常
    }
}

export async function GetALLSDModel():Promise<any>{
    try{    
        const response = await fetch(apis.getAllSDModel)
        if(!response.ok){
            throw new Error(`GetALLSDModel error! status: ${response.status}`);
        }
        const option_json= await response.json();
    }catch(error){
    }
}

export async function StartStory_api(storyIdinput:string):Promise<any>{
    try {
        const response = await fetch(apis.startStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "storyId":storyIdinput })
        });
        if (!response.ok) {
            throw new Error(`StartStory_api error! status: ${response.status}`);
        }
        const option_json:storyInterface = await response.json();
        return option_json;
    } catch (error) {
        console.error('StartStory_api, Failed to fetch story:', error);
        throw error;
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