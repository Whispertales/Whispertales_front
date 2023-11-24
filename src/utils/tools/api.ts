// back_port = 7943;

export const enum apis {
    //dev
    ImageBase64Url = `http://localhost:7943/image`, //(post) to get image Base64 code
    SocketioServer = `http://localhost:2764`,
    GetImagePrompt = `http://localhost:7943/prompt`,

    PostStory = `http://localhost:7943/story`,
    GetSleep = `http://localhost:7943/sleep`,
    
    GetStoryFdb = `http://localhost:7943/getstoryfdb`,
    getimageprmopt = `http://localhost:7943/postimageprompt`,
    demobpic = `http://localhost:7943/demobpic`,
    storyvoice = `http://localhost:7943/storyvoice`,
    NewestStoryId = `http://localhost:7943/story/newstoryid`,


    // //use 192.168.1.26
    // ImageBase64Url = `http://192.168.1.26:7943/image`,
    // SocketioServer = `http://192.168.1.26:2764`,
    // GetImagePrompt = `http://192.168.1.26:7943/prompt`,
    // GetStory = `http://192.168.1.26:7943/story`,

    // //use2 163.13.201.153
    // ImageBase64Url = `http://163.13.201.153:7943/image`,
    // SocketioServer = `http://163.13.201.153:2764`,
    // GetImagePrompt = `http://163.13.201.153:7943/prompt`,
    // GetStory = `http://163.13.201.153:7943/story`,

}

