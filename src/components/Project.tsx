import Image from 'next/image'

interface ProjectProps {
  title: string
  description: string
  src: string
  alt: string
}

const Project: React.FC<ProjectProps> = ({ title, description, src, alt }) => {
  return (
    <div className="dark:bg-dark-content shadow-lg">
      <h3 className="text-lg font-medium pt-12 pb-2 text-center text-black dark:text-dark-heading">
        {title}
      </h3>
      <p className="px-2 md:px-3 lg:px-4 text-description">{description}</p>
      <Image fill className="hidden hover:block" src={src} alt={alt} />
    </div>
  )
}

export default Project
