import Link from 'next/link'
import { useRouter } from 'next/router'

interface CustomLinkProps {
  href: string
  title: string
  className?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  title,
  className = '',
}) => {
  const router = useRouter()
  console.log('router', router)
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
				h-[1px] inline-block bg-dark absolute
				left-0 -bottom-0.5 group-hover:w-full 
				transition-[width] ease duration-300
				${router.asPath === href ? 'w-full' : 'w-0'}
				`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

export default CustomLink
