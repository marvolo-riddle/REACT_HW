import { StyledLink, StyledDiv } from "./style/index.jsx";

const LinkNav = () => {
  return (
    <StyledDiv>
      <StyledLink to="/">Главная</StyledLink>
      <StyledLink to="/list">Все задачи</StyledLink>
    </StyledDiv>
  );
};

export default LinkNav;
