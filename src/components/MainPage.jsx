import React from 'react'

export const MainPage = () => {
  return (
   <main className="bg-blue-400 pt-10">
    <section id="About" className='h-screen bg-blue-400 p-10'>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p> Hi, My name is Fatih !! -tulis deskripsi disini </p>
    </section>
    <section id="Projects" className='h-screen p-10 bg-blue-400'>
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    </section>
    <section id="Experience" className="h-screen p-10 bg-blue-400">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
    </section>
   </main>
  )
}

export default MainPage