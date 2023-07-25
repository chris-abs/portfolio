import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  animated?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  animated,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`
      disabled:opacity-70 disabled:cursor-not-allowed ${
        disabled || !animated ? '' : 'animate-bounce transition'
      }
      m-6 w-full px-6 py-3 bg-amber_300 text-white font-medium uppercase rounded shadow-md hover:bg-amber_400 focus:outline-none focus:ring-0 active:bg-amber_500 place-self-end `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}

      {label}
    </button>
  )
}

export default Button

/*



*/
