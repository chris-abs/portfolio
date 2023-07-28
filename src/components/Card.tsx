import Button from './Button'
import Heading from './Heading'

interface CardProps {
  title: string
  description: string
  src: string
  link?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Card: React.FC<CardProps> = ({ title, description, src, onClick }) => {
  return (
    <div className="group card my-[100px] relative flex justify-center items-center w-[350px] max-w-[100%] h-[300px] bg-white rounded-[20px] shadow-md hover:h-[400px] transition-all duration-700">
      <div className="img-box absolute top-5 w-[300px] h-[220px] bg-dark rounded-xl overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={src}
        />
      </div>
      <div className="content col-span-1 absolute top-[252px] w-full h-[35px] text-center overflow-hidden">
        <Heading title={title} center />
        <p className="text-description">{description}</p>
      </div>
      <Button label="read more" onClick={onClick} groupHidden />
    </div>
  )
}

export default Card
