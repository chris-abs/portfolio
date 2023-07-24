import { useEffect, useRef, useState } from 'react'

const StatBar = (props) => {
  const { completed, label } = props

  const fillerStyles = {
    width: `${completed}%`,
  }

  return (
    <div className="flex  bg-light border-r-2">
      <div className="w-full flex place-items-center">
        <span className="px-2 min-w-[100px] font-medium flex justify-center">
          {label}
        </span>
        <div className="relative flex h-full w-full">
          <div style={fillerStyles} className="h-full bg-amber_400">
            <span className="absolute right-0">{`${completed}%`}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatBar
