import React from "react";
import { Form, Input, Button, Select, notification, InputNumber } from "antd";
import { useForm, Controller } from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { CREATE_RECIPE } from "../../graphql/mutations";
const { Option } = Select;

const InputLayout = ({ name, input, control }) => (
  <Controller
    name={name}
    style={{ marginTop: "1rem" }}
    as={input}
    control={control}
  ></Controller>
);

export default () => {
  const { control, handleSubmit } = useForm();
  const history = useHistory();
  const [createRecipe] = useMutation(CREATE_RECIPE);
  const onSubmit = async recipe => {
    try {
      await createRecipe({ variables: recipe });
      history.push("/");
    } catch (error) {
      notification.error(error);
    }
  };
  return (
    <Form>
      <InputLayout
        control={control}
        name="title"
        input={<Input placeholder="Titel" />}
      ></InputLayout>
      <InputLayout
        control={control}
        name="description"
        input={
          <TextArea
            placeholder="Beschreibung"
            autoSize={{ minRows: 2, maxRows: 6 }}
          ></TextArea>
        }
      ></InputLayout>
      <InputLayout
        control={control}
        name="diet"
        input={
          <Select placeholder="Typ">
            <Option value="flexeterian">Flexetarisch</Option>
            <Option value="pesceterian">Pescetarisch</Option>
            <Option value="vegeterian">Vegetarisch</Option>
            <Option value="vegan">Vegan</Option>
          </Select>
        }
      ></InputLayout>
      <InputLayout
        control={control}
        name="duration"
        input={
          <InputNumber placeholder="Zeit" addonAfter="Minuten"></InputNumber>
        }
      ></InputLayout>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        style={{ margin: "1rem" }}
      >
        Erstellen
      </Button>
    </Form>
  );
};
