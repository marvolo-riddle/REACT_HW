import { styled } from "@mui/material/styles";
import { Select, Button } from "@mui/material";

export const StyledSelect = styled(Select)(({ theme }) => ({
  height: "30px",
  minWidth: "30%",
  margin: "0 auto",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "#4558bb",
}));
