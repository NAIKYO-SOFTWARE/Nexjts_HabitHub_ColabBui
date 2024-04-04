import { Button as BaseButton } from "@mui/base";
import { styled } from "@mui/system";

interface IProp {
  id: number;
  name: string;
  handleChangeActiveBtn: (id: number) => void;
  activeBtn: number;
}

export default function NavButton({ name, handleChangeActiveBtn, activeBtn, id }: Readonly<IProp>) {
  return (
    <Button
      onClick={() => handleChangeActiveBtn(id)}
      className={`text-black ${activeBtn == id ? "bg-thistle px-4 text-black" : "text-mistyGray"}`}
    >
      {name}
    </Button>
  );
}

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: white;
  padding: 15px 7px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: all 150ms ease;
  cursor: pointer;
`,
);
