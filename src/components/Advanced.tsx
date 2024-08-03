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

    const [selectedStyle, setSelectedStyle] = useState<string>(searchQuery);
    const [character1, setCharacter1] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [characters, setCharacters] = useState<string[]>(['']);
    const [storyId, setStoryId] = useState<string>('66a52f72b5993b79132a3fac');
    const [isGenerated, setIsGenerated] = useState<boolean>(false);
    const [isLoad, setIsLoad] = useState<string>(''); // 是否在生成圖片
    const [reLoad, setReLoad] = useState<boolean>(false); // 重新生成圖片控制器

    const addCharacter = () => {
        setCharacters([...characters, '']);
    };

    const removeCharacter = (index: number) => {
        const newCharacters = [...characters];
        newCharacters.splice(index, 1);
        setCharacters(newCharacters);
    };

    const handleSubmit = async () => {
        setIsLoad('loading');
        const data = {
            style: selectedStyle,
            mainCharacter: character1,
            description,
            otherCharacters: characters.filter((character) => character !== '')
        };

        console.log(`RoleForm = ${JSON.stringify(data)}`);

        const result = await GenStory(data);
        setIsLoad('finish');
        if (result && result.success) {
            setIsGenerated(true);
            setStoryId(result.storyId);
            console.log('API 回應:', result);
        } else {
            setReLoad(true);
            setIsLoad(''); 
            console.error('提交失敗或出錯');
        }
    };

    const handleSubmitReGen = async() =>{
        console.log("handleSubmitReGen");
        handleSubmit();
        setReLoad(false);
    }

    const handleStartStory = () => {
        navigate(`/generate/creating/advanced/startStory?query=${encodeURIComponent(storyId)}`);
    }

    return (
        <div className="container-fluid">
            <div className="header text-center py-3">
                <div className="header-content">
                    WisperTales
                </div>
            </div>
            <div className="container">
                {/* 第一個區塊：垂直對齊到頂部，水平對齊到左邊 */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-2 d-flex align-items-center">
                        <label htmlFor="style" className="label-spacing">風 格 :</label>
                    </div>
                    <div className="col-md-4">
                        <select
                            id="style"
                            value={selectedStyle}
                            onChange={(e) => setSelectedStyle(e.target.value)}
                            className="form-control"
                        >
                            {styleOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* 第二個區塊：垂直對齊到中心，水平對齊到中心 */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-2 d-flex align-items-center">
                        <label htmlFor="character1" className="label-spacing">角色 1 :</label>
                    </div>
                    <div className="col-md-4">
                        <input
                            style={{ backgroundColor: 'RGB(231, 232, 238)' }}
                            id="character1"
                            type="text"
                            value={character1}
                            onChange={(e) => setCharacter1(e.target.value)}
                            placeholder="輸入主角名字"
                        />
                    </div>
                </div>

                {/* 動態角色區塊 */}
                {characters.map((character, index) => (
                    <div key={index} className="row align-items-center mb-4">
                        <div className="col-md-2 d-flex align-items-center">
                            <label htmlFor={`character${index + 2}`} className="label-spacing">{`角色 ${index + 2}`} :</label>
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <input
                                style={{ backgroundColor: 'RGB(231, 232, 238)' }}
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
                            <button onClick={() => removeCharacter(index)} className="btn button-submit">減少角色</button>
                        </div>

                    </div>
                ))}

                <div className="row align-items-center mb-4">
                    <div className="col-md-2 d-flex align-items-center">
                        <button onClick={addCharacter} className="btn button-submit">增加角色</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-start mb-4">
                        <div className="col-md-2 d-flex align-items-end">
                            <label htmlFor="description" className="textarea-label">內 容 :</label>
                        </div>
                        <div className="col-md-4 d-flex align-items-end">
                            <textarea
                                style={{ height: '450px', backgroundColor: 'RGB(231, 232, 238)' }}
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="輸入故事描述"

                            />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-2 offset-md-2 text-center">
                            <button onClick={handleSubmit} className="btn button-submit">生成</button>
                        </div>
                        {reLoad &&(<div className="col-md-2 offset-md-2 text-center">
                            <button onClick={handleSubmitReGen} className="btn button-submit">重新生成</button>
                        </div>)}
                    </div>
                </div>

            </div>
            {isLoad === 'loading' && <p>loading</p>}
            {isLoad === 'finish' && <p>load finish</p>}
            {isGenerated && (
                <button onClick={handleStartStory} className="btn btn-secondary">
                    開始聆聽故事
                </button>
            )}
        </div>
    );








};

export default Advanced;

