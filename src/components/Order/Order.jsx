import CustomButton from '../CustomButton/CustomButton';
import {
  AiFillStar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai';

const Order = ({ sequence, setSequence }) => {
  console.log(sequence);

  switch (sequence) {
    case 'relevant':
  }

  return (
    <section className="flex justify-end gap-2">
      {sequence === 'relevant' ? (
        <CustomButton
          className={`text-lg font-semibold border-2 border-gray-500 rounded-lg bg-gray-400 px-3 flex items-center justify-center gap-2`}
          disabled
          onClick={() => setSequence('relevant')}
        >
          Relevante
          <AiFillStar />
        </CustomButton>
      ) : (
        <CustomButton
          className={`text-lg font-semibold border-2 border-gray-500 rounded-lg bg-gray-300 hover:bg-gray-400 px-3 flex items-center justify-center gap-2`}
          onClick={() => setSequence('relevant')}
        >
          Relevante
          <AiFillStar />
        </CustomButton>
      )}
      <CustomButton
        className="text-lg font-semibold border-2 border-gray-500 rounded-lg bg-gray-300 hover:bg-gray-400 px-3 flex items-center justify-center gap-2"
        onClick={() => setSequence('asc')}
      >
        Crescente
        <AiOutlineArrowUp />
      </CustomButton>
      <CustomButton
        className="text-lg font-semibold border-2  border-gray-500 rounded-lg bg-gray-300 hover:bg-gray-400 px-3 flex items-center justify-center gap-2"
        onClick={() => setSequence('desc')}
      >
        Decrescente
        <AiOutlineArrowDown />
      </CustomButton>
    </section>
  );
};

export default Order;
