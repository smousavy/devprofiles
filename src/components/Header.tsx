"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-800">
          DevProfiles
        </Link>

        <nav className="space-x-4">
          <Link
            href="/profiles"
            className="text-sm text-gray-600 hover:text-black px-2"
          >
            پروفایل‌ها
          </Link>
          <Link
            href="/admin"
            className="text-sm text-gray-600 hover:text-black"
          >
            مدیریت
          </Link>
        </nav>
      </div>
    </header>
  );
}
