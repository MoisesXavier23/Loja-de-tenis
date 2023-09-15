/* eslint-disable react/prop-types */
import { useState } from 'react';
import Navigation from './Navigation';
import DotsIndex from './DotsIndex';

const ImageSlider = ({ productsData }) => {
  const [currentIndex, setIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="w-full sm:w-4/5 xl:w-[1080px] h-full mx-auto relative">
      <Navigation
        currentIndex={currentIndex}
        setIndex={setIndex}
        productsData={productsData}
      />
      <div
        style={{
          backgroundImage: `url(${productsData[currentIndex].imageUrl})`,
        }}
        className="w-full h-full bg-cover bg-center bg-no-repeat bg-"
      ></div>
      <div className="flex justify-center absolute bottom-1 left-1/2 translate-x-[-50%]">
        {productsData.map((slide, slideIndex) => (
          <DotsIndex
            goToSlide={goToSlide}
            currentIndex={currentIndex}
            index={slideIndex}
            key={slideIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
