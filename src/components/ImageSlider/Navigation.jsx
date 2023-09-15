/* eslint-disable react/prop-types */

const Navigation = ({ currentIndex, setIndex, productsData }) => {
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

  return (
    <>
      <div
        onClick={goToPrevious}
        className="text-[45px] text-white hover:opacity-75 absolute top-1/2 translate-x-0 translate-y-[-50%] z-10 cursor-pointer select-none"
      >
        &lt;
      </div>
      <div
        onClick={goToNext}
        className="text-[45px] text-white hover:opacity-75 absolute top-1/2 right-0 translate-x-0 translate-y-[-50%] z-10 cursor-pointer select-none"
      >
        &gt;
      </div>
    </>
  );
};

export default Navigation;
