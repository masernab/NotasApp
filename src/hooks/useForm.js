import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setFormState(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return [formState, handleInputChange, reset];
};
