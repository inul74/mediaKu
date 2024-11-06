"use client";

import { useQuery } from "@tanstack/react-query";

import fetcher from "@/lib/fetcher";
import { BASE_URL } from "@/lib/base-url";

const useNotifications = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: () => fetcher(`${BASE_URL}/api/notifications`),
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useNotifications;
