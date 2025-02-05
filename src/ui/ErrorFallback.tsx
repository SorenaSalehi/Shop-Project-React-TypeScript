import { Box } from "@mui/material";
import { FallbackProps } from "react-error-boundary";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <Box>
      <p>Something went Wrong!!</p>
      <h1>{error.message}</h1>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </Box>
  );
}
