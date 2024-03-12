import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { PiCopyright } from 'react-icons/pi'

const Footer = () => {
  return (
    <div>
      <footer className="relative w-full pt-12 pb-8 font-medium bg-light text-dark">
        <section className="flex items-center justify-center">
          Chris Abbott
          <span className="px-1">
            <PiCopyright />
          </span>
          {new Date().getFullYear()}
        </section>
        <a href="#home">
          <button className="absolute -top-[22px] left-1/2 transform -translate-x-1/2  p-2 bg-amber_300 text-white font-medium uppercase rounded shadow-md hover:bg-amber_400 focus:outline-none focus:ring-0 active:bg-amber_500">
            <MdKeyboardDoubleArrowUp size={28} />
          </button>
        </a>
      </footer>
    </div>
  )
}

export default Footer
