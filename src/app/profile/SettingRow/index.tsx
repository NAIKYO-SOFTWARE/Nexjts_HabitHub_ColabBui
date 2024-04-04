export default function SettingRow({ title }: Readonly<{ title: string }>) {
  return (
    <div className="flex w-[100%] justify-between bg-white rounded-xl items-center p-3">
      <p className="font-bold">{title} </p>
      <div className="size-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
