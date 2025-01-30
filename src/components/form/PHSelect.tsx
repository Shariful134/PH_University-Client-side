import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelect = {
  label: string;
  name: string;
  options: { value: string; label: string }[] | undefined;
  disabled?: boolean;
};

const PHSelect = ({ label, name, options, disabled }: TPHSelect) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            disabled={disabled}
          />
          {error && <small style={{ color: "red" }}>{error?.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PHSelect;
