import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";

// 選項數據：可以替換成實際的圖片URL
const options: sdmodel[] = sdmodel_list;

export default function Creating() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            // 將用戶重定向到指定的URL，並附加搜索查詢
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
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="輸入搜索內容"
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">搜索</button>
            </div>

            <div className="options-container">
                {options.map((option, index) => (
                    <div
                        key={`${option.show_name}-${index}`} // 使用 option.show_name 和索引的组合来确保唯一性
                        onClick={() => handleOptionClick(option.show_name)}
                    >
                        <img src={`./Assets/images/${option.image_name}.jpeg`} alt={option.show_name} />
                        <p>{option.show_name}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
