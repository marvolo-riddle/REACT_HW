import { StyledLink, StyledDiv } from "./style/style.jsx";

const LinkNav = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/list">Все контакты</StyledLink>
    </StyledDiv>
  );
};

export default LinkNav;
