import React, { useCallback } from "react";
import { Switch } from "antd";

import flagGerman from "./flag-german.png";
import flagEnglish from "./flag-english.png";

import {
  LanguageToggleStyled,
  LanguageButtonStyled,
} from "./LanguageToggle.styled";

function LanguageToggle({ locale, setLocale }) {
  const isSwitchChecked = locale === "en";

  const onChange = useCallback(
    (checked) => {
      if (checked) {
        setLocale("en");
      } else {
        setLocale("de");
      }
    },
    [setLocale]
  );

  const setGermanLocale = useCallback(() => setLocale("de"), [setLocale]);
  const setEnglishLocale = useCallback(() => setLocale("en"), [setLocale]);

  return (
    <LanguageToggleStyled>
      <LanguageButtonStyled onClick={setGermanLocale}>
        <img src={flagGerman} alt="German" data-toggled={locale === "de"} />
      </LanguageButtonStyled>
      <Switch checked={isSwitchChecked} onChange={onChange} />
      <LanguageButtonStyled onClick={setEnglishLocale}>
        <img src={flagEnglish} alt="English" data-toggled={locale === "en"} />
      </LanguageButtonStyled>
    </LanguageToggleStyled>
  );
}

export default React.memo(LanguageToggle);
