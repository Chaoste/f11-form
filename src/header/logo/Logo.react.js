import logo from "./logo.jpeg";

import { LogoWrapperStyled } from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapperStyled>
      <a href="/">
        <img src={logo} alt="Factor Eleven" />
      </a>
    </LogoWrapperStyled>
  );
}

export default Logo;
