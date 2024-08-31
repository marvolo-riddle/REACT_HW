import { styled } from "@mui/material/styles";
import { Stack, Container, Button } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  width: "100vw",
  maxWidth: "none",
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  gap: "1rem",
  width: "33%",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#06082e",
  width: "33,3%",
  whiteSpace: "nowrap",
  margin: "0 auto",
  minWidth: "150px",
  "&:hover": {
    backgroundColor: "rgba(6,8,46,0.64)",
  },
}));
