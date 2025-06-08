export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full border-b bg-white sticky top-0 z-50">
      {children}
    </main>
  );
}
