interface IProp {
  weekday: string;
  day: number;
}

export default function TimeBox({ weekday, day }: Readonly<IProp>) {
  return (
    <div className="flex flex-col min-h-16 py-1 bg-mediumPurple w-12 rounded-xl bg- items-center justify-center gap-2">
      <p>{weekday}</p>
      <div className="flex justify-center items-center bg-white rounded-full h-8 w-8">
        <span>{day}</span>
      </div>
    </div>
  );
}
