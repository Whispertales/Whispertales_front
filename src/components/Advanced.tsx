import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GenStory } from "../utils/tools/fetch";
import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";

// 示例的選項數據，可以根據實際情況調整
const options: sdmodel[] = sdmodel_list;

const Advanced: React.FC = () => {
    const location = useLocation();

    // 獲取 URL 查詢參數
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '無搜索內容';

    // 初始化風格選項，包括 searchQuery 和 options 中的 show_name
    const styleOptions = [searchQuery, ...options.map(option => option.show_name)];

    // 狀態變量
    const [selectedStyle, setSelectedStyle] = useState<string>(searchQuery); // 預設選中值為 searchQuery
    const [character1, setCharacter1] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [characters, setCharacters] = useState<string[]>(['']); // 初始為一個空字符串，表示一個角色輸入框

    // 增加角色的函數
    const addCharacter = () => {
        setCharacters([...characters, '']); // 添加一個空字符串到角色陣列中
    };

    // 減少角色的函數
    const removeCharacter = (index: number) => {
        const newCharacters = [...characters];
        newCharacters.splice(index, 1); // 從陣列中移除指定索引的角色
        setCharacters(newCharacters);
    };

    // 提交數據的函數
    const handleSubmit = async () => {
        const data = {
            style: selectedStyle,
            mainCharacter: character1,
            description,
            otherCharacters: characters.filter((character) => character !== '') // 過濾空字符
        };

        console.log(`RoleForm = ${JSON.stringify(data)}`);

        const result = await GenStory(data);

        if (result) {
            console.log('API 回應:', result);
        } else {
            console.error('提交失敗或出錯');
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="style">風格</label>
                <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                >
                    {styleOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="character1">角色 1 (主角名字) </label>
                <input
                    id="character1"
                    type="text"
                    value={character1}
                    onChange={(e) => setCharacter1(e.target.value)}
                    placeholder="輸入主角名字"
                />
            </div>

            {characters.map((character, index) => (
                <div key={index}>
                    <label htmlFor={`character${index + 2}`}>{`角色 ${index + 2} `}</label>
                    <input
                        id={`character${index + 2}`}
                        type="text"
                        value={character}
                        onChange={(e) => {
                            const newCharacters = [...characters];
                            newCharacters[index] = e.target.value;
                            setCharacters(newCharacters);
                        }}
                        placeholder={`輸入角色 ${index + 2} 名字`}
                    />
                    <button
                        onClick={() => removeCharacter(index)}
                    >
                        減少角色
                    </button>
                </div>
            ))}

            <button onClick={addCharacter}>
                增加角色
            </button>

            <div>
                <label htmlFor="description">內容</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="輸入故事描述"
                />
            </div>

            <button onClick={handleSubmit}>
                提交
            </button>
        </div>
    );
};

export default Advanced;
