import React, { useRef } from 'react'
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
      className='input' 
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur(); // --> prevents screen from staying dark after submission.
    }}>
      <input 
        value={todo}
        ref={inputRef}
        onChange={
          (e) => setTodo(e.target.value)
        }
        type="input" 
        placeholder="Enter a task"
        className='input__box' 

      />

        <button className='input_submit' type='submit'>
          Go
        </button>
    </form>
  )
}

export default InputField;