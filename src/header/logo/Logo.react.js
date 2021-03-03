import logo from "./logo.jpeg";

import LogoStyled from "./Logo.styled";

function Logo() {
  return (
    <LogoStyled>
      <a href="/">
        <img src={logo} alt="Factor Eleven" />
      </a>
    </LogoStyled>
  );
}

export default Logo;
