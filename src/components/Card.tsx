import Heading from './Heading'

interface CardProps {
  title: string
  description: string
  src: string
  link?: string
}

const Card: React.FC<CardProps> = ({ title, description, src, link }) => {
  return (
    <div className="card my-[100px]">
      <div className="img-box">
        <img src={src} />
      </div>
      <div className="content col-span-1">
        <Heading title={title} center />
        <p>{description}</p>
        <button
          type="button"
          className="w-full px-6 py-3 bg-amber_300 text-white font-medium uppercase rounded shadow-md hover:bg-amber_400 focus:outline-none focus:ring-0 active:bg-amber_500"
        >
          read more
        </button>
      </div>
    </div>
  )
}

export default Card
