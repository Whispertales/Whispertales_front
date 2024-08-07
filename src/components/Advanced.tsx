import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GenStory } from "../utils/tools/fetch";
import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";
import '../styles/Advanced.css';

const options: sdmodel[] = sdmodel_list;

const Advanced: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query') || '無搜索内容';
    const styleOptions = [searchQuery, ...options.map(option => option.show_name)];
    const navigate = useNavigate();

    const [selectedStyle, setSelectedStyle] = useState<string>(searchQuery);
    const [character1, setCharacter1] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [characters, setCharacters] = useState<string[]>(['']);
    const [storyId, setStoryId] = useState<string>('66a52f72b5993b79132a3fac');
    const [isGenerated, setIsGenerated] = useState<boolean>(false);
    const [isLoad, setIsLoad] = useState<string>(''); // 是否在生成图片
    const [reLoad, setReLoad] = useState<boolean>(false); // 重新生成图片控制器

    const addCharacter = () => {
        setCharacters([...characters, '']);
    };

    const removeCharacter = (index: number) => {
        const newCharacters = [...characters];
        newCharacters.splice(index, 1);
        setCharacters(newCharacters);
    };

    const handleSubmit = async () => {
        const targetModel = options.find(model => model.show_name === selectedStyle);
        setIsLoad('loading'); // 设置为loading状态
        const data = {
            style: targetModel?.sd_name || 'fantasyWorld_v10.safetensors',
            mainCharacter: character1,
            description,
            otherCharacters: characters.filter((character) => character !== '')
        };

        console.log(`RoleForm = ${JSON.stringify(data)}`);

        const result = await GenStory(data);
        setIsLoad('finish'); // 设置为finish状态
        if (result && result.success) {
            setIsGenerated(true);
            setStoryId(result.storyId);
            console.log('API 回应:', result);
        } else {
            setReLoad(true);
            setIsLoad(''); // 重置loading状态
            console.error('提交失败或出错');
        }
    };

    const handleSubmitReGen = async () => {
        console.log("handleSubmitReGen");
        handleSubmit();
        setReLoad(false);
    }

    const handleStartStory = () => {
        navigate(`/generate/creating/advanced/startStory?query=${encodeURIComponent(storyId)}`);
    }

    return (
        <div className="container-fluid">
            <div className={`overlay ${isLoad === 'loading' ? 'visible' : ''}`}>
                <div className="loading">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="header text-center py-3">
                <div className="header-content">
                    WHISPER TALES
                </div>
            </div>
            <div className="content-container">
                <div className="form-section">
                    <div className="form-content">
                        {/* 风格与下拉式选单 */}
                        <div className="row align-items-center mb-4">
                            <div className="col-md-3 d-flex align-items-center justify-content-end">
                                <label htmlFor="style" className="label-spacing">风 格 :</label>
                            </div>
                            <div className="col-md-9">
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

                        {/* 角色与文字输入框及按钮 */}
                        <div className="row align-items-center mb-4">
                            <div className="col-md-3 d-flex align-items-center justify-content-end">
                                <label htmlFor="character1" className="label-spacing">角色 1 :</label>
                            </div>
                            <div className="col-md-6">
                                <input
                                    style={{ backgroundColor: 'RGB(231, 232, 238)' }}
                                    id="character1"
                                    type="text"
                                    value={character1}
                                    onChange={(e) => setCharacter1(e.target.value)}
                                    placeholder="角色名字"
                                />
                            </div>
                            <div className="col-md-3">
                                <button onClick={() => removeCharacter(0)} className="btn button-submit">删除角色</button>
                            </div>
                        </div>

                        {/* 动态角色区块 */}
                        {characters.map((character, index) => (
                            <div key={index} className="row align-items-center mb-4">
                                <div className="col-md-3 d-flex align-items-center justify-content-end">
                                    <label htmlFor={`character${index + 2}`} className="label-spacing">{`角色 ${index + 2}`} :</label>
                                </div>
                                <div className="col-md-6">
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
                                        placeholder={`角色名字`}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <button onClick={() => removeCharacter(index)} className="btn button-submit">删除角色</button>
                                </div>
                            </div>
                        ))}

                        {/* 新增角色按钮 */}
                        <div className="row align-items-center mb-4">
                            <div className="col-md-12 text-center">
                                <button onClick={addCharacter} className="btn button-submit">新增角色</button>
                            </div>
                        </div>

                        {/* 内容与文字输入框 */}
                        <div className="row align-items-start mb-4">
                            <div className="col-md-3 d-flex align-items-end justify-content-end">
                                <label htmlFor="description" className="textarea-label">内 容 :</label>
                            </div>
                            <div className="col-md-9 d-flex align-items-end">
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="故事内容"
                                    style={{ height: '400px', backgroundColor: 'RGB(231, 232, 238)' }} // 增加高度到300px
                                />
                            </div>
                        </div>

                        {/* 按钮区块 */}
                        <div className="row mb-4">
                            <div className="col-md-9 offset-md-3 text-center">
                                <button onClick={handleSubmit} className="btn button-submit">生成</button>
                                <button className="btn button-submit">清除</button>
                            </div>
                            {reLoad && (
                                <div className="col-md-9 offset-md-3 text-center">
                                    <button onClick={handleSubmitReGen} className="btn button-submit">重新生成</button>
                                </div>
                            )}
                        </div>

                        {isLoad === 'loading' && <p>loading</p>}
                        {isLoad === 'finish' && <p>load finish</p>}

                    </div>
                </div>
                <div className="image-section">
                    <div className="image-container">
                        <img src="/src/images/AnythingXL_xl_image.jpeg" alt="Preview" className="preview-image" />
                    </div>
                        {isGenerated && (
                            <button onClick={handleStartStory} className="button-secondary" >
                                开始聆听故事
                            </button>
                        )}                    
                </div>
            </div>
        </div>
    );
};

export default Advanced;
