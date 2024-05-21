import { Dropdown, Option } from '../../dropdown';

type ItemsPerPageProps = {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  label: string;
};

export function ItemsPerPage(props: ItemsPerPageProps) {
  const { pageSize, setPageSize, label } = props;

  const pageSizeOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
  ];
  const value = pageSizeOptions.find((item) => item.value === pageSize);

  const handleChange = (option: Option) => {
    if (option) {
      setPageSize(Number(option.value));
    }
  };

  return (
    <div className="flex items-center justify-center md:justify-start w-full">
      <span className="mr-2 whitespace-nowrap">{label}</span>
      <Dropdown
        value={value}
        options={pageSizeOptions}
        onChange={handleChange}
        menuPlacement="top"
      />
    </div>
  );
}
