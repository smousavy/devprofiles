import { fetchData } from "@/helper/fetch";
import { ApiResponse } from "@/types/api";
import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: true,
  });
  useEffect(() => {
    let isMounted: boolean = true;
    fetchData<T>(url)
      .then((data: T) => {
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({ data: null, loading: false, error: error.message });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [url]);
  return state;
}

export default useFetch;
