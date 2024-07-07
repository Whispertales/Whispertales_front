// back_port = 7943;

export const enum apis {
    //dev
    GetStoryList = `http://localhost:7943/story/getstorylist_fdb`,
    LLMGenStory = `http://localhost:7943/story/llm/genstory`,
    GenImagePrompt = `http://localhost:7943/story/llm/genimageprompt`,
    
    //以下為測試功能
    GetNewaudio = `http://163.13.202.120:9880`

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

