import React, { useRef, useEffect } from 'react'

const CustomCursor = () => {

  const cursorRef = useRef(null)

  useEffect(()=> {
    document.addEventListener('mousemove', (event) => {
      const {clientX, clientY} = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 1.8;
      const mouseY = clientY - cursorRef.current.clientHeight / 1.30;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0px`;
    })
  })

  return (
    <div className="app-cursor" ref={cursorRef} />
  )
}

export default CustomCursor
