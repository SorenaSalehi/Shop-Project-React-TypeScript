import { memo, SyntheticEvent, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Badge, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CustomBottomNavigation() {
    const [value, setValue] = useState("/");
    const navigate = useNavigate();

    const handleChange = (
        _: SyntheticEvent<Element, Event>,
        newValue: string
    ) => {
        setValue(newValue);
        navigate(newValue);
    };

    return (
        <BottomNavigation
            sx={{
                width: "100%",
                zIndex: 1100,
                position: "fixed",
                bottom: 0,
                backgroundColor: "background.appBar",
                color: "text.primary",

                "& button": {
                    color: "text.btnFade",
                },
                "& button.Mui-selected": {
                    color: "text.btn",
                },
            }}
            value={value}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="wishlist"
                value="/wishlist"
                icon={
                    <Badge
                        // badgeContent={wishlist?.length}
                        color="success"
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <FavoriteIcon />
                    </Badge>
                }
            />

            <BottomNavigationAction
                label="Basket"
                value="/cart"
                icon={
                    <Badge
                        // badgeContent={basket?.length}
                        color="success"
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <ShoppingBasket />
                    </Badge>
                }
            />

            <BottomNavigationAction label="Home" value="/" icon={<Home />} />

            <BottomNavigationAction
                label="Dashboard"
                value="/dashboard"
                icon={<AccountCircle />}
            />
        </BottomNavigation>
    );
}

export default memo(CustomBottomNavigation);
