import { useEffect, useRef, useState } from "react";

export const useFetch = (url, apiKey, uni) => {
  const isMounted = useRef(true);
  const [state, setstate] = useState({ data: null, loading: true, error: null});

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);
  const getFetch = () => {
    setstate({ data: null, loading: true, error: null});
    fetch(`${url}?api_key=${apiKey}&count=${uni}`)
      .then( resp => resp.json())
      .then( data => {
          if (isMounted.current) {
            setstate({
              loading: false,
              error: null,
              data
            });          
          }
      })
  }
  
  return {state, getFetch};
}
