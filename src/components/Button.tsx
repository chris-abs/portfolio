import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: any
  disabled?: boolean
  animated?: boolean
  icon?: IconType
  groupHidden?: boolean
  type?: any
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  animated,
  groupHidden,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`
      disabled:opacity-70 disabled:cursor-not-allowed ${
        disabled || !animated ? '' : 'animate-bounce transition'
      }
        ${groupHidden ? 'hidden group-hover:block rm-button' : ''}
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
