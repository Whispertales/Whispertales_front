import { useState } from "react";
import { useNavigate } from 'react-router-dom';
//import { sdmodel, sdmodel_list } from "../utils/sdmodel_list";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Creating.css';


// 選項數據：可以替換成實際的圖片URL
//const options: sdmodel[] = sdmodel_list;
export interface sdmodel {
    sd_name: string,
    show_name: string,
    image_path: string;
}

const options: sdmodel[] = [
    { sd_name: 'AnythingXL_xl.safetensors [8421598e93]', show_name: '超可愛動漫風格', image_path: '/src/images/AnythingXL_xl_image.jpeg' },
    { sd_name: 'rachelWalkerStyle_v1.ckpt', show_name: '水彩畫風格', image_path: '/src/images/rachelWalkerStyle_v1_image.jpeg' },
    { sd_name: 'splatterPunkXL_v10.safetensors', show_name: '賽博龐克風格', image_path: '/src/images/splatterPunkXL_v10_image.jpeg' },
    { sd_name: 'oxalisAnimeScreencap_animeScreencap.safetensors', show_name: '日本動漫風格', image_path: '/src/images/oxalisAnimeScreencap_animeScreencap_image.jpeg' },
    { sd_name: 'cartoonmix_v10.safetensors', show_name: '3D卡通風格', image_path: '/src/images/cartoonmix_v10_image.jpeg' },
    { sd_name: 'disneyPixarCartoon_v10.safetensors', show_name: '皮克斯、迪士尼卡通風格', image_path: '/src/images/disneyPixarCartoon_v10_image.jpeg' },
    { sd_name: '90sCartoonXL_v09Alpha.safetensors [9b723603f2]', show_name: '90年代卡通風格', image_path: '/src/images/90sCartoonXL_v09Alpha_image.jpeg' },
    { sd_name: 'cuteCATCuteCitron_v2.safetensors', show_name: 'Q版漫畫風格', image_path: '/src/images/cuteCATCuteCitron_v2_image.jpeg' },
    { sd_name: 'fantasyWorld_v10.safetensors', show_name: '奇幻風格', image_path: '/src/images/fantasyWorld_v10_image.jpeg' },
    { sd_name: 'flat2DAnimerge_v45Sharp.safetensors', show_name: '2D動漫風格', image_path: '/src/images/flat2DAnimerge_v45Sharp_image.jpeg' },
    { sd_name: 'mechaMusumeMerged_mechaMusumeVividSoft.safetensors', show_name: '機械風格', image_path: '/src/images/mechaMusumeMerged_mechaMusumeVividSoft_image.jpeg' },
    { sd_name: 'slatePencilMix_v10.safetensors', show_name: '素描風格', image_path: '/src/images/slatePencilMix_v10_image.jpeg' },
    { sd_name: 'ChineseInkComicStrip_v10.ckpt', show_name: '中國傳統水墨畫', image_path: '/src/images/ChineseInkComicStrip_v10_image.jpeg' },
    { sd_name: `cemremixRealistic_v10Pruned.safetensors`, show_name: `真實感`, image_path:'/src/images/cemremixRealistic_v10Pruned_image.jpeg'},
    { sd_name: `pixelArtDiffusionXL_spriteShaper.safetensors`, show_name: `像素風`, image_path:'/src/images/pixelArtDiffusionXL_spriteShaper_image.jpeg'},
    { sd_name: `handDrawnPortrait_v10.safetensors`, show_name: `手繪`, image_path:'/src/images/handDrawnPortrait_v10_image.jpeg'},
    { sd_name: `splatterPunkNeon_v17Illustration.safetensors`, show_name: `賽博龐克風格`, image_path:'/src/images/splatterPunkNeon_v17Illustration_image.jpeg'},
    { sd_name: `solsticeAKoreanWebtoon_v10AreumNoemaFp16.safetensors`, show_name: `韓漫`, image_path:'/src/images/solsticeAKoreanWebtoon_v10AreumNoemaFp16_image.jpeg'},
    { sd_name: `paintersCheckpointOilPaint_v11.safetensors`, show_name: `油畫`, image_path:'/src/images/paintersCheckpointOilPaint_v11_image.jpeg'}
];

export default function Creating() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/generate/creating/advanced?query=${encodeURIComponent(searchQuery)}`);
        } else {
            alert('請輸入搜索內容');
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

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
                            onKeyDown={handleKeyDown}
                            placeholder="輸入搜索內容"
                            className="form-control border-left-0 rounded-pill custom-search-input "
                        />
                        {/* 
                        <div className="input-group-append">
                            <button onClick={handleSearch} className="button-submit">搜索</button>
                        </div>
                        */}
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
                            <img src={option.image_path} alt={option.show_name} className="card-img-top" />
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
