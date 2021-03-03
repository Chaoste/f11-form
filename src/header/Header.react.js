// import './Header.css';
import Logo from "./logo/Logo.react";
import Title from "./title/Title.react";
import LanguageToggle from "./languageToggle/LanguageToggle.react";

import HeaderStyled from "./Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <LanguageToggle />
    </HeaderStyled>
  );
}

export default Header;
