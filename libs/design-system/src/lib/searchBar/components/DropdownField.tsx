import { Dropdown, Option } from '../../dropdown';
import Label from '../../labels';

export type DropdownFieldProps = {
  name: string;
  label: string;
  value?: Option;
  options: Option[] | undefined;
  placeholder?: string;
  onChange: (name: string, value: Option) => void;
  disabled?: boolean;
  noOptionsMessage?: string;
};

export default function DropdownField(props: DropdownFieldProps) {
  const {
    name,
    label,
    value,
    options,
    placeholder,
    onChange,
    disabled,
    noOptionsMessage,
  } = props;

  return (
    <div key={name} className="flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Dropdown
        inputId={name}
        value={value}
        options={options}
        placeholder={placeholder}
        customStyles={{ control: 'w-full md:w-[250px]' }}
        isClearable
        onChange={(value) => onChange(name, value)}
        isDisabled={disabled}
        noOptionsMessage={noOptionsMessage}
      />
    </div>
  );
}
