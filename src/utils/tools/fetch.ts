import { apis } from "./api";

//拿到英文的 生成圖片的prompt
export async function GetImagePrompt(userPrompt: string): Promise<any> {
    let playload:object={
        prompt: userPrompt
    }
    try {
        const response = await fetch(apis.GetImagePrompt, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playload)
        });
        const enPrompt = await response.json();
        return enPrompt.imagePrompt;
    } catch (e) {
        console.log(`fetch GetImagePrompt fail: ${e}`)
    }
}

//拿圖片 base64 code (目前不確定要不要，如果今天是從本地端拿圖片的話這個就不需要了)
export async function GetImageBase64(imagepropmts: string): Promise<any> {
    // console.log(`imagepropmts in GetImageBase64 is${imagepropmts}`)
    let playload = {
        imagepropmts: imagepropmts,
    }
    try {
        const response = await fetch(apis.ImageBase64Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playload)
        });
        const data = await response.json();
        // console.log(`GetImageBase64 data: ${data}`)
        return data;
    } catch (e) {
        console.log(`GetImageBase64 try fail ${e}`)
    }
}

//傳遞圖片prompt 值，post 回本機，透過id 存儲下來，再直接抓值就好
export function GetImage64Code(id: string, imagepropmts: string): Promise<any> {
    let playload = {
        id: id,
        imagepropmts: imagepropmts,
    }
    return fetch(apis.getimageprmopt, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(playload)
    })
        .then(() => console.log(`GetImage64Code post success`))
        .catch(e => console.log(`GetImageBase64 try fail ${e}`));
}


export async function GetStory(Storytail: Object): Promise<any> {
    try {
        fetch(apis.PostStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Storytail)
        })
            .then(() => console.log(`GetStory post success`))
            .catch((e) => console.log(`GetStory post fail`))
    } catch (e) {
        console.log(`GetStory try fail ${e}`)
    }
}

//拿資料庫的故事(透過輸入唯一辨識)
export async function GetStoryData(_id: string): Promise<any> {
    const queryParams = new URLSearchParams();
    queryParams.append("id", _id);
    const url = `${apis.GetStoryFdb}?${queryParams.toString()}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json();
        return data.storyTale; 
    } catch (e) {
        console.log(`GetStory try fail ${e}`)
    }
}

//把想生成的故事訊息傳到後端(留)
export async function PostStory(Storytail: Object): Promise<any> {
    try {
        fetch(apis.PostStory, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Storytail)
        })
            .then(() => console.log(`PostStory post success`))
            .catch((e) => console.log(`PostStory post fail: ${e}`))
    } catch (e) {
        console.log(`GetStory try fail ${e}`)
    }
}


//拿展示用的模擬書籍圖片
export const getdemopic = async (story_id: string, picnum: number) => {
    let url: string = `${apis.demobpic}?story_id=${story_id}&picnum=${picnum}`;
    try {
        // const response = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        return url;
    } catch (e) {
        console.log(`getdemopic try fail ${e}`);
        throw e;
    }
};

export const getdvoices = async (story_id: string, picnum: number) => {
    let url: string = `${apis.storyvoice}?story_id=${story_id}&picnum=${picnum}`;
    try {
        // const response = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        return url;
    } catch (e) {
        console.log(`getdemopic try fail ${e}`);
        throw e;
    }
};

