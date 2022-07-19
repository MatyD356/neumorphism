
interface ImgProps {
  h: number
  w: number
  src: string
}

export default function Img({h, w, src}: ImgProps){
  return (
    <img className="select-none" height={h} width={w} src={src}/>
  )
}