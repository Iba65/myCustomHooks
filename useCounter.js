import { useState } from "react";

const useCounter = (initialState) => {
    const [state, setstate] = useState(initialState);

    const reset = () => {
      setstate(initialState);
    };
    const increment = () => {
      setstate( state +1 );
    };
    const decrement = () => {
      setstate( state -1 );
    };
  return {state, increment, decrement, reset};
}

export default useCounter;
