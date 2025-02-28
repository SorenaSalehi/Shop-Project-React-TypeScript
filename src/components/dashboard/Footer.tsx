import { Box, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box component="div" sx={{ position: "fixed", bottom: 70 }}>
            <Typography variant="caption">
                Crafted with ❤️ by Sorena. Connect with me on{" "}
                <Typography
                    component="a"
                    href="https://www.linkedin.com/in/sorenasalehi/"
                >
                    Linkedln
                </Typography>{" "}
                or check out my work on{" "}
                <Typography
                    component="a"
                    href="https://sorena-salehi-portfolio.netlify.app/"
                >
                    My portfolio.
                </Typography>
            </Typography>
        </Box>
    );
}
