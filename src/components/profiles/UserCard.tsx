import Image from "next/image";
import iUser from "@/types/user";

export default function UserCard({ user }: { user: iUser }) {
  return (
    <div className="flex items-center gap-4 p-4  bg-white rounded-xl shadow-sm border mb-4">
      <div className="relative w-16 h-16">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="rounded-full object-cover"
            unoptimized
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-white font-bold text-xl">
            {user.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="w-full text-base text-gray-700 py-3">{user.job_title}</p>
        <p className="w-full text-sm text-gray-500">
          {user.experience_years} سال سابقه · {user.contact.address}
        </p>
      </div>
    </div>
  );
}
