import { Dropdown, Option } from '../../dropdown/Dropdown';

type ItemsPerPageProps = {
  pageSize: number;
  pageSizeOptions: Option[];
  setPageSize: (pageSize: number) => void;
  label: string;
};

export function ItemsPerPage(props: Readonly<ItemsPerPageProps>) {
  const { pageSize, pageSizeOptions, setPageSize, label } = props;

  const value = pageSizeOptions.find((item) => Number(item.value) === pageSize);

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
