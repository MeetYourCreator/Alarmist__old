import React, { useState } from 'react';

const useToggle = (initialValue) => {

  const [value, setValue] = useState(initialValue);
  const toggleColor = React.useCallback(() => {
    setValue(value);
  }, []);
  return [value, toggleColor];
}

export default useToggle;