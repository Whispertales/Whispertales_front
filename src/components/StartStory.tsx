import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StartStory_api, GetVoice } from '../utils/tools/fetch';
import '../styles/StartStory.css';

export interface storyInterface {
    storyTale: string,
    storyInfo: string,
    image_prompt?: string[],
    image_base64?: string[],
    is_favorite: boolean,
    addDate: Date,
}

const StartStory: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const storyId = searchParams.get('query'); // 从 URL 中获取 storyId

    const [data, setData] = useState<storyInterface | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);
    const navigate = useNavigate();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (storyId) {
                    setLoading(true);
                    const storyData = await StartStory_api(storyId);
                    setData(storyData);

                    const audioBlob = await GetVoice(storyId);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    if (audioRef.current) {
                        audioRef.current.src = audioUrl;
                    } else {
                        audioRef.current = new Audio(audioUrl);
                        audioRef.current.addEventListener('play', () => setIsPlaying(true));
                        audioRef.current.addEventListener('pause', () => setIsPlaying(false));
                        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
                    }
                } else {
                    setError('No storyId provided in the query parameters.');
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

        // 清理函數
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('play', () => setIsPlaying(true));
                audioRef.current.removeEventListener('pause', () => setIsPlaying(false));
                audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
            }
        };
    }, [storyId]);

    const handleNextPage = () => {
        if (data && data.image_base64 && pageIndex < data.image_base64.length - 2) {
            setPageIndex(pageIndex + 2);
        }
    };

    const handlePreviousPage = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 2);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    

    const BackPage = () => {
        navigate(`/generate/creating`);
    };
    
    const handleVoiceClick = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const formatText = (text: string, charsPerLine: number) => {
        let formattedText = '';
        for (let i = 0; i < text.length; i += charsPerLine) {
            formattedText += text.substring(i, i + charsPerLine) + '\n';
        }
        return formattedText;
    };
    const storyLines = data?.storyTale.split('\n\n').map(line => formatText(line, 20)) || [];
    console.log(`storyLines = ${storyLines}`);

    return (
        <div className='containerbook'>
            <button onClick={BackPage} className="button-back">返回</button>
            <button onClick={handleVoiceClick} className="button-audio">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            {data ? (
                <div className='book'>
                    {/*<p>{data.storyInfo}</p> 故事主題*/}
                    {data.image_base64 && data.image_base64.length > 0 && (
                        <div className='book-content'>
                            {data.image_base64.slice(pageIndex, pageIndex + 2).map((image, index) => (
                                <div key={index} className='page'>
                                    <img
                                        src={`data:image/png;base64,${image}`}
                                        alt={`Story image ${pageIndex + index}`}
                                        className='story-image'
                                    />
                                    
                                    <pre className='pre'><br/>{storyLines[pageIndex + index]}</pre> {/* 句子內容*/}
                                    {/* <pre className='pre'>{storyLines[pageIndex*2 + index +1]}</pre> */}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='navigation-buttons'>
                        <button onClick={handlePreviousPage} disabled={pageIndex === 0} className='left-navigation button-Previous-Next-Page'>上一頁</button>
                        <button onClick={handleNextPage} disabled={data.image_base64 && pageIndex >= data.image_base64.length - 2} className='right-navigation button-Previous-Next-Page'>下一頁</button>
                    </div>
                </div>
            ) : (
                <p>No data available</p>  // 如果故事書資料沒被抓到，顯示
            )}
        </div>
    );
};

export default StartStory;


