import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate: logout,
        isPending: isLoginOut,
        isError: logoutError,
    } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/", { replace: true });
            toast.success("You have been successfully logged out🥲", {
                duration: 4000,
            });
        },
    });

    return { logout, isLoginOut, logoutError };
}
