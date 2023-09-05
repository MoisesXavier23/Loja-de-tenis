/* eslint-disable react/prop-types */

import { BsCircleFill } from 'react-icons/bs';

const DotsIndex = ({ goToSlide, index, currentIndex }) => {
  return (
    <div
      className={`cursor-pointer text-[16px] mx-2 text-white hover:opacity-100 hover:text-gray-500 ${
        index === currentIndex
          ? 'opacity-100 text-blue-500 hover:text-blue-500'
          : 'opacity-75'
      }`}
      onClick={() => goToSlide(index)}
    >
      <BsCircleFill />
    </div>
  );
};

export default DotsIndex;
