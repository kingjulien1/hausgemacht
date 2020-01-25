import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  notification,
  InputNumber,
  AutoComplete
} from "antd";
import { useForm, Controller } from "react-hook-form";
import TextArea from "antd/lib/input/TextArea";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { ADD_INGREDIENT } from "../../graphql/mutations";
import { ALL_INGREDIENTS } from "../../graphql/queries";

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
  const [addIngredient] = useMutation(ADD_INGREDIENT);
  const { data } = useQuery(ALL_INGREDIENTS);
  const history = useHistory();
  const onSubmit = async ingredient => {
    try {
      //await addIngredient({ variables: ingredient });
      console.log(ingredient);
    } catch (error) {
      notification.error(error);
    }
  };
  return (
    <Form>
      <InputLayout
        control={control}
        name="title"
        input={
          <AutoComplete
            dataSource={data && data.ingredients.map(({ title }) => title)}
            filterOption={(inputValue, option) =>
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            }
          ></AutoComplete>
        }
      ></InputLayout>
      <InputLayout
        control={control}
        name="unit"
        input={<InputNumber></InputNumber>}
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
        name="ampount"
        input={<InputNumber placeholder="Menge"></InputNumber>}
      ></InputLayout>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        style={{ margin: "1rem" }}
      >
        Hinzufügen
      </Button>
    </Form>
  );
};
