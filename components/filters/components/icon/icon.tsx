import Image, { StaticImageData } from "next/image";

interface IProps {
  icon: StaticImageData;
  width: number;
  height: number;
  alt: string;
}

export const Icon = ({ ...props }: IProps) => {
  const {
    icon,
    width,
    height,
    alt,
  } = props;

  return (
    <Image 
      src={icon}
      width={width}
      height={height}
      alt={alt}
    />
  )
}