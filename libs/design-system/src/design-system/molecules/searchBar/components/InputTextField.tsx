import Input from '../../../atoms/inputs/Input';
import Label from '../../../atoms/labels/Label';

export type InputTextFieldProps = {
  type?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
};

export default function InputTextField(props: Readonly<InputTextFieldProps>) {
  const {
    type = 'text',
    name,
    label,
    value,
    placeholder,
    onChange,
    disabled,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    onChange(name, event.target.value);
  };

  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        className="w-full md:w-[250px]"
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
