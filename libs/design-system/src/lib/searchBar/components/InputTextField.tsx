import Input from '../../inputs';
import Label from '../../labels';

export type InputTextFieldProps = {
  type?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChange: (name: string, value: string) => void;
};

export default function InputTextField(props: InputTextFieldProps) {
  const {
    type = 'text',
    name,
    label,
    value,
    placeholder,
    autoFocus,
    onChange,
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
        autoFocus={autoFocus}
        className="w-full md:w-[250px]"
        onChange={handleChange}
      />
    </div>
  );
}
