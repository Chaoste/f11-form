import { useCallback, useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Select } from "antd";

import { SupportFormWrapperStyled } from "./SupportForm.styled";

function SupportForm({ onSubmit }) {
  const intl = useIntl();
  const history = useHistory();

  const [selectedTopic, setSelectedTopic] = useState(null);

  const onFinishForm = useCallback(
    (values) => {
      onSubmit(values);
      history.push("/summary/");
    },
    [history, onSubmit]
  );

  const onChangeTopic = useCallback(
    (value) => {
      setSelectedTopic(value);
    },
    [setSelectedTopic]
  );

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <SupportFormWrapperStyled>
      <Form {...layout} name="basic" onFinish={onFinishForm}>
        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.name",
            defaultMessage: "Name",
          })}
          name="name"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: "app.form.required.name",
                defaultMessage: "Please input your name!",
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.email",
            defaultMessage: "Email address",
          })}
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: intl.formatMessage({
                id: "app.form.required.email",
                defaultMessage: "Please input a valid email address!",
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.topic",
            defaultMessage: "Topic",
          })}
          name="topic"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: "app.form.required.topic",
                defaultMessage: "Please select the topic of your request!",
              }),
            },
          ]}
        >
          <Select onChange={onChangeTopic}>
            <Select.Option value="general">
              {intl.formatMessage({
                id: "app.form.field.topic.general",
                defaultMessage: "General inquiry",
              })}
            </Select.Option>
            <Select.Option value="software">
              {intl.formatMessage({
                id: "app.form.field.topic.software",
                defaultMessage: "Software error",
              })}
            </Select.Option>
            <Select.Option value="recall">
              {intl.formatMessage({
                id: "app.form.field.topic.recall",
                defaultMessage: "Recall",
              })}
            </Select.Option>
          </Select>
        </Form.Item>

        {selectedTopic === "software" && (
          <Form.Item
            label={intl.formatMessage({
              id: "app.form.field.version",
              defaultMessage: "Version number",
            })}
            name="version"
            rules={[
              {
                required: true,
                pattern: "\\d+\\.\\d+\\.\\d+",
                message: intl.formatMessage({
                  id: "app.form.required.version",
                  defaultMessage:
                    "Bitte input a valid version number (e.g. 1.1.1)!",
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        )}

        {selectedTopic === "recall" && (
          <Form.Item
            label={intl.formatMessage({
              id: "app.form.field.phone",
              defaultMessage: "Phone number",
            })}
            name="phone"
            rules={[
              {
                required: true,
                pattern: "\\d{9,}",
                type: "number",
                message: intl.formatMessage({
                  id: "app.form.required.phone",
                  defaultMessage: "Please input a valid phone number!",
                }),
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>
        )}

        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.description",
            defaultMessage: "Description",
          })}
          name="description"
          rules={[
            {
              required: true,
              min: 10,
              message: intl.formatMessage({
                id: "app.form.required.description",
                defaultMessage:
                  "Please give a description with at least 10 letters!",
              }),
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 6 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            <FormattedMessage id="app.form.submit" defaultMessage="Submit" />
          </Button>
        </Form.Item>
      </Form>
    </SupportFormWrapperStyled>
  );
}

export default SupportForm;
