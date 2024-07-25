import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StartStory_api } from '../utils/tools/fetch';

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (storyId) {
                    const storyData = await StartStory_api(storyId);
                    setData(storyData);
                    // console.log(`storyData = ${storyData}`);
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
    }, [storyId]); // storyId 作为依赖项，确保它变更时重新运行

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {data ? (
                <div>
                    <h2>{data.storyTale}</h2>
                    <p>{data.storyInfo}</p>
                    {data.image_base64 && data.image_base64.length > 0 && (
                        <div>
                            {data.image_base64.map((image, index) => (
                                <img
                                    key={index}
                                    src={`data:image/png;base64,${image}`}
                                    alt={`Story image ${index}`}
                                    style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }}
                                />
                            ))}
                        </div>
                    )}
                    <p>{data.is_favorite ? 'Favorite' : 'Not Favorite'}</p>
                    <p>{new Date(data.addDate).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default StartStory;
