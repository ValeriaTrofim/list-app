import { useForm, FormProvider, FieldValues } from "react-hook-form";
import Select from "./Select";
import Input from "./Input";
import items from "../data/items1";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const Form = ({ onSubmit }: Props) => {
  const methods = useForm({ shouldUseNativeValidation: false });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data);
          methods.reset();
        })}
      >
        <Input
          id="description"
          type="text"
          step="any"
          htmlFor="description"
          label="Description"
          {...methods.register("description", {
            required: "Description is required",
            minLength: {
              value: 3,
              message: "Description must be at least 3 characters",
            },
          })}
        />

        <Input
          id="amount"
          type="number"
          step="0.01"
          htmlFor="amount"
          label="Amount"
          {...methods.register("amount", {
            valueAsNumber: true,
            required: "Amount is required",
            min: {
              value: 0,
              message: "Not a valid number",
            },
          })}
        />

        <Select items={items} label="Category" name="categories" />

        <div className="mb-3 mt-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
