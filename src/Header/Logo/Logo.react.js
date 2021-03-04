import { useIntl } from "react-intl";

import logo from "./logo.jpeg";

import { LogoWrapperStyled } from "./Logo.styled";

function Logo() {
  const intl = useIntl();

  return (
    <LogoWrapperStyled>
      <a href="/">
        <img
          src={logo}
          alt={intl.formatMessage({
            id: "app.logo.alt",
          })}
        />
      </a>
    </LogoWrapperStyled>
  );
}

export default Logo;
