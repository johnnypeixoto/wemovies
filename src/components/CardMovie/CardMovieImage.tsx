export function CardMovieImage({
    ...rest
  }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return <img {...rest} loading="lazy" />;
  }