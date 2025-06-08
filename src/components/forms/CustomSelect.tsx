export default function CustomSelect({
  options = [],
  ...props
}: { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="w-full rounded-md border border-theme-300 px-3 py-2 text-sm"
      {...props}
    >
      <option value="">انتخاب کنید</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
