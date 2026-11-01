import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./features/counter/counterSlice";
function Redux() {

  let [inputValue, setInputValue] = useState(1)

  let count = useSelector((state) => state.counter.value)
  let dispatch = useDispatch()

  return (
    <>
    <input value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))}/>
   
    <h2>{count}</h2>

    <button onClick={() => dispatch(increment())}>Increase</button>
    <button onClick={() => dispatch(decrement())}>Decrease</button>
    <button onClick={() => dispatch(reset())}>reset</button>
    <button onClick={() => dispatch(incrementByAmount(inputValue))}>Add Amount</button>

    </>
  );
}

export default Redux;