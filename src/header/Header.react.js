import Logo from "./logo/";
import Title from "./title/";
import LanguageToggle from "./languageToggle/";

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
