import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cx from 'classnames';

type Slide = {
  image: string;
  title?: string;
  subTitle?: string;
  altText: string;
};

type Props = {
  slides: Slide[];
};

const Carousel: React.FC<Props> = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slideLeft = () => {
    const beginningOfDeck = currentSlide === 0;
    setCurrentSlide(
      beginningOfDeck ? slides.length - 1 : Math.max(currentSlide - 1, 0)
    );
  };

  const slideRight = () => {
    const endOfDeck = currentSlide + 1 === slides.length;
    setCurrentSlide(
      endOfDeck ? 0 : Math.min(currentSlide + 1, slides.length - 1)
    );
  };

  return (
    <div>
      <div className="max-w-lg flex flex-row justify-between items-center overflow-hidden relative">
        <FaChevronLeft
          aria-label="Left"
          onClick={slideLeft}
          className="text-slate-400 cursor-pointer text-3xl relative left-10 z-10"
        />
        {slides.map((slide, index) => {
          return (
            <div
              className={cx(
                'relative w-72 h-72 flex flex-col justify-end bg-contain bg-no-repeat bg-center rounded-lg bg-slate-100',
                index === currentSlide ? 'block' : 'hidden'
              )}
              style={{ backgroundImage: `url("${slide.image}")` }}
              key={index}
            >
              <div
                className={cx(
                  'flex-col justify-center items-center text-center bg-black opacity-75 text-white rounded-b-lg h-12',
                  slide.title ? 'flex' : 'hidden'
                )}
              >
                {slide.title && <h2>{slide.title}</h2>}
                {slide.subTitle && <h3>{slide.subTitle}</h3>}
              </div>
            </div>
          );
        })}
        <FaChevronRight
          aria-label="Right"
          onClick={slideRight}
          className="text-slate-400 cursor-pointer text-3xl relative right-10 z-10"
        />
      </div>
    </div>
  );
};

export default Carousel;
