import React from 'react'
import Image from 'next/image'
import Me from "../../../public/images/profile-pic.png"

const ImageSection = () => {
  return (
      <div className='bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl md:w-[70%]  '>
        <div className='rounded-3xl rotate-3 ' >
          <Image src={Me} alt="Sampurn" height={600} className='rounded-2xl' />
        </div>
      </div>
  )
}

export default ImageSection