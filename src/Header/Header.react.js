import Logo from "./Logo/";
import Title from "./Title/";
import LanguageToggle from "./LanguageToggle/";

import { HeaderStyled } from "./Header.styled";

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
