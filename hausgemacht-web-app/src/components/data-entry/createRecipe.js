import React from "react";
import { Form, Input, Button, Select, notification } from "antd";
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
  const [createRecipe, { data }] = useMutation(CREATE_RECIPE);
  const onSubmit = async recipe => {
    try {
      await createRecipe({ variables: recipe });
      console.log(data);
    } catch (error) {
      console.error(error);
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
            autoSize
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
          <Input type="number" placeholder="Zeit" addonAfter="Minuten"></Input>
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
