import { FormattedMessage } from "react-intl";

import TitleStyled from "./Title.styled";

function Title() {
  return (
    <TitleStyled>
      <FormattedMessage id="app.pageTitle" />
    </TitleStyled>
  );
}

export default Title;
