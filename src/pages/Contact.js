import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { FaAddressCard, FaPhone } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_in4cufsz.json"
              background="transparent"
              speed="1"
              loop
              autoplay>
            </lottie-player>
          </div>
          <p className='text-5xl font-semibold text-center'>Here are some of the ways to contact me</p>
        </div>
        <div className='font-bold text-center bg-sky mx-20 p-20 text-white md:mx-5 mb-10 shadow-2xl rounded-xl'>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <div className='bg-royal mx-10 md:mx-1 md:my-5 shadow-2xl rounded-lg hover:bg-gray-700 hover:text-white'>
              <FaPhone
                size={50}
                color="green"
                className="w-full text-center my-10" />
              <h1 className='text-2xl mb-5 md:text-xl font-mont'>09760078393</h1>
            </div>

            <div className='bg-royal mx-10 md:mx-1 md:my-5 shadow-2xl rounded-lg hover:bg-gray-700 hover:text-white'>
              <SiGmail
                size={50}
                color="red"
                className="w-full text-center my-10" />
              <h1 className='text-2xl mb-5 md:text-xl font-mont'>kairnic@gmail.com</h1>
            </div>

            <div className='bg-royal mx-10 md:mx-1 md:my-5 shadow-2xl rounded-lg hover:bg-gray-700 hover:text-white'>
              <FaAddressCard
                size={50}
                color="gray"
                className="w-full text-center my-10" />
              <h1 className='text-2xl mb-5 md:text-xl font-mont'>Alamada, North Cotabato</h1>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact