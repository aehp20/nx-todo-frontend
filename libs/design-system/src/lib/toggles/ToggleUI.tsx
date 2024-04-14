export type ToggleUIProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked: boolean;
  disabled?: boolean;
  handleChange: () => void;
  styles: { [key: string]: string };
};

export function ToggleUI({ isChecked, handleChange, styles }: ToggleUIProps) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className={styles.sliderWithRound}></span>
    </label>
  );
}
