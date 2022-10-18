import { useQuery } from "@tanstack/react-query"
import { getUserReq } from "../../apis/get-user.api"


export const USER_KEY = ["USER_KEY"]

export const useUser = () => useQuery({

    refetchOnWindowFocus: false,
    queryKey: USER_KEY,
    queryFn: () => getUserReq(),
    staleTime: Infinity
})
