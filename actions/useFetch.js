"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // abort the request if you get to another component imediately
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    (async () => {
      const res = await axios.get(`https://dummyjson.com/products`, { signal });
      if (res?.status === 200) {
        setData(res?.data);
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
      setLoading(false);
    };
  }, []);
  return { data, setData, loading };
};

export default useFetch;
