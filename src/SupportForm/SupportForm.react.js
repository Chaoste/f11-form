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
          })}
          name="name"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: "app.form.required.name",
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.email",
          })}
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: intl.formatMessage({
                id: "app.form.required.email",
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({
            id: "app.form.field.topic",
          })}
          name="topic"
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: "app.form.required.topic",
              }),
            },
          ]}
        >
          <Select onChange={onChangeTopic}>
            <Select.Option value="general">
              {intl.formatMessage({
                id: "app.form.field.topic.general",
              })}
            </Select.Option>
            <Select.Option value="software">
              {intl.formatMessage({
                id: "app.form.field.topic.software",
              })}
            </Select.Option>
            <Select.Option value="recall">
              {intl.formatMessage({
                id: "app.form.field.topic.recall",
              })}
            </Select.Option>
          </Select>
        </Form.Item>

        {selectedTopic === "software" && (
          <Form.Item
            label={intl.formatMessage({
              id: "app.form.field.version",
            })}
            name="version"
            rules={[
              {
                required: true,
                pattern: "\\d+\\.\\d+\\.\\d+",
                message: intl.formatMessage({
                  id: "app.form.required.version",
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
            })}
            name="phone"
            rules={[
              {
                required: true,
                pattern: "\\d{9,}",
                message: intl.formatMessage({
                  id: "app.form.required.phone",
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
          })}
          name="description"
          rules={[
            {
              required: true,
              min: 10,
              message: intl.formatMessage({
                id: "app.form.required.description",
              }),
            },
          ]}
        >
          <Input.TextArea autoSize={{ minRows: 6 }} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            <FormattedMessage id="app.form.submit" />
          </Button>
        </Form.Item>
      </Form>
    </SupportFormWrapperStyled>
  );
}

export default SupportForm;
