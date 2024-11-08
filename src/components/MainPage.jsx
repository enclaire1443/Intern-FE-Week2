import React from 'react';
import fotodiri from '../assets/fotodiri1.jpeg';
import fotocontactme from '../assets/fotocontactme.png';

export const MainPage = () => {
  return (
   <main className="bg-blue-300 pt-10">
    <section id="About" className="h-100 bg-blue-300 p-10">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      
      <div className="flex items-center gap-4">
        <img src={fotodiri} alt="Muhammad Fatih Zamzami" className="w-82 h-52 object-cover rounded-lg shadow-lg" />
        <div className="bg-yellow-200 p-4 w h-52 rounded-lg shadow-lg overflow-hidden">
         <p className="h-full overflow-hidden text-ellipsis whitespace-normal">My name is Muhammad Fatih Zamzami, or just Fatih for short. I'm an Electrical Engineering freshman at Universitas Indonesia. I love coding and learning new things. I'm currently doing internship at Exercise FTUI, at the Software - FE division. I'm currently working on Frontend Web Development with ReactJS and TailwindCSS. </p>
         </div>
      </div>
    <div className="text-xs w-24 p-4">
      <div className="flex">
        <span className="font-bold w-24">Instagram:</span>
        <span>@fthzami</span>
      </div>
      <div className="flex">
        <span className="font-bold w-24">Line:</span>
        <span>haiinifatih</span>
      </div>
      <div className="flex">
        <span className="font-bold w-24">Gmai:</span>
        <span>muhfatihzamzami@gmail.com</span>
      </div>
    </div>
    </section>
    
    <section id="Projects" className="h-screen p-10 bg-blue-300">
      <h2 className="text-3xl font-bold mb-4">Projects</h2> 
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="bg-yellow-200 p-4 w h-70 bg-fixed rounded-lg shadow-lg flex overflow-hidden">
          <img src={fotocontactme} alt="project1" className="h-40"/>
          <p className="px-4 h-full overflow-hidden text-ellipsis whitespace-normal">This is my first project on Exercise FTUI Internship 2024, its a contact me page that i made using pure HTML and TailwindCSS. It also includes a JavaScript script that automatically brings you to the email page.</p>
        </div>

      </div>
    </section>
    
    <section id="Experience" className="h-screen p-10 bg-blue-300">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
    </section>
   </main>
  );
}

export default MainPage;