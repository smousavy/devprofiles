export default function CustomCheckbox({
  id,
  label,
  ...props
}: {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-sm text-theme-800"
    >
      <input type="checkbox" id={id} {...props} />
      {label}
    </label>
  );
}
