import { Image } from "./styles";

export function CardCheckoutImage({
    ...rest
  }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <Image {...rest} />;
  }