export default function CustomTextarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      className="w-full rounded-md border border-theme-300 px-3 py-2 text-sm"
      {...props}
    />
  );
}
