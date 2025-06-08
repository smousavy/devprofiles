export default function Error() {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded relative flex flex-col items-center">
      <svg
        className="w-8 h-8 mb-2 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14"
        />
      </svg>
      <p className="text-center mb-2">مشکلی پیش آمده :(</p>
    </div>
  );
}
