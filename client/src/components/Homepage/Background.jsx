import React from 'react'

const Background = () => {
  return (
    <div>
    <div className="fixed inset-0 overflow-hidden z-0">
    <video
      className="absolute opacity-70 inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="regvideopage.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
    </div>
  )
}

export default Background
