import { useQuery } from "@tanstack/react-query";
import { UseUserItemsProps } from "../../types/user";
import { fetchUserItemsFromDatabase } from "../../services/apiUserData";

export function useUserItemsFromDatabase({ userId, from }: UseUserItemsProps) {
  const {
    isError: isUserItemsError,
    isLoading: isUserItemsLoading,
    data: userItems = [],
  } = useQuery({
    queryKey: [userId, from],
    queryFn: () => fetchUserItemsFromDatabase({ userId, from }),

    enabled: !!userId,
  });

  return { isUserItemsError, isUserItemsLoading, userItems };
}
