// src/hooks/useFetch.ts

import { useEffect, useState } from "react";
import axiosClient from "src/lib/api/axiosClient";

/**
 * Generic hook for fetching API data.
 * 
 * Usage:
 * const { data, loading, error, refetch } = useFetch("/patients");
 */

export function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get(endpoint);
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
}

