import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import projectsData from '../resources/projects'


function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div className='mt-20 '>
        <div className='h-screen'>
          <div className='h-3/4'>
            <lottie-player src="https://assets2.lottiefiles.com/private_files/lf30_kj1b8w1w.json"
              background="transparent"
              speed="1"
              loop
              autoplay>
            </lottie-player>
          </div>
          <p className='text-xl font-semibold text-center'>Here are some of the projects that I have made</p>
        </div>
        <div className='font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5 mb-10'>
          <h1 className='text-7xl md:text-3xl'>THE PROJECTS</h1>
        </div>
      </div>

      <div className='grid my-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
        {projectsData.map((project => {
          return <div>
            <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-500'>
              <img src={project.image} height='220' className='w-full h-52 text-center' />
              <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-70'>
                <h1 className='text-3xl font-bold text-white'>{project.title}</h1>
                <button className='text-white mt-5 border-2 rounded-lg border-white py-2 hover:bg-royal px-5' onClick={() => { window.open(project.link); }}>Demo</button>
              </div>
            </div>
          </div>
        }))}
      </div>
    </Layout>

  )
}

export default Projects