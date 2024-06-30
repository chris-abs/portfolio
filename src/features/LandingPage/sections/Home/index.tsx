import Image from 'next/image'
import belossom from '../../../../../public/images/belossom.jpg'
import { useEffect, useState } from 'react'

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const HomeSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.src = belossom.src
    img.onload = () => setIsImageLoaded(true)
  }, [])

  return (
    <section id="home" className="overflow-x-hidden">
      <div className="z-1 flex h-screen flex-col items-center justify-center">
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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        />
        {isImageLoaded && (
          <div className="overflow-x-none background relative z-10">
            {[...Array(20)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        )}
        <h2 className="heading z-10 text-lg md:text-xl lg:text-2xl xl:text-3xl">
          I build things for the web.
        </h2>
      </div>
    </section>
  )
}

export default HomeSection
