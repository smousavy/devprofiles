"use client";
import useFetch from "@/hooks/useFetch";
import UserCard from "./UserCard";
import iUser from "@/types/user";
import Loading from "../Loading";
import Error from "../Error";
export default function UserList() {
  const { data, error, loading } = useFetch<{ users: iUser[] }>(
    "/data/fake_profiles.json"
  );
  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.users.map((user: iUser) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
