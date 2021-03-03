import Logo from "./logo/Logo.react";
import Title from "./title/Title.react";
import LanguageToggle from "./languageToggle/LanguageToggle.react";

import HeaderStyled from "./Header.styled";

function Header({ locale, setLocale }) {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <LanguageToggle locale={locale} setLocale={setLocale} />
    </HeaderStyled>
  );
}

export default Header;
