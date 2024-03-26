import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

interface CarouselProps {
  data: { src: string; alt: string }[]
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="carousel relative w-full h-[580px] overflow-hidden">
      {data.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 1 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="h-full max-w-full mx-auto object-cover"
          />
        </div>
      ))}
      <BsArrowLeftCircleFill
        onClick={goToPrevSlide}
        className="z-20 arrow absolute w-8 h-8 text-white hover:pointer left-4 top-60"
      />
      <BsArrowRightCircleFill
        onClick={goToNextSlide}
        className="z-20 arrow absolute w-8 h-8 text-white hover:pointer right-4 top-60"
      />
      <div className="z-20 flex absolute bottom-1 left-0 right-0 justify-center items-center">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={`h-0.5 w-3.5 rounded-full mx-1 cursor-pointer p-1 ${
              idx === currentIndex ? 'bg-amber_300 h-3.5 w-3.5' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(idx)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
