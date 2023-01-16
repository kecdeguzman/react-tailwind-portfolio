import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Footer() {
  return (
    <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
        <div className='p-10 font-mont text-center'>
          <p className='text-gray-50 pb-5'>Developed by</p>
          <div className='h-1 border-2  border-white border-dashed'>

          </div>

          <div className='flex text-white w-full justify-between py-5'>
            <a href='https://www.facebook.com/RozenKrone' target="_blank">
              <FaFacebook
                size={50}
              />
            </a>

            <a href='https://github.com/kecdeguzman' target="_blank">
              <FaGithub
                size={50}
              />
            </a>

            <a href='mailto:kairnic@gmail.com' target="_blank">
              <SiGmail
                size={50}
              />
            </a>

            <a href='https://linkedin.com/in/kairn-ellis-de-guzman' target="_blank">
              <FaLinkedin
                size={50}
              />
            </a>
          </div>
          <div className='h-1 border-2  border-white border-dashed'>

          </div>
          <p className='text-gray-50 text-lg py-5'>Kairn Ellis de Guzman</p>
        </div>
      </div>
    </div>
  )
}

export default Footer