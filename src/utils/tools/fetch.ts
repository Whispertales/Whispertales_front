import { apis } from "./api";


export async function GetImagePrompt(userPrompt:Object): Promise<any>{
    try{
        const response = await fetch(apis.GetImagePrompt, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userPrompt)
        });
        const val = await response.json();
        return val;
    }catch(e){
        console.log(`fetch GetImagePrompt fail: ${e}`)
    }
}

export async function GetImageBase64(imagepropmts: Object): Promise<any> {
    try{
        const response = await fetch(apis.ImageBase64Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imagepropmts)
        });
        const data = await response.json();
        //console.log(`GetImageBase64 data: ${data}`)
        return data;
    }catch(e){
        console.log(`GetImageBase64 try fail ${e}`)
    }
}

export async function GetStory(Storytail: Object): Promise<any> {
    try {
        const response = await fetch(apis.GetStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Storytail)
        });
        const data = await response.json();
        // console.log(`GetStory data: ${JSON.stringify(data) }`)
        return data;
    } catch (e) {
        console.log(`GetStory try fail ${e}`)
    }
}

export async function GetSleep(theme: Object): Promise<any> {
    try {
        const response = await fetch(apis.GetStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(theme)
        });
        const data = await response.json();
        console.log(`GetStory data: ${JSON.stringify(data) }`)
        return data;
    } catch (e) {
        console.log(`GetSleep try fail ${e}`)
    }
}