export default function CustomLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <label className="mb-1 block text-sm font-medium text-theme-800">
      {children}
    </label>
  );
}
