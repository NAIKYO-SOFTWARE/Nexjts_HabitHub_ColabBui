import Image, { StaticImageData } from "next/image";

interface IProps {
  urlIcon: StaticImageData;
  height?: number;
  width?: number;
}

export default function Icon({
  urlIcon,
  height = 35,
  width = 35,
}: Readonly<IProps>) {
  return (
    <Image
      src={urlIcon}
      alt=""
      height={height}
      width={width}
      objectFit="cover"
    />
  );
}
