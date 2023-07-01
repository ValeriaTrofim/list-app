import { useFormContext } from "react-hook-form";

interface SelectProps {
  items: string[];
  label: string;
  name: string;
}

const Select = ({ items, label, name }: SelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <label htmlFor="category" className="form-label">
        {label}
      </label>

      <div className="input-group">
        <select
          className="form-select "
          id="inputGroupSelect02"
          {...register(name, { required: true })}
        >
          {items.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {errors[name]?.type === "required" && (
        <p className="text-danger">{label} is required</p>
      )}
    </>
  );
};

export default Select;
