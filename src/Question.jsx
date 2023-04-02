import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((currentValue) => !currentValue);
  };
  return (
    <article className='question'>
        <header>
      <h5>{title}</h5>
      <button className='question-btn' onClick={handleToggle}>
        {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};
export default Question;
