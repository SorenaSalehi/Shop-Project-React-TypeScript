import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { IconButton, ListItem, ListItemText } from "@mui/material";
import { LogoutRounded } from "@mui/icons-material";
import toast from "react-hot-toast";
import { User } from "../types/auth";

type AlertDialogProps = {
    label: string;
    dialogTitle: string;
    content?: string;
    onSubmit: () => void;
    user: User;
};

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return (
//         <Slide direction="up" ref={ref} {...props}>
//             <></>
//         </Slide>
//     );
// });

export default function AlertDialog({
    label,
    dialogTitle,
    content,
    onSubmit,
    user,
}: AlertDialogProps) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (!user) {
            toast.error("You Are not Logged In!!");
            return;
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        onSubmit();
        setOpen(false);
    };

    return (
        <React.Fragment>
            <ListItem divider onClick={handleClickOpen}>
                <ListItemText primary={label} />
                <IconButton color="primary" aria-label="Logout">
                    <LogoutRounded />
                </IconButton>
            </ListItem>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="success">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
