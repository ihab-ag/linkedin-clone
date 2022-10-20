import { useQuery } from "@tanstack/react-query"
import { getNotificationsReq } from "../../apis/get-notifications.api"


export const NOTIFICATIONS_KEY = ["NOTIFICATIONS_KEY"]

export const useNotifications = () => useQuery({

    refetchOnWindowFocus: false,
    queryKey: NOTIFICATIONS_KEY,
    queryFn: () => getNotificationsReq(),
    staleTime: Infinity
})
