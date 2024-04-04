import Image from "next/image";

interface IProps {
  title: string;
  desc: string;
}

const ListTile = ({ desc, title }: IProps) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p>{desc}</p>
      </div>
      <div className="flex items-center">
        <span className="font-bold">See all </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
};

export default ListTile;
