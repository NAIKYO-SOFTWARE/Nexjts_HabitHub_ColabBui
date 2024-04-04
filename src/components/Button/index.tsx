import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";
import { blue, grey } from "@/lib/constants/colors";
interface IProps {
  title: string;
}

export default function ButtonComponent({ title }: Readonly<IProps>) {
  return <Button type="submit">{title}</Button>;
}

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5;
  background-color: white;
  padding: 12px 60px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  box-shadow: 2px 3px 14px 0px #00000078;

  &:hover {
    background-color: ${blue[700]}
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === "dark" ? blue[300] : blue[200]};
    outline: none;
  }

  &.base--disabled {
    background-color: ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
);
