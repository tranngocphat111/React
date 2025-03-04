import UserList from "../components/UserList";

export default function Home() {
  return (
    <div>
      <h1 className="text-center pb-2 text-primary">Danh sách người dùng</h1>
      <UserList />
    </div>
  );
}
