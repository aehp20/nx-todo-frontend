export type GridProps<T extends { id: string }> = {
  nbColumns: number;
  gap: number;
  items: T[];
  Component: React.FunctionComponent<{ item: T }>;
};

export default function Grid<T extends { id: string }>(props: GridProps<T>) {
  const { nbColumns, gap, items, Component } = props;

  return (
    <div className={`grid grid-cols-${nbColumns} gap-${gap}`}>
      {items.map((item: T) => (
        <Component key={item.id} item={item} />
      ))}
    </div>
  );
}
