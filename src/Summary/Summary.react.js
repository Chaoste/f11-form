import { useHistory } from "react-router-dom";

/*
Wird das Formular abgeschickt, soll das Ergebnis auf einer Ergebnisseite angezeigt werden. 
*/

import { SummaryStyled } from "./Summary.styled";

function Summary({ formValues }) {
  const history = useHistory();
  console.log(formValues);
  if (!formValues) {
    history.push("/");
  }
  return <SummaryStyled>{JSON.toString(formValues)}</SummaryStyled>;
}

export default Summary;
