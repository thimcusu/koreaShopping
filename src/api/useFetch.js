import React, { useState, useEffect } from "react";
import { api } from './axiosService';
import { getJwt } from "../utils/jwt";
// export default function useFetch({
//   api,
//   method,
//   url,
//   data = null,
//   config = null,
// }) {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await api[method](url, data, config);
//         setResponse(res.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError(err);
//       }
//     };
//     fetchData();
//     setIsLoading(false);
//   }, [api, method, url, data, config]);
//   return { response, error, isLoading };
// }
const jwt = getJwt();

const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    console.log(query);
    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            setIsLoading(true);
            try{
                const res = await api({
                    url: `${process.env.API_URL}/${query}`,
                    method: "GET",
                    headers: { authorization: jwt },
                });
                setData(res.data.data);
                setIsLoading(false);
            }catch(error){
                setError(error);
            }
        };
        fetchData();
    }, [query]);
    return [
        data,
        isLoading,
        error,
    ];
}

export default useFetch;
