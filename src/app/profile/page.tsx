import SettinRow from "./SettingRow";

const data = [
  {
    title: "Account",
  },
  {
    title: "Notifications",
  },
  {
    title: "Help",
  },
  {
    title: "Storage and Data",
  },
  {
    title: "Invite a friend",
  },
  {
    title: "Logout",
  },
];

export default function ProfilePage() {
  return (
    <div className="h-[100vh] bg-thistle">
      <p className="text-center font-semibold pt-4 mb-4">Profile</p>
      <div className="flex flex-col gap-2 px-2">
        {data.map((setting, index) => {
          return <SettinRow key={index} title={setting.title} />;
        })}
      </div>
    </div>
  );
}
