import {
    Box,
    ListItem,
    Grid2,
    Typography,
    List,
    ListItemText,
    IconButton,
} from "@mui/material";

import { useNavigate } from "react-router";

import { useAuthContext } from "../../context/AuthContext.js";
import { useLogout } from "../../hooks/authentication/useLogout.js";
import toast from "react-hot-toast";
import {
    AccountCircleRounded,
    FavoriteRounded,
    ManageAccountsRounded,
    ShoppingBasketRounded,
} from "@mui/icons-material";
import AlertDialog from "../../ui/AlertDialog.js";
import Footer from "./Footer.js";

export default function Dashboard() {
    const { user, setUser } = useAuthContext();
    const { logout } = useLogout();
    const navigate = useNavigate();

    function handleProfile() {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/profile");
        }
    }
    function handleAccount() {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/account");
        }
    }

    const handleLogout = () => {
        logout();
        setUser(null);
    };

    return (
        <>
            <Box
                component="section"
                sx={{
                    padding: 2,
                    backgroundColor: "background.paper",
                    borderRadius: "8px",
                    boxShadow: 3,
                    maxWidth: 600,
                    margin: "auto",
                    mt: 4,
                }}
            >
                {/* Header Section */}
                <Box
                    component="header"
                    sx={{
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    <Grid2
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ maxWidth: 600, margin: "0 auto" }}
                    >
                        <Grid2
                            component={"a"}
                            onClick={() =>
                                toast.error("You have not Any order", {
                                    duration: 2000,
                                })
                            }
                        >
                            <Typography
                                component="button"
                                sx={{
                                    backgroundColor: "orange",
                                    color: "white",
                                    px: 2,
                                    py: 1,
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                }}
                                value="currentOrders"
                            >
                                Current Orders
                            </Typography>
                        </Grid2>
                        <Grid2
                            component={"a"}
                            onClick={() =>
                                toast.error("You have not Any order", {
                                    duration: 2000,
                                })
                            }
                        >
                            <Typography
                                component="button"
                                sx={{
                                    backgroundColor: "green",
                                    color: "white",
                                    px: 2,
                                    py: 1,
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "success.dark",
                                    },
                                }}
                                value="delivered"
                            >
                                Delivered
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>

                {/* //*Profile Settings Section */}
                <List
                    sx={{
                        width: "100%",
                        bgcolor: "background.default",
                        borderRadius: "8px",
                        boxShadow: 1,
                        "& .MuiIconButton-root": {
                            color: "text.primary",
                        },
                    }}
                >
                    {/* //*user details */}
                    <ListItem divider onClick={() => handleProfile()}>
                        <ListItemText primary="Profile" />
                        <IconButton color="primary" aria-label="edit profile">
                            <AccountCircleRounded />
                        </IconButton>
                    </ListItem>
                    {/* //*Account setting */}
                    <ListItem divider onClick={() => handleAccount()}>
                        <ListItemText primary="Account" />
                        <IconButton aria-label="edit profile">
                            <ManageAccountsRounded />
                        </IconButton>
                    </ListItem>
                    {/* //*shopping basket */}
                    <ListItem
                        divider
                        onClick={() => navigate("/shoppingBasket")}
                    >
                        <ListItemText primary="Shopping Cart" />
                        <IconButton aria-label="Shopping basket">
                            <ShoppingBasketRounded />
                        </IconButton>
                    </ListItem>
                    {/* //*wishlist */}
                    <ListItem divider onClick={() => navigate("/wishlist")}>
                        <ListItemText primary="Wishlist" />
                        <IconButton aria-label="Wishlist">
                            <FavoriteRounded />
                        </IconButton>
                    </ListItem>{" "}
                    {/* //*logout */}
                    <AlertDialog
                        label="Logout"
                        dialogTitle="Are you Sure For Login Out?"
                        onSubmit={handleLogout}
                        user={user}
                    />
                    {/* //*delete Account */}
                </List>
            </Box>
            <Footer />
        </>
    );
}
