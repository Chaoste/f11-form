import { useIntl, FormattedMessage } from "react-intl";

import github from "./github.png";

import { FooterStyled } from "./Footer.styled";

const GITHUB_URL = "https://github.com/Chaoste/f11-form";

function Footer() {
  const intl = useIntl();

  return (
    <FooterStyled>
      <a href={GITHUB_URL}>
        <img
          src={github}
          alt={intl.formatMessage({
            id: "app.footer.github",
          })}
        />
        <FormattedMessage id="app.footer.visit" />
      </a>
    </FooterStyled>
  );
}

export default Footer;
