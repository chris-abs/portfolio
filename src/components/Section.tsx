import Heading from './Heading'

interface SectionProps {
  children?: React.ReactNode
  title: string
  subTitle?: string
  grey?: boolean
  id: string
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subTitle,
  id,
  grey = false,
}) => {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[2520px] px-4 sm:px-2 md:px-10 xl:px-20 pb-10 sm:pb-16 md:pb-32
       ${grey ? 'bg-light' : 'bg-white'}
      `}
    >
      <header className="p-10 sm:p-16 md:p-24">
        <Heading title={title} subTitle={subTitle} center />
      </header>
      {children}
    </section>
  )
}

export default Section
