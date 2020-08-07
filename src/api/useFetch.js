import React, { useState, useEffect } from "react";
export default function useFetch({
  api,
  method,
  url,
  data = null,
  config = null,
}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api[method](url, data, config);
        setResponse(res.data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
    setIsLoading(false);
  }, [api, method, url, data, config]);
  return { response, error, isLoading };
}
