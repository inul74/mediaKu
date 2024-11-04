"use client";

import { useQuery } from "@tanstack/react-query";

import fetcher from "@/lib/fetcher";
import { BASE_URL } from "@/lib/base-url";

const useUsers = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["users", "allusers"],
    queryFn: () => fetcher(`${BASE_URL}/api/users`),
    staleTime: Infinity,
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useUsers;
