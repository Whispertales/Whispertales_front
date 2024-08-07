import React, { forwardRef, Ref, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from 'react-pdf';
import pdffile from "../../Assets/bbb.pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import "../styles/MyBook.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

interface PagesProps {
    children: React.ReactNode;
    number: number;
}

const Pages = forwardRef<HTMLDivElement, PagesProps>((props, ref: Ref<HTMLDivElement>) => {
    return (
        <div className="demoPage" ref={ref}>
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

Pages.displayName = "Pages";



function MyBook() {
    const [numPages, setNumPages] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    useEffect(() => {
        const loadingTask = pdfjs.getDocument(pdffile);
        loadingTask.promise.then(pdf => {
            setNumPages(pdf.numPages);
        });
    }, []);

    return (
        <>
            <div className=" h-screen w-screen flex flex-col justify-center items-center bg-indigo-100">
                <HTMLFlipBook
                    style={{}}
                    startPage={0}
                    width={900}
                    height={1000}
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
                    minWidth={900}
                    maxWidth={700}
                    minHeight={1000}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={() => { }}
                    onChangeOrientation={() => { }}
                    onChangeState={() => { }}
                    className="demo-book"
                >
                    {
                        numPages && [...Array(numPages).keys()].map((pg) => (
                            <Pages key={pg} number={pg + 1}>
                                <div>
                                    <Document file={pdffile} onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pg + 1} />
                                    </Document>
                                </div>
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>
        </>
    );
}

export default MyBook;

