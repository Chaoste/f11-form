import { useState } from "react";
import { IntlProvider } from "react-intl";
import "antd/dist/antd.css";

import Header from "./header/Header.react";
import Form from "./form/Form.react";

import AppStyled from "./App.styled";

import messages from "./locales/";

function App() {
  const [locale, setLocale] = useState(() => {
    const defaultLocale = navigator.language.split(/[-_]/)[0];
    if (Object.keys(messages).indexOf(defaultLocale) === -1) {
      return "en";
    }
    return defaultLocale;
  });

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <AppStyled>
        <Header locale={locale} setLocale={setLocale} />
        <Form />
      </AppStyled>
    </IntlProvider>
  );
}

export default App;
