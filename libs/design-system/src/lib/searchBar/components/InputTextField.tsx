import Input from '../../inputs';
import Label from '../../labels';

export type InputTextFieldProps = {
  type?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
};

export default function InputTextField(props: InputTextFieldProps) {
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
