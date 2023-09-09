import { useState } from 'react';

export const useForm = (initState = {}) => {
  const [values, setvalues] = useState(initState)

  const handleInputChange = ({target}) => {
    setvalues({
      ...values,
      [target.name]: target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Envio de ${values}`)
  }

  const reset = () => {
    setvalues(initState);
  }

  return [values, handleInputChange, reset, handleSubmit]
}
