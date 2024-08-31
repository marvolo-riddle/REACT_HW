import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100vw",
  gap: "2rem",
  padding: "3rem ",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "#000000",

  textDecoration: "none",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "0.875rem",
  lineHeight: "1.75",
  letterSpacing: "0.1rem",
  textTransform: "uppercase",
}));
