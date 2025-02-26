import { IconType } from 'react-icons'

interface WidgetProps {
  icon: IconType
  label: string
  description?: string
  wordBreak?: boolean
}

const Widget: React.FC<WidgetProps> = ({
  icon: Icon,
  label,
  description,
  wordBreak,
}) => {
  return (
    <div
      className={`flex flex-col self-start text-center max-w-[280px] ${
        wordBreak ? 'break-all' : 'break-normal'
      } 
    `}
    >
      {Icon && <Icon size={60} className="m-auto" />}
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="text-description">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default Widget
