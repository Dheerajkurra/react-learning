
import { useRef } from "react";

function UseRefCom() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter your text"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </>
  );
}

export default UseRefCom;
