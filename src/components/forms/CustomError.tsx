export default function CustomError({ error }: { error: string | undefined }) {
  return error ? (
    <p className="pb-3 pt-2 text-sm text-red-700">{error}</p>
  ) : null;
}
