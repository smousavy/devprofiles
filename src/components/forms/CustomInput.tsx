export default function CustomInput({
  type = "text",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type={type} className="input" {...props} />;
}
