import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";
import { useLogin } from "../../hooks/authentication/useLogin";
import { useAuthContext } from "../../context/AuthContext";

export default function LoginForm() {
    const { register, formState, handleSubmit } = useForm();
    const { errors } = formState;
    const { login, isLogin } = useLogin();
    const { setUser, setIsAuth } = useAuthContext();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    function onSubmit({ email = null, password = null }) {
        if (!email || !password) return;

        login(
            { email, password },
            {
                onSuccess: (data) => {
                    setIsAuth(data);
                    toast.success("Welcome back", { duration: 4000 });

                    navigate("/dashboard");
                },

                onError: () => {
                    toast.error("Provided Email or password is Wrong!!");
                },
            }
        );
    }

    function togglePassword() {
        setShowPassword((prev) => !prev);
    }

    return (
        <Paper elevation={5}>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "5rem",
                }}
            >
                <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <TextField
                        id="email"
                        variant="outlined"
                        label="email"
                        defaultValue="hehima2597@lofiey.com"
                        sx={{ flexGrow: "1" }}
                        {...register("email", {
                            required: "this field is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "please provide a valid email",
                            },
                        })}
                        error={errors.email}
                        helperText={errors.email?.message}
                        disabled={isLogin}
                    />
                </Box>
                <Box
                    component="div"
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                    <TextField
                        id="password"
                        variant="outlined"
                        label="password"
                        type={showPassword ? "text" : "password"}
                        defaultValue="12345678"
                        sx={{ flexGrow: "1" }}
                        {...register("password", {
                            required: "password is required!!",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be at least 8 Characters Long!!",
                            },
                        })}
                        error={errors.password}
                        helperText={errors.password?.message}
                        disabled={isLogin}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={togglePassword}>
                                    {showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            ),
                        }}
                    />
                </Box>{" "}
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isLogin}
                    sx={{
                        color: "background.appBar",
                        backgroundColor: "background.default",
                    }}
                >
                    {isLogin ? <CircularProgress /> : "Login"}
                </Button>
            </Box>
        </Paper>
    );
}
