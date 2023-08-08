import Link from 'next/link'

interface CustomIconProps {
  children?: React.ReactNode
  className?: string
  href: string
  target?: string
  download?: boolean
}

const CustomIcon: React.FC<CustomIconProps> = ({
  children,
  className,
  href,
  target,
  download,
}) => {
  return (
    <Link
      href={href}
      className={`${className} inline-flex w-5 h-5 md:w-[34px] md:h-[34px] no-underline text-2xl text-dark rounded-full icon`}
      target={target}
      download={download}
    >
      {children}
    </Link>
  )
}

export default CustomIcon
