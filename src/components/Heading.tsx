interface HeadingProps {
  title: string
  subTitle?: string
  center?: boolean
}

const Heading: React.FC<HeadingProps> = ({ title, subTitle, center }) => {
  return (
    <div>
      <h2
        className={`${
          center ? 'text-center' : 'text-start'
        } text-2xl font-bold text-dark`}
      >
        {title}
      </h2>
      <h3 className="mt-2 font-light text-neutral-500">{subTitle}</h3>
    </div>
  )
}

export default Heading
