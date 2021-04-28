import React, { useEffect } from 'react';

const useFetch = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [url]);

  return {
    data,
    error,
    loading
  }
}

export default useFetch;