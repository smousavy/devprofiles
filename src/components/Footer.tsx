export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 text-center">
        ساخته شده توسط شما | {new Date().getFullYear()}
      </div>
    </footer>
  );
}
