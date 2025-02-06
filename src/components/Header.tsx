import { AppBar, Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          padding: "1rem",
          backgroundColor: "background.appBar",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">React TypeScript Shop Project</Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
