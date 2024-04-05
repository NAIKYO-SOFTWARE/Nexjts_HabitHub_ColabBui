import Link from "next/link";
import Calendar from "../../../../public/calendar_month.png";
import FaUser from "../../../../public/person.png";
import CheckLIst from "../../../../public/checklist.png";
import screenUrl from "@/lib/constants/screenUrl";
import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <div className="fixed p-2 flex px-5 justify-between bottom-0 left-0 right-0 bg-white shadow-black shadow-lg rounded-t-3xl">
      <div className="min-h-12 min-w-12 flex justify-center items-center shadow-2xl shadow-black rounded-full p-3">
        <Icon urlIcon={Calendar} height={25} width={25} />
      </div>
      <div className="min-h-12 min-w-12 flex justify-center items-center shadow-2xl shadow-black rounded-full p-3">
        <Icon urlIcon={CheckLIst} height={25} width={25} />
      </div>
      <Link href={screenUrl.PROFILE}>
        <div className="min-h-12 min-w-12 flex justify-center items-center shadow-2xl shadow-black rounded-full p-3">
          <Icon urlIcon={FaUser} height={25} width={25} />
        </div>
      </Link>
    </div>
  );
}
