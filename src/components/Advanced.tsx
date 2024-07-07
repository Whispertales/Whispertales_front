import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 示例的選項數據，可以根據實際情況調整
const options = [
    '貓咪',
    '帥貓咪',
    '鯊魚',
    '恐龍',
    '愛心',
    '皮卡丘',
];

const Advanced: React.FC = () => {
    // 使用 useLocation 來獲取當前的 URL
    const location = useLocation();

    // 獲取 URL 查詢參數
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '無搜索內容';

    // 初始化風格選項，包括 searchQuery 和 options
    const styleOptions = [searchQuery, ...options];

    // 狀態變量
    const [selectedStyle, setSelectedStyle] = useState<string>(searchQuery); // 預設選中值為 searchQuery
    const [character1, setCharacter1] = useState<string>('');
    const [character2, setCharacter2] = useState<string>('');
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

            {/* 增加動態角色輸入框 */}
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

            {/* 增加角色按鈕 */}
            <button  onClick={addCharacter}>
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

            <button onClick={() => {
                // 可以在這裡處理提交邏輯
                alert(`提交的信息：
                風格: ${selectedStyle}
                主角: ${character1}
                次要角色: ${character2}
                描述: ${description}
                其他角色: ${characters.filter((character) => character !== '').join(', ')}`); // 過濾空字符並串聯角色名字
            }}>
                提交
            </button>
        </div>
    );
};

export default Advanced;
