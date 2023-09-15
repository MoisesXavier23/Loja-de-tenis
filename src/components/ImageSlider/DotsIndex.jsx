/* eslint-disable react/prop-types */

import { BsCircleFill } from 'react-icons/bs';

const DotsIndex = ({ goToSlide, index, currentIndex }) => {
  return (
    <div
      className={`cursor-pointer text-[12px] mx-1 text-black hover:opacity-100 hover:text-gray-500 ${
        index === currentIndex
          ? 'opacity-100 text-black hover:text-black'
          : 'text-white opacity-75'
      }`}
      onClick={() => goToSlide(index)}
    >
      <BsCircleFill />
    </div>
  );
};

export default DotsIndex;
