import { useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import { Table } from "antd";

/*
Wird das Formular abgeschickt, soll das Ergebnis auf einer Ergebnisseite angezeigt werden. 
*/

import { SummaryStyled } from "./Summary.styled";

function Summary({ formValues }) {
  const history = useHistory();
  const intl = useIntl();

  // The order is not always like in the form. If the user first fills a lower field, this will be shown earlier.
  if (!formValues) {
    history.push("/");
    return null;
  }

  const dataSource = Object.keys(formValues).map((formKey) => {
    let key = intl.formatMessage({
      id: `app.form.field.${formKey}`,
    });
    let value = formValues[formKey];
    if (formKey === "topic") {
      value = intl.formatMessage({
        id: `app.form.field.topic.${formValues[formKey]}`,
      });
    }
    return {
      key,
      value,
    };
  });

  const columns = [
    {
      dataIndex: "key",
    },
    {
      dataIndex: "value",
    },
  ];

  return (
    <SummaryStyled>
      <Table
        dataSource={dataSource}
        columns={columns}
        showHeader={false}
        pagination={false}
      ></Table>
    </SummaryStyled>
  );
}

export default Summary;
