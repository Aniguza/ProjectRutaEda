import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

import img1 from "../assets/imagesComic/1.png";
import img2 from "../assets/imagesComic/2.png";
import img3 from "../assets/imagesComic/3.png";
import img4 from "../assets/imagesComic/4.png";
import img5 from "../assets/imagesComic/5.png";
import img6 from "../assets/imagesComic/6.png";
import img7 from "../assets/imagesComic/7.png";
import img8 from "../assets/imagesComic/8.png";
import endFlipSound from "../sounds/start-flip.mp3";

const pages = [img1, img2, img3, img4, img5, img6, img7, img8];

export const ComicSection = () => {
  const bookRef = useRef();
  const audioRef = useRef(new Audio(endFlipSound));

  const playFlipSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const nextPage = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  const prevPage = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  return (
    <section className="my-20">
      <h1 className="text-5xl font-momo text-pastelceleste mb-8 text-center">Es hora de leer</h1>
      <div className="w-full flex justify-center items-center py-10 bg-pastelamarillo gap-4">
        {/* Botón anterior */}
        <button
          onClick={prevPage}
          className="bg-pastelceleste hover:bg-pastelrojo text-white font-bold p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer ml-2"
          aria-label="Página anterior"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <HTMLFlipBook 
          ref={bookRef}
          width={500}
          height={700}
          size="stretch"
          minWidth={315}
          maxWidth={800}
          minHeight={400}
          maxHeight={1200}
          showCover={false}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={false}
          className="rounded-xl shadow-xl"
          useMouseEvents={true}
          singlePage={true}
          onChangeState={(e) => {
            if (e.data === "flipping") {
              playFlipSound();
            }
          }}
        >
          {pages.map((img, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={img}
                className="w-full h-full object-contain bg-pastelrojo border-4 border-white"
                draggable="false"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Botón siguiente */}
        <button
          onClick={nextPage}
          className="bg-pastelceleste hover:bg-pastelrojo text-white font-bold p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 cursor-pointer mr-2"
          aria-label="Página siguiente"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

