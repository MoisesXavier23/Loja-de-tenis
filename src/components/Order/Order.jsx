import CustomButton from '../CustomButton/CustomButton';
import {
  AiFillStar,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from 'react-icons/ai';

const Order = ({ sequence, setSequence }) => {
  const buttonStyles = `text-xs font-semibold border-2 border-black rounded-lg bg-white disabled:bg-black disabled:text-white hover:bg-black hover:text-white py-1 px-2 pl-[5px] flex items-center justify-center gap-0`;
  return (
    <section className="flex justify-end gap-2">
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('relevant')}
        disabled={sequence === 'relevant' ? 'relevant' : ''}
      >
        <AiFillStar />
        Relevante
      </CustomButton>
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('asc')}
        disabled={sequence === 'asc' ? 'relevant' : ''}
      >
        <AiOutlineArrowUp />
        Crescente
      </CustomButton>
      <CustomButton
        className={buttonStyles}
        onClick={() => setSequence('desc')}
        disabled={sequence === 'desc' ? 'relevant' : ''}
      >
        <AiOutlineArrowDown />
        Decrescente
      </CustomButton>
    </section>
  );
};

export default Order;
