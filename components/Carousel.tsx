import { useState } from 'react';
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
  return (
    <div>
      <div className="max-w-lg flex flex-row justify-between items-center overflow-hidden relative">
        <FaChevronLeft
          onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
          className="text-black cursor-pointer text-3xl"
        />
        {slides.map((slide, index) => (
          <div
            className={cx(
              'h-72 w-72',
              index === currentSlide ? 'block' : 'hidden'
            )}
            key={index}
          >
            <img
              src={slide.image}
              alt={slide.altText}
              key={index}
              className={cx(
                index === currentSlide && 'w-full h-full object-contain'
              )}
            />
          </div>
        ))}
        <FaChevronRight
          onClick={() =>
            setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))
          }
          className="text-black cursor-pointer text-3xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        {slides[currentSlide].title && <h2>{slides[currentSlide].title}</h2>}
        {slides[currentSlide].subTitle && (
          <h3>{slides[currentSlide].subTitle}</h3>
        )}
      </div>
    </div>
  );
};

export default Carousel;
