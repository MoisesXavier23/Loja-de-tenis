/* eslint-disable react/prop-types */
import { useState } from 'react';

const ImageSlider = ({ productsData }) => {
  const [currentIndex, setIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productsData.length - 1 : currentIndex - 1;
    setIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === productsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="w-full h-full relative">
      <div>
        <div
          onClick={goToPrevious}
          className="text-[45px] text-white absolute top-1/2 left-[32px] translate-x-0 translate-y-[-50%] z-10 cursor-pointer select-none"
        >
          a
        </div>
        <div
          onClick={goToNext}
          className="text-[45px] text-white absolute top-1/2 right-[32px] translate-x-0 translate-y-[-50%] z-10 cursor-pointer select-none"
        >
          b
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${productsData[currentIndex].imageUrl})`,
        }}
        className="w-full h-full bg-cover bg-center"
      ></div>
      <div className="flex justify-center">
        {productsData.map((slide, slideIndex) => (
          <div
            className="my-0 mx-3 cursor-pointer text-[20px]"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            .
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
