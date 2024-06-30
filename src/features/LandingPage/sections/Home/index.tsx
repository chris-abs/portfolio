import Image from 'next/image'
import belossom from '../../../../../public/images/belossom.jpg'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

const HomeSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.src = belossom.src
    img.onload = () => setIsImageLoaded(true)

    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-x-hidden">
      {!showContent && (
        <div className="absolute inset-0 z-20 flex h-screen items-center justify-center">
          <ClipLoader color="#ffacac" size={50} />
        </div>
      )}
      <div
        className={`z-1 flex h-full flex-col items-center justify-center ${showContent ? '' : 'invisible'}`}
      >
        <h1 className="heading z-10 text-4xl md:py-1 lg:py-2 lg:text-5xl xl:text-6xl">
          Chris Abbott
        </h1>
        <Image
          priority
          src={belossom}
          alt="belossom tree"
          fill
          quality={80}
          className="object-cover"
        />
        <div className="overflow-x-none background relative z-10">
          {[...Array(20)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
        <h2 className="heading z-10 text-lg md:text-xl lg:text-2xl xl:text-3xl">
          I build things for the web.
        </h2>
      </div>
    </section>
  )
}

export default HomeSection
