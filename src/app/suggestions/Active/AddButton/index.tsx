import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";

interface IProps {
  handleOnlickAddBtn: () => void;
}

export default function AddButton({ handleOnlickAddBtn }: IProps) {
  return <Button onClick={handleOnlickAddBtn}>+</Button>;
}

const Button = styled(BaseButton)(
  ({ theme }) => `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ccc;
    font-size: 25px;
    font-weight: 600;

  &:active {
    background-color: black;
    box-shadow: none;
    transform: scale(0.99);
  }
`,
);
