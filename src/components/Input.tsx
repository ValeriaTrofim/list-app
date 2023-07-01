import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  id: string;
  type: string;
  htmlFor: string;
  label: string;
  name: string;
  step: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, htmlFor, label, ...inputProps }, ref) => {
    const {
      formState: { errors },
    } = useFormContext();
    return (
      <div className="mb-3">
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
        <input
          id={id}
          type={type}
          ref={ref}
          className="form-control"
          {...inputProps}
        />
        {errors && (
          <p className="text-danger">
            {errors[inputProps.name]?.message?.toString()}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
