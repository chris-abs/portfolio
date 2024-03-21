import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { PiFilePdf } from 'react-icons/pi'

import CustomLink from './CustomLink'
import CustomIcon from './CustomIcon'

const NavBar = () => {
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
            href="https://www.linkedin.com/in/chris-abbott-078b21212/"
            target={'_blank'}
            className="hover:bg-linkedIn hover:outline-linkedIn hover:text-white"
          >
            <i className="m-auto md:hidden">
              <AiFillLinkedin size={14} />
            </i>
            <i className="m-auto hidden md:block">
              <AiFillLinkedin />
            </i>
          </CustomIcon>
          <CustomIcon
            href="https://github.com/chris-abs"
            target={'_blank'}
            className="hover:bg-github hover:outline-github hover:text-white"
          >
            <i className="m-auto md:hidden">
              <AiFillGithub size={16} />
            </i>
            <i className="m-auto hidden md:block">
              <AiFillGithub />
            </i>
          </CustomIcon>
          <CustomIcon
            href="Chris.Abbott-CV.pdf"
            download
            target={'_blank'}
            className="hover:bg-amber_500 hover:outline-amber_500 hover:text-white"
          >
            <i className="m-auto md:hidden">
              <PiFilePdf size={16} />
            </i>
            <i className="m-auto hidden md:block">
              <PiFilePdf />
            </i>
          </CustomIcon>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
