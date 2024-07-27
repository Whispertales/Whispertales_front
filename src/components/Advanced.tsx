import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GenStory } from "../utils/tools/fetch";
import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";
import '../styles/Advanced.css';

const options: sdmodel[] = sdmodel_list;

const Advanced: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '無搜索內容';
    const styleOptions = [searchQuery, ...options.map(option => option.show_name)];
    const navigate = useNavigate();

    const [selectedStyle, setSelectedStyle] = useState<string>(searchQuery); // 預設選中值為 searchQuery
    const [character1, setCharacter1] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [characters, setCharacters] = useState<string[]>(['']); // 初始為一個空字符串，表示一個角色輸入框
    const [storyId, setStoryId] = useState<string>('66a0eb80a821da8424003ad5');

    const addCharacter = () => {
        setCharacters([...characters, '']); // 添加一個空字符串到角色陣列中
    };

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

    const handleStartStory = () => {
        navigate(`/generate/creating/advanced/startStory?query=${encodeURIComponent(storyId)}`);
    }

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="header-content">WHISPER TALES</div>
            </div>
            
            <div className="main-content">
                <div className="form-container">
                    <div>
                        <label htmlFor="style">風 格 :  </label>
                        <select
                            style={{
                                width: '195px',
                            }}
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
                    <br />
                    <div>
                        <label htmlFor="character1">角色 1   </label>
                        <input
                            style={{
                                width: '190px',
                            }}
                            id="character1"
                            type="text"
                            value={character1}
                            onChange={(e) => setCharacter1(e.target.value)}
                            placeholder="輸入主角名字"
                        />
                    </div>

                    {characters.map((character, index) => (
                        <div key={index} className="character-controls">
                            <label htmlFor={`character${index + 2}`}>{`角色 ${index + 2} `}</label>
                            <input
                                style={{
                                    width: '190px',
                                }}
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
                            <button onClick={() => removeCharacter(index)}>
                                減少角色
                            </button>

                        </div>
                    ))}
                    <div className="character-controls">
                        <button onClick={addCharacter}>
                            增加角色
                         </button>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="textarea-container">
                        <label htmlFor="description" className="textarea-label">內容</label>
                        <textarea
                            id="description"
                            style={{
                                width: '190px',
                                height: '220px'
                            }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="輸入故事描述"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="submit-button">
                        生成
                    </button>
                </div>
                {/* <div className="card-Advanced">
                    <div className="imgBox">
                        <img src="book1.png" width="300" height="400" />
                    </div>
                    <div className="contents">
                    </div>
                </div> */}
                <button onClick={handleStartStory}>開始聆聽</button>
            </div>
        </div>
    );


};

export default Advanced;
