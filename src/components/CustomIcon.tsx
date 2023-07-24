import Link from 'next/link'

interface CustomIconProps {
  children?: React.ReactNode
  className?: string
  href: string
  target?: string
}

const CustomIcon: React.FC<CustomIconProps> = ({
  children,
  className,
  href,
  target,
}) => {
  return (
    <Link
      href={href}
      className={`${className} inline-flex w-[34px] h-[34px] no-underline text-2xl text-dark rounded-full icon`}
      target={target}
    >
      {children}
    </Link>
  )
}

export default CustomIcon
