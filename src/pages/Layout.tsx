import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CustomBottomNavigation from "../components/CustomBottomNavigation";

export default function Layout() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />

      <Box
        component="section"
        sx={{
          width: "90dvw",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          padding: "10dvh 0",
        }}
      >
        <Outlet />
      </Box>

      <CustomBottomNavigation />
    </Box>
  );
}
