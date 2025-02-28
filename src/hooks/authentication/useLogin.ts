import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
    const queryClient = useQueryClient();

    const {
        mutate: login,
        isPending: isLogin,
        isError: loginInError,
    } = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data);
        },
    });

    return { login, isLogin, loginInError };
}
