import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100vw",
  margin: "2rem",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#4558bb",
}));
