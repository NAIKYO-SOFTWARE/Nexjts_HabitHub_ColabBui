interface IProp {
  text: string;
}

const DoingRow = ({ text }: IProp) => {
  return (
    <div>
      <div className="flex gap-2">
        <li></li>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default DoingRow;
