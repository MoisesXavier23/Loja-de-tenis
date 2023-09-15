import CustomButton from '../CustomButton/CustomButton';
import {
  AiFillStar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai';

const Order = ({ sequence, setSequence }) => {
  const buttonStyles = `text-xs xl:text-base font-semibold border-2 border-gray-500 rounded-lg bg-gray-300 disabled:bg-gray-500 hover:bg-gray-400 px-1 flex items-center justify-center gap-1`;
  return (
    <section className="flex justify-end gap-2">
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('relevant')}
        disabled={sequence === 'relevant' ? 'relevant' : ''}
      >
        Relevante
        <AiFillStar />
      </CustomButton>
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('asc')}
        disabled={sequence === 'asc' ? 'relevant' : ''}
      >
        Crescente
        <AiOutlineArrowUp />
      </CustomButton>
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('desc')}
        disabled={sequence === 'desc' ? 'relevant' : ''}
      >
        Decrescente
        <AiOutlineArrowDown />
      </CustomButton>
    </section>
  );
};

export default Order;
