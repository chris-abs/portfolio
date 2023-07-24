import { PiProjectorScreenChartLight } from 'react-icons/pi'

interface LogProps {
  title: string
  date: string
  description?: string
}

const Log: React.FC<LogProps> = ({ title, date, description }) => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <PiProjectorScreenChartLight />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <time className="block mb-2 text-sm leading-none text-description_light dark:text-gray-500">
          {date}
        </time>
        <p className="mb-4 text-base text-description dark:text-gray-400">
          {description}
        </p>
      </li>
    </ol>
  )
}

export default Log
