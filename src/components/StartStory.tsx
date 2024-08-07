import React, { useEffect, useState, useRef, useMemo, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StartStory_api, GetVoice } from '../utils/tools/fetch';
import '../styles/StartStory.css';
import { pdf, Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import HTMLFlipBook from "react-pageflip";

function encodeContent(key: string): string {
    const encodeArr = [
        { code: '%', encode: '%25' },
        { code: '?', encode: '%3F' },
        { code: '#', encode: '%23' },
        { code: '&', encode: '%26' },
        { code: '=', encode: '%3D' }
    ];

    return key.replace(/[%?#&=]/g, ($) => {
        const match = encodeArr.find(k => k.code === $);
        return match ? match.encode : $;
    });
}

Font.register({
    family: "Noto Sans TC",
    src: "/Assets/NotoSansTC-VariableFont_wght.ttf",
});

const pdf_styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    bookContent: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    storyImage: {
        width: '80%',
        marginBottom: 20,
    },
    storyText: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'left',
        width: '80%',
        fontFamily: 'Noto Sans TC',
    },
});

export interface storyInterface {
    storyTale: string,
    storyInfo: string,
    image_prompt?: string[],
    image_base64?: string[],
    is_favorite: boolean,
    addDate: Date,
}

interface PdfTestProps {
    data: storyInterface;
    storyLines: string[];
}
interface PageflipProps {
    image: string;
    text: string;
}


const Pageflip = forwardRef<HTMLDivElement, PageflipProps>(({ image, text }, ref) => {
    return (
        <div className="pagefilp" ref={ref}>
            <img src={`data:image/png;base64,${image}`} alt="Story image" className="story-image" />
            <pre className="pre"><br />{text}</pre>
        </div>
    );
});


const StartStory: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const storyId = searchParams.get('query'); // 從 URL 中获取 storyId

    const [data, setData] = useState<storyInterface | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(0);
    const navigate = useNavigate();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const bookRef = useRef<any>(null);

    const storyLines = useMemo(() => {
        if (!data?.storyTale) return [];
        return data.storyTale.split('\n\n').map(line => line.trim());
    }, [data?.storyTale]);

    const PDFDocument: React.FC<{ data: storyInterface; storyLines: string[] }> = ({ data, storyLines }) => (
        <Document>
            {data && data.image_base64 && data.image_base64.length > 0 &&
                data.image_base64.map((image, index) => (
                    <Page key={index} size="A4" style={pdf_styles.page}>
                        <View style={pdf_styles.bookContent}>
                            <Image
                                src={`data:image/png;base64,${image}`}
                                style={pdf_styles.storyImage}
                            />
                            <Text style={pdf_styles.storyText}>
                                {/* encodeContent(storyLines[index]) */}
                                {decodeURIComponent(encodeContent(storyLines[index])) || `No text for page ${index + 1}`}
                            </Text>
                        </View>
                    </Page>
                ))
            }
        </Document>
    );

    const PdfTest: React.FC<PdfTestProps> = ({ data, storyLines }) => {
        const generatePDF = async () => {
            try {
                const blob = await pdf(<PDFDocument data={data} storyLines={storyLines} />).toBlob();
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'story.pdf';
                link.click();
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error('PDF generation error:', error);
            }
        };

        return (
            <div>
                <p>下載pdf檔案</p>
                <button onClick={generatePDF}>Generate and Download PDF</button>
            </div>
        );
    };


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

    const nextPage = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };
    
    const prevPage = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className='containerbook'>
            <button onClick={BackPage} className="button-back">返回</button>
            <button onClick={handleVoiceClick} className="button-audio">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            {data ? (
                <div className='book'>
                    {/* {data.image_base64 && data.image_base64.length > 0 && (
                        <div className='book-content'>
                            {data.image_base64.slice(pageIndex, pageIndex + 2).map((image, index) => (
                                <div key={index} className='page'>
                                    <img
                                        src={`data:image/png;base64,${image}`}
                                        alt={`Story image ${pageIndex + index}`}
                                        className='story-image'
                                    />
                                    <pre className='pre'><br />{storyLines[pageIndex + index]}</pre>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className='navigation-buttons'>
                        <button onClick={handlePreviousPage} disabled={pageIndex === 0} className='left-navigation button-Previous-Next-Page'>上一頁</button>
                        <button onClick={handleNextPage} disabled={data.image_base64 && pageIndex >= data.image_base64.length - 2} className='right-navigation button-Previous-Next-Page'>下一頁</button>
                    </div> */}

                    {data ? (
                        <div className='book'>
                            <HTMLFlipBook
                                style={{}}
                                startPage={0}
                                width={550}
                                height={733}
                                drawShadow={true}
                                flippingTime={10}
                                usePortrait={false}
                                startZIndex={0}
                                autoSize={true}
                                clickEventForward={true}
                                useMouseEvents={true}
                                swipeDistance={21}
                                showPageCorners={false}
                                disableFlipByClick={true}
                                size="stretch"
                                minWidth={315}
                                maxWidth={1000}
                                minHeight={400}
                                maxHeight={400}
                                maxShadowOpacity={0.5}
                                showCover={true}
                                mobileScrollSupport={true}
                                onFlip={() => { }}
                                onChangeOrientation={() => { }}
                                onChangeState={() => { }}
                                className="demo-book"
                            >
                                {data.image_base64 && data.image_base64.map((image, index) => (
                                    <Pageflip key={index} image={image} text={storyLines[index] || ''} />
                                ))}
                            </HTMLFlipBook>
                            <button onClick={prevPage}>Previous Page</button>
                            <button onClick={nextPage}>Next Page</button>
                            {data && storyLines && (
                                <PdfTest data={data} storyLines={storyLines} />
                            )}
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default StartStory;