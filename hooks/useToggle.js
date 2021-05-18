import React, { useState } from 'react';

const useToggle = (initialValue) => {

  const [value, setValue] = useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(value);
  }, []);
  return [value, toggle];
}

export default useToggle;