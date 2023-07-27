import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { PiFilePdf } from 'react-icons/pi'
import CustomLink from './CustomLink'
import CustomIcon from './CustomIcon'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter()
  console.log('router', router)

  return (
    <div className="sticky top-0 z-30">
      <header className="w-full px-2 sm:px-8 md:px-12 lg:px-32 py-1 font-medium text-xs md:text-md lg:text-lg flex items-center justify-between bg-light text-dark">
        <nav className="flex gap-3">
          <CustomLink href="#home" title="Home" />
          <CustomLink href="#about" title="About" />
          <CustomLink href="#portfolio" title="Portfolio" />
          <CustomLink href="#contact" title="Contact" />
        </nav>
        <nav className="flex justify-center gap-2 sm:gap-4 py-3 text-gray-600">
          <CustomIcon
            href="#"
            target={'_blank'}
            className="hover:bg-linkedIn hover:outline-linkedIn hover:text-white"
          >
            <i className="m-auto">
              <AiFillLinkedin />
            </i>
          </CustomIcon>
          <CustomIcon
            href="#"
            target={'_blank'}
            className="hover:bg-github hover:outline-github hover:text-white"
          >
            <i className="m-auto">
              <AiFillGithub />
            </i>
          </CustomIcon>
          <CustomIcon
            href=""
            className="hover:bg-amber_500 hover:outline-amber_500 hover:text-white"
          >
            <i
              className="icon--pdf m-auto"
              //  ref="/Chris-Abbott-CV.pdf"
            >
              <PiFilePdf />
            </i>
          </CustomIcon>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
