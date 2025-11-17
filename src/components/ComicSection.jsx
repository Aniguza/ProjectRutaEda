import HTMLFlipBook from "react-pageflip";

import img1 from "../assets/imagesComic/1.png";
import img2 from "../assets/imagesComic/2.png";
import img3 from "../assets/imagesComic/3.png";
import img4 from "../assets/imagesComic/4.png";
import img5 from "../assets/imagesComic/5.png";
import img6 from "../assets/imagesComic/6.png";
import img7 from "../assets/imagesComic/7.png";
import img8 from "../assets/imagesComic/8.png";

const pages = [img1, img2, img3, img4, img5, img6, img7, img8];

export const ComicSection = () => {
  return (
    <section className="my-20">
      <div className="w-full flex justify-center py-10 bg-pastelamarillo">
        <HTMLFlipBook
          width={500}
          height={700}
          showCover={false}
          className="rounded-xl shadow-xl"
          useMouseEvents={true}
        >
          {pages.map((img, index) => (
            <div key={index} className="w-full h-full ">
              <img
                src={img}
                className="w-full h-full object-contain bg-pastelrojo border-3 border-white"
                draggable="false"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </section>
  );
}
