interface ProjectProps {
  title: string
}

const Project: React.FC<ProjectProps> = ({ title }) => {
  return (
    <div className="dark:bg-dark-content shadow-lg">
      <h3 className="text-lg font-medium pt-12 pb-2 text-center text-black dark:text-dark-heading">
        {title}
      </h3>
    </div>
  )
}

export default Project
