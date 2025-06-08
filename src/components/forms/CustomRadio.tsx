export default function CustomRadio({
  name,
  value,
  label,
  ...props
}: {
  name: string;
  value: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex items-center gap-2 text-sm text-theme-800">
      <input type="radio" name={name} value={value} {...props} />
      {label}
    </label>
  );
}
