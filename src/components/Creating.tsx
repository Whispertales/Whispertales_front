import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Creating.css';

// 選項數據：可以替換成實際的圖片URL
const options: sdmodel[] = sdmodel_list;

export default function Creating() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // 將用戶重定向到指定的URL，並附加搜索查詢
        if (searchQuery.trim()) {
            navigate(`/generate/creating/advanced?query=${encodeURIComponent(searchQuery)}`);
        } else {
            alert('請輸入搜索內容');
        }
    };
 // 處理選項圖片點擊事件
    const handleOptionClick = (value: string) => {
        setSearchQuery(value);
    };

    return (
        <>
        <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        </div>
        <div className="container-fluid">
            <div className="header">
                <div className="header-content">
                    WisperTales
                </div>
            </div>
            <div className="body-content">
            <div className="row mt-4 mb-3">
                <div className="mx-auto">
                    <div className="input-group">
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="輸入搜索內容"
                            className="form-control border-left-0 rounded-pill"
                        />
                        <div className="input-group-append">
                            <button onClick={handleSearch} className="button-submit">搜索</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                {options.map((option, index) => (
                    <div
                        key={`${option.show_name}-${index}`} // 使用 option.show_name 和索引的组合来确保唯一性
                        className="col-md-3 mb-4"
                        onClick={() => handleOptionClick(option.show_name)}
                    >
                        <div className="card h-100">
                            <img src={`./Assets/images/${option.image_name}.jpeg`} alt={option.show_name} className="card-img-top" />
                            <div className="card-body text-center">
                                <p className="card-text">{option.show_name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </>
    );
}
