import Input from '../../inputs';
import Label from '../../labels';

export type InputTextFieldProps = {
  type?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
};

export default function InputTextField(props: InputTextFieldProps) {
  const { type = 'text', name, label, value, placeholder, onChange } = props;

  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        value={value}
        placeholder={placeholder}
        className="w-full md:w-[250px]"
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
}
