import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import cx from 'classnames';

type Props = {
  slides: {
    image: string;
    title: string;
    subTitle?: string;
    altText: string;
  }[];
};

const Carousel: React.FC<Props> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  return (
    <div>
      <div className="max-w-lg h-72 flex flex-row justify-between items-center overflow-hidden relative">
        <FaChevronLeft
          onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
          className="text-black cursor-pointer text-3xl"
        />
        <div>
          {slides.map((slide, index) => {
            return (
              <div
                className={cx(
                  'flex flex-col',
                  index === currentSlide ? 'block' : 'hidden'
                )}
              >
                <img
                  src={slide.image}
                  alt={slide.altText}
                  key={index}
                  className={cx(
                    index === currentSlide && 'w-full h-auto object-cover'
                  )}
                />
                <p>{slide.title}</p>
                <p>{slide.subTitle}</p>
              </div>
            );
          })}
        </div>
        <FaChevronRight
          onClick={() =>
            setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1))
          }
          className="text-black cursor-pointer text-3xl"
        />
      </div>
    </div>
  );
};

export default Carousel;
