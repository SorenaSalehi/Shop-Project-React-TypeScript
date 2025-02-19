import { Skeleton, Stack } from "@mui/material";

export default function HomeSkeleton() {
  return (
    <Stack spacing={1} sx={{ margin: "1rem auto", width: "90%" }}>
      <Skeleton variant="rounded" width="90%" height="20dvh" animation="wave" />
      <Skeleton variant="rounded" width="90%" height="20dvh" animation="wave" />
      <Skeleton variant="rounded" width="90%" height="20dvh" animation="wave" />
    </Stack>
  );
}
