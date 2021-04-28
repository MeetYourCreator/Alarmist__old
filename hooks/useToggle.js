import React, { useState } from 'react';

export default function useToggle(initialValue) {

  const [value, setValue] = useState(initialValue);
  const toggleColor = React.useCallback(() => {
    setValue(value);
  }, []);
  return [value, toggleColor];
}