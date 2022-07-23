interface ImgProps {
  h: number;
  w: number;
  src: string;
}

//TO DO DELTE AFTER REPLACING ALL PNG ICONS
export default function Img({ h, w, src }: ImgProps) {
  return <img className="select-none" height={h} width={w} src={src} />;
}
