import { useState } from "react";
import { Button, Box, SwipeableDrawer, Fab } from "@mui/material";
import { Close, MoreHoriz } from "@mui/icons-material";
import ReviewsItem from "./ReviewsItem";
import MoreDetails from "./MoreDetails";

type ShowMoreDrawerProps = {
    section: string;
};
const drawerBleeding = 56;

function ShowMoreDrawer({ section }: ShowMoreDrawerProps) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Box sx={{ zIndex: 50 }}>
            <Box sx={{ textAlign: "center", pt: 1 }}>
                <Button
                    onClick={toggleDrawer(true)}
                    sx={{ color: "text.primary" }}
                >
                    {section} <MoreHoriz />
                </Button>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    ".MuiPaper-root": {
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                        maxHeight: "80%",
                        overflow: "hidden",
                    },
                }}
            >
                <Box
                    sx={{
                        px: 2,
                        py: 2,
                        height: "100%",
                        overflow: "auto",
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                    }}
                >
                    {section === "reviews" ? <ReviewsItem /> : <MoreDetails />}
                </Box>
                <Fab
                    onClick={toggleDrawer(false)}
                    sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
                >
                    <Close />
                </Fab>
            </SwipeableDrawer>
        </Box>
    );
}

export default ShowMoreDrawer;
