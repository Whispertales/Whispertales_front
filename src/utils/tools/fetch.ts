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