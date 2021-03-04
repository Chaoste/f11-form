import { useState } from "react";
import { IntlProvider } from "react-intl";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header/";
import SupportForm from "./supportForm/";
import Summary from "./summary/";

import { AppStyled } from "./App.styled";

import messages from "./locales/";

function App() {
  const [formValues, setFormValues] = useState(null);
  const [locale, setLocale] = useState(() => {
    const defaultLocale = navigator.language.split(/[-_]/)[0];
    if (Object.keys(messages).indexOf(defaultLocale) === -1) {
      return "en";
    }
    return defaultLocale;
  });

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <Router>
        <AppStyled>
          <Header locale={locale} setLocale={setLocale} />
          <Switch>
            <Route exact path="/">
              <SupportForm onSubmit={setFormValues} />
            </Route>
            <Route path="/summary">
              <Summary formValues={formValues} />
            </Route>
          </Switch>
        </AppStyled>
      </Router>
    </IntlProvider>
  );
}

export default App;
