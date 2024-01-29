// where I define custom hook, which is used in client side (including useeffect)
"use client";

import { useEffect, useState } from "react";

export const useDatabase = (method: Function, option?: any) => {
  const [state, setState] = useState({
    error: "",
    isLoading: false,
    data: [] as any,
  });

  //
  useEffect(() => {
    const fetchData = async () => {
      setState({ error: "", isLoading: true, data: [] });
      try {
        // we envoke the function by the backend router
        const newData = await method(option);

        if (newData.error) {
          throw Error(newData.error.message);
        }
        setState({ error: "", isLoading: false, data: newData });
      } catch (error: any) {
        setState({ error: error.message, isLoading: false, data: [] });
      }
    };
    fetchData();
  }, [method, option]);

  return state;
};
